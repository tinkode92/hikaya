"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "../icons";
import { Field, inputClass } from "../forms/fields";

// Informations personnelles : prénom et e-mail modifiables, mot de passe par lien e-mail.
export function ProfileForm({ firstName, email }: { firstName: string; email: string }) {
  const [saved, setSaved] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSaved(true);
      }}
      onChange={() => setSaved(false)}
      className="grid gap-5 sm:grid-cols-2"
    >
      <Field label="Prénom">
        <input name="prenom" defaultValue={firstName} autoComplete="given-name" className={inputClass} />
      </Field>
      <Field label="E-mail">
        <input type="email" name="email" defaultValue={email} autoComplete="email" className={inputClass} />
      </Field>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex h-12 items-center rounded-full bg-vert px-6 text-[15px] font-medium text-white transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
        >
          Enregistrer
        </button>
        <Link href="/mot-de-passe-oublie" className="text-[15px] font-medium text-vert underline-offset-4 hover:underline">
          Changer mon mot de passe
        </Link>
        <span role="status" className={`inline-flex items-center gap-2 text-[14px] text-vert transition-opacity ${saved ? "" : "opacity-0"}`}>
          <Check width={14} height={14} />
          Modifications enregistrées
        </span>
      </div>
    </form>
  );
}
