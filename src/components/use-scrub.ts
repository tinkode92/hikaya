"use client";

import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

// Glisser-déposer dans l'extrait (souris, doigt) + clavier (flèches ±5 s, Début, Fin).
export function useScrub({
  progress,
  duration,
  onSeek,
}: {
  progress: number;
  duration: number;
  onSeek?: (ratio: number) => void;
}) {
  const [dragging, setDragging] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const ratioAt = (clientX: number) => {
    const r = trackRef.current?.getBoundingClientRect();
    if (!r || !r.width) return 0;
    return Math.max(0, Math.min(1, (clientX - r.left) / r.width));
  };

  const onPointerDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!onSeek) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      setDragging(true);
      onSeek(ratioAt(e.clientX));
    },
    [onSeek],
  );

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!onSeek) return;
      const r = ratioAt(e.clientX);
      if (dragging) onSeek(r);
      else if (e.pointerType === "mouse") setHover(r);
    },
    [dragging, onSeek],
  );

  const stop = useCallback(() => setDragging(false), []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!onSeek) return;
      const step = 5 / duration;
      const map: Record<string, number> = {
        ArrowRight: progress + step,
        ArrowUp: progress + step,
        ArrowLeft: progress - step,
        ArrowDown: progress - step,
        Home: 0,
        End: 1,
      };
      if (e.key in map) {
        e.preventDefault();
        onSeek(Math.max(0, Math.min(1, map[e.key])));
      }
    },
    [duration, onSeek, progress],
  );

  return {
    trackRef,
    dragging,
    hover,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: stop,
      onPointerCancel: stop,
      onPointerLeave: () => setHover(null),
      onKeyDown,
    },
  };
}
