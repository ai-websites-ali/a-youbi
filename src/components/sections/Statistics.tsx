import {
  statistics,
  statisticsClarification,
} from "@/config/homepage";
import { AnimatedStatValue } from "@/components/ui/AnimatedStatValue";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";

export function Statistics() {
  return (
    <section
      aria-labelledby="statistiques-title"
      className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]"
    >
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="statistiques-title"
            className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)] sm:text-3xl"
          >
            En quelques repères
          </h2>
          <ContentStatusNote status="placeholder" className="max-w-md">
            {statisticsClarification}
          </ContentStatusNote>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 min-[480px]:gap-6 lg:grid-cols-4">
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 border border-[var(--color-navy)]/10 bg-[var(--color-ivory)] px-3 py-5 sm:px-5"
              data-content-status={stat.status}
            >
              <dt className="text-xs leading-snug text-[var(--color-slate)]/75 sm:text-sm">
                {stat.label}
              </dt>
              <dd className="mt-2 break-words font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)] sm:text-3xl">
                <AnimatedStatValue value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
