// Données de démonstration de « Mon compte » (CDC §04). En production : compte de l'app,
// position d'écoute synchronisée, abonnement et factures lus depuis Stripe.

export const account = {
  firstName: "Samira",
  email: "samira@exemple.fr",
  marketing: true,
  // source : "stripe" (géré depuis le portail Stripe) ou "app-store" / "google-play" (géré dans le store)
  subscription: {
    source: "stripe" as "stripe" | "app-store" | "google-play",
    plan: "Mensuel",
    status: "Actif",
    price: "4,90 €/mois",
    detail: "Offre découverte jusqu'au 17 février 2027, puis 9,90 €/mois",
    nextCharge: "17 décembre 2026",
    since: "17 novembre 2026",
  },
  card: { brand: "Visa", last4: "4242", expires: "08/28" },
  invoices: [
    { id: "HKY-2026-0117", date: "17 novembre 2026", label: "Abonnement mensuel", amount: "4,90 €", status: "Payée" },
  ],
  listening: [
    { bookId: "al-andalus-03", progress: 0.62, remaining: "9 min restantes" },
    { bookId: "fatima-al-fihriyya", progress: 0.28, remaining: "18 min restantes" },
    { bookId: "ibn-al-haytham", progress: 0.86, remaining: "3 min restantes" },
  ],
};
