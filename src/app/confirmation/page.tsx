import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookCard } from "@/components/book-card";
import { ArchOutline } from "@/components/arch";
import { ArrowUpRight, Check, Mail } from "@/components/icons";
import { StoreBadges } from "@/components/store-badges";
import { account } from "@/lib/account";
import { booksByIds } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Bienvenue",
  robots: { index: false },
};

// Après le paiement (CDC §01) : bienvenue, accès immédiat au catalogue, lien vers l'app.
const firstListens = ["al-andalus-01", "fatima-al-fihriyya", "ibn-al-haytham", "salah-al-din"];

export default function ConfirmationPage() {
  return (
    <main className="flex flex-col gap-20 sm:gap-28">
      <section className="px-3 pt-[calc(88px+var(--banner-h))] sm:px-6 sm:pt-[calc(104px+var(--banner-h))]">
        <div className="relative mx-auto grid max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-vert text-white lg:grid-cols-[1.2fr_1fr]">
          <div className="page-enter px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[14px] font-medium text-sable">
              <Check width={14} height={14} />
              Abonnement actif
            </p>
            <h1 className="mt-6 text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.02] font-light tracking-[-0.03em] text-balance italic">
              <span className="block text-sable">Bienvenue {account.firstName},</span>
              <span className="block">les histoires vous attendent</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-white/80">
              Tout le catalogue est ouvert, en entier. Écoutez sur le site dès maintenant, ou dans l&apos;application
              avec le même compte.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/catalogue"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-papier px-7 text-[17px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
              >
                Commencer l&apos;écoute
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/compte" className="inline-flex h-14 items-center px-1 text-[16px] font-medium text-white/85 sm:px-4 underline-offset-4 hover:text-white hover:underline">
                Voir mon compte
              </Link>
            </div>
            <p className="mt-8 flex items-start gap-3 text-[14px] text-white/65">
              <Mail className="mt-0.5 shrink-0 text-sable" width={16} height={16} />
              Un e-mail de confirmation et votre facture ont été envoyés à {account.email}.
            </p>
          </div>

          <div className="relative hidden items-end justify-center lg:flex">
            <div className="relative w-[70%] max-w-[380px]">
              <ArchOutline className="absolute inset-x-[-16%] bottom-0 h-[108%] w-[132%] text-sable/45" />
              <Image
                src="/characters/fatima.webp"
                alt=""
                width={900}
                height={1381}
                priority
                sizes="380px"
                className="relative h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[15px] font-medium text-sable-ink">Par où commencer ?</p>
              <h2 className="mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] italic">
                <span className="block text-sable-ink">Nos histoires</span>
                <span className="block text-vert">pour une première écoute</span>
              </h2>
            </div>
            <Link href="/catalogue" className="text-[15px] font-medium text-vert hover:text-vert-deep">
              Tout le catalogue
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {booksByIds(firstListens).map((b) => (
              <BookCard key={b.id} book={b} subscriber />
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-6">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8 rounded-[2.25rem] bg-sable px-6 py-10 sm:px-12 lg:px-16">
          <div>
            <p className="text-[15px] font-medium text-vert">L&apos;application HIKAYA</p>
            <p className="mt-2 max-w-[24ch] text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight text-balance font-light text-vert-deep italic">
              Pour la voiture et le coucher, même hors ligne
            </p>
          </div>
          <StoreBadges />
        </div>
      </section>
    </main>
  );
}
