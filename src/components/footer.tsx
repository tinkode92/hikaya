import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

const columns = [
  {
    title: "Histoires",
    links: [
      { label: "Catalogue", href: "/catalogue" },
      { label: "Série Al-Andalus", href: "/series/al-andalus" },
      { label: "Les Âges de l'islam", href: "/categories/ages-de-l-islam" },
      { label: "Grands Personnages", href: "/categories/grands-personnages" },
      { label: "Villes de l'Islam", href: "/categories/villes-de-l-islam" },
    ],
  },
  {
    title: "HIKAYA",
    links: [
      { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
      { label: "Abonnements", href: "/abonnements" },
      { label: "Questions fréquentes", href: "/#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "CGV", href: "#" },
      { label: "CGU", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-3 pt-4 pb-3 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-vert-deep text-white">
        {/* Dernier appel à l'action */}
        <div className="relative flex flex-col items-center px-6 pt-16 pb-14 text-center sm:pt-20">
          <Image src="/brand/symbole.svg" alt="" width={1060} height={1257} className="h-16 w-auto" />
          <h2 className="mt-6 text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] font-light tracking-[-0.03em] text-balance italic">
            <span className="block text-sable">Prêts pour la première</span>
            <span className="block">histoire ce soir ?</span>
          </h2>
          <Link
            href="/abonnements"
            className="group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-sable px-6 text-[16px] whitespace-nowrap sm:px-7 sm:text-[17px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-sable-soft active:scale-[0.98]"
          >
            Choisir mon abonnement
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="relative mx-6 grid gap-10 border-t border-white/8 py-12 sm:mx-12 md:grid-cols-[1.4fr_repeat(3,1fr)] lg:mx-16">
          <div>
            <Image src="/brand/typo-blanc.svg" alt="Hikäyä" width={848} height={513} className="h-14 w-auto" />
            <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-white/60">
              Les grandes histoires de l&apos;Islam, racontées aux enfants de 6 à 14 ans.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-[15px] font-medium text-sable">{c.title}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[15px] text-white/70 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative mx-6 flex flex-col gap-3 border-t border-white/8 py-6 pb-24 text-[13px] text-white/55 sm:mx-12 sm:flex-row sm:justify-between sm:pb-6 lg:mx-16">
          <p className="flex flex-wrap gap-x-2 gap-y-1">
            <span>© 2026 Hikaya Médias · Tous droits réservés</span>
            <span aria-hidden className="hidden sm:inline">·</span>
            <span>
              Site réalisé par{" "}
              <a
                href="https://bigbrowser.co"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sable underline-offset-4 hover:underline"
              >
                bigbrowser.co
              </a>
            </span>
          </p>
          <p className="flex gap-5">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              YouTube
            </a>
            <a href="#" className="hover:text-white">
              TikTok
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
