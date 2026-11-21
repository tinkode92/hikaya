"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { bookLabel } from "@/lib/catalogue";
import { century, places, timeline } from "@/lib/voyages";
import { CITY_POSITIONS, LAND_PATH, MAP_HEIGHT, MAP_WIDTH } from "@/lib/voyages-map";
import { Pause, Play } from "./icons";
import { usePlayer } from "./player";

// Carte des voyages : chaque histoire placée là où elle se passe, et dans le temps.
// Toucher une ville affiche ses histoires ; la frise en dessous suit le même choix.

const labelClass = {
  right: "left-full ml-1.5 top-1/2 -translate-y-1/2",
  left: "right-full mr-1.5 top-1/2 -translate-y-1/2",
  below: "top-full mt-0.5 left-1/2 -translate-x-1/2",
  "left-up": "right-full mr-1.5 top-1/2 -translate-y-[85%]",
  "left-down": "right-full mr-1.5 top-1/2 -translate-y-[15%]",
};

// Siècles présents dans le catalogue, pour les colonnes de la frise
const centuries = [...new Set(timeline.map((t) => century(t.year)))];

function PlayExtract({ bookId }: { bookId: string }) {
  const { current, playing, toggle } = usePlayer();
  const item = timeline.find((t) => t.book.id === bookId)!;
  const isPlaying = current?.id === bookId && playing;
  return (
    <button
      type="button"
      onClick={() => toggle(item.book)}
      aria-label={`${isPlaying ? "Mettre en pause l'extrait de" : "Écouter l'extrait de"} ${item.book.title}`}
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sable text-vert-deep transition-[background-color,transform] hover:bg-sable-soft active:scale-95"
    >
      {isPlaying ? <Pause width={15} height={15} /> : <Play width={15} height={15} className="translate-x-px" />}
    </button>
  );
}

export function VoyagesMap() {
  const [placeId, setPlaceId] = useState("cordoue");
  const place = places.find((p) => p.id === placeId)!;
  const stops = timeline.filter((t) => t.place.id === placeId);

  return (
    <div className="overflow-hidden rounded-[2.25rem] bg-vert-deep text-white">
      <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
        {/* Carte */}
        <div className="relative p-3 sm:p-5 lg:flex lg:flex-col lg:justify-center lg:p-6">
          {/* Mobile : les villes en boutons, plus faciles à toucher que les points */}
          <div className="no-scrollbar -mx-3 mb-3 flex gap-2 overflow-x-auto px-3 sm:-mx-5 sm:px-5 lg:hidden">
            {places.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlaceId(p.id)}
                aria-pressed={p.id === placeId}
                className={`h-10 shrink-0 rounded-full px-4 text-[14px] font-medium transition-colors ${
                  p.id === placeId ? "bg-sable text-vert-deep" : "bg-white/10 text-white/85"
                }`}
              >
                {p.name.replace("Détroit de ", "")}
              </button>
            ))}
          </div>

          <div className="relative w-full" style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}>
            <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="absolute inset-0 size-full" aria-hidden>
              <path d={LAND_PATH} className="fill-vert" stroke="var(--color-sable)" strokeOpacity={0.35} strokeWidth={1} />
              <g className="fill-white/30 text-[15px] italic" style={{ letterSpacing: "0.04em" }}>
                <text x={330} y={290}>Mer Méditerranée</text>
                <text x={24} y={330}>Océan</text>
                <text x={24} y={350}>Atlantique</text>
                <text x={768} y={392} transform="rotate(59 768 392)">Mer Rouge</text>
              </g>
            </svg>

            {places.map((p) => {
              const pos = CITY_POSITIONS[p.id];
              const active = p.id === placeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlaceId(p.id)}
                  aria-pressed={active}
                  aria-label={`${p.name} : ${p.stops.length} histoire${p.stops.length > 1 ? "s" : ""}`}
                  className="group absolute flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%`, zIndex: active ? 2 : 1 }}
                >
                  {active && <span className="absolute size-7 animate-ping rounded-full bg-sable/40 motion-reduce:animate-none" />}
                  <span
                    className={`relative flex items-center justify-center rounded-full font-medium transition-[width,height,background-color] ${
                      active ? "size-6 bg-sable text-[11px] text-vert-deep" : "size-3.5 bg-sable/85 group-hover:size-5"
                    } `}
                  >
                    {active && p.stops.length > 1 ? p.stops.length : null}
                  </span>
                  <span
                    className={`pointer-events-none absolute whitespace-nowrap text-[13px] font-medium max-lg:hidden ${labelClass[p.label]} ${
                      active ? "text-sable" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {p.name.replace("Détroit de ", "")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Histoires du lieu choisi */}
        <div className="border-t border-white/10 p-6 sm:p-8 lg:border-t-0 lg:border-l" aria-live="polite">
          <p className="text-[14px] font-medium text-sable">{place.region}</p>
          <h3 className="mt-1 text-[clamp(1.8rem,2.6vw,2.4rem)] leading-tight font-light tracking-[-0.02em] italic">
            {place.name}
          </h3>
          <p className="mt-1 text-[14px] text-white/60">
            {stops.length} histoire{stops.length > 1 ? "s" : ""} · {[...new Set(stops.map((s) => century(s.year)))].join(", ")}
          </p>

          <ul className="mt-6 grid max-h-[440px] grid-cols-[minmax(0,1fr)] gap-2 overflow-y-auto">
            {stops.map((s) => (
              <li key={s.book.id} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-2.5 pr-3">
                <Link href={`/livres/${s.book.id}`} tabIndex={-1} aria-hidden className="relative size-14 shrink-0 overflow-hidden rounded-xl">
                  <Image src={s.book.image} alt="" fill sizes="56px" className="object-cover" />
                </Link>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] text-sable">
                    {s.date} · {bookLabel(s.book)}
                  </p>
                  <Link href={`/livres/${s.book.id}`} className="mt-0.5 block truncate text-[15px] font-medium hover:text-sable">
                    {s.book.title}
                  </Link>
                </div>
                <PlayExtract bookId={s.book.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Frise du temps */}
      <div className="border-t border-white/10 px-3 pt-6 pb-6 sm:px-5 lg:px-6">
        <p className="px-3 text-[14px] font-medium text-sable sm:px-0">La frise du temps</p>
        <ol className="no-scrollbar mt-4 flex gap-3 overflow-x-auto px-3 pb-1 sm:px-0">
          {centuries.map((c) => (
            <li key={c} className="w-[200px] shrink-0 lg:w-auto lg:min-w-0 lg:flex-1">
              <p className="border-b border-white/15 pb-2 text-[13px] font-medium text-white/70">{c}</p>
              <ul className="mt-3 grid grid-cols-[minmax(0,1fr)] gap-1.5">
                {timeline
                  .filter((t) => century(t.year) === c)
                  .map((t) => {
                    const active = t.place.id === placeId;
                    return (
                      <li key={t.book.id}>
                        <button
                          type="button"
                          onClick={() => setPlaceId(t.place.id)}
                          className={`w-full rounded-xl px-3 py-2 text-left transition-colors ${
                            active ? "bg-sable text-vert-deep" : "bg-white/[0.06] text-white/85 hover:bg-white/10"
                          }`}
                        >
                          <span className={`block text-[12px] ${active ? "text-vert-deep/70" : "text-sable"}`}>
                            {t.date} · {t.place.name.replace("Détroit de ", "")}
                          </span>
                          <span className="mt-0.5 block truncate text-[14px] font-medium">{t.book.title}</span>
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

