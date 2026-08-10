import Image from "next/image";
import { Method } from "@/components/sections/Method";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { FinalCta } from "@/components/sections/FinalCta";
import { Strengths } from "@/components/sections/Strengths";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { Monogram } from "@/components/ui/Monogram";
import { business } from "@/config/business";
import { cabinetSection } from "@/config/homepage";
import { facadeImage } from "@/config/media";
import { professionalProfile } from "@/config/professional";
import { pageMetadata } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(pageMetadata.cabinet);

const principles = [
  {
    title: "Clarté des échanges",
    description:
      "Les informations sont présentées de manière structurée afin de faciliter le suivi du dossier.",
  },
  {
    title: "Organisation des documents",
    description:
      "La transmission et le classement des pièces sont pensés pour simplifier le travail collaboratif.",
  },
  {
    title: "Proximité locale",
    description:
      "Implanté à Réghaïa, le cabinet favorise un accompagnement accessible et direct.",
  },
  {
    title: "Cadre professionnel",
    description:
      "Les domaines présentés dans la communication publique du cabinet portent sur la comptabilité et le commissariat aux comptes.",
  },
];

export default function CabinetPage() {
  return (
    <>
      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Le cabinet", href: "/cabinet" },
            ]}
          />
          <h1 className="mt-8 max-w-3xl font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-navy)] sm:text-5xl">
            Le Cabinet A.YOUBI à Réghaïa
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-slate)]/85">
            {cabinetSection.supporting}
          </p>
          <CtaGroup className="mt-8" tertiaryHref="/services" tertiaryLabel="Découvrir les services" />
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
              Présentation du cabinet
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-[var(--color-slate)]/85">
              {cabinetSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {cabinetSection.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--color-navy)]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--color-blue)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="min-w-0">
            <div className="overflow-hidden rounded-sm border border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
              <Image
                src={facadeImage.src}
                alt={facadeImage.alt}
                width={facadeImage.width}
                height={facadeImage.height}
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--color-slate)]/70">
              {facadeImage.credit}
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <Container className="grid gap-8 py-16 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
          <Monogram size="lg" />
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
              Votre interlocuteur au sein du Cabinet A.YOUBI
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-slate)]/85">
              Le suivi d’un dossier repose sur une bonne compréhension de
              l’activité, des échanges réguliers et une organisation claire des
              informations transmises.
            </p>
            <dl
              className="mt-6 grid gap-4 sm:grid-cols-2"
              data-content-status={professionalProfile.status}
            >
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]/60">
                  Interlocuteur
                </dt>
                <dd className="mt-2 text-lg text-[var(--color-navy)]">
                  {professionalProfile.publicLabel}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]/60">
                  Fonction
                </dt>
                <dd className="mt-2 text-[var(--color-slate)]">
                  {professionalProfile.title}
                </dd>
              </div>
              <div className="sm:col-span-2">
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

      <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
        <Container className="py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)]">
            Principes de travail
          </h2>
          <ol className="mt-8 divide-y divide-[var(--color-navy)]/10 border-y border-[var(--color-navy)]/10">
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 py-5 sm:gap-6"
              >
                <span className="font-[family-name:var(--font-display)] text-[var(--color-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-[var(--color-navy)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-slate)]/85">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-[var(--color-slate)]/70">
            {business.publicName.value}
          </p>
        </Container>
      </section>

      <Strengths />
      <Method />
      <PracticalInfo />
      <FinalCta />
    </>
  );
}
