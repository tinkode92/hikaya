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
          <span className="font-medium text-encre">{String(index + 1).padStart(2, "0")}</span> /{" "}
          {String(episodes.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={edges.start}
            aria-label="Épisodes précédents"
            className="flex size-12 items-center justify-center rounded-full border border-encre/8 bg-papier text-encre transition-colors hover:bg-white disabled:opacity-40"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={edges.end}
            aria-label="Épisodes suivants"
            className="flex size-12 items-center justify-center rounded-full border border-encre/8 bg-papier text-encre transition-colors hover:bg-white disabled:opacity-40"
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
    <article className="flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-[1.75rem] bg-vert text-white sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)]">
      {/* L'illustration reste propre : aucun texte posé dessus */}
      <div className="relative aspect-[4/3] shrink-0">
        <Image
          src={episode.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw"
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <span
          aria-hidden
          className="text-outline pointer-events-none absolute top-4 right-5 text-[64px] leading-none font-light tracking-[-0.04em]"
        >
          {episode.number}
        </span>
        <p className="text-[14px] font-medium text-sable">
          {episode.series} · Épisode {episode.number}
        </p>
        <h3 className="mt-2 pr-16 text-[24px] leading-[1.1] font-normal tracking-[-0.01em] text-balance italic">
          {episode.title}
        </h3>
        <p className="mt-2 text-[14px] text-white/70">
          {episode.duration ? `${episode.duration} · ${episode.age}` : episode.age}
        </p>
        <p className="mt-4 mb-6 text-[15px] leading-relaxed text-white/85">{episode.summary}</p>

        <button
          type="button"
          onClick={() => toggle(episode)}
          aria-label={`${isPlaying ? "Mettre en pause" : "Écouter l'extrait de"} ${episode.title}`}
          className="mt-auto inline-flex h-11 items-center gap-2 self-start rounded-full bg-papier pr-5 pl-2 text-[15px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-vert text-sable">
            {isPlaying ? <Pause width={13} height={13} /> : <Play width={13} height={13} className="translate-x-px" />}
          </span>
          {isPlaying ? "En écoute" : "Écouter l'extrait"}
        </button>
      </div>
    </article>
  );
}
