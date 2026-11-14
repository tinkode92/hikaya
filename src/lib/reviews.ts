// Avis mis en avant sur le site (cahier des charges §07).
// En production : avis vérifiés laissés par des abonnés, validés puis sélectionnés dans le
// back-office (« Mettre en avant »). Ceux-ci sont FICTIFS, pour la maquette uniquement.

export const DEMO_REVIEWS = true; // à passer à false quand les vrais avis sont branchés

export type Review = {
  id: string;
  name: string;
  context: string; // qui écoute, saisi par le parent
  rating: number;
  text: string;
  bookId: string; // l'histoire notée
  date: string;
};

export const featuredReviews: Review[] = [
  {
    id: "r1",
    name: "Samira",
    context: "Deux enfants, 7 et 10 ans",
    rating: 5,
    text: "Mes deux garçons réclament leur épisode tous les soirs avant de dormir. Le lendemain, ils me racontent l'histoire de Tariq à table.",
    bookId: "al-andalus-01",
    date: "Octobre 2026",
  },
  {
    id: "r2",
    name: "Youssef",
    context: "Une fille de 9 ans",
    rating: 5,
    text: "Ma fille connaît maintenant Fatima al-Fihriyya et l'université d'al-Qarawiyyin. Elle a voulu chercher Fès sur la carte.",
    bookId: "fatima-al-fihriyya",
    date: "Octobre 2026",
  },
  {
    id: "r3",
    name: "Leïla",
    context: "Trois enfants, de 6 à 12 ans",
    rating: 5,
    text: "On les écoute en voiture pendant les trajets. Même la petite de 6 ans suit, et les grands posent plein de questions.",
    bookId: "al-andalus-04",
    date: "Septembre 2026",
  },
  {
    id: "r4",
    name: "Karim",
    context: "Un fils de 11 ans",
    rating: 4,
    text: "Très belle narration, et les sources sont sérieuses. Mon fils a adoré Ibn al-Haytham et ses expériences avec la lumière.",
    bookId: "ibn-al-haytham",
    date: "Septembre 2026",
  },
];
