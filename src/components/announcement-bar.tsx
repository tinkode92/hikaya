import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { siteHref } from "@/lib/site-mode";

// Bandeau d'offre en haut de toutes les pages. Hauteur fixe (--banner-h dans globals.css) :
// les pages décalent leur contenu de cette hauteur.
export function AnnouncementBar() {
  return (
    <Link
      href={siteHref("/abonnements")!}
      className="group flex h-[var(--banner-h)] items-center justify-center gap-2 bg-vert-deep px-4 text-[13px] whitespace-nowrap text-white transition-colors hover:bg-vert sm:text-[14px]"
    >
      <span className="rounded-md bg-sable px-1.5 py-0.5 text-[12px] leading-none font-medium text-vert-deep max-[359px]:hidden">
        Offre découverte
      </span>
      <span>
        <strong className="font-medium">4,90&nbsp;€/mois</strong> pendant 3 mois
        <span className="hidden sm:inline">, puis 9,90&nbsp;€/mois</span>
      </span>
      <span className="hidden items-center gap-1 font-medium text-sable md:inline-flex">
        Voir les offres
        <ArrowUpRight width={14} height={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
