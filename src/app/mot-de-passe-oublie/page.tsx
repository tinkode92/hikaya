import type { Metadata } from "next";
import { AuthShell } from "@/components/auth-shell";
import { ResetForm } from "@/components/forms/auth-forms";

export const metadata: Metadata = {
  title: "Mot de passe oublié",
  description: "Recevez un lien par e-mail pour choisir un nouveau mot de passe HIKAYA.",
};

export default function MotDePasseOubliePage() {
  return (
    <AuthShell
      eyebrow="Mot de passe oublié"
      first="Pas de souci,"
      second="ça arrive"
      intro="Indiquez l'e-mail de votre compte. Nous vous envoyons un lien pour choisir un nouveau mot de passe."
    >
      <ResetForm />
    </AuthShell>
  );
}
