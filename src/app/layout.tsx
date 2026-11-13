import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "HIKAYA · Les grandes histoires de l'Islam, en audio pour les enfants",
  description:
    "Des histoires audio pour les 6-14 ans : Al-Andalus, les grandes figures, les savants. À écouter sur le site et dans l'app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${urbanist.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
