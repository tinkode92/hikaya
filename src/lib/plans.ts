// Offres et prix (validés par HIKAYA). En production, les prix viennent de Stripe.
// Objectif : le récurrent mensuel. L'offre mensuelle passe en premier, présélectionnée, avec son
// prix découverte ancré sur le prix normal (9,90 € barré). L'annuelle commence par 7 jours gratuits.
export const plans = [
  {
    id: "mensuel",
    name: "Mensuel",
    badge: "Offre découverte",
    price: "4,90\u00a0€",
    period: "/ mois",
    billing: "4,90\u00a0€/mois pendant les 3 premiers mois, puis 9,90\u00a0€/mois",
    was: "9,90\u00a0€",
    detail: "Sans engagement, résiliable à tout moment",
    cta: "Commencer à 4,90\u00a0€/mois",
  },
  {
    id: "annuel",
    name: "Annuel",
    badge: "7 jours offerts",
    price: "79,20\u00a0€",
    period: "/ an",
    billing: "7 jours gratuits, puis 79,20\u00a0€ facturés en une fois pour un\u00a0an",
    was: undefined,
    detail: "Soit 6,60\u00a0€/mois",
    cta: "Essayer 7 jours gratuitement",
  },
] as const;

export type PlanId = (typeof plans)[number]["id"];
export const getPlan = (id: string | null) => plans.find((p) => p.id === id) ?? plans[0];
