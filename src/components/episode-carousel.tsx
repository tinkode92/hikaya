"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Episode } from "@/lib/episodes";
import { ChevronLeft, ChevronRight, Pause, Play } from "./icons";
import { usePlayer } from "./player";

export function EpisodeCarousel({ episodes }: { episodes: Episode[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : el.clientWidth;
    setIndex(Math.round(el.scrollLeft / step));
    setEdges({
      start: el.scrollLeft < 8,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 16 : el.clientWidth), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        onScroll={update}
        className="no-scrollbar -mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-3 px-3 sm:-mx-6 sm:scroll-px-6 sm:px-6 xl:mx-0 xl:scroll-px-0 xl:px-0"
      >
        {episodes.map((ep) => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-encre/45 tabular-nums">
          <span className="font-semibold text-encre">{String(index + 1).padStart(2, "0")}</span> /{" "}
          {String(episodes.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={edges.start}
            aria-label="Épisodes précédents"
            className="flex size-12 items-center justify-center rounded-full bg-papier text-encre shadow-sm transition hover:bg-white disabled:opacity-40"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={edges.end}
            aria-label="Épisodes suivants"
            className="flex size-12 items-center justify-center rounded-full bg-papier text-encre shadow-sm transition hover:bg-white disabled:opacity-40"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function EpisodeCard({ episode }: { episode: Episode }) {
  const { current, playing, toggle } = usePlayer();
  const isPlaying = current?.id === episode.id && playing;

  return (
    <article className="group relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-vert sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)]">
      <Image
        src={episode.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw"
        className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.06]"
      />
      {/* Voile vert de la charte : lisibilité du texte sur des illustrations très colorées */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(34_56_38_/_0.85)_0%,rgb(34_56_38_/_0.2)_30%,rgb(34_56_38_/_0.25)_42%,rgb(34_56_38_/_0.88)_66%,rgb(34_56_38_/_0.97)_100%)]" />

      <div className="relative flex h-full flex-col p-6 text-white">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-sable uppercase">
          {episode.series} · Épisode {episode.number}
        </p>
        <h3 className="mt-2 text-[26px] leading-[1.08] font-normal tracking-[-0.01em] text-balance italic">
          {episode.title}
        </h3>
        <p className="mt-2 text-[13px] text-white/70">
          {episode.duration} · {episode.age}
        </p>

        <div className="mt-auto">
          <p className="max-w-[30ch] text-[14px] leading-relaxed text-white/90">{episode.summary}</p>
          <button
            type="button"
            onClick={() => toggle(episode)}
            aria-label={`${isPlaying ? "Mettre en pause" : "Écouter l'extrait de"} ${episode.title}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 py-2.5 pr-5 pl-3 text-[14px] font-medium backdrop-blur-md transition-colors hover:bg-white/25"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-sable text-vert-deep">
              {isPlaying ? <Pause width={13} height={13} /> : <Play width={13} height={13} className="translate-x-px" />}
            </span>
            {isPlaying ? "En écoute" : "Écouter l'extrait"}
          </button>
        </div>

        <span
          aria-hidden
          className="text-outline pointer-events-none absolute right-5 bottom-1 text-[96px] leading-none font-extralight tracking-[-0.04em]"
        >
          {episode.number}
        </span>
      </div>
    </article>
  );
}
