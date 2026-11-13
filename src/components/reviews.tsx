import { ArrowUpRight, ShieldCheck, Star } from "./icons";
import { SectionHeading } from "./section-heading";

// Avis vérifiés (cahier des charges §07) : le dev branche ici les avis validés dans le back-office.
// Tant que la liste est vide, la section affiche seulement la vraie note de l'app sur l'App Store.
export type Review = { name: string; rating: number; text: string };

const APP_STORE = "https://apps.apple.com/fr/app/hikaya/id6754205548";
const APP_STORE_RATING = { value: 4.6, count: 33 }; // relevé sur la fiche App Store

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex gap-1 ${className}`} aria-label={`${String(rating).replace(".", ",")} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} width={16} height={16} className={i < Math.round(rating) ? "" : "opacity-25"} />
      ))}
    </span>
  );
}

export function Reviews({ reviews = [] }: { reviews?: Review[] }) {
  return (
    <section id="avis" className="px-3 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow="Avis des familles"
          first="Ce qu'en disent"
          second="les familles"
          className="mb-8 sm:mb-10"
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col justify-between gap-12 rounded-[1.75rem] bg-vert p-8 text-white">
            <div>
              <p className="text-[72px] leading-none font-light tracking-[-0.04em] tabular-nums">
                4,6
                <span className="text-[28px] tracking-normal text-white/55"> / 5</span>
              </p>
              <Stars rating={APP_STORE_RATING.value} className="mt-4 text-sable" />
              <p className="mt-4 text-[15px] text-white/70">
                {APP_STORE_RATING.count} notes sur l&apos;App Store · Catégorie Éducation
              </p>
            </div>
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 self-start rounded-full bg-papier px-5 text-[15px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
            >
              Voir la fiche de l&apos;app
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {reviews.length > 0 ? (
            <ul className="grid gap-4 sm:grid-cols-2">
              {reviews.map((r) => (
                <li key={r.name} className="flex flex-col rounded-[1.75rem] border border-encre/8 bg-papier p-8">
                  <Stars rating={r.rating} className="text-sable-ink" />
                  <blockquote className="mt-4 flex-1 text-[19px] leading-snug text-encre/85">
                    « {r.text} »
                  </blockquote>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="text-[15px] font-medium text-vert">{r.name}</span>
                    <span className="inline-flex items-center gap-2 text-[13px] text-encre/60">
                      <ShieldCheck width={16} height={16} className="text-vert" />
                      Avis vérifié
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col justify-center rounded-[1.75rem] border border-encre/8 bg-papier p-8 sm:p-12">
              <ShieldCheck width={24} height={24} className="text-vert" />
              <h3 className="mt-6 max-w-[24ch] text-[26px] leading-tight font-medium text-vert">
                Sur le site, seuls les abonnés peuvent donner leur avis
              </h3>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-encre/65">
                Quelques jours après leur premier paiement, les familles reçoivent un email pour noter
                les histoires. Chaque avis est relu par HIKAYA avant d&apos;être publié, avec la mention
                « avis vérifié ».
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
