import Image from "next/image";
import { StoreBadges } from "./store-badges";

export function AppDownload() {
  return (
    <section id="app" className="px-3 sm:px-6">
      {/* Fond sable plein, comme les visuels App Store de HIKAYA */}
      <div className="relative mx-auto grid max-w-[1280px] items-end gap-10 overflow-hidden rounded-[2.25rem] bg-sable px-6 pt-14 sm:px-12 lg:grid-cols-[1.1fr_1fr] lg:px-16 lg:pt-0">
        <div className="relative self-center lg:py-20">
          <p className="text-[15px] font-medium text-vert">L&apos;application HIKAYA</p>
          <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] text-balance text-vert italic">
            À la maison, en voiture
            <br />
            ou avant de dormir
          </h2>
          <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-vert-deep/80">
            Retrouvez vos histoires dans l&apos;application HIKAYA. Connectez-vous avec le même compte
            pour profiter de votre abonnement.
          </p>

          <StoreBadges className="mt-8" />
        </div>

        {/* Téléphone : vraie capture de l'écran d'accueil de l'app */}
        <div className="relative mx-auto w-full max-w-[340px] lg:mt-16">
          <div className="relative -mb-24 rounded-[3.25rem] bg-[#1b1b1b] p-3 shadow-object sm:-mb-28">
            <div className="relative aspect-[720/1195] overflow-hidden rounded-[2.5rem] bg-papier">
              <Image
                src="/app/ecran-accueil.webp"
                alt="Écran d'accueil de l'app HIKAYA : recherche, catégories et épisodes d'Al-Andalus"
                fill
                sizes="340px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
