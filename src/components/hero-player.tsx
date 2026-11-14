"use client";

import Image from "next/image";
import { EXTRACT_SECONDS, type Episode } from "@/lib/episodes";
import { ArrowUpRight, Pause, Play } from "./icons";
import { formatTime, usePlayer } from "./player";
import { Waveform } from "./waveform";

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

  return (
    <div className="mx-auto w-full max-w-[600px] rounded-[1.75rem] border border-encre/8 bg-white p-3 text-left shadow-float">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative h-[84px] w-[64px] shrink-0 bg-sable-soft [clip-path:url(#arch)]">
          <Image src={episode.image} alt="" fill sizes="192px" className="object-cover object-[50%_40%]" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-medium text-sable-ink">
            Extrait · Épisode {episode.number}
          </p>
          <p className="line-clamp-2 text-[15px] leading-snug font-medium text-encre">{episode.title}</p>
          <div className="mt-1 flex items-center gap-3 sm:hidden">
            <Waveform progress={pos / EXTRACT_SECONDS} duration={EXTRACT_SECONDS} onSeek={seekHere} className="h-8 flex-1" />
            <span className="shrink-0 text-[12px] text-encre/55 tabular-nums">{formatTime(pos)}</span>
          </div>
        </div>

        <Waveform
          progress={pos / EXTRACT_SECONDS}
          duration={EXTRACT_SECONDS}
          onSeek={seekHere}
          className="hidden w-32 sm:flex"
        />

        <span className="hidden w-[72px] shrink-0 text-right text-[13px] text-encre/55 tabular-nums sm:block">
          {formatTime(pos)} / {formatTime(EXTRACT_SECONDS)}
        </span>

        <button
          type="button"
          onClick={() => toggle(episode)}
          aria-label={isPlaying ? "Mettre en pause l'extrait" : "Écouter l'extrait"}
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-vert text-sable transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.97]"
        >
          {isPlaying ? <Pause /> : <Play className="translate-x-px" />}
        </button>
      </div>

      {isCurrent && ended && (
        <a
          href="/abonnements"
          className="mt-3 flex items-center justify-between rounded-2xl bg-creme px-4 py-3 text-sm text-vert"
        >
          <span>
            <strong className="font-medium">Fin de l&apos;extrait.</strong> La suite est réservée aux
            abonnés.
          </span>
          <span className="inline-flex items-center gap-1 font-medium">
            Voir les offres <ArrowUpRight />
          </span>
        </a>
      )}
    </div>
  );
}
