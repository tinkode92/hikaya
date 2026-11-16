import type { Metadata } from "next";
import { Faq, faq } from "@/components/faq";
import { Check } from "@/components/icons";
import { Pricing } from "@/components/pricing";
import { Reviews } from "@/components/reviews";
import { SectionHeading } from "@/components/section-heading";
import { Steps } from "@/components/steps";

export const metadata: Metadata = {
  title: "Abonnements",
  description:
    "Mensuel ou annuel : tout le catalogue de livres audio HIKAYA, sur le site et dans l'application, avec le même compte.",
};

// Ce qu'on écoute sans et avec abonnement (cahier des charges §03)
const plans = [
  {
    title: "Sans abonnement",
    note: "Sans créer de compte",
    items: ["L'extrait de 1 min 30 de chaque histoire", "Tout le catalogue à parcourir"],
  },
  {
    title: "Avec l'abonnement",
    note: "Mensuel sans engagement, ou annuel",
    highlight: true,
    items: [
      "Toutes les histoires en entier",
      "Les nouveaux récits ajoutés chaque mois",
      "Sur le site et dans l'application, avec le même compte",
      "L'écoute reprend là où elle s'était arrêtée",
      "Le mode hors ligne dans l'application",
    ],
  },
];

// Questions liées à l'abonnement, reprises de la FAQ fournie par HIKAYA
const subscriptionFaq = faq.filter((f) =>
  /s'abonner|comprend l'abonnement|application après un achat|résilier|paiement/.test(f.q),
);

export default function AbonnementsPage() {
  return (
    <main className="flex flex-col gap-20 pt-[calc(120px+var(--banner-h))] sm:gap-28 sm:pt-[calc(152px+var(--banner-h))]">
      <Pricing as="h1" />

      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Ce que vous écoutez"
            first="L'extrait pour découvrir,"
            second="l'abonnement pour tout écouter"
            className="mb-8 sm:mb-10"
          />
          <div className="grid gap-4 md:grid-cols-[1fr_1.4fr]">
            {plans.map((p) => (
              <div
                key={p.title}
                className={`rounded-[1.75rem] p-8 sm:p-10 ${
                  p.highlight ? "bg-vert text-white" : "border border-encre/8 bg-papier text-encre"
                }`}
              >
                <p className={`text-[15px] ${p.highlight ? "text-sable" : "text-sable-ink"}`}>{p.note}</p>
                <h3 className="mt-2 text-[28px] leading-tight font-light tracking-[-0.02em] italic">{p.title}</h3>
                <ul className="mt-6 space-y-4">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] leading-snug">
                      <span
                        className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${
                          p.highlight ? "bg-sable text-vert-deep" : "bg-creme text-vert"
                        }`}
                      >
                        <Check width={13} height={13} />
                      </span>
                      <span className={p.highlight ? "text-white/90" : "text-encre/75"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] text-encre/60">
            Un abonnement pris dans l&apos;application via l&apos;App Store ou Google Play donne aussi accès
            au site. Sa gestion reste dans le store concerné.
          </p>
        </div>
      </section>

      <Steps />
      <Reviews />
      <Faq items={subscriptionFaq} />
    </main>
  );
}
