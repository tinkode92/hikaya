"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Close, Menu, User } from "./icons";

const links = [
  { href: "/catalogue", label: "Catalogue" },
  { href: "/series/al-andalus", label: "Séries" },
  { href: "/abonnements", label: "Abonnements" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-[1340px] items-center justify-between rounded-full border border-encre/8 bg-papier py-2 pr-2 pl-6 shadow-float"
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
              <Link
                href={l.href}
                aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                className="transition-colors hover:text-vert aria-[current=page]:text-vert"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#connexion"
            aria-label="Se connecter"
            className="hidden size-11 items-center justify-center rounded-full text-encre/70 transition-colors hover:bg-vert/5 hover:text-vert sm:flex"
          >
            <User />
          </a>
          <Link
            href="/abonnements"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-vert px-5 text-[15px] font-medium text-white transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
          >
            S&apos;abonner
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex size-11 items-center justify-center rounded-full text-encre lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-rise mx-auto mt-2 max-w-[1340px] rounded-3xl border border-encre/8 bg-papier p-3 shadow-float lg:hidden">
          <ul className="flex flex-col">
            {[...links, { href: "#connexion", label: "Se connecter" }].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg text-encre/80 hover:bg-creme"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
