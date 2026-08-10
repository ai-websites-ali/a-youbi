export function SkipLink() {
  return (
    <a
      href="#contenu-principal"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-[var(--color-navy)] focus:px-4 focus:py-3 focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-azure)]"
    >
      Aller au contenu principal
    </a>
  );
}
