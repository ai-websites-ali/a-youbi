import { finalCta } from "@/config/homepage";
import { Container } from "@/components/ui/Container";
import { CtaGroup } from "@/components/ui/CtaGroup";

export function FinalCta({
  title = finalCta.title,
  copy = finalCta.copy,
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section
      aria-labelledby="cta-finale-title"
      className="relative overflow-hidden bg-[var(--color-blue)] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, rgba(255,255,255,0.28), transparent 40%), repeating-linear-gradient(90deg, transparent, transparent 36px, rgba(255,255,255,0.08) 37px)",
        }}
      />
      <Container className="relative py-16 lg:py-20">
        <div className="max-w-3xl min-w-0">
          <h2
            id="cta-finale-title"
            className="font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            {copy}
          </p>
          <CtaGroup className="mt-8" showDirections tone="dark" />
        </div>
      </Container>
    </section>
  );
}
