import { ArchDefs } from "@/components/arch";
import { EpisodeCarousel } from "@/components/episode-carousel";
import { Hero } from "@/components/hero";
import { MiniPlayer } from "@/components/mini-player";
import { Nav } from "@/components/nav";
import { PlayerProvider } from "@/components/player";
import { Values } from "@/components/values";
import { alAndalus } from "@/lib/episodes";

export default function Home() {
  return (
    <PlayerProvider>
      <ArchDefs />
      <Nav />
      <main className="flex flex-col gap-4 pb-32 sm:gap-6">
        <Hero />

        <section id="histoires" className="px-3 pt-10 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[13px] font-medium tracking-[0.18em] text-sable-ink uppercase">
                  Série · Al-Andalus
                </p>
                <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] italic">
                  <span className="block text-sable-ink">De Ṭāriq à Cordoue,</span>
                  <span className="block text-vert">épisode après épisode.</span>
                </h2>
              </div>
              <p className="max-w-[38ch] text-[16px] leading-relaxed text-encre/60">
                Huit siècles d&apos;histoire racontés comme une grande aventure. Chaque épisode se
                découvre avec un extrait de 1 min 30.
              </p>
            </div>
            <EpisodeCarousel episodes={alAndalus} />
          </div>
        </section>

        <div className="pt-10 sm:pt-16">
          <Values />
        </div>
      </main>
      <MiniPlayer />
    </PlayerProvider>
  );
}
