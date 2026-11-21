import Link from "next/link";
import { AppDownload } from "@/components/app-download";
import { BookCard } from "@/components/book-card";
import { EpisodeCarousel } from "@/components/episode-carousel";
import { Faq } from "@/components/faq";
import { FeaturedBook } from "@/components/featured-book";
import { Hero } from "@/components/hero";
import { ArrowUpRight } from "@/components/icons";
import { ListenButton } from "@/components/listen-button";
import { Pricing } from "@/components/pricing";
import { Reviews } from "@/components/reviews";
import { SectionHeading } from "@/components/section-heading";
import { Themes } from "@/components/themes";
import { Values } from "@/components/values";
import { booksByIds, homeSelection, newReleases } from "@/lib/catalogue";
import { LP_ONLY, siteHref } from "@/lib/site-mode";

// Ordre et textes des sections : « Textes_site_HIKAYA » (Drive), partie Accueil.
export default function Home() {
  const selection = booksByIds(homeSelection);
  const nouveautes = booksByIds(newReleases);

  return (
    <main className="lp flex flex-col gap-20 sm:gap-28">
      <Hero />

      {/* Sélection de livres */}
      <section id="histoires" className="scroll-mt-24 px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex flex-col gap-6 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionHeading eyebrow="Sélection" first="Leur prochaine découverte" second="commence ici" />
              <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-encre/65">
                Une ville à explorer, un personnage à rencontrer, une aventure à suivre… Écoutez un
                extrait et laissez la curiosité faire le reste.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ListenButton book={selection[0]} label="Écouter un extrait" />
              {!LP_ONLY && (
                <Link
                  href={siteHref("/catalogue")!}
                  className="group inline-flex h-14 items-center gap-2 rounded-full border border-encre/8 bg-papier px-6 text-[17px] font-medium text-vert transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
                >
                  Voir tout le catalogue
                  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
            </div>
          </div>
          <EpisodeCarousel episodes={selection} />
        </div>
      </section>

      {/* À la une / En avant-première (réglé dans le back-office) */}
      <FeaturedBook />

      {/* Nouveautés */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 sm:mb-10">
            <SectionHeading eyebrow="Nouveautés" first="De nouvelles histoires" second="à découvrir" />
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-encre/65">
              Retrouvez les derniers récits qui ont rejoint HIKAYA et choisissez votre prochaine écoute
              en famille.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nouveautes.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </div>
      </section>

      <Themes />
      <Values />
      <Reviews />
      <Pricing />
      <AppDownload />
      <Faq />
    </main>
  );
}
