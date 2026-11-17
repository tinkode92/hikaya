import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mic } from "./icons";
import { VOICE_ONLY } from "@/lib/voice";
import { LP_ONLY, siteHref } from "@/lib/site-mode";

// « Présentation de HIKAYA » (Textes_site_HIKAYA)
export function Values() {
  return (
    <section id="valeurs" className="px-3 sm:px-6">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-vert text-white">
        <div className="relative px-6 pt-16 sm:px-12 lg:px-16 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-[15px] font-medium text-sable">Présentation de HIKAYA</p>
              <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] italic">
                <span className="block text-sable">Une histoire</span>
                <span className="block">à transmettre</span>
              </h2>
            </div>

            <div className="lg:pt-10">
              <p className="max-w-[56ch] text-[18px] leading-relaxed text-white/85">
                HIKAYA invite les enfants à découvrir l&apos;histoire et la richesse de la civilisation
                musulmane à travers les femmes, les hommes, les lieux et les idées qui l&apos;ont
                façonnée. Nous créons des histoires pour éveiller leur curiosité et leur donner le goût
                d&apos;explorer cet héritage en famille. Chaque récit associe un travail de recherche à
                une écriture accessible aux plus jeunes.
              </p>
              <p className="mt-6 inline-flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 text-[16px] leading-snug text-white">
                <Mic className="mt-0.5 shrink-0 text-sable" />
                {VOICE_ONLY}
              </p>
              {!LP_ONLY && (
                <Link
                  href={siteHref("/qui-sommes-nous")!}
                  className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-papier px-5 text-[15px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
                >
                  Découvrir notre histoire
                  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center lg:mt-16">
            <Image
              src="/characters/group.webp"
              alt="Les personnages HIKAYA : savants, bâtisseurs, souverains et souveraines de l'histoire de l'Islam"
              width={2400}
              height={432}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="-mb-2 h-auto w-[190%] max-w-none sm:w-full sm:max-w-[1150px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
