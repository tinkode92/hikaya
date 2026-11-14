// La page d'accueil met en avant la série Al-Andalus (épisodes 01 à 06).
import { seriesEpisodes, type Book } from "./catalogue";

export type Episode = Book;

export const alAndalus: Episode[] = seriesEpisodes("al-andalus").slice(0, 6);

export const EXTRACT_SECONDS = 90;
