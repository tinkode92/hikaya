"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { EXTRACT_SECONDS, type Episode } from "@/lib/episodes";

// Lecteur simulé pour la maquette : la progression avance sur 1 min 30 sans fichier audio.
// Le dev branchera ici l'élément <audio> et les liens signés.

type PlayerState = {
  current: Episode | null;
  playing: boolean;
  position: number;
  ended: boolean;
  toggle: (episode: Episode) => void;
  seek: (ratio: number) => void;
  close: () => void;
};

const PlayerContext = createContext<PlayerState | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Episode | null>(null);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setPosition((p) => {
        const next = Math.min(p + 0.25, EXTRACT_SECONDS);
        if (next >= EXTRACT_SECONDS) setPlaying(false);
        return next;
      });
    }, 250);
    return () => clearInterval(t);
  }, [playing]);

  const toggle = useCallback(
    (episode: Episode) => {
      if (current?.id !== episode.id) {
        setCurrent(episode);
        setPosition(0);
        setPlaying(true);
        return;
      }
      if (position >= EXTRACT_SECONDS) setPosition(0);
      setPlaying((v) => !v);
    },
    [current, position],
  );

  const seek = useCallback((ratio: number) => {
    setPosition(Math.max(0, Math.min(1, ratio)) * EXTRACT_SECONDS);
  }, []);

  const close = useCallback(() => {
    setPlaying(false);
    setCurrent(null);
    setPosition(0);
  }, []);

  const value = useMemo(
    () => ({
      current,
      playing,
      position,
      ended: position >= EXTRACT_SECONDS,
      toggle,
      seek,
      close,
    }),
    [current, playing, position, toggle, seek, close],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer doit être utilisé dans <PlayerProvider>");
  return ctx;
}

export function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}
