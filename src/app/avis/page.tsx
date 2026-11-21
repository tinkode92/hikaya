import type { Metadata } from "next";
import { ReviewForm } from "@/components/forms/review-form";
import { Check } from "@/components/icons";
import { account } from "@/lib/account";

export const metadata: Metadata = {
  title: "Laisser un avis",
  robots: { index: false },
};

// Mention exigée pour les avis en ligne (CDC §07) : comment ils sont collectés et contrôlés.
const rules = [
  "Seuls les abonnés HIKAYA peuvent laisser un avis.",
  "Chaque avis est lu par l'équipe HIKAYA avant publication, sous quelques jours.",
  "Les avis ne donnent lieu à aucune contrepartie.",
  "Votre prénom et votre avis sont publiés, jamais votre e-mail.",
];

export default function AvisPage() {
  return (
    <main>
      <section className="px-3 pt-[calc(80px+var(--banner-h))] sm:px-6 sm:pt-[calc(96px+var(--banner-h))]">
        <div className="mx-auto grid max-w-[1280px] gap-3 lg:grid-cols-[1.25fr_1fr]">
          <div className="rounded-[2.25rem] bg-papier px-5 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-[clamp(1.5rem,4.5vh,3.5rem)]">
            <div className="page-enter mx-auto max-w-[580px]">
              <p className="text-[15px] font-medium text-sable-ink">Laisser un avis</p>
              <h1 className="mt-2 text-[clamp(1.65rem,min(3.2vw,5vh),2.75rem)] leading-[1.06] font-light tracking-[-0.03em] text-balance italic">
                <span className="text-sable-ink">Racontez-nous</span> <span className="text-vert">vos moments d&apos;écoute</span>
              </h1>
              <p className="mt-2 text-[15px] leading-snug text-encre/65 [@media(max-height:760px)]:hidden">
                Votre avis aide d&apos;autres familles à découvrir HIKAYA, et nous aide à préparer les prochaines
                histoires.
              </p>
              <div className="mt-[clamp(1rem,3.5vh,2rem)]">
                <ReviewForm firstName={account.firstName} />
              </div>
            </div>
          </div>

          <aside className="rounded-[2.25rem] bg-vert px-6 py-10 text-white sm:px-12 lg:px-12 lg:py-[clamp(1.5rem,4.5vh,3.5rem)]">
            <p className="text-[15px] font-medium text-sable">Avis vérifiés</p>
            <h2 className="mt-4 text-[clamp(1.8rem,2.6vw,2.4rem)] leading-[1.08] font-light tracking-[-0.02em] italic">
              Comment les avis sont publiés
            </h2>
            <ul className="mt-8 space-y-4">
              {rules.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[16px] leading-snug text-white/85">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sable text-vert-deep">
                    <Check width={13} height={13} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
