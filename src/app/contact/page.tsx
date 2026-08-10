import { business, ctaLabels } from "@/config/business";
import { pageMetadata } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(pageMetadata.contact);

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <h1 className="mt-8 max-w-3xl font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-navy)] sm:text-5xl">
            Contacter le Cabinet A.YOUBI
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-slate)]/85">
            Pour présenter votre besoin, vérifier une prestation ou préparer
            une visite, privilégiez un appel téléphonique ou un message
            WhatsApp.
          </p>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
        <Container className="py-14 lg:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
            Actions de contact direct
          </h2>
          <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={business.phone.href} variant="primary" size="lg">
              {ctaLabels.primary}
            </Button>
            <Button
              href={business.whatsapp.href}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabels.secondary}
            </Button>
            <Button
              href={business.directions.href}
              variant="tertiary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabels.directions}
            </Button>
          </div>
          <p className="mt-6 text-[var(--color-slate)]/85">
            Téléphone principal :{" "}
            <a
              href={business.phone.href}
              className="font-medium text-[var(--color-navy)] underline-offset-2 hover:underline"
            >
              {business.phone.display}
            </a>
          </p>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:py-16">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
              Informations pratiques
            </h2>
            <div className="mt-5 space-y-3 text-[var(--color-slate)]/90">
              <p className="font-medium text-[var(--color-navy)]">
                {business.publicName.value}
              </p>
              <address className="not-italic leading-relaxed">
                {business.address.line1}
                <br />
                {business.address.line2}
              </address>
              <p>{business.address.floorNotice}</p>
              <p className="text-sm text-[var(--color-slate)]/75">
                Plus Code : {business.address.plusCode}
              </p>
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
              Avant de vous déplacer
            </h2>
            <ul className="mt-5 space-y-3 text-[var(--color-slate)]/85">
              <li>Appelez le cabinet pour confirmer la disponibilité.</li>
              <li>
                Précisez l’objet de votre demande afin de préparer l’échange.
              </li>
              <li>
                Le cabinet se trouve au 2e étage, Cité Cenestal, bâtiment O.
              </li>
            </ul>
            <div className="mt-6 rounded-sm border border-[var(--color-navy)]/10 bg-[var(--color-ivory)] p-4">
              <p className="font-medium text-[var(--color-navy)]">
                {business.hours.completeSchedule.title}
              </p>
              <p className="mt-2 text-sm text-[var(--color-slate)]/85">
                {business.hours.completeSchedule.message}
              </p>
              <ContentStatusNote status="verified" className="mt-3">
                {business.hours.mondayNote.value}
              </ContentStatusNote>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
        <Container className="py-14 lg:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
            Localisation
          </h2>
          <div className="mt-8">
            <MapEmbed />
          </div>
        </Container>
      </section>
    </>
  );
}
