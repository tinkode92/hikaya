import { AppDownload } from "@/components/app-download";
import { ArchDefs } from "@/components/arch";
import { EpisodeCarousel } from "@/components/episode-carousel";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MiniPlayer } from "@/components/mini-player";
import { Nav } from "@/components/nav";
import { PlayerProvider } from "@/components/player";
import { Pricing } from "@/components/pricing";
import { Reviews } from "@/components/reviews";
import { SectionHeading } from "@/components/section-heading";
import { Steps } from "@/components/steps";
import { Themes } from "@/components/themes";
import { Values } from "@/components/values";
import { alAndalus } from "@/lib/episodes";

export default function Home() {
  return (
    <PlayerProvider>
      <ArchDefs />
      <Nav />
      <main className="flex flex-col gap-20 sm:gap-28">
        <Hero />

        <section id="histoires" className="scroll-mt-24 px-3 sm:px-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Série · Al-Andalus"
                first="De Ṭāriq à Cordoue,"
                second="épisode après épisode."
              />
              <p className="max-w-[38ch] text-[16px] leading-relaxed text-encre/60">
                Huit siècles d&apos;histoire racontés comme une grande aventure. Chaque épisode se
                découvre avec un extrait de 1 min 30.
              </p>
            </div>
            <EpisodeCarousel episodes={alAndalus} />
          </div>
        </section>

        <Themes />
        <Values />
        <Steps />
        <Pricing />
        <Reviews />
        <AppDownload />
        <Faq />
      </main>
      <div className="mt-20 sm:mt-28">
        <Footer />
      </div>
      <MiniPlayer />
    </PlayerProvider>
  );
}
