import Image from "next/image";
import { ctaLabels } from "@/config/business";
import { cabinetSection } from "@/config/homepage";
import { facadeImage } from "@/config/media";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CabinetPresentation() {
  return (
    <section
      aria-labelledby="cabinet-title"
      className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]"
    >
      <Container className="grid items-start gap-10 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-20">
        <div className="min-w-0">
          <SectionHeading
            id="cabinet-title"
            title={cabinetSection.title}
            supporting={cabinetSection.supporting}
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-slate)]/85">
            {cabinetSection.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {cabinetSection.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[var(--color-navy)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/cabinet" variant="tertiary">
              {ctaLabels.discoverCabinet}
            </Button>
          </div>
        </div>

        <figure className="min-w-0">
          <div className="overflow-hidden rounded-sm border border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
            <Image
              src={facadeImage.src}
              alt={facadeImage.alt}
              width={facadeImage.width}
              height={facadeImage.height}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-auto w-full object-cover object-center"
              priority={false}
            />
          </div>
          <figcaption className="mt-3 text-sm text-[var(--color-slate)]/70">
            {facadeImage.credit}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
