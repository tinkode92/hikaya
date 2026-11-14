"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Book } from "@/lib/catalogue";
import { BookCard } from "./book-card";
import { ChevronLeft, ChevronRight } from "./icons";

export function EpisodeCarousel({ episodes }: { episodes: Book[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const step = () => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 16 : (el?.clientWidth ?? 0);
  };

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setIndex(Math.round(el.scrollLeft / step()));
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

  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * step(), behavior: "smooth" });

  return (
    <div>
      <div
        ref={track}
        onScroll={update}
        className="no-scrollbar -mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-3 px-3 sm:-mx-6 sm:scroll-px-6 sm:px-6 xl:mx-0 xl:scroll-px-0 xl:px-0"
      >
        {episodes.map((b) => (
          <BookCard
            key={b.id}
            book={b}
            tone="dark"
            className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)]"
          />
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
            aria-label="Livres précédents"
            className="flex size-12 items-center justify-center rounded-full border border-encre/8 bg-papier text-encre transition-colors hover:bg-white disabled:opacity-40"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={edges.end}
            aria-label="Livres suivants"
            className="flex size-12 items-center justify-center rounded-full border border-encre/8 bg-papier text-encre transition-colors hover:bg-white disabled:opacity-40"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
