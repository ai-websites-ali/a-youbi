import { professionalSection } from "@/config/homepage";
import { professionalProfile } from "@/config/professional";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { Monogram } from "@/components/ui/Monogram";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProfessionalPresentation() {
  return (
    <section
      aria-labelledby="professionnel-title"
      className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]"
    >
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14 lg:py-20">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <Monogram size="lg" />
            <p className="mt-3 text-center text-xs text-[var(--color-slate)]/65 lg:text-left">
              Identité visuelle provisoire
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <SectionHeading
            id="professionnel-title"
            title={professionalSection.title}
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-slate)]/85">
            {professionalSection.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl
            className="mt-8 grid gap-4 border border-[var(--color-navy)]/10 bg-[var(--color-ivory)] p-5 sm:grid-cols-2"
            data-content-status={professionalProfile.status}
          >
            <div className="min-w-0">
              <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]/60">
                Interlocuteur
              </dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-xl text-[var(--color-navy)]">
                {professionalProfile.publicLabel}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]/60">
                Fonction
              </dt>
              <dd className="mt-2 text-[var(--color-slate)]">
                {professionalProfile.title}
              </dd>
            </div>
            <div className="min-w-0 sm:col-span-2">
              <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]/60">
                Identité complète
              </dt>
              <dd className="mt-2 text-[var(--color-slate)]">
                {professionalProfile.fullName}
              </dd>
            </div>
          </dl>

          <ContentStatusNote status="client-confirmation" className="mt-5">
            {professionalProfile.biography}
          </ContentStatusNote>
        </div>
      </Container>
    </section>
  );
}
