import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { VoyagesMap } from "@/components/voyages-map";
import { timeline } from "@/lib/voyages";

export const metadata: Metadata = {
  title: "La carte des voyages",
  description:
    "De Cordoue à Bagdad, du VIIIe au XVIe siècle : retrouvez chaque histoire HIKAYA là où elle se passe, et écoutez un extrait.",
};

// Prototype : la carte des voyages (lieu et époque de chaque histoire).
export default function VoyagesPage() {
  return (
    <main className="flex flex-col gap-3">
      <PageHeader crumbs={[{ label: "Catalogue", href: "/catalogue" }, { label: "La carte des voyages" }]} eyebrow="La carte des voyages" first="De Cordoue à Bagdad," second="huit siècles d'histoires">
        <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-encre/65">
          Choisissez une ville sur la carte ou une époque sur la frise : retrouvez les {timeline.length} histoires HIKAYA là
          où elles se sont passées, et écoutez un extrait.
        </p>
      </PageHeader>
      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <VoyagesMap />
        </div>
      </section>
    </main>
  );
}
