"use client";

import Image from "next/image";
import Link from "next/link";
import { EXTRACT_SECONDS, type Episode } from "@/lib/episodes";
import { ArrowUpRight, Pause, Play } from "./icons";
import { formatTime, usePlayer } from "./player";
import { Waveform } from "./waveform";
import { siteHref } from "@/lib/site-mode";

export function HeroPlayer({ episode }: { episode: Episode }) {
  const { current, playing, position, ended, toggle, seek } = usePlayer();
  const isCurrent = current?.id === episode.id;
  const pos = isCurrent ? position : 0;
  const isPlaying = isCurrent && playing;
  // On peut se placer dans l'extrait avant même de l'avoir lancé
  const seekHere = (ratio: number) => {
    if (!isCurrent) toggle(episode);
    seek(ratio);
  };

  const atEnd = isCurrent && ended;

  // À la fin de l'extrait, le message prend la place de la forme d'onde, à la même taille :
  // le lecteur ne change jamais de hauteur, donc rien ne bouge autour (personnages, sections).
  return (
    <div className="mx-auto w-full max-w-[600px] rounded-[1.75rem] border border-encre/8 bg-white p-3 text-left shadow-float">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative h-[72px] w-[56px] shrink-0 bg-sable-soft [clip-path:url(#arch)] sm:h-[84px] sm:w-[64px]">
          <Image src={episode.image} alt="" fill sizes="192px" className="object-cover object-[50%_40%]" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-medium text-sable-ink">
            {atEnd ? (
              "Fin de l'extrait"
            ) : (
              <>
                <span className="hidden min-[380px]:inline">Extrait · </span>Épisode {episode.number}
              </>
            )}
          </p>
          <p className="line-clamp-3 text-[15px] leading-snug font-medium text-encre sm:line-clamp-2">{episode.title}</p>
        </div>

        <div className="hidden h-11 w-[216px] shrink-0 items-center gap-4 sm:flex">
          {atEnd ? (
            <Link
              href={siteHref("/abonnements")!}
              className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-creme text-[15px] font-medium text-vert transition-colors hover:bg-sable-soft"
            >
              Écouter la suite
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : (
            <>
              <Waveform
                progress={pos / EXTRACT_SECONDS}
                duration={EXTRACT_SECONDS}
                onSeek={seekHere}
                live={isPlaying}
                className="w-32 shrink-0"
              />
              <span className="w-[72px] shrink-0 text-right text-[13px] text-encre/55 tabular-nums">
                {formatTime(pos)} / {formatTime(EXTRACT_SECONDS)}
              </span>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggle(episode)}
          aria-label={isPlaying ? "Mettre en pause l'extrait" : atEnd ? "Réécouter l'extrait" : "Écouter l'extrait"}
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-vert text-sable transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.97] sm:size-14"
        >
          {isPlaying ? <Pause /> : <Play className="translate-x-px" />}
        </button>
      </div>

      {/* Mobile : la forme d'onde a sa propre ligne, de hauteur fixe */}
      <div className="mt-3 flex h-9 min-w-0 items-center gap-3 px-1 sm:hidden">
        {atEnd ? (
          <Link
            href={siteHref("/abonnements")!}
            className="group inline-flex h-9 w-full items-center justify-center gap-2 rounded-full bg-creme text-[14px] font-medium whitespace-nowrap text-vert"
          >
            Écouter la suite
            <ArrowUpRight />
          </Link>
        ) : (
          <>
            <Waveform progress={pos / EXTRACT_SECONDS} duration={EXTRACT_SECONDS} onSeek={seekHere}
                live={isPlaying} className="h-9 min-w-0 flex-1" />
            <span className="shrink-0 text-[12px] text-encre/60 tabular-nums">
              {formatTime(pos)} / {formatTime(EXTRACT_SECONDS)}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
