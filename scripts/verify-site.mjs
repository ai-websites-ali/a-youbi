import { chromium, devices } from "playwright";

const BASE = process.env.BASE_URL || "http://127.0.0.1:3005";

const widths = [320, 360, 375, 390, 430, 768, 1024, 1280, 1440];

const requiredHomeHeadings = [
  "Un accompagnement structuré pour mieux piloter votre activité",
  "Le Cabinet A.YOUBI",
  "Votre interlocuteur au sein du Cabinet A.YOUBI",
  "Nos services",
  "Nos atouts",
  "Notre méthode d’accompagnement",
  "Informations pratiques et localisation",
  "Besoin d’échanger avec le Cabinet A.YOUBI ?",
];

const routes = [
  "/",
  "/cabinet",
  "/services",
  "/services/tenue-comptable",
  "/services/declarations-fiscales",
  "/services/gestion-paie",
  "/services/creation-entreprise",
  "/services/conseil-suivi-gestion",
  "/services/commissariat-aux-comptes",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/page-inexistante-404",
];

function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

async function checkOverflow(page, width, failures, route = "/") {
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  assert(
    scrollWidth === clientWidth,
    `Overflow at ${width}px on ${route}: scrollWidth=${scrollWidth}, clientWidth=${clientWidth}`,
    failures,
  );
  return { width, route, scrollWidth, clientWidth, ok: scrollWidth === clientWidth };
}

async function main() {
  const failures = [];
  const report = {
    routes: [],
    overflow: [],
    homepageOrder: [],
    sticky: {},
    links: {},
    map: {},
    image: {},
    drawer: {},
    jsonLd: {},
  };

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    ...devices["Desktop Chrome"],
    locale: "fr-FR",
  });
  const page = await context.newPage();

  for (const route of routes) {
    const response = await page.goto(`${BASE}${route}`, {
      waitUntil: "networkidle",
    });
    const status = response?.status() ?? 0;
    const expected = route.includes("404") ? 404 : 200;
    assert(
      status === expected,
      `Unexpected status ${status} for ${route} (expected ${expected})`,
      failures,
    );
    report.routes.push({ route, status });
  }

  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  const headings = await page.locator("h1, h2").allTextContents();
  report.homepageOrder = headings.map((h) => h.trim());

  for (const heading of requiredHomeHeadings) {
    assert(
      headings.some((h) => h.includes(heading)),
      `Missing homepage heading: ${heading}`,
      failures,
    );
  }

  const servicesIndex = headings.findIndex((h) => h.includes("Nos services"));
  const atoutsIndex = headings.findIndex((h) => h.includes("Nos atouts"));
  const methodIndex = headings.findIndex((h) =>
    h.includes("Notre méthode d’accompagnement"),
  );
  assert(
    servicesIndex > -1 &&
      atoutsIndex > servicesIndex &&
      methodIndex > atoutsIndex,
    `Section order invalid: services=${servicesIndex}, atouts=${atoutsIndex}, method=${methodIndex}`,
    failures,
  );

  const statsNote = await page
    .getByText("Chiffres de présentation à confirmer par le cabinet.")
    .count();
  assert(statsNote > 0, "Missing statistics clarification", failures);

  const hoursNote = await page
    .getByText("Horaires complets à confirmer")
    .count();
  assert(hoursNote > 0, "Missing hours clarification", failures);

  const facade = page.locator('img[alt*="Façade de l’immeuble"]');
  assert((await facade.count()) > 0, "Missing façade image", failures);
  const facadeSrc = await facade.first().getAttribute("src");
  assert(
    facadeSrc?.includes("/images/cabinet-ayoubi-facade") ||
      facadeSrc?.includes("_next/image"),
    `Unexpected façade src: ${facadeSrc}`,
    failures,
  );
  assert(
    !facadeSrc?.includes("googleusercontent"),
    "Façade image is hotlinked to Google",
    failures,
  );
  report.image = { src: facadeSrc };

  const primaryCtas = page.getByRole("link", { name: "Appeler le cabinet" });
  assert((await primaryCtas.count()) > 0, "Missing primary CTA", failures);
  const primaryHref = await primaryCtas.first().getAttribute("href");
  assert(
    primaryHref === "tel:+213561378058",
    `Primary CTA href invalid: ${primaryHref}`,
    failures,
  );

  const whatsapp = page.getByRole("link", { name: "Écrire sur WhatsApp" });
  const whatsappHref = await whatsapp.first().getAttribute("href");
  assert(
    whatsappHref === "https://wa.me/213561378058",
    `WhatsApp href invalid: ${whatsappHref}`,
    failures,
  );

  const directions = page.getByRole("link", { name: "Obtenir l’itinéraire" });
  const directionsHref = await directions.first().getAttribute("href");
  assert(
    directionsHref?.includes("36.7429486") &&
      directionsHref?.includes("3.3442533"),
    `Directions href invalid: ${directionsHref}`,
    failures,
  );
  report.links = { primaryHref, whatsappHref, directionsHref };

  const map = page.locator(
    'iframe[title="Carte Google Maps du Cabinet A.YOUBI à Réghaïa"]',
  );
  assert((await map.count()) > 0, "Missing map iframe", failures);
  const mapSrc = await map.first().getAttribute("src");
  assert(
    mapSrc?.includes("36.7429486") && mapSrc?.includes("3.3442533"),
    `Map coordinates invalid: ${mapSrc}`,
    failures,
  );
  report.map = { src: mapSrc };

  const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
  const joined = jsonLd.join("\n");
  assert(joined.includes("ProfessionalService"), "Missing ProfessionalService JSON-LD", failures);
  assert(!joined.includes("+10 ans"), "Placeholder stats leaked into JSON-LD", failures);
  assert(!joined.includes("dossiers accompagnés"), "Placeholder stats leaked into JSON-LD", failures);
  assert(!joined.includes("Nom complet à confirmer"), "Unconfirmed professional name in JSON-LD", failures);
  report.jsonLd = { blocks: jsonLd.length };

  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
    report.overflow.push(await checkOverflow(page, width, failures, "/"));

    if (width < 1024) {
      const sticky = page.locator("#sticky-mobile-footer");
      assert(await sticky.isVisible(), `Sticky footer not visible at ${width}px`, failures);
      const boxTop = await sticky.evaluate((el) => el.getBoundingClientRect().top);
      const vh = await page.evaluate(() => window.innerHeight);
      assert(
        boxTop < vh && boxTop > vh - 120,
        `Sticky footer not anchored at bottom at ${width}px (top=${boxTop}, vh=${vh})`,
        failures,
      );

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(200);
      assert(
        await sticky.isVisible(),
        `Sticky footer disappeared after scroll at ${width}px`,
        failures,
      );

      await page.evaluate(() => window.scrollTo(0, 0));
      assert(
        await sticky.isVisible(),
        `Sticky footer not visible at top at ${width}px`,
        failures,
      );
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Ouvrir le menu de navigation" }).click();
  const dialog = page.getByRole("dialog");
  assert(await dialog.isVisible(), "Mobile drawer did not open", failures);
  assert(
    await page.locator("#sticky-mobile-footer").isVisible(),
    "Sticky footer hidden when drawer open",
    failures,
  );
  await page.keyboard.press("Escape");
  await page.waitForTimeout(150);
  assert(!(await dialog.isVisible()), "Drawer did not close on Escape", failures);
  report.drawer = { escapeClose: true };

  for (const route of ["/cabinet", "/services", "/contact"]) {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    report.overflow.push(await checkOverflow(page, 375, failures, route));
    assert(
      await page.locator("#sticky-mobile-footer").isVisible(),
      `Sticky missing on ${route}`,
      failures,
    );
  }

  await browser.close();

  console.log(JSON.stringify({ ok: failures.length === 0, failures, report }, null, 2));
  if (failures.length) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
