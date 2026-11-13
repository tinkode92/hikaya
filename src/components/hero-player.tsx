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

  return (
    <div className="mx-auto w-full max-w-[680px] rounded-[1.75rem] border border-vert/10 bg-white p-2.5 text-left shadow-[0_20px_50px_-24px_rgb(45_71_49_/_0.35)]">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative h-[68px] w-[54px] shrink-0 bg-sable-soft [clip-path:url(#arch)]">
          <Image src={episode.image} alt="" fill sizes="60px" className="object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-sable-ink uppercase">
            Extrait · Ép. {episode.number}
          </p>
          <p className="truncate text-[15px] font-medium text-encre">{episode.title}</p>
          <Waveform
            progress={pos / EXTRACT_SECONDS}
            onSeek={isCurrent ? seek : undefined}
            className="mt-1 h-6 sm:hidden"
          />
        </div>

        <Waveform
          progress={pos / EXTRACT_SECONDS}
          onSeek={isCurrent ? seek : undefined}
          className="hidden w-40 sm:flex"
        />

        <span className="hidden w-[78px] shrink-0 text-right text-[13px] text-encre/55 tabular-nums sm:block">
          {formatTime(pos)} / {formatTime(EXTRACT_SECONDS)}
        </span>

        <button
          type="button"
          onClick={() => toggle(episode)}
          aria-label={isPlaying ? "Mettre en pause l'extrait" : "Écouter l'extrait"}
          className="group relative flex size-14 shrink-0 items-center justify-center rounded-full bg-vert text-sable transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          {isPlaying && (
            <span className="absolute inset-0 animate-ping rounded-full bg-vert/25 [animation-duration:2s]" />
          )}
          {isPlaying ? <Pause /> : <Play className="translate-x-px" />}
        </button>
      </div>

      {isCurrent && ended && (
        <a
          href="#abonnements"
          className="mt-2.5 flex items-center justify-between rounded-2xl bg-creme px-4 py-3 text-sm text-vert"
        >
          <span>
            <strong className="font-semibold">Fin de l&apos;extrait.</strong> La suite est réservée aux
            abonnés.
          </span>
          <span className="inline-flex items-center gap-1 font-semibold">
            Voir les offres <ArrowUpRight />
          </span>
        </a>
      )}
    </div>
  );
}
