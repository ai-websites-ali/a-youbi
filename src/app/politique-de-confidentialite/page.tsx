import { business } from "@/config/business";
import { pageMetadata } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContentStatusNote } from "@/components/ui/ContentStatusNote";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(pageMetadata.privacy);

export default function PrivacyPage() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <Container className="py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            {
              label: "Politique de confidentialité",
              href: "/politique-de-confidentialite",
            },
          ]}
        />
        <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)] sm:text-4xl">
          Politique de confidentialité
        </h1>

        <div className="mt-10 max-w-3xl space-y-10 text-[var(--color-slate)]/90">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Objet
            </h2>
            <p className="mt-3 leading-relaxed">
              Cette page décrit le comportement réel du site de présentation
              du {business.shortName.value}.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Données collectées via le site
            </h2>
            <p className="mt-3 leading-relaxed">
              Le site ne propose actuellement :
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>aucun formulaire de contact</li>
              <li>aucun compte utilisateur</li>
              <li>aucune newsletter</li>
              <li>aucune base de données applicative</li>
              <li>aucun outil publicitaire intégré</li>
              <li>aucun outil d’analytics intégré par le site</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Les prises de contact s’effectuent via le téléphone ou WhatsApp,
              en dehors d’un formulaire hébergé sur ce site.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Services tiers
            </h2>
            <p className="mt-3 leading-relaxed">
              Le site intègre une carte Google Maps en iframe afin d’afficher
              la localisation du cabinet. L’utilisation de ce service peut
              entraîner le traitement de données techniques par Google selon
              ses propres conditions.
            </p>
            <p className="mt-3 leading-relaxed">
              Les boutons WhatsApp et les liens d’itinéraire renvoient vers des
              services externes (WhatsApp / Google Maps). Ces services
              appliquent leurs propres politiques de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              Aucun bandeau de cookies n’est affiché, car le site n’intègre
              pas, dans son état actuel, de traceurs publicitaires ou
              d’outils d’analyse soumis à consentement. L’iframe Google Maps
              peut déposer des cookies propres à Google lors de son
              chargement.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">
              Contact
            </h2>
            <p className="mt-3 leading-relaxed">
              Pour toute question relative à cette politique, contactez le
              cabinet au {business.phone.display}.
            </p>
            <ContentStatusNote status="client-confirmation" className="mt-4">
              Une adresse e-mail officielle pourra être ajoutée après
              confirmation par le client.
            </ContentStatusNote>
          </section>
        </div>
      </Container>
    </section>
  );
}
