"use client";

import { useEffect, useMemo, useState } from "react";
import { books, categories, normalize, series } from "@/lib/catalogue";
import { BookCard } from "./book-card";
import { Close, Search } from "./icons";
import { SeriesCard } from "./series-card";

// Catalogue : recherche par titre ou auteur + filtre par catégorie (textes HIKAYA).
export function CatalogueBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  // Lien direct vers une catégorie : /catalogue#grands-personnages
  useEffect(() => {
    const read = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (categories.some((c) => c.id === id)) setCategory(id);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    // Sans recherche, les épisodes sont regroupés dans la carte de leur série
    return books.filter(
      (b) =>
        (!category || b.categoryId === category) &&
        (q ? normalize(`${b.title} ${b.author} ${b.series ?? ""}`).includes(q) : !b.seriesId),
    );
  }, [query, category]);

  const filtered = Boolean(query || category);
  const visibleSeries = series.filter((s) => !category || s.categoryId === category);
  const showSeries = !query && visibleSeries.length > 0;
  const reset = () => {
    setQuery("");
    setCategory("");
    history.replaceState(null, "", window.location.pathname);
  };

  const chip = (id: string, label: string) => (
    <button
      key={id || "all"}
      type="button"
      aria-pressed={category === id}
      onClick={() => {
        setCategory(id);
        history.replaceState(null, "", id ? `#${id}` : window.location.pathname);
      }}
      className="h-11 rounded-full border border-encre/8 bg-papier px-5 text-[15px] font-medium text-encre/75 transition-colors hover:border-vert/30 aria-pressed:border-vert aria-pressed:bg-vert aria-pressed:text-white"
    >
      {label}
    </button>
  );

  return (
    <section className="px-3 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
            {chip("", "Toutes les catégories")}
            {categories.map((c) => chip(c.id, c.name))}
          </div>
          <label className="relative block lg:w-[360px]">
            <span className="sr-only">Rechercher un titre ou un auteur</span>
            <Search className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-encre/50" />
            <input
              id="recherche"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un titre ou un auteur"
              className="h-12 w-full rounded-full border border-encre/8 bg-papier pr-4 pl-11 text-[15px] text-encre placeholder:text-encre/50 focus:border-vert/40 focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 text-[14px] text-encre/60">
          <p aria-live="polite">
            {query
              ? `${results.length} ${results.length > 1 ? "résultats" : "résultat"}`
              : `${results.length + (showSeries ? visibleSeries.length : 0)} titres`}
          </p>
          {filtered && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 font-medium text-vert transition-colors hover:text-vert-deep"
            >
              <Close width={16} height={16} />
              Effacer les filtres
            </button>
          )}
        </div>

        <h2 className="sr-only">Séries et histoires</h2>
        {showSeries && (
          <div className="mt-8 grid gap-4">
            {visibleSeries.map((s) => (
              <SeriesCard key={s.id} series={s} />
            ))}
          </div>
        )}

        {results.length > 0 || showSeries ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center rounded-[1.75rem] border border-encre/8 bg-papier px-6 py-16 text-center">
            <p className="max-w-[44ch] text-[18px] leading-relaxed text-encre/75">
              Aucune histoire ne correspond à votre recherche. Essayez un autre mot ou explorez le
              catalogue.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 inline-flex h-12 items-center rounded-full bg-vert px-6 text-[15px] font-medium text-white transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
            >
              Voir tous les livres audio
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
