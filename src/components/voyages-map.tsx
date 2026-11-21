"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { bookLabel } from "@/lib/catalogue";
import { century, places, timeline } from "@/lib/voyages";
import { GRATICULE_PATH, LAND_PATH, MAP_HEIGHT, MAP_WIDTH, SEA_LABELS, projectPoint } from "@/lib/voyages-map";
import { ArrowUpRight, ChevronLeft, ChevronRight, Close, Pause, Play } from "./icons";
import { usePlayer } from "./player";

// Carte des voyages : chaque histoire placée là où elle se passe, et dans le temps.
// La frise (en haut) filtre par époque, la carte filtre par ville ; le panneau montre les histoires
// qui correspondent aux deux. Les flèches du panneau parcourent les villes dans l'ordre du temps.

const shortName = (name: string) => name.replace("Détroit de ", "");

const labelClass = {
  right: "left-full ml-2 top-1/2 -translate-y-1/2",
  left: "right-full mr-2 top-1/2 -translate-y-1/2",
  below: "top-full mt-1 left-1/2 -translate-x-1/2",
  "left-up": "right-full mr-2 top-1/2 -translate-y-[85%]",
  "left-down": "right-full mr-2 top-1/2 -translate-y-[15%]",
};

// Halo couleur papier derrière les noms de villes, pour qu'ils restent lisibles sur les côtes
const halo = "[text-shadow:0_0_2px_var(--color-papier),0_0_4px_var(--color-papier),0_0_8px_var(--color-papier)]";

// Villes dans l'ordre de leur première histoire, pour les flèches précédent / suivant
const placesByTime = [...places].sort(
  (a, b) => Math.min(...a.stops.map((s) => s.year)) - Math.min(...b.stops.map((s) => s.year)),
);

// Siècles présents dans le catalogue
const eras = [...new Set(timeline.map((t) => century(t.year)))].map((label) => ({
  label,
  short: label.replace(" siècle", ""),
  count: timeline.filter((t) => century(t.year) === label).length,
}));

function PlayExtract({ bookId }: { bookId: string }) {
  const { current, playing, toggle } = usePlayer();
  const item = timeline.find((t) => t.book.id === bookId)!;
  const isPlaying = current?.id === bookId && playing;
  return (
    <button
      type="button"
      onClick={() => toggle(item.book)}
      aria-label={`${isPlaying ? "Mettre en pause l'extrait de" : "Écouter l'extrait de"} ${item.book.title}`}
      className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-vert text-papier transition-[background-color,transform] hover:bg-vert-deep active:scale-95"
    >
      {isPlaying ? <Pause width={15} height={15} /> : <Play width={15} height={15} className="translate-x-px" />}
    </button>
  );
}

function Compass() {
  return (
    <svg viewBox="0 0 60 60" className="size-full" aria-hidden>
      <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeOpacity=".5" strokeDasharray="2 4" />
      <path d="M30 6 34 30 30 54 26 30Z" fill="currentColor" fillOpacity=".25" />
      <path d="M30 6 34 30H26Z" fill="currentColor" fillOpacity=".8" />
      <path d="M6 30 30 27V33Z M54 30 30 27V33Z" fill="currentColor" fillOpacity=".35" />
      <text x="30" y="4" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="600">N</text>
    </svg>
  );
}

export function VoyagesMap() {
  const [placeId, setPlaceId] = useState<string | null>("cordoue");
  const [era, setEra] = useState<string | null>(null);

  const place = places.find((p) => p.id === placeId) ?? null;
  const inEra = (year: number) => !era || century(year) === era;
  const placeInEra = (id: string) => places.find((p) => p.id === id)!.stops.some((s) => inEra(s.year));

  const stories = useMemo(
    () => timeline.filter((t) => inEra(t.year) && (!placeId || t.place.id === placeId)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [era, placeId],
  );

  const chooseEra = (label: string | null) => {
    setEra(label);
    if (!label && !placeId) setPlaceId("cordoue");
    // La ville choisie n'a pas d'histoire à cette époque : on montre toutes les villes de l'époque
    if (label && placeId && !places.find((p) => p.id === placeId)!.stops.some((s) => century(s.year) === label)) setPlaceId(null);
  };

  const choosePlace = (id: string) => {
    setPlaceId(id);
    if (era && !places.find((p) => p.id === id)!.stops.some((s) => century(s.year) === era)) setEra(null);
  };

  const step = (dir: 1 | -1) => {
    const list = placesByTime.filter((p) => placeInEra(p.id));
    const i = list.findIndex((p) => p.id === placeId);
    const next = list[(i + dir + list.length) % list.length];
    setPlaceId(next.id);
  };

  const cover = place?.image ?? stories[0]?.book.image ?? "/themes/cites-merveilles.webp";
  const centuriesShown = [...new Set(stories.map((s) => century(s.year).replace(" siècle", "")))];

  return (
    <div className="rounded-[2.25rem] bg-papier p-3 sm:p-4">
      {/* Frise du temps : filtre par époque */}
      <div className="px-3 pt-4 pb-2 sm:px-5 sm:pt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <p className="text-[15px] font-medium text-sable-ink">La frise du temps</p>
          <p className="text-[14px] text-encre/55">Choisissez une époque, puis une ville sur la carte</p>
        </div>

        <div className="no-scrollbar -mx-3 mt-4 overflow-x-auto px-3 sm:-mx-5 sm:px-5">
          <ol className="relative flex min-w-[640px] items-start">
            {/* Le fil de la frise */}
            <span aria-hidden className="absolute top-[27px] right-6 left-6 h-px bg-[repeating-linear-gradient(90deg,var(--color-sable)_0_6px,transparent_6px_12px)]" />
            {[{ label: null, short: "Toutes", count: timeline.length }, ...eras].map((e) => {
              const active = era === e.label;
              return (
                <li key={e.short} className="relative flex-1">
                  <button
                    type="button"
                    onClick={() => chooseEra(e.label)}
                    aria-pressed={active}
                    className="group flex w-full flex-col items-center gap-2 rounded-2xl px-1 py-1 text-center"
                  >
                    <span className="text-[12px] text-encre/50 tabular-nums">
                      {e.count} histoire{e.count > 1 ? "s" : ""}
                    </span>
                    <span
                      className={`relative flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-[var(--ease-out-soft)] ${
                        active
                          ? "size-5 border-vert bg-vert shadow-[0_0_0_6px_rgb(45_71_49_/_0.12)]"
                          : "size-3.5 border-sable bg-papier group-hover:size-4 group-hover:border-vert"
                      }`}
                    />
                    <span
                      className={`text-[clamp(1rem,1.6vw,1.35rem)] leading-none font-light tracking-[-0.01em] italic transition-colors ${
                        active ? "text-vert" : "text-encre/60 group-hover:text-vert"
                      }`}
                    >
                      {e.short}
                      {e.label && <span className="text-[0.7em]"> s.</span>}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[minmax(0,1fr)] gap-3 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)]">
        {/* Carte */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-[1.75rem] bg-creme lg:min-h-[580px]">
          {/* Mobile : les villes en boutons, plus faciles à toucher que les points */}
          <div className="no-scrollbar flex gap-2 self-stretch overflow-x-auto px-3 pt-3 lg:hidden">
            {placesByTime.map((p) => {
              const active = p.id === placeId;
              const dim = !placeInEra(p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => choosePlace(p.id)}
                  aria-pressed={active}
                  className={`h-10 shrink-0 rounded-full px-4 text-[14px] font-medium transition-colors ${
                    active ? "bg-vert text-papier" : dim ? "bg-papier/60 text-encre/35" : "bg-papier text-vert"
                  }`}
                >
                  {shortName(p.name)}
                </button>
              );
            })}
          </div>

          <div className="relative w-full" style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}>
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="absolute inset-0 size-full [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent),linear-gradient(transparent,#000_8%,#000_92%,transparent)] [mask-composite:intersect]"
              aria-hidden
            >
              <path d={GRATICULE_PATH} fill="none" stroke="var(--color-sable)" strokeOpacity={0.45} strokeDasharray="2 6" />
              <path d={LAND_PATH} fill="var(--color-sable-soft)" stroke="var(--color-sable)" strokeWidth={1.2} />
              <g fill="var(--color-sable-ink)" fillOpacity={0.55} fontStyle="italic" fontSize={15} letterSpacing="0.06em">
                {SEA_LABELS.map((l) => (
                  <text key={l.name} x={l.x} y={l.y} transform={l.rotate ? `rotate(${l.rotate} ${l.x} ${l.y})` : undefined}>
                    {l.name}
                  </text>
                ))}
              </g>
            </svg>

            <div className="absolute bottom-[6%] left-[5%] size-[7%] max-w-14 min-w-9 text-sable-ink" aria-hidden>
              <Compass />
            </div>

            {places.map((p) => {
              const pos = projectPoint(p.lon, p.lat);
              const active = p.id === placeId;
              const dim = !placeInEra(p.id);
              const count = p.stops.filter((s) => inEra(s.year)).length;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => choosePlace(p.id)}
                  aria-pressed={active}
                  aria-label={`${p.name} : ${p.stops.length} histoire${p.stops.length > 1 ? "s" : ""}`}
                  className={`group absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-opacity duration-300 ${
                    dim ? "opacity-35" : ""
                  }`}
                  // Les petits points restent au-dessus du point actif : les villes voisines (Cordoue, Séville) restent cliquables
                  style={{ left: `${pos.x}%`, top: `${pos.y}%`, zIndex: active ? 2 : 3 }}
                >
                  {active && (
                    <span className="pointer-events-none absolute size-9 animate-ping rounded-full bg-vert/25 [animation-duration:1.8s] motion-reduce:animate-none" />
                  )}
                  <span
                    className={`relative flex items-center justify-center rounded-full font-semibold tabular-nums transition-all duration-300 ease-[var(--ease-out-soft)] ${
                      active
                        ? "size-7 bg-vert text-[12px] text-sable shadow-[0_6px_16px_-6px_rgb(34_56_38_/_0.8)]"
                        : "size-3.5 bg-vert ring-[3px] ring-papier group-hover:size-5"
                    }`}
                  >
                    {active ? count || p.stops.length : null}
                  </span>
                  <span
                    className={`pointer-events-none absolute flex flex-col whitespace-nowrap max-lg:hidden ${halo} ${labelClass[p.label]} ${
                      p.label.startsWith("left") ? "items-end text-right" : p.label === "below" ? "items-center" : "items-start"
                    }`}
                  >
                    <span className={`text-[13px] font-semibold ${active ? "text-vert" : "text-encre/75 group-hover:text-vert"}`}>
                      {shortName(p.name)}
                    </span>
                    {/* Nom arabe : sur la ville choisie et au survol, pour ne pas surcharger la carte */}
                    <span
                      lang="ar"
                      dir="rtl"
                      className={`font-arabic -mt-0.5 text-[15px] leading-tight text-sable-ink ${active ? "" : "hidden group-hover:block"}`}
                    >
                      {p.arabic}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panneau des histoires */}
        <aside className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white lg:h-0 lg:min-h-full" aria-live="polite">
          <div className="relative aspect-[16/5.5] shrink-0 overflow-hidden">
            <Image key={cover} src={cover} alt="" fill sizes="(min-width: 1024px) 34vw, 100vw" className="animate-rise object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(34_56_38_/_0.05)_30%,rgb(34_56_38_/_0.88))]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-sable">
                  {place ? place.region : "Toutes les villes"} · {centuriesShown.map((c) => `${c} s.`).join(", ")}
                </p>
                <h3 className="mt-1 flex min-w-0 items-baseline gap-3">
                  <span className="truncate text-[clamp(1.7rem,2.4vw,2.2rem)] leading-tight font-light tracking-[-0.02em] italic">
                    {place ? place.name : era}
                  </span>
                  {place && (
                    <span lang="ar" dir="rtl" className="font-arabic shrink-0 text-[clamp(1.4rem,2vw,1.8rem)] leading-none text-sable">
                      {place.arabic}
                    </span>
                  )}
                </h3>
              </div>
              {place && (
                <div className="flex shrink-0 gap-1.5">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Ville précédente dans le temps"
                    className="flex size-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors hover:bg-white/25"
                  >
                    <ChevronLeft width={18} height={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Ville suivante dans le temps"
                    className="flex size-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors hover:bg-white/25"
                  >
                    <ChevronRight width={18} height={18} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex h-12 shrink-0 items-center justify-between gap-3 px-5 pt-3 text-[14px] text-encre/60">
            <span>
              {stories.length} histoire{stories.length > 1 ? "s" : ""}
              {era && place ? ` · ${era}` : ""}
            </span>
            {(era || !place) && (
              <button
                type="button"
                onClick={() => {
                  setEra(null);
                  setPlaceId(place?.id ?? "cordoue");
                }}
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-medium text-vert hover:bg-creme"
              >
                <Close width={13} height={13} />
                Toutes les époques
              </button>
            )}
          </div>

          <ul className="grid h-[320px] grid-cols-[minmax(0,1fr)] content-start gap-2 overflow-y-auto lg:h-auto lg:min-h-0 lg:flex-1 p-3 pt-3 pb-6 [mask-image:linear-gradient(#000_calc(100%-28px),transparent)]">
            {stories.map((s) => (
              <li key={s.book.id} className="group relative flex items-center gap-3 rounded-2xl border border-encre/6 bg-papier p-2.5 pr-3 transition-colors hover:border-vert/20 hover:bg-creme">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                  <Image src={s.book.image} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] text-sable-ink">
                    <span className="font-semibold">{s.date}</span>
                    {!place && ` · ${shortName(s.place.name)}`} · {bookLabel(s.book)}
                  </p>
                  {/* Toute la carte mène à la fiche ; le bouton lecture reste au-dessus */}
                  <Link
                    href={`/livres/${s.book.id}`}
                    className="mt-0.5 line-clamp-2 text-[15px] leading-snug font-medium text-encre after:absolute after:inset-0 after:content-[''] group-hover:text-vert"
                  >
                    {s.book.title}
                  </Link>
                </div>
                <PlayExtract bookId={s.book.id} />
              </li>
            ))}
          </ul>

          <Link
            href="/catalogue"
            className="group mx-3 mb-3 inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-encre/8 text-[15px] font-medium text-vert transition-colors hover:bg-creme"
          >
            Tout le catalogue
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
