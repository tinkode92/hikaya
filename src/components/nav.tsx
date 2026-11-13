"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Close, Menu, User } from "./icons";

const links = [
  { href: "#histoires", label: "Catalogue" },
  { href: "#histoires", label: "Séries" },
  { href: "#abonnements", label: "Abonnements" },
  { href: "#valeurs", label: "À propos" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-[1340px] items-center justify-between rounded-full border border-white/70 bg-papier/85 py-2.5 pr-2.5 pl-6 shadow-[0_8px_30px_-12px_rgb(45_71_49_/_0.18)] backdrop-blur-xl"
      >
        <Link href="/" aria-label="HIKAYA, accueil" className="shrink-0">
          <Image
            src="/brand/typo-vert.svg"
            alt="Hikäyä"
            width={848}
            height={513}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-9 text-[15px] text-encre/70 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-colors hover:text-vert">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href="#connexion"
            aria-label="Se connecter"
            className="hidden size-10 items-center justify-center rounded-full text-encre/70 transition-colors hover:bg-vert/5 hover:text-vert sm:flex"
          >
            <User />
          </a>
          <a
            href="#abonnements"
            className="group inline-flex items-center gap-2 rounded-full bg-vert px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-vert-deep"
          >
            S&apos;abonner
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex size-10 items-center justify-center rounded-full text-encre lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-[1340px] rounded-3xl border border-white/70 bg-papier/95 p-3 shadow-lg backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col">
            {[...links, { href: "#connexion", label: "Se connecter" }].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg text-encre/80 hover:bg-creme"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
