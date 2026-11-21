import type { Metadata } from "next";
import { Suspense } from "react";
import { Checkout } from "@/components/checkout";

export const metadata: Metadata = {
  title: "Paiement",
  robots: { index: false },
};

export default function PaiementPage() {
  return (
    <main>
      {/* Titre dans la colonne du formulaire : le bouton de paiement reste visible sans défiler */}
      <section className="px-3 pt-[calc(80px+var(--banner-h))] sm:px-6 sm:pt-[calc(96px+var(--banner-h))]">
        <div className="mx-auto max-w-[1280px]">
          <Suspense fallback={<div className="min-h-[720px]" />}>
            <Checkout />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
