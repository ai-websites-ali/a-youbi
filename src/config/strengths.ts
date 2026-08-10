import type { ContentStatus } from "./types";

export const strengthsSection = {
  title: "Nos atouts",
  supporting: "Une organisation pensée pour simplifier le suivi de votre activité",
  status: "placeholder" as ContentStatus,
};

export const strengths = [
  {
    number: "01",
    title: "Proximité à Réghaïa",
    description:
      "Un cabinet accessible localement pour faciliter les échanges et le suivi de proximité.",
  },
  {
    number: "02",
    title: "Échanges directs",
    description:
      "Des contacts clairs pour présenter un besoin et préciser les informations utiles.",
  },
  {
    number: "03",
    title: "Organisation structurée",
    description:
      "Une approche fondée sur le classement des documents et la lisibilité des informations.",
  },
  {
    number: "04",
    title: "Suivi régulier",
    description:
      "Un rythme d’accompagnement adapté aux échéances et au fonctionnement convenu.",
  },
  {
    number: "05",
    title: "Informations centralisées",
    description:
      "Une transmission organisée pour limiter les allers-retours inutiles.",
  },
  {
    number: "06",
    title: "Accompagnement adapté à l’activité",
    description:
      "Un suivi pensé selon la nature de l’activité et les besoins exprimés.",
  },
] as const;
