import type { ContentStatus } from "./types";

export type ServiceIconId =
  | "ledger"
  | "fiscal"
  | "payroll"
  | "creation"
  | "conseil"
  | "audit";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  introduction: string;
  mayInclude: string[];
  whoItConcerns: string[];
  collaboration: string[];
  usefulInfo: string[];
  clarification: string;
  icon: ServiceIconId;
  status: ContentStatus;
};

export const servicesClarification =
  "Les prestations présentées constituent un contenu de démonstration. Leur disponibilité, leur périmètre et leurs conditions doivent être confirmés directement avec le Cabinet A.YOUBI.";

export const servicePageClarification =
  "Ce contenu présente un aperçu général de ce domaine. La disponibilité, le périmètre et les modalités exactes de la prestation doivent être confirmés directement avec le Cabinet A.YOUBI.";

export const services: Service[] = [
  {
    slug: "tenue-comptable",
    title: "Tenue et suivi comptable",
    shortDescription:
      "Organisation des pièces, suivi des opérations et préparation des éléments nécessaires à la gestion comptable courante.",
    introduction:
      "La tenue comptable contribue à organiser les informations financières de l’activité et à faciliter le suivi des opérations au fil du temps.",
    mayInclude: [
      "Organisation et classement des pièces justificatives",
      "Suivi des opérations courantes",
      "Préparation d’éléments utiles à la gestion comptable",
      "Points d’échange sur l’état d’avancement du dossier",
    ],
    whoItConcerns: [
      "Professionnels souhaitant structurer leur suivi comptable",
      "Activités en cours de formalisation administrative",
      "Structures ayant besoin d’un accompagnement régulier",
    ],
    collaboration: [
      "Transmission organisée des documents nécessaires",
      "Échanges sur la périodicité du suivi",
      "Clarification des informations à fournir",
      "Ajustement du rythme selon l’activité",
    ],
    usefulInfo: [
      "Pièces justificatives disponibles et lisibles",
      "Relevés et documents de suivi utiles",
      "Informations sur la nature de l’activité",
    ],
    clarification: servicePageClarification,
    icon: "ledger",
    status: "placeholder",
  },
  {
    slug: "declarations-fiscales",
    title: "Déclarations fiscales",
    shortDescription:
      "Préparation et suivi des informations liées aux obligations déclaratives, selon la situation et l’activité de l’entreprise.",
    introduction:
      "Les obligations déclaratives varient selon la situation de chaque activité. Ce domaine concerne la préparation et le suivi des informations utiles à ces démarches.",
    mayInclude: [
      "Organisation des informations nécessaires aux déclarations",
      "Préparation des éléments déclaratifs selon le contexte",
      "Suivi des échéances portées à la connaissance du cabinet",
      "Échanges sur les documents à transmettre",
    ],
    whoItConcerns: [
      "Entreprises et professionnels soumis à des obligations déclaratives",
      "Structures souhaitant clarifier le suivi de leurs échéances",
      "Activités en recherche d’un accompagnement organisé",
    ],
    collaboration: [
      "Collecte des informations requises",
      "Vérification de la cohérence des éléments transmis",
      "Préparation des supports utiles",
      "Échanges avant transmission des déclarations",
    ],
    usefulInfo: [
      "Documents fiscaux et justificatifs antérieurs",
      "Informations sur le régime applicable",
      "Échéances déjà connues",
    ],
    clarification: servicePageClarification,
    icon: "fiscal",
    status: "placeholder",
  },
  {
    slug: "gestion-paie",
    title: "Gestion de la paie",
    shortDescription:
      "Organisation des informations sociales et préparation des éléments nécessaires au suivi de la paie.",
    introduction:
      "La gestion de la paie repose sur des informations sociales à jour et une organisation claire des éléments transmis au cabinet.",
    mayInclude: [
      "Organisation des informations liées au personnel",
      "Préparation des éléments utiles au suivi de la paie",
      "Structuration des données sociales transmises",
      "Échanges sur les besoins de suivi",
    ],
    whoItConcerns: [
      "Structures employant du personnel",
      "Professionnels souhaitant organiser le suivi social",
      "Activités en cours de mise en place administrative",
    ],
    collaboration: [
      "Transmission régulière des informations nécessaires",
      "Clarification des données à fournir",
      "Organisation du calendrier de suivi",
      "Points d’échange en cas de changement",
    ],
    usefulInfo: [
      "Informations relatives aux collaborateurs concernés",
      "Documents sociaux utiles",
      "Éléments de rémunération et absences lorsqu’ils sont disponibles",
    ],
    clarification: servicePageClarification,
    icon: "payroll",
    status: "placeholder",
  },
  {
    slug: "creation-entreprise",
    title: "Création et organisation d’entreprise",
    shortDescription:
      "Accompagnement dans la préparation des informations et des principales étapes administratives liées à un projet d’entreprise.",
    introduction:
      "Un projet d’entreprise nécessite de préparer des informations et de comprendre les principales étapes administratives utiles à sa mise en place.",
    mayInclude: [
      "Aide à la préparation des informations du projet",
      "Repérage des principales étapes administratives",
      "Organisation des documents utiles",
      "Échanges pour clarifier le besoin",
    ],
    whoItConcerns: [
      "Porteurs de projet",
      "Professionnels en phase de structuration",
      "Activités souhaitant organiser leur démarrage administratif",
    ],
    collaboration: [
      "Premier échange sur le projet",
      "Identification des informations à préparer",
      "Organisation des prochaines étapes",
      "Suivi selon le périmètre convenu",
    ],
    usefulInfo: [
      "Description du projet d’activité",
      "Documents d’identité et pièces utiles",
      "Éléments déjà préparés pour la démarche",
    ],
    clarification: servicePageClarification,
    icon: "creation",
    status: "placeholder",
  },
  {
    slug: "conseil-suivi-gestion",
    title: "Conseil et suivi de gestion",
    shortDescription:
      "Structuration des informations utiles pour mieux comprendre et suivre l’évolution de l’activité.",
    introduction:
      "Le suivi de gestion vise à organiser les informations permettant de mieux lire l’évolution de l’activité et d’échanger sur les points utiles.",
    mayInclude: [
      "Structuration des informations de suivi",
      "Organisation d’indicateurs utiles à la lecture de l’activité",
      "Points d’échange périodiques",
      "Clarification des besoins de pilotage",
    ],
    whoItConcerns: [
      "Dirigeants souhaitant mieux suivre leur activité",
      "Structures en recherche d’une lecture plus claire des informations",
      "Professionnels désirant un accompagnement régulier",
    ],
    collaboration: [
      "Définition du besoin de suivi",
      "Organisation des informations à transmettre",
      "Échanges sur la fréquence des points",
      "Ajustement selon l’évolution de l’activité",
    ],
    usefulInfo: [
      "Éléments comptables et opérationnels disponibles",
      "Objectifs de suivi exprimés par le professionnel",
      "Périodicité souhaitée des échanges",
    ],
    clarification: servicePageClarification,
    icon: "conseil",
    status: "placeholder",
  },
  {
    slug: "commissariat-aux-comptes",
    title: "Commissariat aux comptes et audit",
    shortDescription:
      "Présentation générale des missions de contrôle et de vérification des informations financières, dans le respect du cadre applicable et de l’indépendance requise.",
    introduction:
      "Le commissariat aux comptes et les missions d’audit s’inscrivent dans un cadre spécifique. Toute mission doit respecter les exigences d’indépendance et le périmètre applicable.",
    mayInclude: [
      "Présentation générale des missions de contrôle",
      "Examen des informations financières dans le cadre défini",
      "Échanges sur le périmètre et les conditions de la mission",
      "Clarification des exigences d’indépendance applicables",
    ],
    whoItConcerns: [
      "Entités pour lesquelles une mission de contrôle peut être envisagée",
      "Structures souhaitant comprendre le cadre général d’une telle mission",
      "Interlocuteurs recherchant une première information avant confirmation",
    ],
    collaboration: [
      "Échange préalable sur la nature de la demande",
      "Vérification de la compatibilité et de l’indépendance",
      "Précision du périmètre éventuel",
      "Confirmation directe des modalités avec le cabinet",
    ],
    usefulInfo: [
      "Nature de l’entité et du besoin exprimé",
      "Informations financières disponibles",
      "Contexte réglementaire connu de la demande",
    ],
    clarification:
      "Ce contenu présente un aperçu général. La mission applicable, son périmètre et les exigences d’indépendance doivent être confirmés directement avec le Cabinet A.YOUBI. Le cabinet ne peut pas simultanément exercer des missions incompatibles pour une même entité.",
    icon: "audit",
    status: "placeholder",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  return services.filter((service) => service.slug !== slug).slice(0, limit);
}
