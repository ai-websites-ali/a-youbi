import type { ContentStatus } from "./types";

/**
 * Authentic façade photograph from the Google Maps listing.
 * Source listing: https://maps.app.goo.gl/5ode8ra2NuBzRzqP7
 * Original Googleusercontent URL archived for provenance only — the site serves the local file.
 */
export const facadeImage = {
  src: "/images/cabinet-ayoubi-facade.jpg",
  alt: "Façade de l’immeuble abritant le Cabinet A.YOUBI à Réghaïa, avec son enseigne extérieure bleue",
  width: 1200,
  height: 1600,
  mapsSourceUrl:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxSO4eJoLSAA_Sk4O1VFGoBgkm9g0nSYTiuwMW7cyUgGZ49wriVTr_r2WA8hnLMlUFWc6XcUQq7y0crdafofT7_auj15SOUeiKqaQdBAoPDmvs0cYPhnRhkDcW7mgs8zROSfWmF-GOn2df=w1200-h1600-k-no",
  listingUrl: "https://maps.app.goo.gl/5ode8ra2NuBzRzqP7",
  credit: "Photographie publique du listing Google Maps du Cabinet A.YOUBI",
  status: "verified" as ContentStatus,
};

export const monogram = {
  initials: "AY",
  label: "Monogramme provisoire AY — non officiel",
  status: "placeholder" as ContentStatus,
};
