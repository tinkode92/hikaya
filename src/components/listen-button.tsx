"use client";

import type { Book } from "@/lib/catalogue";
import { Pause, Play } from "./icons";
import { usePlayer } from "./player";

// Bouton qui lance l'extrait d'un livre dans le lecteur commun.
export function ListenButton({
  book,
  label = "Écouter l'extrait · 1 min 30",
  variant = "primary",
  className = "",
}: {
  book: Book;
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const { current, playing, toggle } = usePlayer();
  const isPlaying = current?.id === book.id && playing;
  const primary = variant === "primary";

  return (
    <button
      type="button"
      onClick={() => toggle(book)}
      className={`inline-flex h-14 items-center gap-3 rounded-full pr-7 pl-2 text-[17px] font-medium transition-[background-color,transform] active:scale-[0.98] ${
        primary
          ? "bg-vert text-white shadow-soft hover:bg-vert-deep"
          : "border border-encre/8 bg-papier text-vert hover:bg-white"
      } ${className}`}
    >
      <span
        className={`flex size-10 items-center justify-center rounded-full ${
          primary ? "bg-papier text-vert" : "bg-vert text-sable"
        }`}
      >
        {isPlaying ? <Pause width={16} height={16} /> : <Play width={16} height={16} className="translate-x-px" />}
      </span>
      <span className="grid text-center">
        <span className={`col-start-1 row-start-1 ${isPlaying ? "invisible" : ""}`}>{label}</span>
        <span className={`col-start-1 row-start-1 ${isPlaying ? "" : "invisible"}`}>
          En écoute
        </span>
      </span>
    </button>
  );
}
