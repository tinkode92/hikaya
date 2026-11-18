import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { siteHref } from "@/lib/site-mode";
import { company } from "@/lib/company";
import { ManageCookiesButton } from "./cookie-banner";
import { HideOn } from "./hide-on";

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
      { label: "Offrir HIKAYA", href: "/offrir" },
      { label: "Questions fréquentes", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "CGV", href: "/cgv" },
      { label: "CGU", href: "/cgu" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-3 pt-4 pb-3 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-vert-deep text-white">
        {/* Dernier appel à l'action, sauf pendant le paiement et pour un abonné */}
        <HideOn paths={["/paiement", "/confirmation", "/compte", "/avis"]}>
          <div className="relative flex flex-col items-center px-6 pt-16 pb-14 text-center sm:pt-20">
            <Image
              src="/brand/symbole.svg"
              alt=""
              width={1060}
              height={1257}
              className="h-16 w-auto"
            />
            <h2 className="mt-6 text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] font-light tracking-[-0.03em] text-balance italic">
              <span className="block text-sable">Prêts pour la première</span>
              <span className="block">histoire ce soir ?</span>
            </h2>
            <Link
              href={siteHref("/abonnements")!}
              className="group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-sable px-6 text-[16px] whitespace-nowrap sm:px-7 sm:text-[17px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-sable-soft active:scale-[0.98]"
            >
              Choisir mon abonnement
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mx-6 border-t border-white/8 sm:mx-12 lg:mx-16" />
        </HideOn>

        <div className="relative mx-6 grid gap-10 py-12 sm:mx-12 md:grid-cols-[1.4fr_repeat(3,1fr)] lg:mx-16">
          <div>
            <Image
              src="/brand/typo-blanc.svg"
              alt="Hikäyä"
              width={848}
              height={513}
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-white/60">
              Les grandes histoires de l&apos;Islam, racontées aux enfants de 6
              à 14 ans.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-[15px] font-medium text-sable">{c.title}</p>
              <ul className="mt-3 space-y-1">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={siteHref(l.href) ?? "/"}
                      className="inline-block py-1.5 text-[15px] text-white/70 transition-colors hover:text-white"
                    >
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
            <span>© 2026 HIKAYA MEDIAS · Tous droits réservés</span>
            <span aria-hidden className="hidden sm:inline">
              ·
            </span>
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
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            {company.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-white">
                {s.label}
              </a>
            ))}
            <ManageCookiesButton className="py-1.5 hover:text-white" />
          </p>
        </div>
      </div>
    </footer>
  );
}
