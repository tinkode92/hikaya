import Image from "next/image";
import type { ReactNode } from "react";
import { ArchOutline } from "./arch";
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
      <section className="px-3 pt-[calc(88px+var(--banner-h))] sm:px-6 sm:pt-[calc(104px+var(--banner-h))]">
        <div className="mx-auto grid max-w-[1280px] gap-3 lg:grid-cols-[1.05fr_1fr]">
          <div className="rounded-[2.25rem] bg-papier px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="page-enter mx-auto w-full max-w-[440px]">
              <p className="text-[15px] font-medium text-sable-ink">{eyebrow}</p>
              <h1 className="mt-4 text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.04] font-light tracking-[-0.03em] text-balance italic">
                <span className="block text-sable-ink">{first}</span>
                <span className="block text-vert">{second}</span>
              </h1>
              {intro && <div className="mt-5 text-[16px] leading-relaxed text-encre/65">{intro}</div>}
              <div className="mt-10">{children}</div>
            </div>
          </div>

          <aside className="relative hidden flex-col overflow-hidden rounded-[2.25rem] bg-vert px-12 pt-16 text-white lg:flex xl:px-16">
            <p className="text-[15px] font-medium text-sable">Un seul compte</p>
            <p className="mt-4 max-w-[16ch] text-[clamp(2rem,3vw,2.8rem)] leading-[1.06] font-light tracking-[-0.025em] italic">
              <span className="text-sable">Sur le site</span> et dans l&apos;application
            </p>
            <ul className="mt-8 space-y-4">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] text-white/85">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sable text-vert-deep">
                    <Check width={13} height={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="relative mx-auto mt-auto w-[78%] max-w-[420px] pt-12">
              <ArchOutline className="absolute inset-x-[-14%] bottom-0 h-[105%] w-[128%] text-sable/45" />
              <Image
                src="/characters/ibn-khaldun.webp"
                alt=""
                width={900}
                height={1311}
                sizes="420px"
                className="relative mx-auto h-auto w-[70%]"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
