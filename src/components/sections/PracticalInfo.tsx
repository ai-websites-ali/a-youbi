import { business } from "@/config/business";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PracticalInfo() {
  return (
    <section
      aria-labelledby="localisation-title"
      className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]"
    >
      <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="min-w-0">
          <SectionHeading
            id="localisation-title"
            title="Informations pratiques et localisation"
          />
          <div className="mt-6 space-y-4 text-[var(--color-slate)]/90">
            <p className="font-medium text-[var(--color-navy)]">
              {business.publicName.value}
            </p>
            <address className="not-italic leading-relaxed">
              {business.address.line1}
              <br />
              {business.address.line2}
            </address>
            <p>
              Téléphone :{" "}
              <a
                href={business.phone.href}
                className="font-medium text-[var(--color-navy)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
              >
                {business.phone.display}
              </a>
            </p>
            <p className="text-sm text-[var(--color-slate)]/75">
              Plus Code : {business.address.plusCode}
            </p>
            <p className="text-sm text-[var(--color-slate)]/75">
              {business.address.floorNotice}
            </p>
          </div>

          <div className="mt-6 space-y-2 rounded-sm border border-[var(--color-navy)]/10 bg-[var(--color-soft)] p-4">
            <p className="font-medium text-[var(--color-navy)]">
              {business.hours.completeSchedule.title}
            </p>
            <p className="text-sm text-[var(--color-slate)]/85">
              {business.hours.completeSchedule.message}
            </p>
            <ContentStatusNote status="verified" className="mt-3">
              {business.hours.mondayNote.value}
            </ContentStatusNote>
          </div>

          <CtaGroup className="mt-8" showDirections />
        </div>

        <MapEmbed />
      </Container>
    </section>
  );
}
