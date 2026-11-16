import Image from "next/image";
import Link from "next/link";
import { alAndalus } from "@/lib/episodes";
import { ArchOutline } from "./arch";
import { HeroPlayer } from "./hero-player";
import { ArrowUpRight, Check, Star } from "./icons";

const promises = [
  "Pour les 6–14 ans",
  "Des extraits à écouter librement",
  "Un même abonnement sur le site et dans l'application",
];

// Grille à 3 colonnes dès 1280 px : les personnages ont leur propre colonne et ne peuvent
// plus recouvrir le texte ni le lecteur. En dessous, ils passent sous le lecteur.
// Les piliers de l'arc tombent pile sur les bords du lecteur (largeur du lecteur / 0,65).
export function Hero() {
  return (
    <section className="px-3 pt-[calc(88px+var(--banner-h))] sm:px-6 sm:pt-[calc(104px+var(--banner-h))] lg:pt-[calc(96px+var(--banner-h))]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-papier">
        <ArchOutline
          className="arch-draw pointer-events-none absolute top-12 bottom-0 left-1/2 hidden -translate-x-1/2 text-sable/45 sm:block"
          style={{ width: "calc(min(600px, 100% - 40px) / 0.65)" }}
        />

        <div className="relative grid grid-cols-[minmax(0,1fr)] px-5 pt-16 sm:pt-20 lg:pt-[clamp(1.25rem,4vh,5rem)] xl:grid-cols-[1fr_minmax(0,680px)_1fr] xl:px-0">
          <div aria-hidden className="hidden items-end justify-center xl:flex">
            <Image
              src="/characters/fatima.webp"
              alt=""
              width={900}
              height={1381}
              priority
              className="enter-left h-auto max-h-[min(360px,40vh)] w-auto max-w-[78%]"
            />
          </div>

          <div className="min-w-0 pb-10 text-center lg:pb-[clamp(1.25rem,4vh,5rem)]">
            <h1 className="animate-rise mx-auto max-w-[18ch] text-[clamp(2.4rem,min(5.2vw,6vh),4.4rem)] leading-[1.04] font-light tracking-[-0.03em] text-balance italic sm:max-w-[20ch]">
              <span className="block text-sable-ink">L&apos;histoire de la civilisation musulmane</span>
              <span className="block text-vert">à découvrir en famille</span>
            </h1>

            <p className="animate-rise mx-auto mt-6 max-w-[50ch] text-[17px] lg:mt-[clamp(1rem,2.5vh,1.5rem)] leading-relaxed text-encre/65 [animation-delay:50ms]">
              Des récits pour éveiller la curiosité des enfants, nourrir leur imagination et leur faire
              rencontrer les femmes et les hommes qui ont marqué cet héritage.
            </p>

            <div className="animate-rise mt-8 flex flex-col items-center lg:mt-[clamp(1rem,3vh,2rem)] justify-center gap-4 [animation-delay:100ms] sm:flex-row sm:gap-6">
              <Link
                href="/abonnements"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-vert px-7 text-[17px] font-medium text-white shadow-soft transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
              >
                Choisir mon abonnement
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/catalogue"
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-encre/8 bg-white px-7 text-[17px] font-medium text-vert transition-[background-color,transform] hover:bg-creme active:scale-[0.98]"
              >
                Découvrir les livres audio
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <ul className="animate-rise mx-auto mt-6 flex lg:mt-[clamp(0.75rem,2.5vh,1.5rem)] w-fit max-w-[280px] flex-col items-start gap-x-6 gap-y-2 text-left text-[14px] text-encre/65 [animation-delay:150ms] sm:w-auto sm:max-w-[600px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <li className="flex items-start gap-2">
                <Star width={14} height={14} className="mt-[3px] shrink-0 text-sable-ink" />
                Noté 4,6 sur l&apos;App Store
              </li>
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check width={14} height={14} className="mt-[3px] shrink-0 text-vert" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="animate-rise mt-12 [animation-delay:200ms] lg:mt-[clamp(1.25rem,4vh,3rem)]">
              <HeroPlayer episode={alAndalus[3]} />
            </div>
          </div>

          <div aria-hidden className="hidden items-end justify-center xl:flex">
            <Image
              src="/characters/abd-al-rahman.webp"
              alt=""
              width={900}
              height={1409}
              priority
              className="enter-right h-auto max-h-[min(370px,41vh)] w-auto max-w-[78%]"
            />
          </div>

          {/* Sous 1280 px : les personnages passent sous le lecteur, aux deux bords */}
          <div aria-hidden className="-mx-2 flex items-end justify-between lg:pointer-events-none lg:absolute lg:inset-x-6 lg:bottom-0 lg:mx-0 xl:hidden">
            <Image src="/characters/fatima.webp" alt="" width={900} height={1381} className="enter-left h-44 w-auto sm:h-52 lg:h-[min(14rem,30vh)]" />
            <Image
              src="/characters/abd-al-rahman.webp"
              alt=""
              width={900}
              height={1409}
              className="enter-right h-48 w-auto sm:h-56 lg:h-[min(15rem,32vh)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
