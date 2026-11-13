// Données de maquette. En production, le catalogue vient du back-office de l'app.
// Titres traduits depuis les fichiers d'illustration, durées 02 à 06 relevées dans l'app.
// Résumés et durée de l'épisode 01 : à valider par HIKAYA.

export type Episode = {
  id: string;
  number: string;
  series: string;
  title: string;
  summary: string;
  duration: string;
  age: string;
  image: string;
};

export const alAndalus: Episode[] = [
  {
    id: "al-andalus-01",
    number: "01",
    series: "Al-Andalus",
    title: "Ṭāriq et la porte d'al-Andalus",
    summary:
      "711. Ṭāriq ibn Ziyād traverse le détroit. Devant lui, une terre inconnue et un choix sans retour.",
    duration: "",
    age: "6-14 ans",
    image: "/episodes/al-andalus-01.webp",
  },
  {
    id: "al-andalus-02",
    number: "02",
    series: "Al-Andalus",
    title: "Les premiers pas d'un nouveau pouvoir",
    summary:
      "Dans les rues de la ville, un nouveau pouvoir s'installe autour de deux promesses : sécurité et justice.",
    duration: "9 min 27 s",
    age: "6-14 ans",
    image: "/episodes/al-andalus-02.webp",
  },
  {
    id: "al-andalus-03",
    number: "03",
    series: "Al-Andalus",
    title: "La fin d'un fragile équilibre",
    summary:
      "Les rivalités fissurent les murs du palais. Le gouverneur doit trouver une issue avant qu'il ne soit trop tard.",
    duration: "9 min 2 s",
    age: "6-14 ans",
    image: "/episodes/al-andalus-03.webp",
  },
  {
    id: "al-andalus-04",
    number: "04",
    series: "Al-Andalus",
    title: "Une nouvelle étoile sur Cordoue",
    summary:
      "Au coucher du soleil, un prince venu de très loin découvre Cordoue pour la première fois.",
    duration: "11 min 2 s",
    age: "6-14 ans",
    image: "/episodes/al-andalus-04.webp",
  },
  {
    id: "al-andalus-05",
    number: "05",
    series: "Al-Andalus",
    title: "Hishām et les promesses d'un nouvel empire",
    summary:
      "Hishām réunit les savants sous les arcades : un empire se construit aussi par le savoir.",
    duration: "11 min 4 s",
    age: "6-14 ans",
    image: "/episodes/al-andalus-05.webp",
  },
  {
    id: "al-andalus-06",
    number: "06",
    series: "Al-Andalus",
    title: "Sous le turban du jeune émir",
    summary:
      "Dans le calme du patio, un jeune émir apprend auprès de son maître ce que signifie gouverner.",
    duration: "9 min 51 s",
    age: "6-14 ans",
    image: "/episodes/al-andalus-06.webp",
  },
];

export const EXTRACT_SECONDS = 90;
