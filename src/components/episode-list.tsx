"use client";

import Image from "next/image";
import Link from "next/link";
import { bookMeta, type Book } from "@/lib/catalogue";
import { Pause, Play } from "./icons";
import { usePlayer } from "./player";

// Épisodes d'une série, dans l'ordre (page série et fiche d'un épisode).
export function EpisodeList({ episodes, currentId }: { episodes: Book[]; currentId?: string }) {
  const { current, playing, toggle } = usePlayer();

  return (
    <ol className="divide-y divide-encre/8 overflow-hidden rounded-[1.75rem] border border-encre/8 bg-papier">
      {episodes.map((ep) => {
        const isCurrent = ep.id === currentId;
        const isPlaying = current?.id === ep.id && playing;
        return (
          <li
            key={ep.id}
            aria-current={isCurrent ? "page" : undefined}
            className={`grid grid-cols-[40px_64px_1fr_auto] items-center gap-4 p-4 sm:grid-cols-[48px_96px_1fr_auto] sm:gap-6 sm:px-6 ${
              isCurrent ? "bg-sable-soft/50" : ""
            }`}
          >
            <span className="text-[28px] leading-none font-light text-sable-ink tabular-nums sm:text-[32px]">
              {ep.number}
            </span>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={ep.image} alt="" fill sizes="96px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <Link
                href={`/livres/${ep.id}`}
                className="block text-[17px] leading-snug font-medium text-encre transition-colors hover:text-vert"
              >
                {ep.title}
              </Link>
              <p className="mt-1 text-[14px] text-encre/60">
                {isCurrent ? "Vous êtes ici" : bookMeta(ep)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle(ep)}
              aria-label={`${isPlaying ? "Mettre en pause l'extrait de" : "Écouter l'extrait de"} ${ep.title}`}
              className="flex size-11 items-center justify-center rounded-full bg-vert text-sable transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.97]"
            >
              {isPlaying ? <Pause width={16} height={16} /> : <Play width={16} height={16} className="translate-x-px" />}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
