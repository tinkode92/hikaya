// Cartes cadeaux HIKAYA. Prix à valider par HIKAYA (en production : produits Stripe).
// Calculés sur les tarifs publics : 9,90 €/mois, 79,20 €/an.
export type GiftOption = {
  id: string;
  duration: string; // affiché sur la carte : « 3 mois d'histoires »
  label: string;
  price: string;
  note?: string;
  badge?: string;
};

export const giftOptions: GiftOption[] = [
  { id: "3-mois", duration: "3 mois", label: "3 mois", price: "29,70 €" },
  { id: "6-mois", duration: "6 mois", label: "6 mois", price: "59,40 €" },
  {
    id: "1-an",
    duration: "1 an",
    label: "1 an",
    price: "79,20 €",
    note: "Soit 6,60 €/mois",
    badge: "Meilleur prix",
  },
];

export const giftFaq = [
  {
    q: "Comment le destinataire utilise-t-il son cadeau ?",
    a: "Il reçoit une carte cadeau avec un code. Il crée son compte HIKAYA (ou se connecte), saisit le code, et accède à tout le catalogue sur le site et dans l'application.",
  },
  {
    q: "L'abonnement offert est-il renouvelé automatiquement ?",
    a: "Non. Un abonnement offert couvre la durée choisie, sans renouvellement ni engagement pour la personne qui le reçoit.",
  },
  {
    q: "Puis-je choisir quand la carte est envoyée ?",
    a: "Oui. Envoyez-la par e-mail à la date de votre choix (un anniversaire, une fête), ou téléchargez-la pour l'imprimer et la remettre en main propre.",
  },
];
