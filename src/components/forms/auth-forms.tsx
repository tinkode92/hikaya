"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Check, GoogleG, Mail } from "../icons";
import { Divider, Field, inputClass, primaryButton, secondaryButton } from "./fields";
import { PasswordInput } from "./password-input";

// Formulaires de compte (CDC §04). L'authentification est celle de l'application HIKAYA :
// le dev branche ici la connexion par e-mail, Google, et le retour à la page d'origine (?retour=).

// En démo : la connexion mène à Mon compte, l'inscription au choix de l'offre.
function GoogleButton({ to }: { to: string }) {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push(to)} className={secondaryButton}>
      <GoogleG />
      Continuer avec Google
    </button>
  );
}

const Arrow = () => (
  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
);

export function LoginForm() {
  const router = useRouter();
  return (
    <div className="grid gap-6">
      <GoogleButton to="/compte" />
      <Divider>ou avec votre e-mail</Divider>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/compte");
        }}
        className="grid gap-5"
      >
        <Field label="E-mail">
          <input type="email" name="email" autoComplete="email" required className={inputClass} placeholder="prenom@exemple.fr" />
        </Field>
        <Field
          label="Mot de passe"
          aside={
            <Link href="/mot-de-passe-oublie" className="text-[14px] font-normal text-vert underline-offset-4 hover:underline">
              Mot de passe oublié ?
            </Link>
          }
        >
          <PasswordInput />
        </Field>
        <button type="submit" className={`${primaryButton} mt-2`}>
          Se connecter
          <Arrow />
        </button>
      </form>
      <p className="text-center text-[15px] text-encre/65">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="font-medium text-vert underline-offset-4 hover:underline">
          Créer un compte
        </Link>
      </p>
    </div>
  );
}

export function SignupForm() {
  const router = useRouter();
  return (
    <div className="grid gap-6">
      <GoogleButton to="/abonnements" />
      <Divider>ou avec votre e-mail</Divider>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/abonnements");
        }}
        className="grid gap-5"
      >
        <Field label="Prénom">
          <input name="prenom" autoComplete="given-name" required className={inputClass} placeholder="Votre prénom" />
        </Field>
        <Field label="E-mail">
          <input type="email" name="email" autoComplete="email" required className={inputClass} placeholder="prenom@exemple.fr" />
        </Field>
        <Field label="Mot de passe" hint="8 caractères minimum">
          <PasswordInput autoComplete="new-password" minLength={8} />
        </Field>

        {/* Accord marketing : jamais coché par défaut (CDC §04) */}
        <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-snug text-encre/75">
          <input type="checkbox" name="newsletter" className="peer sr-only" />
          <span
            aria-hidden
            className="mt-px flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-vert/30 text-transparent transition-colors peer-checked:border-vert peer-checked:bg-vert peer-checked:text-sable peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-vert"
          >
            <Check width={12} height={12} />
          </span>
          Je souhaite recevoir les nouveautés et les offres HIKAYA par e-mail.
        </label>

        <button type="submit" className={`${primaryButton} mt-2`}>
          Créer mon compte
          <Arrow />
        </button>
        <p className="text-[13px] leading-relaxed text-encre/55">
          En créant un compte, vous acceptez les{" "}
          <Link href="/cgu" className="underline underline-offset-2 hover:text-vert">
            conditions d&apos;utilisation
          </Link>{" "}
          et la{" "}
          <Link href="/confidentialite" className="underline underline-offset-2 hover:text-vert">
            politique de confidentialité
          </Link>
          .
        </p>
      </form>
      <p className="text-center text-[15px] text-encre/65">
        Déjà un compte ?{" "}
        <Link href="/connexion" className="font-medium text-vert underline-offset-4 hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
}

export function ResetForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);

  if (sentTo)
    return (
      <div className="animate-rise rounded-[1.5rem] border border-encre/8 bg-white p-6" role="status">
        <span className="flex size-11 items-center justify-center rounded-full bg-vert text-sable">
          <Mail />
        </span>
        <p className="mt-4 text-[18px] font-medium text-encre">Vérifiez votre boîte e-mail</p>
        <p className="mt-2 text-[15px] leading-relaxed text-encre/65">
          Si un compte existe pour <span className="font-medium text-encre">{sentTo}</span>, vous allez recevoir un
          lien pour choisir un nouveau mot de passe. Pensez à regarder dans les courriers indésirables.
        </p>
        <button
          type="button"
          onClick={() => setSentTo(null)}
          className="mt-5 text-[15px] font-medium text-vert underline-offset-4 hover:underline"
        >
          Utiliser une autre adresse
        </button>
      </div>
    );

  return (
    <div className="grid gap-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSentTo(String(new FormData(e.currentTarget).get("email") ?? ""));
        }}
        className="grid gap-5"
      >
        <Field label="E-mail">
          <input type="email" name="email" autoComplete="email" required className={inputClass} placeholder="prenom@exemple.fr" />
        </Field>
        <button type="submit" className={`${primaryButton} mt-2`}>
          Recevoir le lien
          <Arrow />
        </button>
      </form>
      <p className="text-center text-[15px] text-encre/65">
        <Link href="/connexion" className="font-medium text-vert underline-offset-4 hover:underline">
          Retour à la connexion
        </Link>
      </p>
    </div>
  );
}
