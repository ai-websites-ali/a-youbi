import { business } from "@/config/business";
import { pageMetadata, siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(pageMetadata.mentionsLegales);

export default function MentionsLegalesPage() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <Container className="py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales", href: "/mentions-legales" },
          ]}
        />
        <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)] sm:text-4xl">
          Mentions légales
        </h1>

        <div className="prose-like mt-10 max-w-3xl space-y-10 text-[var(--color-slate)]/90">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Éditeur du site
            </h2>
            <p className="mt-3 leading-relaxed">
              Site de présentation du{" "}
              <strong>{business.publicName.value}</strong>.
            </p>
            <ContentStatusNote status="client-confirmation" className="mt-4">
              {`${business.legal.legalName}. ${business.legal.publisher}. Titre professionnel protégé, qualifications et accréditations à confirmer.`}
            </ContentStatusNote>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Coordonnées publiques
            </h2>
            <address className="mt-3 not-italic leading-relaxed">
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              Téléphone : {business.phone.display}
            </address>
            <ContentStatusNote status="client-confirmation" className="mt-4">
              Adresse e-mail officielle non confirmée à ce jour. Adresse
              administrative exacte, NIF, NIS et RC à confirmer.
            </ContentStatusNote>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Hébergement
            </h2>
            <ContentStatusNote status="client-confirmation" className="mt-3">
              Les détails d’hébergement seront complétés après confirmation du
              déploiement de production. Le site est prévu pour un hébergement
              compatible Vercel.
            </ContentStatusNote>
            <p className="mt-3 text-sm text-[var(--color-slate)]/75">
              URL de référence actuelle : {siteConfig.url}
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Propriété intellectuelle
            </h2>
            <p className="mt-3 leading-relaxed">
              Les contenus de ce site, hors éléments expressément identifiés
              comme provenant de sources tierces, sont destinés à la
              présentation du cabinet. Toute reproduction non autorisée est
              interdite.
            </p>
            <p className="mt-3 leading-relaxed">
              La photographie de façade utilisée sur ce site provient du
              listing public Google Maps du cabinet et est hébergée localement
              dans le projet.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Responsabilité
            </h2>
            <p className="mt-3 leading-relaxed">
              Les informations présentées sur ce site ont une vocation
              générale et informative. Certaines sections constituent un
              contenu de démonstration en attendant validation par le cabinet.
              Elles ne remplacent pas un échange personnalisé ni un conseil
              adapté à une situation particulière.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
