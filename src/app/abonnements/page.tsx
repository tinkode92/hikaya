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
    "Annuel ou mensuel : tout le catalogue de livres audio HIKAYA, sur le site et dans l'application, avec le même compte.",
};

// Ce que chacun peut écouter (cahier des charges §03)
const access = [
  { who: "Visiteur sans compte", what: "L'extrait de 1 min 30 de chaque histoire, puis les offres s'affichent." },
  { who: "Compte sans abonnement", what: "L'extrait de 1 min 30 de chaque histoire, puis les offres s'affichent." },
  { who: "Abonné", what: "Tout le catalogue, en entier, sur le site et dans l'application.", highlight: true },
];

// Questions liées à l'abonnement, reprises de la FAQ fournie par HIKAYA
const subscriptionFaq = faq.filter((f) =>
  /s'abonner|comprend l'abonnement|application après un achat|résilier|paiement/.test(f.q),
);

export default function AbonnementsPage() {
  return (
    <main className="flex flex-col gap-20 pt-[120px] sm:gap-28 sm:pt-[152px]">
      <Pricing as="h1" />

      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Ce que vous écoutez"
            first="L'extrait pour découvrir,"
            second="l'abonnement pour tout écouter"
            className="mb-8 sm:mb-10"
          />
          <ul className="grid gap-4 md:grid-cols-3">
            {access.map((a) => (
              <li
                key={a.who}
                className={`flex flex-col rounded-[1.75rem] p-8 ${
                  a.highlight ? "bg-vert text-white" : "border border-encre/8 bg-papier text-encre"
                }`}
              >
                <span
                  className={`flex size-10 items-center justify-center rounded-full ${
                    a.highlight ? "bg-sable text-vert-deep" : "bg-creme text-vert"
                  }`}
                >
                  <Check />
                </span>
                <h3 className="mt-6 text-[22px] font-medium">{a.who}</h3>
                <p className={`mt-2 text-[16px] leading-relaxed ${a.highlight ? "text-white/80" : "text-encre/65"}`}>
                  {a.what}
                </p>
              </li>
            ))}
          </ul>
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
