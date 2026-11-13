import Image from "next/image";
import { ArrowUpRight, Phone, Star } from "./icons";

const APP_STORE = "https://apps.apple.com/fr/app/hikaya/id6754205548";

export function AppDownload() {
  return (
    <section id="app" className="px-3 sm:px-6">
      {/* Fond sable plein, comme les visuels App Store de HIKAYA */}
      <div className="relative mx-auto grid max-w-[1280px] items-end gap-10 overflow-hidden rounded-[2.25rem] bg-sable px-6 pt-14 sm:px-12 lg:grid-cols-[1.1fr_1fr] lg:px-16 lg:pt-0">
        <div className="relative self-center lg:py-20">
          <p className="text-[15px] font-medium text-vert">L&apos;app HIKAYA</p>
          <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] text-balance text-vert italic">
            L&apos;histoire continue
            <br />
            dans la poche
          </h2>
          <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-vert-deep/80">
            Téléchargez les épisodes pour les écouter hors connexion, en voyage ou chez les
            grands-parents. Votre abonnement fonctionne sur le site et dans l&apos;app.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-vert-deep pr-6 pl-5 text-white transition-[background-color,transform] hover:bg-encre active:scale-[0.98]"
            >
              <Phone />
              <span className="text-left leading-tight">
                <span className="block text-[12px] text-white/70">Télécharger sur</span>
                <span className="block text-[16px] font-medium">l&apos;App Store</span>
              </span>
              <ArrowUpRight className="ml-1 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#google-play"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-papier pr-6 pl-5 text-vert-deep transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
            >
              <Phone />
              <span className="text-left leading-tight">
                <span className="block text-[12px] text-vert-deep/70">Disponible sur</span>
                <span className="block text-[16px] font-medium">Google Play</span>
              </span>
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-[14px] text-vert-deep/80">
            <span className="inline-flex text-vert">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star className="opacity-40" />
            </span>
            <strong className="font-medium">4,6</strong> sur l&apos;App Store
          </p>
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
