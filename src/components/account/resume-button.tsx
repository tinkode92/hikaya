"use client";

import type { Book } from "@/lib/catalogue";
import { Pause, Play } from "../icons";
import { usePlayer } from "../player";

// « Reprendre » : relance l'histoire à la position enregistrée (synchronisée avec l'app).
export function ResumeButton({ book }: { book: Book }) {
  const { current, playing, toggle } = usePlayer();
  const isPlaying = current?.id === book.id && playing;
  return (
    <button
      type="button"
      onClick={() => toggle(book)}
      aria-label={`${isPlaying ? "Mettre en pause" : "Reprendre"} : ${book.title}`}
      className="inline-flex h-11 items-center gap-2 rounded-full bg-vert pr-5 pl-1.5 text-[15px] font-medium text-white transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-papier text-vert">
        {isPlaying ? <Pause width={14} height={14} /> : <Play width={14} height={14} className="translate-x-px" />}
      </span>
      <span className="grid">
        <span className={`col-start-1 row-start-1 ${isPlaying ? "invisible" : ""}`}>Reprendre</span>
        <span className={`col-start-1 row-start-1 ${isPlaying ? "" : "invisible"}`}>En écoute</span>
      </span>
    </button>
  );
}
