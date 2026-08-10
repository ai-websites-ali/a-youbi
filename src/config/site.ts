import { business } from "./business";
import { services } from "./services";

/** Production domain to confirm with the client. */
export const siteConfig = {
  name: business.shortName.value,
  locale: "fr_DZ",
  language: "fr",
  url: "https://a-youbi.vercel.app",
  description:
    "Découvrez le Cabinet A.YOUBI à Réghaïa, ses domaines d’accompagnement et ses informations de contact.",
};

export const mainNav = [
  { label: "Accueil", href: "/" },
  { label: "Le cabinet", href: "/cabinet" },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  pages: [
    { label: "Accueil", href: "/" },
    { label: "Le cabinet", href: "/cabinet" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    {
      label: "Politique de confidentialité",
      href: "/politique-de-confidentialite",
    },
  ],
} as const;

export const pageMetadata = {
  home: {
    title: "Cabinet A.YOUBI | Comptabilité et commissariat aux comptes à Réghaïa",
    description: siteConfig.description,
    path: "/",
  },
  cabinet: {
    title: "Le Cabinet A.YOUBI à Réghaïa | Présentation",
    description:
      "Présentation du Cabinet A.YOUBI à Réghaïa : accompagnement comptable, informations pratiques et modalités de contact.",
    path: "/cabinet",
  },
  services: {
    title: "Services du Cabinet A.YOUBI | Domaines d’accompagnement",
    description:
      "Découvrez les domaines d’accompagnement présentés par le Cabinet A.YOUBI : comptabilité, fiscalité, paie, création, conseil et commissariat aux comptes.",
    path: "/services",
  },
  contact: {
    title: "Contact | Cabinet A.YOUBI à Réghaïa",
    description:
      "Contactez le Cabinet A.YOUBI à Réghaïa par téléphone ou WhatsApp et obtenez l’itinéraire vers le cabinet.",
    path: "/contact",
  },
  mentionsLegales: {
    title: "Mentions légales | Cabinet A.YOUBI",
    description:
      "Mentions légales du site du Cabinet A.YOUBI. Certaines informations administratives restent à confirmer.",
    path: "/mentions-legales",
  },
  privacy: {
    title: "Politique de confidentialité | Cabinet A.YOUBI",
    description:
      "Politique de confidentialité du site du Cabinet A.YOUBI : données, contact et services tiers utilisés.",
    path: "/politique-de-confidentialite",
  },
} as const;
