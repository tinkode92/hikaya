"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ShieldCheck } from "./icons";
import { SectionHeading } from "./section-heading";

// Offres et prix du cahier des charges (§05). En production, les prix viennent de Stripe.
const plans = [
  {
    id: "annuel",
    name: "Annuel",
    badge: "Recommandé",
    price: "79,20 €",
    period: "/ an",
    note: "Soit 6,60 €/mois · 4 mois offerts",
    detail: "Un seul paiement par an, renouvelé automatiquement.",
  },
  {
    id: "mensuel",
    name: "Mensuel",
    badge: "Offre découverte",
    price: "7,90 €",
    period: "/ mois",
    note: "Les 3 premiers mois, puis 9,90 €/mois",
    detail: "Sans engagement, résiliable à tout moment.",
  },
] as const;

const included = [
  "Tout le catalogue en illimité, épisodes complets",
  "Sur le site et dans l'app, avec le même compte",
  "De nouvelles histoires chaque mois",
  "L'écoute reprend là où elle s'était arrêtée",
  "AirPlay et Chromecast pour écouter sur la télé",
];

export function Pricing() {
  const [selected, setSelected] = useState<(typeof plans)[number]["id"]>("annuel");

  return (
    <section id="abonnements" className="scroll-mt-24 px-3 sm:px-6">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="lg:pt-6">
          <SectionHeading
            eyebrow="Abonnements"
            first="Un abonnement,"
            second="toutes les histoires."
          />
          <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-encre/65">
            Les visiteurs écoutent 1 min 30 de chaque histoire. Avec l&apos;abonnement, vos enfants
            écoutent tout, en entier.
          </p>
          <ul className="mt-8 space-y-3.5">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] text-encre/80">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-vert text-sable">
                  <Check width={13} height={13} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <fieldset>
            <legend className="sr-only">Choisissez votre offre</legend>
            <div className="grid gap-3">
              {plans.map((plan) => {
                const active = selected === plan.id;
                return (
                  <label
                    key={plan.id}
                    className={`relative flex cursor-pointer items-center gap-5 rounded-[1.75rem] border p-6 transition-all duration-300 sm:p-7 ${
                      active
                        ? "border-vert bg-vert text-white shadow-[0_24px_50px_-24px_rgb(45_71_49_/_0.7)]"
                        : "border-vert/10 bg-papier text-encre hover:border-vert/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="offre"
                      value={plan.id}
                      checked={active}
                      onChange={() => setSelected(plan.id)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden
                      className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sable ${
                        active ? "border-sable bg-sable text-vert-deep" : "border-vert/25"
                      }`}
                    >
                      {active && <Check width={13} height={13} />}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-[19px] font-semibold">{plan.name}</span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase ${
                            active ? "bg-sable text-vert-deep" : "bg-sable-soft text-sable-ink"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      </span>
                      <span className="mt-2 block text-[30px] leading-none font-light tracking-[-0.03em] sm:hidden">
                        {plan.price}
                        <span className={`text-[14px] tracking-normal ${active ? "text-white/65" : "text-encre/55"}`}>
                          {" "}
                          {plan.period}
                        </span>
                      </span>
                      <span className={`mt-1.5 block text-[15px] ${active ? "text-sable" : "text-sable-ink"}`}>
                        {plan.note}
                      </span>
                      <span className={`mt-1 block text-[14px] ${active ? "text-white/65" : "text-encre/55"}`}>
                        {plan.detail}
                      </span>
                    </span>

                    <span className="hidden shrink-0 text-right sm:block">
                      <span className="block text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none font-light tracking-[-0.03em]">
                        {plan.price}
                      </span>
                      <span className={`text-[14px] ${active ? "text-white/65" : "text-encre/55"}`}>
                        {plan.period}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <a
            href="#paiement"
            className="group mt-5 flex w-full items-center justify-center gap-2.5 rounded-full bg-vert py-4.5 text-[17px] font-medium text-white shadow-[0_14px_30px_-14px_rgb(45_71_49_/_0.8)] transition-colors hover:bg-vert-deep"
          >
            Continuer avec l&apos;offre {selected === "annuel" ? "annuelle" : "mensuelle"}
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-5 flex flex-col items-center gap-2 text-center text-[13px] text-encre/55">
            <p className="inline-flex items-center gap-1.5">
              <ShieldCheck className="text-vert" />
              Paiement sécurisé · Carte, PayPal, Apple Pay, Google Pay
            </p>
            <p>Code promo à l&apos;étape suivante · Prix TTC, TVA 5,5 % incluse</p>
          </div>
        </div>
      </div>
    </section>
  );
}
