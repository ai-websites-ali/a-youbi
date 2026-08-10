import Link from "next/link";
import type { Service } from "@/config/services";
import { getRelatedServices } from "@/config/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { ServiceIcon } from "@/components/ui/Icons";
import { FinalCta } from "@/components/sections/FinalCta";

export function ServiceDetail({ service }: { service: Service }) {
  const related = getRelatedServices(service.slug);

  return (
    <>
      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              {
                label: service.title,
                href: `/services/${service.slug}`,
              },
            ]}
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start">
            <ServiceIcon
              id={service.icon}
              className="h-14 w-14 text-[var(--color-blue)]"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-blue)]">
                Domaine d’accompagnement
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-navy)] sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-slate)]/85 sm:text-lg">
                {service.shortDescription}
              </p>
              <CtaGroup className="mt-8" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
        <Container className="grid gap-12 py-14 lg:grid-cols-2 lg:py-16">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Introduction
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-slate)]/85">
              {service.introduction}
            </p>
          </div>
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Ce que ce domaine peut inclure
            </h2>
            <ul className="mt-4 space-y-3">
              {service.mayInclude.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[var(--color-slate)]/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--color-blue)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="grid gap-12 py-14 lg:grid-cols-2 lg:py-16">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              À qui cela peut s’adresser
            </h2>
            <ul className="mt-4 space-y-3">
              {service.whoItConcerns.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-[var(--color-navy)]/15 pl-4 text-[var(--color-slate)]/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Comment la collaboration peut se dérouler
            </h2>
            <ol className="mt-4 space-y-4">
              {service.collaboration.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-3"
                >
                  <span className="font-[family-name:var(--font-display)] text-[var(--color-blue)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[var(--color-slate)]/85">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
        <Container className="grid gap-12 py-14 lg:grid-cols-2 lg:py-16">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Informations généralement utiles
            </h2>
            <ul className="mt-4 space-y-3">
              {service.usefulInfo.map((item) => (
                <li key={item} className="text-[var(--color-slate)]/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Précision importante
            </h2>
            <ContentStatusNote status="placeholder" className="mt-4">
              {service.clarification}
            </ContentStatusNote>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="py-14 lg:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
            Domaines associés
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="min-w-0">
                <Link
                  href={`/services/${item.slug}`}
                  className="block h-full border border-[var(--color-navy)]/10 bg-[var(--color-ivory)] p-5 transition-colors hover:border-[var(--color-blue)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
                >
                  <p className="font-medium text-[var(--color-navy)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-slate)]/75">
                    {item.shortDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta
        title={`Échanger au sujet de : ${service.title}`}
        copy="Contactez le Cabinet A.YOUBI pour vérifier la disponibilité de ce domaine et préciser les modalités d’accompagnement."
      />
    </>
  );
}
