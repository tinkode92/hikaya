"use client";

import Image from "next/image";
import { useState } from "react";
import { giftOptions } from "@/lib/gift";
import { ArrowUpRight, Check, Gift, ShieldCheck } from "./icons";
import { PaymentLogos } from "./payment-logos";

const MAX_MESSAGE = 200;

// Parcours « Offrir HIKAYA » : durée, personnalisation avec aperçu de la carte en direct, envoi, paiement.
// Le paiement et l'envoi de la carte sont branchés par le dev (Stripe, Brevo).
export function GiftBuilder() {
  const [optionId, setOptionId] = useState("1-an");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [delivery, setDelivery] = useState<"email" | "print">("email");
  const option = giftOptions.find((o) => o.id === optionId)!;

  const field =
    "mt-2 h-12 w-full rounded-xl border border-encre/10 bg-white px-4 text-[16px] text-encre placeholder:text-encre/40 focus:border-vert/50 focus:outline-none";
  const step = "text-[13px] font-medium text-sable-ink";

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-10">
        {/* 1. Durée */}
        <fieldset>
          <legend className="w-full">
            <span className={step}>Étape 1</span>
            <span className="mt-1 block text-[24px] font-medium text-vert">Choisissez la durée</span>
          </legend>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {giftOptions.map((o) => {
              const active = o.id === optionId;
              return (
                <label
                  key={o.id}
                  className={`relative flex cursor-pointer flex-col rounded-[1.25rem] border p-5 transition-colors ${
                    active ? "border-vert bg-vert text-white" : "border-encre/8 bg-papier text-encre hover:border-vert/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="duree"
                    value={o.id}
                    checked={active}
                    onChange={() => setOptionId(o.id)}
                    className="peer sr-only"
                  />
                  {o.badge && (
                    <span
                      className={`absolute -top-3 left-5 rounded-md px-2 py-1 text-[12px] leading-none font-medium ${
                        active ? "bg-sable text-vert-deep" : "bg-sable-soft text-sable-ink"
                      }`}
                    >
                      {o.badge}
                    </span>
                  )}
                  <span className="text-[18px] font-medium">{o.label}</span>
                  <span className="mt-2 text-[28px] leading-none font-light tracking-[-0.02em] tabular-nums">{o.price}</span>
                  <span className={`mt-2 min-h-5 text-[13px] ${active ? "text-sable" : "text-encre/60"}`}>{o.note}</span>
                  <span
                    aria-hidden
                    className={`absolute top-5 right-5 flex size-5 items-center justify-center rounded-full border-2 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sable ${
                      active ? "border-sable bg-sable text-vert-deep" : "border-vert/25"
                    }`}
                  >
                    {active && <Check width={11} height={11} />}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* 2. Personnalisation */}
        <fieldset>
          <legend className="w-full">
            <span className={step}>Étape 2</span>
            <span className="mt-1 block text-[24px] font-medium text-vert">Personnalisez la carte</span>
          </legend>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-[15px] font-medium text-encre">
              Pour
              <input id="cadeau-pour" className={field} value={to} onChange={(e) => setTo(e.target.value)} placeholder="Prénom du destinataire" maxLength={40} />
            </label>
            <label className="text-[15px] font-medium text-encre">
              De la part de
              <input id="cadeau-de" className={field} value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Votre prénom" maxLength={40} />
            </label>
            <label className="text-[15px] font-medium text-encre sm:col-span-2">
              Votre message
              <textarea
                id="cadeau-message"
                className={`${field} h-28 resize-none py-3 leading-relaxed`}
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE))}
                placeholder="Joyeux anniversaire ! Voici de belles histoires à écouter en famille."
              />
              <span className="mt-1 block text-right text-[13px] font-normal text-encre/50 tabular-nums">
                {message.length}/{MAX_MESSAGE}
              </span>
            </label>
          </div>
        </fieldset>

        {/* 3. Envoi */}
        <fieldset>
          <legend className="w-full">
            <span className={step}>Étape 3</span>
            <span className="mt-1 block text-[24px] font-medium text-vert">Choisissez l&apos;envoi</span>
          </legend>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(
              [
                ["email", "Par e-mail", "À la date de votre choix"],
                ["print", "À imprimer", "Une carte à remettre en main propre"],
              ] as const
            ).map(([id, title, text]) => (
              <label
                key={id}
                className={`flex cursor-pointer items-start gap-3 rounded-[1.25rem] border p-5 transition-colors ${
                  delivery === id ? "border-vert bg-papier" : "border-encre/8 bg-papier hover:border-vert/30"
                }`}
              >
                <input
                  type="radio"
                  name="envoi"
                  checked={delivery === id}
                  onChange={() => setDelivery(id)}
                  className="mt-1 size-4 accent-[var(--color-vert)]"
                />
                <span>
                  <span className="block text-[16px] font-medium text-encre">{title}</span>
                  <span className="mt-0.5 block text-[14px] text-encre/60">{text}</span>
                </span>
              </label>
            ))}
          </div>
          {delivery === "email" && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-[15px] font-medium text-encre">
                E-mail du destinataire
                <input id="cadeau-email" type="email" className={field} placeholder="prenom@exemple.fr" />
              </label>
              <label className="text-[15px] font-medium text-encre">
                Date d&apos;envoi
                <input id="cadeau-date" type="date" className={field} />
              </label>
            </div>
          )}
        </fieldset>

        <div>
          <a
            href="#paiement"
            className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-vert text-[17px] font-medium text-white shadow-soft transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
          >
            Offrir {option.duration} · {option.price}
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="mt-5 flex flex-col items-center gap-3 text-center">
            <PaymentLogos className="justify-center" />
            <p className="inline-flex items-center gap-2 text-[14px] text-encre/65">
              <ShieldCheck className="shrink-0 text-vert" />
              Paiement sécurisé · Sans renouvellement automatique
            </p>
          </div>
        </div>
      </form>

      {/* Aperçu de la carte cadeau, mis à jour en direct */}
      <div className="lg:sticky lg:top-[calc(var(--banner-h)+7rem)] lg:self-start">
        <p className="mb-4 text-[14px] text-encre/60">Aperçu de la carte</p>
        <div className="overflow-hidden rounded-[1.75rem] bg-vert-deep text-white shadow-object">
          <div className="relative aspect-[16/9]">
            <Image src="/episodes/al-andalus-04.webp" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(34_56_38_/_0.95))]" />
            <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-sable px-3 py-1.5 text-[13px] font-medium text-vert-deep">
              <Gift width={15} height={15} />
              Carte cadeau
            </span>
            <Image
              src="/brand/typo-blanc.svg"
              alt="Hikäyä"
              width={848}
              height={513}
              className="absolute right-5 bottom-3 h-10 w-auto"
            />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight font-light italic">
              <span className="text-sable">{option.duration} d&apos;histoires</span>
              <br />
              pour {to.trim() || "…"}
            </p>
            <p className="mt-4 min-h-[3lh] text-[16px] leading-relaxed whitespace-pre-line text-white/85">
              {message.trim() || "Votre message apparaîtra ici."}
            </p>
            <p className="mt-4 text-[15px] text-white/70">De la part de {from.trim() || "…"}</p>
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
              <span className="text-[13px] text-white/60">Code à activer sur le site ou dans l&apos;application</span>
              <span className="rounded-lg bg-white/10 px-3 py-2 font-mono text-[14px] tracking-[0.15em] text-sable">HKY-••••-••••</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
