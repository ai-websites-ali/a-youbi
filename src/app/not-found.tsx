import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaGroup } from "@/components/ui/CtaGroup";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <Container className="py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-blue)]">
          Erreur 404
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl text-[var(--color-navy)] sm:text-5xl">
          Page introuvable
        </h1>
        <p className="mt-5 max-w-xl text-lg text-[var(--color-slate)]/85">
          La page demandée n’existe pas ou n’est plus disponible. Vous pouvez
          revenir à l’accueil ou contacter directement le cabinet.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <Button href="/" variant="tertiary">
            Retour à l’accueil
          </Button>
          <CtaGroup />
        </div>
      </Container>
    </section>
  );
}
