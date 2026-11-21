import type { Metadata } from "next";
import { Suspense } from "react";
import { Checkout } from "@/components/checkout";

export const metadata: Metadata = {
  title: "Paiement",
  robots: { index: false },
};

export default function PaiementPage() {
  return (
    <main className="flex flex-col gap-3">
      <section className="px-3 pt-[calc(88px+var(--banner-h))] sm:px-6 sm:pt-[calc(104px+var(--banner-h))]">
        <div className="mx-auto max-w-[1280px] rounded-[2.25rem] bg-papier px-6 py-10 sm:px-12 sm:py-12 lg:px-16">
          <div className="page-enter">
            <p className="text-[15px] font-medium text-sable-ink">Abonnement</p>
            <h1 className="mt-3 text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.04] font-light tracking-[-0.03em] italic">
              <span className="text-sable-ink">Plus qu&apos;une étape</span> <span className="text-vert">avant l&apos;écoute</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <Suspense fallback={<div className="min-h-[720px]" />}>
            <Checkout />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
