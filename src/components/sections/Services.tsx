import Link from "next/link";
import { services, servicesClarification } from "@/config/services";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { ServiceIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]"
    >
      <Container className="py-16 lg:py-20">
        <SectionHeading id="services-title" title="Nos services" />
        <ContentStatusNote status="placeholder" className="mt-5 max-w-3xl">
          {servicesClarification}
        </ContentStatusNote>

        <ul className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className="min-w-0 border border-[var(--color-navy)]/10 p-5 transition-colors hover:bg-[var(--color-soft)]/70 sm:p-6"
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
                  className="rounded-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)]/85">
                {service.shortDescription}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-[var(--color-blue)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
              >
                Voir le détail
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
