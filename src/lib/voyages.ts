import { getBook, type Book } from "./catalogue";

// Carte des voyages : où et quand se passe chaque histoire.
// En production, deux champs à ajouter dans le back-office pour chaque livre : le lieu et l'année (ou le siècle).
// Dates : repères historiques établis ; « vers » quand la date est approximative.

export type Stop = { bookId: string; year: number; date: string };
export type Place = {
  id: string;
  name: string;
  region: string;
  label: "left" | "right" | "below" | "left-up" | "left-down"; // position du nom sur la carte
  stops: Stop[];
};

export const places: Place[] = [
  {
    id: "gibraltar",
    name: "Détroit de Gibraltar",
    region: "Al-Andalus",
    label: "left-down",
    stops: [{ bookId: "al-andalus-01", year: 711, date: "711" }],
  },
  {
    id: "cordoue",
    name: "Cordoue",
    region: "Al-Andalus",
    label: "right",
    stops: [
      { bookId: "al-andalus-02", year: 716, date: "vers 716" },
      { bookId: "al-andalus-03", year: 745, date: "vers 745" },
      { bookId: "al-andalus-04", year: 756, date: "756" },
      { bookId: "abd-al-rahman-al-dakhil", year: 756, date: "756" },
      { bookId: "al-andalus-07", year: 788, date: "788" },
      { bookId: "al-andalus-05", year: 788, date: "788" },
      { bookId: "al-andalus-06", year: 796, date: "796" },
      { bookId: "al-andalus-08", year: 805, date: "vers 805" },
    ],
  },
  {
    id: "seville",
    name: "Séville",
    region: "Al-Andalus",
    label: "left-up",
    stops: [{ bookId: "al-andalus-09", year: 844, date: "844" }],
  },
  {
    id: "fes",
    name: "Fès",
    region: "Maroc",
    label: "right",
    stops: [
      { bookId: "fes", year: 789, date: "789" },
      { bookId: "fatima-al-fihriyya", year: 859, date: "859" },
    ],
  },
  {
    id: "tunis",
    name: "Tunis",
    region: "Ifriqiya",
    label: "below",
    stops: [{ bookId: "ibn-khaldun", year: 1377, date: "1377" }],
  },
  {
    id: "le-caire",
    name: "Le Caire",
    region: "Égypte",
    label: "left",
    stops: [
      { bookId: "ibn-al-haytham", year: 1015, date: "vers 1015" },
      { bookId: "shajar-ad-durr", year: 1250, date: "1250" },
    ],
  },
  {
    id: "jerusalem",
    name: "Jérusalem",
    region: "Bilad al-Sham",
    label: "right",
    stops: [{ bookId: "salah-al-din", year: 1187, date: "1187" }],
  },
  {
    id: "medine",
    name: "Médine",
    region: "Hijaz",
    label: "right",
    stops: [{ bookId: "malik-ibn-anas", year: 770, date: "vers 770" }],
  },
  {
    id: "la-mecque",
    name: "La Mecque",
    region: "Hijaz",
    label: "right",
    stops: [{ bookId: "ibn-jubayr", year: 1184, date: "1184" }],
  },
  {
    id: "bagdad",
    name: "Bagdad",
    region: "Irak",
    label: "left",
    stops: [
      { bookId: "al-khwarizmi", year: 820, date: "vers 820" },
      { bookId: "banu-musa", year: 850, date: "vers 850" },
    ],
  },
  {
    id: "istanbul",
    name: "Istanbul",
    region: "Empire ottoman",
    label: "right",
    stops: [{ bookId: "sinan", year: 1557, date: "1557" }],
  },
];

// Toutes les histoires dans l'ordre du temps, pour la frise
export type TimelineItem = Stop & { book: Book; place: Place };
export const timeline: TimelineItem[] = places
  .flatMap((place) => place.stops.map((s) => ({ ...s, place, book: getBook(s.bookId)! })))
  .filter((t) => t.book)
  .sort((a, b) => a.year - b.year);

export const century = (year: number) => {
  const c = Math.floor((year - 1) / 100) + 1;
  const roman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI"][c];
  return `${roman}e siècle`;
};
