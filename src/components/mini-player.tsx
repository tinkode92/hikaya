"use client";

import Image from "next/image";
import { EXTRACT_SECONDS } from "@/lib/episodes";
import { ArrowUpRight, Close, Pause, Play } from "./icons";
import { formatTime, usePlayer } from "./player";
import { Scrubber } from "./scrubber";
import { siteHref } from "@/lib/site-mode";

// Mini lecteur persistant (cahier des charges §03) : reste en bas de l'écran pendant la navigation.
export function MiniPlayer() {
  const { current, playing, position, ended, toggle, seek, close } = usePlayer();
  if (!current) return null;
  const progress = position / EXTRACT_SECONDS;

  return (
    <div className="fixed inset-x-0 bottom-3 z-50 px-3 sm:bottom-5">
      <div className="animate-rise mx-auto flex max-w-[560px] items-center gap-2 rounded-full sm:gap-3 border border-white/8 bg-vert-deep p-2 text-white shadow-object">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
          <Image src={current.image} alt="" fill sizes="132px" className="object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          {ended ? (
            <a href={siteHref("/abonnements")!} className="flex items-center gap-1 text-[14px] font-medium text-sable">
              La suite avec l&apos;abonnement <ArrowUpRight />
            </a>
          ) : (
            <p className="truncate text-[14px] font-medium">{current.title}</p>
          )}
          <div className="mt-1 flex items-center gap-3">
            <Scrubber progress={progress} duration={EXTRACT_SECONDS} onSeek={seek} className="flex-1" />
            <span className="shrink-0 text-[12px] text-white/60 tabular-nums">
              {formatTime(position)}
              <span className="hidden min-[400px]:inline"> / {formatTime(EXTRACT_SECONDS)}</span>
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => toggle(current)}
          aria-label={playing ? "Pause" : "Lecture"}
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sable text-vert-deep transition-[background-color,transform] hover:bg-sable-soft active:scale-[0.97]"
        >
          {playing ? <Pause /> : <Play className="translate-x-px" />}
        </button>
        <button
          type="button"
          onClick={close}
          aria-label="Fermer le lecteur"
          className="flex size-9 shrink-0 items-center justify-center rounded-full text-white/60 hover:text-white max-[359px]:size-8"
        >
          <Close width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
