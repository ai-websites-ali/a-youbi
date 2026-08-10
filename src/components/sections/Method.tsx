import { methodSection, methodSteps } from "@/config/method";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Method() {
  return (
    <section
      aria-labelledby="methode-title"
      className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]"
      data-content-status={methodSection.status}
    >
      <Container className="py-16 lg:py-20">
        <SectionHeading id="methode-title" title={methodSection.title} />

        <ol className="relative mt-10 space-y-0">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-[var(--color-navy)]/15 sm:left-[1.4rem]"
          />
          {methodSteps.map((step) => (
            <li
              key={step.number}
              className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-4 py-5 sm:gap-6"
            >
              <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-sm bg-[var(--color-navy)] text-sm font-semibold text-white sm:h-11 sm:w-11">
                {step.number}
              </div>
              <div className="min-w-0 border-b border-[var(--color-navy)]/10 pb-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-navy)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate)]/85 sm:text-base">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <ContentStatusNote status="placeholder" className="mt-4 max-w-3xl">
          {methodSection.contractNote}
        </ContentStatusNote>
      </Container>
    </section>
  );
}
