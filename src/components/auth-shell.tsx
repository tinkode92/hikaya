import type { ReactNode } from "react";
import { CharacterFill } from "./character-fill";
import { Check } from "./icons";

const promises = [
  "Le même compte sur le site et dans l'application",
  "L'écoute reprend là où elle s'était arrêtée, partout",
  "Un abonnement pris dans l'app donne aussi accès au site",
];

// Mise en page des pages de compte (connexion, inscription, mot de passe oublié) :
// le formulaire sur une carte papier, la promesse « un seul compte » sur une carte verte.
export function AuthShell({
  eyebrow,
  first,
  second,
  intro,
  children,
}: {
  eyebrow: string;
  first: string;
  second: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main>
      <section className="px-3 pt-[calc(80px+var(--banner-h))] sm:px-6 sm:pt-[calc(96px+var(--banner-h))]">
        <div className="mx-auto grid max-w-[1280px] gap-3 lg:grid-cols-[1.05fr_1fr]">
          <div className="rounded-[2.25rem] bg-papier px-5 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-[clamp(1.5rem,4.5vh,3.5rem)]">
            <div className="page-enter mx-auto w-full max-w-[460px]">
              <p className="text-[15px] font-medium text-sable-ink">{eyebrow}</p>
              <h1 className="mt-2 text-[clamp(1.65rem,min(3.4vw,5vh),2.75rem)] leading-[1.06] font-light tracking-[-0.03em] text-balance italic">
                <span className="text-sable-ink">{first}</span> <span className="text-vert">{second}</span>
              </h1>
              {intro && (
                <div className="mt-2 text-[15px] leading-snug text-encre/65 [@media(max-height:700px)]:hidden">{intro}</div>
              )}
              <div className="mt-[clamp(1rem,3.5vh,2rem)]">{children}</div>
            </div>
          </div>

          <aside className="relative hidden flex-col overflow-hidden rounded-[2.25rem] bg-vert px-12 pt-[clamp(1.5rem,4.5vh,3.5rem)] text-white lg:flex xl:px-16">
            <p className="text-[15px] font-medium text-sable">Un seul compte</p>
            <p className="mt-2 max-w-[16ch] text-[clamp(1.9rem,min(3vw,5vh),2.6rem)] leading-[1.06] font-light tracking-[-0.025em] italic">
              <span className="text-sable">Sur le site</span> et dans l&apos;application
            </p>
            <ul className="mt-[clamp(1rem,3vh,2rem)] space-y-3">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] text-white/85">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sable text-vert-deep">
                    <Check width={13} height={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            {/* Le personnage prend toute la place restante : pas de vide dans le bloc vert */}
            <CharacterFill src="/characters/ibn-khaldun.webp" width={900} height={1311} className="mt-[clamp(0.5rem,2vh,1.5rem)]" />
          </aside>
        </div>
      </section>
    </main>
  );
}
