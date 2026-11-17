// Mode « page d'accueil seule » : utilisé pour le lien de validation envoyé au client.
// Activé par NEXT_PUBLIC_LP_ONLY=1 (fichier .env.production de la branche client-lp).
// Dans ce mode, les liens vers les autres pages renvoient à la section correspondante
// de l'accueil, et src/proxy.ts redirige toute autre adresse vers l'accueil.
export const LP_ONLY = process.env.NEXT_PUBLIC_LP_ONLY === "1";

/** Adresse d'un lien interne selon le mode. `null` : pas de page à montrer, on n'affiche pas de lien. */
export function siteHref(path: string): string | null {
  if (!LP_ONLY) return path;
  if (path === "/" || path.startsWith("/#") || path.startsWith("#") || path.startsWith("http")) return path;
  if (path.startsWith("/abonnements")) return "/#abonnements";
  if (path.startsWith("/catalogue")) return "/#histoires";
  if (path.startsWith("/series") || path.startsWith("/categories")) return "/#themes";
  if (path.startsWith("/qui-sommes-nous")) return "/#valeurs";
  return null;
}
