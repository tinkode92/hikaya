import type { Metadata } from "next";
import { Amiri, Urbanist } from "next/font/google";
import { ArchDefs } from "@/components/arch";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/footer";
import { MiniPlayer } from "@/components/mini-player";
import { NoImageDrag } from "@/components/no-image-drag";
import { Nav } from "@/components/nav";
import { PlayerProvider } from "@/components/player";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import "./globals.css";

// Écriture arabe (noms des villes sur la carte des voyages) : naskh classique, chargée seulement si utilisée
const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400"],
  preload: false,
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

// Titres et descriptions Google fournis par HIKAYA (Textes_site_HIKAYA, « Référencement des pages »)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.hikayamedias.com"),
  title: {
    default: "HIKAYA | L'histoire de la civilisation musulmane pour les enfants",
    template: "%s | HIKAYA",
  },
  description:
    "Faites découvrir aux enfants l'histoire de la civilisation musulmane. Explorez les livres audio HIKAYA, écoutez des extraits et partagez l'histoire en famille.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${urbanist.variable} ${amiri.variable} h-full`}>
      <body className="min-h-full">
        {/* Le lecteur vit dans le layout : la lecture continue pendant la navigation (CDC §03) */}
        <PlayerProvider>
          <ArchDefs />
          <NoImageDrag />
          <Nav />
          {children}
          <div className="mt-20 sm:mt-28">
            <Footer />
          </div>
          <MiniPlayer />
          <RevealOnScroll />
          <CookieBanner />
        </PlayerProvider>
      </body>
    </html>
  );
}
