"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { testimonialVideo as v } from "@/lib/video";
import { Play } from "./icons";
import { usePlayer } from "./player";

// Témoignage vidéo, dans la section des avis à côté des avis des familles.
// Avant la lecture : l'affiche avec un grand bouton lecture. Ensuite : les contrôles natifs.
// La vidéo garde son format (9:16) ; en plein écran elle est affichée en entier (voir globals.css).
export function VideoTestimonial({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const player = usePlayer();

  if (!v.src) return null;

  // Un seul son à la fois : la vidéo met l'extrait audio en pause.
  const pauseExtract = () => {
    if (player.playing && player.current) player.toggle(player.current);
  };

  const start = () => {
    setStarted(true);
    pauseExtract();
    ref.current?.play();
  };

  return (
    <figure
      aria-labelledby="temoignage-video"
      className={`flex flex-col justify-between gap-6 overflow-hidden rounded-[1.75rem] bg-vert p-3 text-white ${className}`}
    >
      <figcaption className="px-4 pt-4 sm:px-5 sm:pt-5">
        <p className="text-[14px] font-medium text-sable">Témoignage en vidéo · {v.duration}</p>
        <p
          id="temoignage-video"
          className="mt-2 text-[clamp(1.5rem,2.2vw,1.85rem)] leading-[1.12] font-light tracking-[-0.02em] text-balance italic"
        >
          <span className="text-sable">Ce que Thomas Sibille</span> pense de HIKAYA
        </p>
      </figcaption>

      <div className={`relative overflow-hidden rounded-[1.25rem] bg-vert-deep ${v.vertical ? "aspect-[9/16]" : "aspect-video"}`}>
        <video
          ref={ref}
          src={v.src}
          poster={v.poster}
          controls={started}
          playsInline
          preload="none"
          aria-label={v.title}
          onPlay={() => {
            setStarted(true);
            pauseExtract();
          }}
          className="absolute inset-0 size-full object-contain"
        />
        {!started && (
          <button
            type="button"
            onClick={start}
            aria-label={`Lire la vidéo : ${v.title}`}
            className="group absolute inset-0 flex items-center justify-center"
          >
            {v.poster && (
              <Image src={v.poster} alt="" fill sizes="(min-width: 1280px) 340px, (min-width: 1024px) 300px, 360px" className="object-cover" />
            )}
            <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(34_56_38_/_0.55))]" />
            <span className="relative flex size-20 items-center justify-center rounded-full bg-sable text-vert-deep shadow-float transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:scale-105 group-active:scale-95">
              <Play width={28} height={28} className="translate-x-0.5" />
            </span>
          </button>
        )}
      </div>
    </figure>
  );
}
