import Link from "next/link";
import { business, ctaLabels } from "@/config/business";
import { footerNav } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Monogram } from "@/components/ui/Monogram";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-navy)]/10 bg-[var(--color-navy)] text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="flex items-start gap-3">
              <Monogram size="sm" className="shrink-0 border-white/20 bg-white/10" />
              <div className="min-w-0">
                <p className="font-[family-name:var(--font-display)] text-xl">
                  {business.shortName.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {business.category.value}
                </p>
              </div>
            </div>
            <address className="mt-6 space-y-1 text-sm not-italic text-white/80">
              <p>{business.address.line1}</p>
              <p>{business.address.line2}</p>
              <p>
                Téléphone :{" "}
                <a
                  href={business.phone.href}
                  className="underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {business.phone.display}
                </a>
              </p>
            </address>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={business.phone.href} variant="onDark" size="sm">
                {ctaLabels.primary}
              </Button>
              <Button
                href={business.whatsapp.href}
                variant="onDarkSecondary"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaLabels.secondary}
              </Button>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/85 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
              Informations
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/85 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/65">
              {business.hours.completeSchedule.title}
              <br />
              {business.hours.completeSchedule.message}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} {business.shortName.value}. Site de
            présentation.
          </p>
        </div>
      </Container>
    </footer>
  );
}
