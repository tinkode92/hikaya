"use client";

import Image from "next/image";
import { MaybeLink } from "./maybe-link";
import { bookLabel, bookMeta, type Book } from "@/lib/catalogue";
import { Pause, Play } from "./icons";
import { usePlayer } from "./player";
import { siteHref } from "@/lib/site-mode";

// Carte de livre audio (textes fournis par HIKAYA : titre, « Histoire complète · durée »,
// « Écouter l'extrait · 1 min 30 »). Pour un abonné, le dev affichera « Écouter » ou « Reprendre l'écoute ».
export function BookCard({
  book,
  tone = "light",
  className = "",
}: {
  book: Book;
  tone?: "light" | "dark";
  className?: string;
}) {
  const { current, playing, toggle } = usePlayer();
  const isPlaying = current?.id === book.id && playing;
  const dark = tone === "dark";
  const href = siteHref(`/livres/${book.id}`);

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-[1.75rem] ${
        dark ? "bg-vert text-white" : "border border-encre/8 bg-papier text-encre"
      } ${className}`}
    >
      <MaybeLink href={href} tabIndex={-1} aria-hidden className="relative block aspect-[4/3] shrink-0 overflow-hidden">
        <Image
          src={book.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw"
          className="object-cover"
        />
      </MaybeLink>

      <div className="relative flex flex-1 flex-col p-6">
        {dark && book.number && (
          <span
            aria-hidden
            className="text-outline pointer-events-none absolute top-4 right-5 text-[64px] leading-none font-light tracking-[-0.04em]"
          >
            {book.number}
          </span>
        )}
        <p className={`text-[14px] font-medium ${dark ? "text-sable" : "text-sable-ink"}`}>{bookLabel(book)}</p>
        <h3
          className={`mt-2 text-[22px] leading-[1.12] font-normal tracking-[-0.01em] text-balance italic ${
            dark && book.number ? "pr-16" : ""
          }`}
        >
          <MaybeLink href={href} className={`transition-colors ${dark ? "hover:text-sable" : "hover:text-vert"}`}>
            {book.title}
          </MaybeLink>
        </h3>
        <p className={`mt-2 mb-6 text-[14px] ${dark ? "text-white/70" : "text-encre/60"}`}>{bookMeta(book)}</p>

        <button
          type="button"
          onClick={() => toggle(book)}
          aria-label={`${isPlaying ? "Mettre en pause l'extrait de" : "Écouter l'extrait de"} ${book.title}`}
          className={`mt-auto inline-flex h-11 items-center gap-2 self-start rounded-full pr-5 pl-2 text-[15px] font-medium transition-[background-color,transform] active:scale-[0.98] ${
            dark ? "bg-papier text-vert-deep hover:bg-white" : "bg-vert text-white hover:bg-vert-deep"
          }`}
        >
          <span
            className={`flex size-8 items-center justify-center rounded-full ${
              dark ? "bg-vert text-sable" : "bg-papier text-vert"
            }`}
          >
            {isPlaying ? <Pause width={13} height={13} /> : <Play width={13} height={13} className="translate-x-px" />}
          </span>
          <span className="grid text-left">
            <span className={`col-start-1 row-start-1 ${isPlaying ? "invisible" : ""}`}>Écouter l&apos;extrait · 1 min 30</span>
            <span className={`col-start-1 row-start-1 ${isPlaying ? "" : "invisible"}`}>
              En écoute
            </span>
          </span>
        </button>
      </div>
    </article>
  );
}
