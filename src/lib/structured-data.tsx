import { business } from "@/config/business";
import { siteConfig } from "@/config/site";

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.publicName.value,
    alternateName: business.shortName.value,
    description: business.category.value,
    url: siteConfig.url,
    telephone: business.phone.e164,
    image: new URL(
      "/images/cabinet-ayoubi-facade.jpg",
      siteConfig.url,
    ).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: "Réghaïa",
      addressRegion: "Alger",
      addressCountry: "DZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    hasMap: business.googleMaps.shortUrl,
    areaServed: {
      "@type": "Place",
      name: "Réghaïa, Alger, Algérie",
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
