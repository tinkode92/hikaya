"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { account } from "@/lib/account";
import { brandPaths } from "@/lib/brand-paths";
import { getPlan, plans, type PlanId } from "@/lib/plans";
import { Divider, Field, inputClass, primaryButton } from "./forms/fields";
import { ArrowUpRight, Check, Close, Lock, ShieldCheck, Tag } from "./icons";

// Paiement (CDC §05) : Stripe aux couleurs de HIKAYA. Le dev remplace les champs par le Payment
// Element / Express Checkout de Stripe ; la mise en page et les textes restent ceux-ci.

const included = [
  "Tout le catalogue en illimité",
  "Sur le site et dans l'application",
  "Sans engagement, résiliable à tout moment",
];

function ExpressButton({ label, className, children }: { label: string; className: string; children: React.ReactNode }) {
  return (
    <button type="button" aria-label={label} className={`flex h-12 items-center justify-center rounded-xl transition-opacity hover:opacity-90 ${className}`}>
      {children}
    </button>
  );
}

const cardInput =
  "h-12 w-full bg-transparent px-4 text-[16px] text-encre placeholder:text-encre/40 focus:outline-none";

export function Checkout() {
  const router = useRouter();
  const params = useSearchParams();
  const [planId, setPlanId] = useState<PlanId>(getPlan(params.get("offre")).id);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState<string | null>(null);
  const [trialEnd, setTrialEnd] = useState("dans 7 jours");
  const monthly = planId === "mensuel";

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    setTrialEnd(`le ${d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}`);
  }, []);

  const lines = monthly
    ? [
        ["3 premiers mois", "4,90 €/mois"],
        ["Ensuite", "9,90 €/mois"],
      ]
    : [
        ["7 jours d'essai", "0,00 €"],
        [`Puis ${trialEnd}`, "79,20 €/an"],
      ];

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_420px]">
      {/* Récapitulatif : en premier sur mobile, à droite en desktop */}
      <aside className="rounded-[1.75rem] bg-vert p-6 text-white sm:p-8 lg:sticky lg:top-[calc(var(--banner-h)+7rem)] lg:col-start-2 lg:row-start-1 lg:self-start">
        <h2 className="text-[15px] font-medium text-sable">Votre offre</h2>

        <fieldset className="mt-4">
          <legend className="sr-only">Choisissez votre offre</legend>
          <div className="grid grid-cols-2 gap-1 rounded-full bg-white/10 p-1">
            {plans.map((p) => (
              <label
                key={p.id}
                className={`cursor-pointer rounded-full px-4 py-2.5 text-center text-[15px] font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-sable ${
                  planId === p.id ? "bg-papier text-vert-deep" : "text-white/80 hover:text-white"
                }`}
              >
                <input type="radio" name="offre" value={p.id} checked={planId === p.id} onChange={() => setPlanId(p.id)} className="sr-only" />
                {p.name}
              </label>
            ))}
          </div>
        </fieldset>

        <p className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-[20px] font-medium">{monthly ? "Mensuel" : "Annuel"}</span>
          <span className="rounded-md bg-sable px-2 py-1 text-[13px] leading-none font-medium text-vert-deep">
            {getPlan(planId).badge}
          </span>
        </p>

        <dl className="mt-5 grid gap-3 border-y border-white/12 py-5 text-[15px]">
          {lines.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4">
              <dt className="text-white/70">{k}</dt>
              <dd className="tabular-nums">{v}</dd>
            </div>
          ))}
          {applied && (
            <div className="flex items-center justify-between gap-4">
              <dt className="inline-flex items-center gap-2 text-sable">
                <Tag width={15} height={15} />
                Code {applied}
              </dt>
              <dd>
                <button
                  type="button"
                  onClick={() => setApplied(null)}
                  aria-label={`Retirer le code ${applied}`}
                  className="flex size-7 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
                >
                  <Close width={14} height={14} />
                </button>
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-5 flex items-end justify-between gap-4">
          <span className="text-[15px] text-white/80">À payer aujourd&apos;hui</span>
          <span className="text-[40px] leading-none font-light tracking-[-0.03em] tabular-nums">
            {monthly ? "4,90 €" : "0,00 €"}
          </span>
        </div>
        <p className="mt-2 text-right text-[13px] text-white/55">Prix TTC, TVA 5,5&nbsp;% incluse</p>

        {/* Code promo (créé par HIKAYA dans Stripe) */}
        <div className="mt-6">
          {promoOpen ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (promo.trim()) setApplied(promo.trim().toUpperCase());
                setPromo("");
                setPromoOpen(false);
              }}
              className="flex gap-2"
            >
              <label className="sr-only" htmlFor="code-promo">Code promo</label>
              <input
                id="code-promo"
                autoFocus
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Code promo"
                className="h-12 min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 text-[16px] text-white uppercase placeholder:text-white/45 placeholder:normal-case focus:border-sable focus:outline-none"
              />
              <button type="submit" className="h-12 rounded-xl bg-sable px-4 text-[15px] font-medium text-vert-deep transition-colors hover:bg-sable-soft">
                Appliquer
              </button>
            </form>
          ) : (
            !applied && (
              <button type="button" onClick={() => setPromoOpen(true)} className="inline-flex items-center gap-2 text-[15px] font-medium text-sable underline-offset-4 hover:underline">
                <Tag width={16} height={16} />
                Ajouter un code promo
              </button>
            )
          )}
        </div>

        <ul className="mt-6 space-y-3 border-t border-white/12 pt-6">
          {included.map((i) => (
            <li key={i} className="flex items-center gap-3 text-[15px] text-white/85">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sable text-vert-deep">
                <Check width={11} height={11} />
              </span>
              {i}
            </li>
          ))}
        </ul>
      </aside>

      {/* Paiement */}
      <div className="rounded-[1.75rem] bg-papier p-6 sm:p-10 lg:col-start-1 lg:row-start-1">
        <div className="mx-auto max-w-[520px]">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-encre/8 bg-white px-5 py-4 text-[15px]">
            <span className="text-encre/65">
              Connecté avec <span className="font-medium text-encre">{account.email}</span>
            </span>
            <Link href="/connexion" className="font-medium text-vert underline-offset-4 hover:underline">
              Changer
            </Link>
          </div>

          <h2 className="mt-8 text-[22px] font-medium text-vert">Paiement express</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <ExpressButton label="Payer avec Apple Pay" className="bg-black text-white">
              <svg viewBox="0 0 24 24" className="h-11 w-auto" aria-hidden><path d={brandPaths.applePay} fill="currentColor" /></svg>
            </ExpressButton>
            <ExpressButton label="Payer avec Google Pay" className="bg-black text-white">
              <svg viewBox="0 0 24 24" className="h-11 w-auto" aria-hidden><path d={brandPaths.googlePay} fill="currentColor" /></svg>
            </ExpressButton>
            <ExpressButton label="Payer avec PayPal" className="bg-[#FFC439] text-[#003087]">
              <svg viewBox="0 0 24 24" className="h-6 w-auto" aria-hidden><path d={brandPaths.paypal} fill="currentColor" /></svg>
            </ExpressButton>
          </div>

          <div className="my-8">
            <Divider>ou par carte</Divider>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/confirmation");
            }}
            className="grid gap-5"
          >
            <div>
              <p className="text-[15px] font-medium text-encre">Carte bancaire</p>
              <div className="mt-2 overflow-hidden rounded-xl border border-encre/10 bg-white focus-within:border-vert/50">
                <label className="sr-only" htmlFor="cb-numero">Numéro de carte</label>
                <input id="cb-numero" inputMode="numeric" autoComplete="cc-number" placeholder="1234 1234 1234 1234" className={`${cardInput} border-b border-encre/10`} />
                <div className="grid grid-cols-2">
                  <label className="sr-only" htmlFor="cb-expiration">Date d&apos;expiration</label>
                  <input id="cb-expiration" inputMode="numeric" autoComplete="cc-exp" placeholder="MM / AA" className={`${cardInput} border-r border-encre/10`} />
                  <label className="sr-only" htmlFor="cb-cvc">Cryptogramme</label>
                  <input id="cb-cvc" inputMode="numeric" autoComplete="cc-csc" placeholder="CVC" className={cardInput} />
                </div>
              </div>
            </div>
            <Field label="Nom sur la carte">
              <input autoComplete="cc-name" className={inputClass} placeholder="Prénom Nom" />
            </Field>

            {/* CGV art. 3 : case dédiée, non précochée, obligatoire avant de confirmer */}
            <label className="mt-2 flex cursor-pointer items-start gap-3 text-[15px] leading-snug text-encre/75">
              <input type="checkbox" name="cgv" required className="peer sr-only" />
              <span
                aria-hidden
                className="mt-px flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-vert/30 text-transparent transition-colors peer-checked:border-vert peer-checked:bg-vert peer-checked:text-sable peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-vert"
              >
                <Check width={12} height={12} />
              </span>
              <span>
                J&apos;ai lu et j&apos;accepte les{" "}
                <Link href="/cgv" className="font-medium text-vert underline underline-offset-2">
                  conditions générales de vente
                </Link>
                .
              </span>
            </label>

            <button type="submit" className={`${primaryButton} mt-2`}>
              <Lock width={17} height={17} />
              {monthly ? "Payer 4,90 € et commencer" : "Commencer l'essai, puis 79,20 €/an"}
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="text-[13px] leading-relaxed text-encre/60">
              {monthly
                ? "4,90 €/mois pendant 3 mois, puis 9,90 €/mois. "
                : `Aucun prélèvement aujourd'hui. Sans résiliation avant la fin de l'essai, 79,20 € sont prélevés ${trialEnd} pour un an. `}
              Résiliable à tout moment depuis Mon compte. Vous disposez d&apos;un droit de rétractation de 14 jours
              (article 12 des CGV).
            </p>
          </form>

          <p className="mt-8 flex items-center justify-center gap-2 border-t border-encre/8 pt-6 text-[14px] text-encre/60">
            <ShieldCheck className="shrink-0 text-vert" />
            Paiement sécurisé par Stripe · 3D Secure
          </p>
        </div>
      </div>
    </div>
  );
}
