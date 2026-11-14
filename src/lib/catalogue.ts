// Données de maquette du catalogue (cahier des charges §02 : catégorie > série > épisode).
// En production, tout vient du back-office de l'app ; seuls les titres publiés apparaissent.
//
// Sources :
// - titres : app HIKAYA (captures App Store et Drive) ou noms des fichiers d'illustration
// - durées : relevées dans l'app quand elles étaient visibles, sinon laissées vides
// - résumés des livres : écrits pour la maquette, à remplacer par ceux du back-office
// - narrateur : inconnu, laissé vide (le champ existe dans le design)

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Series = {
  id: string;
  title: string;
  summary: string;
  image: string;
  categoryId: string;
};

export type Book = {
  id: string; // sert aussi d'adresse : /livres/[id]
  title: string;
  summary: string;
  image: string;
  categoryId: string;
  author: string;
  narrator?: string;
  duration?: string;
  age: string;
  seriesId?: string;
  series?: string; // titre de la série, pour l'affichage
  number?: string; // numéro d'épisode
};

// Les 3 catégories et leurs descriptions viennent de « Textes_site_HIKAYA » (Drive).
export const categories: Category[] = [
  {
    id: "ages-de-l-islam",
    name: "Les Âges de l'islam",
    description:
      "Voyagez à travers les grandes époques de la civilisation musulmane. Au fil de nos séries, découvrez les événements, les sociétés et les personnages qui ont marqué leur temps.",
    image: "/episodes/al-andalus-04.webp",
  },
  {
    id: "grands-personnages",
    name: "Grands Personnages",
    description:
      "Rencontrez des femmes et des hommes aux parcours remarquables. Leurs découvertes, leurs choix et les épreuves qu'ils traversent invitent les enfants à explorer l'histoire et à réfléchir.",
    image: "/themes/grandes-figures.webp",
  },
  {
    id: "villes-de-l-islam",
    name: "Villes de l'Islam",
    description:
      "Entrez dans les villes qui ont vu grandir les savoirs, les arts et les échanges. Des bibliothèques aux palais, découvrez les lieux et les œuvres qui racontent la richesse de la civilisation musulmane.",
    image: "/themes/cites-merveilles.webp",
  },
];

export const series: Series[] = [
  {
    id: "al-andalus",
    title: "Al-Andalus",
    summary:
      "Au fil des épisodes, découvrez l'histoire d'Al-Andalus, ses personnages et les transformations qui ont marqué cette terre de la péninsule Ibérique. Une série à suivre dans l'ordre pour comprendre comment cette histoire se construit, d'une génération à l'autre.",
    image: "/episodes/al-andalus-01.webp",
    categoryId: "ages-de-l-islam",
  },
];

const AUTHOR = "Hikaya Médias";
const AGE = "6-14 ans";

const episode = (
  number: string,
  title: string,
  summary: string,
  duration?: string,
): Book => ({
  id: `al-andalus-${number}`,
  number,
  title,
  summary,
  duration,
  image: `/episodes/al-andalus-${number}.webp`,
  categoryId: "ages-de-l-islam",
  seriesId: "al-andalus",
  series: "Al-Andalus",
  author: AUTHOR,
  age: AGE,
});

const alAndalusEpisodes: Book[] = [
  episode(
    "01",
    "Tariq et la porte d'al-Andalus",
    "711. Tariq ibn Ziyad traverse le détroit. Devant lui, une terre inconnue et un choix sans retour.",
  ),
  episode(
    "02",
    "Les premiers pas d'un nouveau pouvoir",
    "Dans les rues de la ville, un nouveau pouvoir s'installe autour de deux promesses : sécurité et justice.",
    "9 min 27 s",
  ),
  episode(
    "03",
    "La fin d'un fragile équilibre",
    "Les rivalités fissurent les murs du palais. Le gouverneur doit trouver une issue avant qu'il ne soit trop tard.",
    "9 min 2 s",
  ),
  episode(
    "04",
    "Une nouvelle étoile sur Cordoue",
    "Au coucher du soleil, un prince venu de très loin découvre Cordoue pour la première fois.",
    "11 min 2 s",
  ),
  episode(
    "05",
    "Hisham et les promesses d'un nouvel empire",
    "Hisham réunit les savants sous les arcades : un empire se construit aussi par le savoir.",
    "11 min 4 s",
  ),
  episode(
    "06",
    "Sous le turban du jeune émir",
    "Dans le calme du patio, un jeune émir apprend auprès de son maître ce que signifie gouverner.",
    "9 min 51 s",
  ),
  episode(
    "07",
    "Les fils d'al-Dakhil",
    "Sur la terrasse du palais, les fils d'Abd al-Rahman regardent Cordoue. Lequel saura garder le royaume uni ?",
    "14 min 5 s",
  ),
  episode(
    "08",
    "Entre ombre et lumière",
    "Dans les couloirs du palais, un homme avance seul, un message à la main. Les ombres écoutent.",
  ),
  episode(
    "09",
    "La mer gronde aux frontières",
    "Une nuit d'orage, des navires venus du nord surgissent devant les murailles. La ville doit se défendre.",
  ),
];

const book = (b: Omit<Book, "author" | "age">): Book => ({ author: AUTHOR, age: AGE, ...b });

const standalone: Book[] = [
  book({
    id: "abd-al-rahman-al-dakhil",
    title: "Abd al-Rahman al-Dakhil, le prince sans palais",
    summary:
      "Seul survivant de sa famille, un jeune prince traverse déserts et mers jusqu'en al-Andalus, où il fonde un nouvel État à Cordoue.",
    duration: "12 min 5 s",
    image: "/livres/abd-al-rahman-al-dakhil.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "fatima-al-fihriyya",
    title: "Fatima al-Fihriyya",
    summary:
      "À Fès, au IXe siècle, une jeune femme consacre son héritage à bâtir al-Qarawiyyin, qui deviendra un grand lieu de savoir.",
    image: "/livres/fatima-al-fihriyya.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "sinan",
    title: "Sinan, le poète des dômes",
    summary:
      "Architecte de l'Empire ottoman, Sinan imagine des mosquées aux dômes immenses qui se dressent encore aujourd'hui.",
    image: "/themes/grandes-figures.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "salah-al-din",
    title: "Salah al-Din al-Ayyubi",
    summary:
      "En 1187, un sultan entre à Jérusalem. Ses adversaires eux-mêmes se souviendront de sa générosité.",
    image: "/livres/salah-al-din.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "malik-ibn-anas",
    title: "L'Imam de Médine",
    summary:
      "À Médine, Malik ibn Anas enseigne à ses élèves et rassemble son savoir dans un livre, al-Muwatta'.",
    image: "/livres/malik-ibn-anas.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "shajar-ad-durr",
    title: "Shajar ad-Durr",
    summary:
      "Au XIIIe siècle, en Égypte, une femme prend la tête du royaume dans un moment de grand danger.",
    image: "/livres/shajar-ad-durr.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "ibn-jubayr",
    title: "Ibn Jubayr",
    summary:
      "Parti d'al-Andalus pour le pèlerinage, un voyageur raconte les ports, les villes et les tempêtes de la Méditerranée.",
    image: "/livres/ibn-jubayr.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "ibn-khaldun",
    title: "Ibn Khaldun",
    summary:
      "Le savant qui voulait comprendre comment naissent et disparaissent les civilisations, et qui l'écrivit dans sa Muqaddima.",
    image: "/livres/ibn-khaldun.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "ibn-al-haytham",
    title: "Ibn al-Haytham",
    summary:
      "Dans une pièce plongée dans le noir, un savant observe un rayon de lumière et comprend comment fonctionne la vision.",
    image: "/livres/ibn-al-haytham.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "al-khwarizmi",
    title: "Al-Khwarizmi",
    summary:
      "À Bagdad, un savant invente des méthodes de calcul qui donneront naissance à l'algèbre et au mot « algorithme ».",
    image: "/themes/sagesse-science.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "banu-musa",
    title: "Les Trois Frères de Bagdad",
    summary:
      "Les Banu Musa, trois frères passionnés, inventent des machines ingénieuses qu'ils décrivent dans un célèbre livre.",
    image: "/livres/banu-musa.webp",
    categoryId: "grands-personnages",
  }),
  book({
    id: "fes",
    title: "Fès",
    summary:
      "Au cœur du Maroc, une ville de savants, d'artisans et de marchés, où l'on vient de loin pour apprendre.",
    image: "/themes/cites-merveilles.webp",
    categoryId: "villes-de-l-islam",
  }),
];

export const books: Book[] = [...alAndalusEpisodes, ...standalone];

/** Nouveautés : en production, triées par date de publication dans le back-office. */
export const newReleases = ["al-andalus-09", "ibn-jubayr", "al-andalus-08", "shajar-ad-durr"];

/** Sélection mise en avant sur l'accueil. */
export const homeSelection = [
  "abd-al-rahman-al-dakhil",
  "fatima-al-fihriyya",
  "al-andalus-01",
  "ibn-khaldun",
  "sinan",
  "fes",
];

export const getBook = (id: string) => books.find((b) => b.id === id);
export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getSeries = (id: string) => series.find((s) => s.id === id);
export const seriesEpisodes = (id: string) => books.filter((b) => b.seriesId === id);

/** Titres liés : même série d'abord, puis même catégorie. */
export function relatedBooks(b: Book, count = 4) {
  const sameCategory = books.filter((x) => x.id !== b.id && x.categoryId === b.categoryId && x.seriesId !== b.seriesId);
  const others = books.filter((x) => x.id !== b.id && x.categoryId !== b.categoryId);
  return [...sameCategory, ...others].slice(0, count);
}

/** Recherche insensible aux accents et aux translittérations . */
export const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[']/g, "")
    .toLowerCase();

export const booksByIds = (ids: string[]) =>
  ids.map((id) => getBook(id)).filter((b): b is Book => Boolean(b));

export const categoryBooks = (id: string) => books.filter((b) => b.categoryId === id && !b.seriesId);
export const categorySeries = (id: string) => series.filter((s) => s.categoryId === id);

/** Libellé court au-dessus du titre : série et épisode, sinon catégorie. */
export const bookLabel = (b: Book) =>
  b.series ? `${b.series} · Épisode ${b.number}` : (getCategory(b.categoryId)?.name ?? "");

/** « Histoire complète · 12 min 5 s » (texte des cartes fourni par HIKAYA). */
export const bookMeta = (b: Book) => (b.duration ? `Histoire complète · ${b.duration}` : `Pour les ${b.age}`);
