"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Download, Lock, ShieldCheck } from "./icons";
import { PaymentLogos } from "./payment-logos";
import { SectionHeading } from "./section-heading";
import { plans, type PlanId } from "@/lib/plans";


const included = [
  "Tout le catalogue en illimité, les histoires en entier",
  "De nouveaux livres audio chaque mois",
  "Sur le site et dans l'application, avec le même compte",
  "L'écoute reprend là où elle s'était arrêtée",
  "AirPlay et Chromecast pour écouter sur la télé, vos enceintes et appareils compatibles",
];

// Usages pratiques mis en avant (voiture, coucher)
const practical = [
  { icon: Lock, title: "Écoute écran verrouillé", text: "L'histoire continue, téléphone posé et écran éteint." },
  { icon: Download, title: "Mode hors ligne dans l'application", text: "Téléchargez les histoires pour la voiture ou les voyages." },
];

export function Pricing({ as = "h2" }: { as?: "h1" | "h2" }) {
  const [selected, setSelected] = useState<PlanId>("mensuel");

  return (
    <section id="abonnements" className="scroll-mt-24 px-3 sm:px-6">
      {/* Mobile : titre, offres, puis ce qui est inclus. Desktop : titre et inclus à gauche, offres à droite. */}
      <div className="mx-auto grid max-w-[1280px] gap-x-16 gap-y-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:col-start-1 lg:row-start-1 lg:pt-6">
          <SectionHeading as={as} eyebrow="Abonnements" first="Un abonnement," second="toutes les histoires" />
          <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-encre/65">
            Écoutez gratuitement un extrait de chaque histoire. Avec l&apos;abonnement, vos enfants
            écoutent tout, en entier.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <fieldset>
            <legend className="sr-only">Choisissez votre offre</legend>
            <div className="grid gap-3">
              {plans.map((plan) => {
                const active = selected === plan.id;
                return (
                  <label
                    key={plan.id}
                    className={`grid cursor-pointer grid-cols-[24px_1fr] gap-x-4 rounded-[1.75rem] border p-6 transition-colors sm:grid-cols-[24px_1fr_auto] sm:gap-x-5 sm:p-8 ${
                      active
                        ? "border-vert bg-vert text-white shadow-float"
                        : "border-encre/8 bg-papier text-encre hover:border-vert/30"
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
                      className={`mt-0.5 flex size-6 items-center justify-center rounded-full border-2 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sable ${
                        active ? "border-sable bg-sable text-vert-deep" : "border-vert/25"
                      }`}
                    >
                      {active && <Check width={13} height={13} />}
                    </span>

                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-[20px] leading-6 font-medium">{plan.name}</span>
                        {plan.badge && (
                          <span
                            className={`rounded-md px-2 py-1 text-[13px] leading-none font-medium ${
                              active ? "bg-sable text-vert-deep" : "bg-sable-soft text-sable-ink"
                            }`}
                          >
                            {plan.badge}
                          </span>
                        )}
                      </span>
                      <span className={`mt-2 block text-[15px] ${active ? "text-white/80" : "text-encre/70"}`}>
                        {plan.billing}
                      </span>
                      <span className={`mt-1 block text-[14px] ${active ? "text-sable" : "text-sable-ink"}`}>
                        {plan.detail}
                      </span>
                    </span>

                    <span className="col-start-2 mt-4 flex items-baseline gap-2 sm:col-start-3 sm:row-start-1 sm:mt-0 sm:block sm:text-right">
                      {plan.was && (
                        <s className={`block text-[16px] tabular-nums sm:mb-1 ${active ? "text-white/55" : "text-encre/45"}`}>
                          <span className="sr-only">Au lieu de </span>
                          {plan.was}
                        </s>
                      )}
                      <span className="block text-[clamp(2rem,3.2vw,2.75rem)] leading-none font-light tracking-[-0.03em] tabular-nums">
                        {plan.price}
                      </span>
                      <span className={`text-[14px] ${active ? "text-white/70" : "text-encre/60"}`}>{plan.period}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <a
            href={`/paiement?offre=${selected}`}
            className="group mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-vert text-[17px] font-medium text-white shadow-soft transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
          >
            {plans.find((p) => p.id === selected)?.cta}
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-6 flex flex-col items-center gap-4 text-center">
            <PaymentLogos className="justify-center" />
            <p className="inline-flex items-center gap-2 text-[14px] text-encre/65">
              <ShieldCheck className="shrink-0 text-vert" />
              Paiement sécurisé · Code promo à l&apos;étape suivante
            </p>
            <p className="text-[13px] text-encre/55">Prix TTC, TVA 5,5 % incluse</p>
          </div>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <ul className="grid gap-3 sm:grid-cols-2">
            {practical.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-[1.25rem] border border-encre/8 bg-papier p-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-vert text-sable">
                  <Icon />
                </span>
                <p className="mt-4 text-[16px] font-medium text-encre">{title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-encre/65">{text}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-4">
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
      </div>
    </section>
  );
}
