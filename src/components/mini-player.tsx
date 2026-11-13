"use client";

import Image from "next/image";
import { EXTRACT_SECONDS } from "@/lib/episodes";
import { ArrowUpRight, Close, Pause, Play } from "./icons";
import { formatTime, usePlayer } from "./player";

// Mini lecteur persistant (cahier des charges §03) : reste en bas de l'écran pendant la navigation.
export function MiniPlayer() {
  const { current, playing, position, ended, toggle, seek, close } = usePlayer();
  if (!current) return null;
  const progress = position / EXTRACT_SECONDS;

  return (
    <div className="fixed inset-x-0 bottom-3 z-50 px-3 sm:bottom-5">
      <div className="animate-rise mx-auto flex max-w-[560px] items-center gap-3 rounded-full border border-white/8 bg-vert-deep p-2 text-white shadow-object">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
          <Image src={current.image} alt="" fill sizes="44px" className="object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          {ended ? (
            <a href="#abonnements" className="flex items-center gap-1 text-[14px] font-medium text-sable">
              La suite avec l&apos;abonnement <ArrowUpRight />
            </a>
          ) : (
            <p className="truncate text-[14px] font-medium">{current.title}</p>
          )}
          <div className="mt-2 flex items-center gap-3">
            <div
              className="relative h-1 flex-1 cursor-pointer rounded-full bg-white/15"
              onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                seek((e.clientX - r.left) / r.width);
              }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-sable"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <span className="text-[11px] text-white/55 tabular-nums">
              {formatTime(position)} / {formatTime(EXTRACT_SECONDS)}
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
          className="flex size-9 shrink-0 items-center justify-center rounded-full text-white/60 hover:text-white"
        >
          <Close width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
