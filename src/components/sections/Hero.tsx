import { ctaLabels } from "@/config/business";
import { heroContent } from "@/config/homepage";
import { Container } from "@/components/ui/Container";
import { CtaGroup } from "@/components/ui/CtaGroup";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(23,105,166,0.08), transparent 45%), repeating-linear-gradient(90deg, transparent, transparent 47px, rgba(10,35,66,0.04) 48px), repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(10,35,66,0.035) 32px)",
        }}
      />
      <Container className="relative grid gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:py-20">
        <div className="min-w-0 reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-blue)]">
            {heroContent.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[2.05rem] leading-[1.12] text-[var(--color-navy)] sm:text-5xl"
          >
            {heroContent.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-slate)]/85 sm:text-lg">
            {heroContent.introduction}
          </p>
          <CtaGroup
            className="mt-8"
            size="lg"
            tertiaryHref="/services"
            tertiaryLabel={ctaLabels.discoverServices}
          />
        </div>

        <div className="relative min-w-0 reveal-delay">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-sm border border-[var(--color-navy)]/12 bg-[var(--color-navy)] text-white shadow-[0_20px_50px_rgba(10,35,66,0.18)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(45,139,195,0.35), transparent 55%), repeating-linear-gradient(90deg, transparent, transparent 27px, rgba(255,255,255,0.08) 28px)",
              }}
            />
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/65">
                  Structure · Suivi · Clarté
                </p>
                <p className="mt-6 font-[family-name:var(--font-display)] text-5xl tracking-[0.16em]">
                  AY
                </p>
                <p className="mt-3 max-w-[14rem] text-sm text-white/75">
                  Monogramme provisoire inspiré des initiales du cabinet —
                  non officiel.
                </p>
              </div>
              <div className="space-y-3 border-t border-white/15 pt-5 text-sm text-white/80">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                  <span>Colonnes</span>
                  <span>Organisées</span>
                </div>
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                  <span>Pièces</span>
                  <span>Structurées</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Échanges</span>
                  <span>Directs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
