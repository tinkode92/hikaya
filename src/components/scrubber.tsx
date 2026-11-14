"use client";

import { formatTime } from "./player";
import { useScrub } from "./use-scrub";

// Barre de progression qu'on voit clairement manipulable : piste épaisse, poignée ronde,
// aperçu au survol, glisser au doigt ou à la souris, flèches du clavier.
export function Scrubber({
  progress,
  duration,
  onSeek,
  tone = "dark",
  className = "",
}: {
  progress: number;
  duration: number;
  onSeek?: (ratio: number) => void;
  tone?: "light" | "dark";
  className?: string;
}) {
  const { trackRef, dragging, hover, handlers } = useScrub({ progress, duration, onSeek });
  const dark = tone === "dark";
  const pct = `${progress * 100}%`;

  return (
    <div
      ref={trackRef}
      role="slider"
      tabIndex={onSeek ? 0 : -1}
      aria-label="Position dans l'extrait"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(progress * duration)}
      aria-valuetext={`${formatTime(progress * duration)} sur ${formatTime(duration)}`}
      {...handlers}
      className={`group relative flex h-6 touch-none items-center select-none ${onSeek ? "cursor-pointer" : ""} ${className}`}
    >
      <div className={`relative h-1.5 w-full rounded-full ${dark ? "bg-white/20" : "bg-vert/15"}`}>
        {hover !== null && (
          <div
            className={`absolute inset-y-0 left-0 rounded-full ${dark ? "bg-white/15" : "bg-vert/10"}`}
            style={{ width: `${hover * 100}%` }}
          />
        )}
        <div className={`absolute inset-y-0 left-0 rounded-full ${dark ? "bg-sable" : "bg-vert"}`} style={{ width: pct }} />
      </div>
      <span
        aria-hidden
        className={`pointer-events-none absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-soft ring-2 transition-transform group-hover:scale-125 group-focus-visible:scale-125 ${
          dragging ? "scale-125" : ""
        } ${dark ? "bg-sable ring-vert-deep" : "bg-vert ring-white"}`}
        style={{ left: pct }}
      />
    </div>
  );
}
