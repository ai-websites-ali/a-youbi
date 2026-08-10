import Link from "next/link";
import { FinalCta } from "@/components/sections/FinalCta";
import { Method } from "@/components/sections/Method";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { ServiceIcon } from "@/components/ui/Icons";
import { services, servicesClarification } from "@/config/services";
import { pageMetadata } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(pageMetadata.services);

const guidance = [
  "Si vous avez besoin d’organiser vos pièces et le suivi courant, commencez par la tenue comptable.",
  "Pour les obligations déclaratives, consultez le domaine des déclarations fiscales.",
  "Si votre activité emploie du personnel, la gestion de la paie peut être le point d’entrée adapté.",
  "Pour un projet de structuration, explorez la création et l’organisation d’entreprise.",
  "Pour mieux lire l’évolution de l’activité, le conseil et suivi de gestion peut être pertinent.",
  "Pour une mission de contrôle, échangez directement avec le cabinet avant toute conclusion.",
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />
          <h1 className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-navy)] sm:text-5xl">
            Les domaines d’accompagnement du Cabinet A.YOUBI
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--color-slate)]/85">
            Une présentation générale des domaines susceptibles d’intéresser
            les professionnels accompagnés à Réghaïa. Chaque prestation doit
            être confirmée directement avec le cabinet.
          </p>
          <CtaGroup className="mt-8" />
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
        <Container className="py-14 lg:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
            Vue d’ensemble
          </h2>
          <ContentStatusNote status="placeholder" className="mt-5 max-w-3xl">
            {servicesClarification}
          </ContentStatusNote>
          <ul className="mt-10 grid gap-0 sm:grid-cols-2">
            {services.map((service, index) => (
              <li
                key={service.slug}
                className="min-w-0 border border-[var(--color-navy)]/10 p-5 sm:p-6"
                data-content-status={service.status}
              >
                <div className="flex items-start justify-between gap-4">
                  <ServiceIcon
                    id={service.icon}
                    className="text-[var(--color-blue)]"
                  />
                  <span className="text-xs text-[var(--color-slate)]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl text-[var(--color-navy)]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)]/85">
                  {service.shortDescription}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="py-14 lg:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
            Comment identifier le domaine pertinent
          </h2>
          <ol className="mt-8 space-y-4">
            {guidance.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-4"
              >
                <span className="font-[family-name:var(--font-display)] text-[var(--color-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[var(--color-slate)]/85">{item}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Method />

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
        <Container className="py-12">
          <ContentStatusNote status="placeholder">
            {servicesClarification}
          </ContentStatusNote>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
