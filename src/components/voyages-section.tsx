import { timeline } from "@/lib/voyages";
import { SectionHeading } from "./section-heading";
import { VoyagesMap } from "./voyages-map";

// Accueil : la carte des voyages (chaque histoire là où elle se passe, et quand).
export function VoyagesSection() {
  return (
    <section id="voyages" className="scroll-mt-24 px-3 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 sm:mb-10">
          <SectionHeading eyebrow="La carte des voyages" first="De Cordoue à Bagdad," second="huit siècles d'histoires" />
          <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-encre/65">
            Les {timeline.length} histoires HIKAYA, là où elles se sont passées : d&apos;Al-Andalus à l&apos;Irak, du VIIIe
            au XVIe siècle. Touchez une ville et écoutez un extrait.
          </p>
        </div>
        <VoyagesMap />
      </div>
    </section>
  );
}
