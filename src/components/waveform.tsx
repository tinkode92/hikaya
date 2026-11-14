"use client";

import { formatTime } from "./player";
import { useScrub } from "./use-scrub";

// Forme d'onde déterministe (pas d'aléatoire -> pas d'écart serveur/client).
const BARS = Array.from({ length: 40 }, (_, i) => {
  const v = Math.abs(Math.sin(i * 1.7) * 0.6 + Math.sin(i * 0.43) * 0.4);
  return 0.22 + v * 0.78;
});

// Une tête de lecture (trait + poignée ronde) montre qu'on peut se déplacer dans l'extrait ;
// au survol, les barres jusqu'au pointeur s'éclairent pour prévisualiser la position.
export function Waveform({
  progress,
  duration,
  onSeek,
  className = "",
}: {
  progress: number;
  duration: number;
  onSeek?: (ratio: number) => void;
  className?: string;
}) {
  const { trackRef, dragging, hover, handlers } = useScrub({ progress, duration, onSeek });
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
      className={`group relative flex h-9 touch-none items-center gap-[3px] select-none ${onSeek ? "cursor-pointer" : ""} ${className}`}
    >
      {BARS.map((h, i) => {
        const at = (i + 0.5) / BARS.length;
        const tone = at < progress ? "bg-vert" : hover !== null && at < hover ? "bg-vert/40" : "bg-vert/15";
        return (
          <span
            key={i}
            className={`w-[3px] flex-1 rounded-full transition-colors duration-150 ${tone}`}
            style={{ height: `${h * 100}%` }}
          />
        );
      })}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 rounded-full bg-sable-ink"
        style={{ left: pct }}
      >
        <span
          className={`absolute top-1/2 left-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sable-ink shadow-soft ring-2 ring-white transition-transform group-hover:scale-125 group-focus-visible:scale-125 ${
            dragging ? "scale-125" : ""
          }`}
        />
      </span>
    </div>
  );
}
