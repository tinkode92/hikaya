import type { Metadata } from "next";
import { CatalogueBrowser } from "@/components/catalogue-browser";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: { absolute: "Livres audio pour enfants | Le catalogue HIKAYA" },
  description:
    "Parcourez les livres audio HIKAYA pour les 6–14 ans. Personnages, grandes époques et villes de la civilisation musulmane, avec des extraits à écouter.",
};

export default function CataloguePage() {
  return (
    <main className="flex flex-col gap-10 sm:gap-12">
      <PageHeader eyebrow="Catalogue" first="Quelle histoire" second="allez-vous découvrir ?">
        <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-encre/65">
          Parcourez nos livres audio, écoutez un extrait et choisissez votre prochaine aventure en
          famille.
        </p>
      </PageHeader>
      <CatalogueBrowser />
    </main>
  );
}
