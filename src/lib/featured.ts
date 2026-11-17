// Livre mis en avant sur l'accueil. Réglé depuis le back-office par HIKAYA :
// - label : « À la une » (livre disponible) ou « En avant-première » (sortie à venir)
// - bookId : le livre présenté
// - presentation : courte présentation (sinon le résumé du livre)
// - releaseDate : date de sortie, affichée pour une avant-première
export type FeaturedLabel = "À la une" | "En avant-première";

export type Featured = {
  label: FeaturedLabel;
  bookId: string;
  presentation?: string;
  releaseDate?: string;
};

export const featured: Featured = {
  label: "À la une",
  bookId: "salah-al-din",
};
