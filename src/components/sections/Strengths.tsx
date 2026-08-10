import { strengths, strengthsSection } from "@/config/strengths";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Strengths() {
  return (
    <section
      aria-labelledby="atouts-title"
      className="border-b border-[var(--color-navy)]/10 bg-[var(--color-navy)] text-white"
      data-content-status={strengthsSection.status}
    >
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              id="atouts-title"
              title={strengthsSection.title}
              supporting={strengthsSection.supporting}
              tone="dark"
            />
          </div>

          <ol className="min-w-0 divide-y divide-white/15 border-y border-white/15">
            {strengths.map((item) => (
              <li
                key={item.number}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 py-5 sm:gap-6"
              >
                <span className="pt-1 font-[family-name:var(--font-display)] text-sm tracking-[0.16em] text-[var(--color-azure)]">
                  {item.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
