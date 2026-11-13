import Image from "next/image";
import { alAndalus } from "@/lib/episodes";
import { ArchOutline } from "./arch";
import { HeroPlayer } from "./hero-player";
import { ArrowDown, ArrowUpRight, Star } from "./icons";

export function Hero() {
  return (
    <section className="px-3 pt-[88px] sm:px-6 sm:pt-[104px]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-papier">
        {/* Décor : halo sable + arc de Cordoue en filigrane */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_38%,rgb(212_163_115_/_0.22),transparent_70%)]"
        />
        <ArchOutline className="pointer-events-none absolute top-6 left-1/2 h-[118%] -translate-x-1/2 text-sable/45" />

        {/* Personnages qui encadrent le titre */}
        <Image
          src="/characters/fatima.webp"
          alt=""
          width={900}
          height={1381}
          priority
          className="pointer-events-none absolute bottom-0 left-[3%] hidden h-[300px] w-auto translate-y-[6%] md:block lg:h-[380px] xl:left-[6%]"
        />
        <Image
          src="/characters/abd-al-rahman.webp"
          alt=""
          width={900}
          height={1409}
          priority
          className="pointer-events-none absolute right-[2%] bottom-0 hidden h-[310px] w-auto translate-y-[6%] md:block lg:h-[400px] xl:right-[5%]"
        />

        <div className="relative px-5 pt-16 pb-10 text-center sm:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
          <p className="animate-rise text-[13px] font-medium tracking-[0.18em] text-sable-ink uppercase sm:text-sm">
            Histoires audio de l&apos;Islam · 6-14 ans
          </p>

          <h1 className="animate-rise mx-auto mt-6 max-w-[15ch] text-[clamp(2.6rem,7vw,5.6rem)] leading-[1.02] font-light tracking-[-0.03em] italic [animation-delay:80ms] sm:max-w-none">
            <span className="block text-sable-ink">Certaines histoires se racontent.</span>
            <span className="block text-vert">D&apos;autres se transmettent.</span>
          </h1>

          <p className="animate-rise mx-auto mt-6 max-w-[46ch] text-[17px] leading-relaxed text-encre/65 [animation-delay:160ms]">
            Al-Andalus, les grands savants, les bâtisseurs… Des récits audio pour que vos enfants
            grandissent avec leur histoire.
          </p>

          <div className="animate-rise mt-9 flex flex-col items-center justify-center gap-4 [animation-delay:240ms] sm:flex-row sm:gap-7">
            <a
              href="#abonnements"
              className="group inline-flex items-center gap-2.5 rounded-full bg-vert py-4 pr-6 pl-7 text-[17px] font-medium text-white shadow-[0_14px_30px_-14px_rgb(45_71_49_/_0.8)] transition-colors hover:bg-vert-deep"
            >
              Commencer l&apos;aventure
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#histoires"
              className="group inline-flex items-center gap-2 text-[16px] text-encre/60 transition-colors hover:text-vert"
            >
              Découvrir les histoires
              <ArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          <p className="animate-rise mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] text-encre/55 [animation-delay:300ms]">
            <span className="inline-flex items-center gap-1 text-sable-ink">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star className="opacity-50" />
              <span className="ml-1 font-semibold">4,6 sur l&apos;App Store</span>
            </span>
            <span aria-hidden>·</span>
            <span>Dès 6,60 €/mois</span>
            <span aria-hidden>·</span>
            <span>Sur le site et dans l&apos;app</span>
          </p>

          <div className="animate-rise mt-12 [animation-delay:380ms] md:mt-14">
            <HeroPlayer episode={alAndalus[3]} />
          </div>

          {/* Mobile : les personnages passent sous le lecteur */}
          <div aria-hidden className="-mx-2 -mb-10 mt-8 flex items-end justify-between md:hidden">
            <Image src="/characters/fatima.webp" alt="" width={900} height={1381} className="h-44 w-auto" />
            <Image src="/characters/abd-al-rahman.webp" alt="" width={900} height={1409} className="h-48 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
