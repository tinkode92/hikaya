import type { Metadata } from "next";
import { AuthShell } from "@/components/auth-shell";
import { SignupForm } from "@/components/forms/auth-forms";

export const metadata: Metadata = {
  title: "Créer un compte",
  description: "Créez votre compte HIKAYA pour écouter les histoires sur le site et dans l'application.",
};

export default function InscriptionPage() {
  return (
    <AuthShell
      eyebrow="Créer un compte"
      first="Bienvenue"
      second="chez HIKAYA"
      intro="Votre compte fonctionne aussi dans l'application, avec les mêmes identifiants."
    >
      <SignupForm />
    </AuthShell>
  );
}
