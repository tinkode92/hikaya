import type { Metadata } from "next";
import { AuthShell } from "@/components/auth-shell";
import { LoginForm } from "@/components/forms/auth-forms";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre compte HIKAYA, le même que dans l'application.",
};

export default function ConnexionPage() {
  return (
    <AuthShell
      eyebrow="Connexion"
      first="Content de vous"
      second="revoir"
      intro="Utilisez le même compte que dans l'application HIKAYA."
    >
      <LoginForm />
    </AuthShell>
  );
}
