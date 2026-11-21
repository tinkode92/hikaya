"use client";

import Link from "next/link";
import { useState } from "react";
import { books } from "@/lib/catalogue";
import { ArrowUpRight, Check, ChevronRight, Star } from "../icons";
import { Field, inputClass, primaryButton } from "./fields";

const MAX = 500;
const labels = ["Pas convaincu", "Peut mieux faire", "Bien", "Très bien", "Coup de cœur"];

// Laisser un avis (CDC §07) : note sur 5, commentaire, prénom. L'avis part « en attente »
// dans le back-office ; rien n'est publié sans la validation de HIKAYA.
export function ReviewForm({ firstName }: { firstName: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  const shown = hover || rating;

  if (sent)
    return (
      <div role="status" className="animate-rise rounded-[1.5rem] border border-encre/8 bg-white p-6 sm:p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-vert text-sable">
          <Check />
        </span>
        <p className="mt-5 text-[22px] font-medium text-vert">Merci {firstName} !</p>
        <p className="mt-2 text-[16px] leading-relaxed text-encre/65">
          Votre avis a bien été envoyé. Il sera lu par l&apos;équipe HIKAYA avant d&apos;être publié sur le site.
        </p>
        <Link href="/catalogue" className="mt-6 inline-flex text-[15px] font-medium text-vert underline-offset-4 hover:underline">
          Retour aux histoires
        </Link>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (rating) setSent(true);
      }}
      className="grid gap-[clamp(0.75rem,2.2vh,1.25rem)]"
    >
      {/* Note et histoire sur une même ligne : le formulaire tient dans un écran de portable */}
      <div className="grid gap-[clamp(0.75rem,2.2vh,1.25rem)] sm:grid-cols-[auto_minmax(0,1fr)] sm:items-end sm:gap-6">
        <fieldset>
          <legend className="text-[15px] font-medium text-encre">
            Votre note <span className="font-normal text-encre/55">· {shown ? labels[shown - 1] : "touchez une étoile"}</span>
          </legend>
          <div className="mt-1 -ml-1 flex" onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <label
                key={n}
                onMouseEnter={() => setHover(n)}
                className="cursor-pointer rounded-lg p-1 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-vert"
              >
                <input type="radio" name="note" value={n} checked={rating === n} onChange={() => setRating(n)} required className="sr-only" />
                <span className="sr-only">{n} sur 5</span>
                <Star
                  width={32}
                  height={32}
                  className={`transition-[color,transform] duration-200 ${n <= shown ? "scale-105 text-sable" : "text-encre/15"}`}
                />
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="L'histoire écoutée">
          <span className="relative block">
            <select name="histoire" defaultValue="" className={`${inputClass} appearance-none pr-12`}>
              <option value="">HIKAYA en général</option>
              {books.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.series ? `${b.series} · ${b.title}` : b.title}
                </option>
              ))}
            </select>
            <ChevronRight width={18} height={18} className="pointer-events-none absolute top-1/2 right-4 mt-[3px] -translate-y-1/2 rotate-90 text-vert" />
          </span>
        </Field>
      </div>

      <Field label="Votre avis">
        <span className="relative block">
          <textarea
            name="commentaire"
            required
            minLength={20}
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, MAX))}
            placeholder="Qu'est-ce qui a plu à vos enfants ? Dans quels moments écoutez-vous HIKAYA ?"
            className={`${inputClass} h-[clamp(5rem,13vh,8rem)] resize-none py-3 pb-7 leading-relaxed`}
          />
          <span className="pointer-events-none absolute right-3 bottom-2 text-[12px] font-normal text-encre/45 tabular-nums">
            {text.length}/{MAX}
          </span>
        </span>
      </Field>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <Field label="Prénom affiché">
          <input name="prenom" defaultValue={firstName} required className={inputClass} />
        </Field>
        <Field label="Qui écoute ?">
          <input name="contexte" placeholder="Ex. : 2 enfants, 7 et 10 ans" className={inputClass} />
        </Field>
      </div>

      <button type="submit" className={`${primaryButton} mt-1`}>
        Envoyer mon avis
        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
