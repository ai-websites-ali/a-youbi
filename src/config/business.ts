import type { ContentStatus } from "./types";

export const business = {
  publicName: {
    value: "Cabinet de comptabilité et commissariat aux comptes A.YOUBI",
    status: "verified" as ContentStatus,
  },
  shortName: {
    value: "Cabinet A.YOUBI",
    status: "verified" as ContentStatus,
  },
  category: {
    value: "Cabinet de comptabilité et commissariat aux comptes",
    status: "verified" as ContentStatus,
  },
  address: {
    line1: "2e étage, Cité Cenestal, bâtiment O",
    line2: "Réghaïa, Alger, Algérie",
    mapsWording: "2eme étage, Cité cenestal, bt O, Réghaïa, Algeria",
    floorNotice: "Le cabinet se trouve au 2e étage.",
    plusCode: "8F85P8VV+5P",
    status: "verified" as ContentStatus,
  },
  coordinates: {
    lat: 36.7429486,
    lng: 3.3442533,
    status: "verified" as ContentStatus,
  },
  phone: {
    display: "0561 37 80 58",
    href: "tel:+213561378058",
    e164: "+213561378058",
    status: "verified" as ContentStatus,
  },
  whatsapp: {
    href: "https://wa.me/213561378058",
    status: "verified" as ContentStatus,
  },
  directions: {
    href: "https://www.google.com/maps/dir/?api=1&destination=36.7429486,3.3442533",
    status: "verified" as ContentStatus,
  },
  googleMaps: {
    shortUrl: "https://maps.app.goo.gl/5ode8ra2NuBzRzqP7",
    status: "verified" as ContentStatus,
  },
  hours: {
    mondayNote: {
      value: "Lundi : 09:00 – 16:00 (selon l’indication publique Google Maps)",
      status: "verified" as ContentStatus,
    },
    completeSchedule: {
      title: "Horaires complets à confirmer",
      message: "Appelez le cabinet avant de vous déplacer.",
      status: "client-confirmation" as ContentStatus,
    },
  },
  additionalPhones: {
    numbers: ["0560 08 09 38", "0674 73 42 54"],
    note: "Numéros visibles sur l’enseigne du cabinet. À confirmer avant utilisation comme CTA.",
    status: "client-confirmation" as ContentStatus,
  },
  email: {
    value: null,
    status: "client-confirmation" as ContentStatus,
  },
  legal: {
    legalName: "Dénomination légale exacte à confirmer",
    publisher: "Responsable de la publication à confirmer",
    nif: "NIF à confirmer",
    nis: "NIS à confirmer",
    rc: "RC à confirmer",
    administrativeAddress: "Adresse administrative exacte à confirmer",
    status: "client-confirmation" as ContentStatus,
  },
} as const;

export const ctaLabels = {
  primary: "Appeler le cabinet",
  secondary: "Écrire sur WhatsApp",
  callShort: "Appeler",
  whatsappShort: "WhatsApp",
  directionsShort: "Itinéraire",
  directions: "Obtenir l’itinéraire",
  discoverServices: "Découvrir nos services",
  discoverCabinet: "Découvrir le cabinet",
} as const;
