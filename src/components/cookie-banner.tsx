"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "hikaya-cookies";
export const OPEN_COOKIES_EVENT = "hikaya:cookies";

// Bandeau cookies (CDC §09) : accord préalable pour la mesure d'audience. Le dev charge l'outil
// de mesure seulement si le choix enregistré est « accepte ». « Gérer les cookies » (pied de page)
// rouvre le bandeau.
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIES_EVENT, reopen);
  }, []);

  const choose = (value: "accepte" | "refuse") => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ value, date: Date.now() }));
    } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookies-titre"
      className="animate-rise fixed inset-x-3 bottom-3 z-[60] rounded-[1.5rem] bg-vert-deep p-5 text-white shadow-object sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-[400px] sm:p-6"
    >
      <p id="cookies-titre" className="text-[16px] font-medium">
        Les cookies sur HIKAYA
      </p>
      <p className="mt-2 text-[14px] leading-relaxed text-white/75">
        Avec votre accord, nous mesurons la fréquentation du site pour l&apos;améliorer. Les cookies nécessaires au
        compte et au lecteur restent actifs.{" "}
        <Link href="/cookies" className="text-sable underline underline-offset-2">
          En savoir plus
        </Link>
      </p>
      {/* Refuser est aussi simple qu'accepter : même taille, même place */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => choose("refuse")}
          className="h-11 rounded-full border border-white/20 text-[15px] font-medium transition-colors hover:bg-white/10"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => choose("accepte")}
          className="h-11 rounded-full bg-sable text-[15px] font-medium text-vert-deep transition-colors hover:bg-sable-soft"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}

export function ManageCookiesButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_COOKIES_EVENT))} className={className}>
      Gérer les cookies
    </button>
  );
}
