import { ShieldCheck, Star } from "./icons";
import { SectionHeading } from "./section-heading";

// ⚠ EXEMPLES POUR LA MAQUETTE, pas de vrais avis.
// En production : avis vérifiés validés dans le back-office (cahier des charges §07).
const reviews = [
  {
    name: "Samira",
    rating: 5,
    text: "Mes deux garçons réclament leur épisode tous les soirs avant de dormir. Le lendemain, ils me racontent l'histoire de Ṭāriq à table !",
  },
  {
    name: "Youssef",
    rating: 5,
    text: "Enfin des histoires sur notre patrimoine, bien racontées et sans écran. On les écoute en voiture pendant les trajets.",
  },
  {
    name: "Leïla",
    rating: 5,
    text: "Ma fille de 9 ans connaît maintenant Fāṭima al-Fihriyya et l'université d'al-Qarawiyyīn. Le format audio est parfait pour elle.",
  },
  {
    name: "Karim",
    rating: 4,
    text: "Très belle production, les voix sont captivantes. Hâte de voir arriver de nouvelles séries.",
  },
];

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={i < Math.round(rating) ? "" : "opacity-25"} />
      ))}
    </span>
  );
}

export function Reviews() {
  const average = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const avg = average.toFixed(1).replace(".", ",");

  return (
    <section id="avis" className="px-3 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow="Avis des familles"
          first="Ils écoutent,"
          second="et ils en parlent."
          className="mb-8 sm:mb-10"
        />

        <div className="grid gap-4 lg:grid-cols-[0.9fr_2fr]">
          <div className="flex flex-col justify-between rounded-[1.75rem] bg-vert p-7 text-white">
            <div>
              <p className="text-[72px] leading-none font-extralight tracking-[-0.04em]">
                {avg}
                <span className="text-[28px] text-white/50"> / 5</span>
              </p>
              <Stars rating={average} className="mt-3 text-sable" />
              <p className="mt-3 text-[15px] text-white/70">
                Note moyenne sur {reviews.length} avis vérifiés
              </p>
            </div>
            <p className="mt-10 text-[13px] leading-relaxed text-white/55">
              Seuls les abonnés peuvent laisser un avis, après leur premier paiement. Chaque avis est
              relu par HIKAYA avant publication.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {reviews.map((r) => (
              <li
                key={r.name}
                className="flex flex-col rounded-[1.75rem] border border-vert/8 bg-papier p-7"
              >
                <Stars rating={r.rating} className="text-sable-ink" />
                <blockquote className="mt-4 flex-1 text-[19px] leading-snug font-light text-encre/85 italic">
                  « {r.text} »
                </blockquote>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="text-[15px] font-semibold text-vert">{r.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-encre/55">
                    <ShieldCheck width={14} height={14} className="text-vert" />
                    Avis vérifié
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
