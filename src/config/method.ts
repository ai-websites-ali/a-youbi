import type { ContentStatus } from "./types";

export const methodSection = {
  title: "Notre méthode d’accompagnement",
  contractNote:
    "Avant le début de l’accompagnement, les prestations retenues, les responsabilités de chaque partie et les conditions financières doivent être précisées dans un document ou contrat de prestation.",
  status: "placeholder" as ContentStatus,
};

export const methodSteps = [
  {
    number: "1",
    title: "Premier échange",
    description:
      "Le cabinet prend connaissance de votre activité, de votre situation et de votre besoin.",
  },
  {
    number: "2",
    title: "Analyse du besoin",
    description:
      "Les informations disponibles sont examinées afin de définir le périmètre de l’accompagnement.",
  },
  {
    number: "3",
    title: "Proposition de collaboration",
    description:
      "Les prestations, les modalités de suivi et les informations nécessaires sont précisées.",
  },
  {
    number: "4",
    title: "Mise en place du suivi",
    description:
      "Les échanges et la transmission des documents sont organisés selon le fonctionnement convenu.",
  },
  {
    number: "5",
    title: "Accompagnement régulier",
    description:
      "Le dossier est suivi selon la fréquence et les modalités définies avec le cabinet.",
  },
] as const;
