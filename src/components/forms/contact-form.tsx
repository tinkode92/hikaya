"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronRight } from "../icons";
import { Field, inputClass, primaryButton } from "./fields";

const subjects = ["Mon abonnement", "Mon compte", "Les histoires", "Une carte cadeau", "Un partenariat", "Autre chose"];

// Formulaire de contact : le dev l'envoie vers l'adresse de HIKAYA (Brevo ou e-mail).
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div role="status" className="animate-rise rounded-[1.5rem] border border-encre/8 bg-white p-6 sm:p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-vert text-sable">
          <Check />
        </span>
        <p className="mt-5 text-[22px] font-medium text-vert">Message envoyé</p>
        <p className="mt-2 text-[16px] leading-relaxed text-encre/65">
          Merci ! L&apos;équipe HIKAYA vous répond par e-mail, en général sous deux jours ouvrés.
        </p>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid grid-cols-2 gap-x-3 gap-y-[clamp(0.75rem,2.2vh,1.25rem)] sm:gap-x-4"
    >
      <Field label="Prénom">
        <input name="prenom" autoComplete="given-name" required className={inputClass} />
      </Field>
      <Field label="E-mail">
        <input type="email" name="email" autoComplete="email" required className={inputClass} placeholder="prenom@exemple.fr" />
      </Field>
      <Field label="Sujet" className="col-span-2">
        <span className="relative block">
          <select name="sujet" defaultValue={subjects[0]} className={`${inputClass} appearance-none pr-12`}>
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <ChevronRight width={18} height={18} className="pointer-events-none absolute top-1/2 right-4 mt-1 -translate-y-1/2 rotate-90 text-vert" />
        </span>
      </Field>
      <Field label="Message" className="col-span-2">
        <textarea name="message" required className={`${inputClass} h-[clamp(6rem,16vh,9rem)] resize-none py-3 leading-relaxed`} />
      </Field>
      <button type="submit" className={`${primaryButton} col-span-2 mt-1`}>
        Envoyer le message
        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
