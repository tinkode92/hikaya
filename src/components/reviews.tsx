import Link from "next/link";
import { getBook } from "@/lib/catalogue";
import { DEMO_REVIEWS, featuredReviews, type Review } from "@/lib/reviews";
import { ArrowUpRight, ShieldCheck, Star } from "./icons";
import { SectionHeading } from "./section-heading";

// « HIKAYA dans leur quotidien » (textes HIKAYA) : note App Store + avis mis en avant
// depuis le back-office. Chaque avis renvoie à l'histoire qu'il note.
const APP_STORE = "https://apps.apple.com/fr/app/hikaya/id6754205548";
const APP_STORE_RATING = { value: 4.6, count: 33 }; // relevé sur la fiche App Store

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex gap-1 ${className}`} role="img" aria-label={`${String(rating).replace(".", ",")} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} width={16} height={16} className={i < Math.round(rating) ? "" : "opacity-25"} />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const book = getBook(review.bookId);
  return (
    <li className="flex flex-col rounded-[1.75rem] border border-encre/8 bg-papier p-8">
      <div className="flex items-center justify-between gap-4">
        <Stars rating={review.rating} className="text-sable-ink" />
        <span className="text-[13px] text-encre/55">{review.date}</span>
      </div>
      <blockquote className="mt-5 flex-1 text-[18px] leading-relaxed text-encre/85">« {review.text} »</blockquote>
      {book && (
        <Link
          href={`/livres/${book.id}`}
          className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-creme px-4 py-2 text-[14px] font-medium text-vert transition-colors hover:bg-sable-soft"
        >
          A écouté : {book.title}
        </Link>
      )}
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-encre/8 pt-6">
        <div>
          <p className="text-[16px] font-medium text-encre">{review.name}</p>
          <p className="mt-1 text-[14px] text-encre/60">{review.context}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-[13px] text-encre/60">
          <ShieldCheck width={16} height={16} className="text-vert" />
          Avis vérifié
        </span>
      </div>
    </li>
  );
}

export function Reviews({ reviews = featuredReviews }: { reviews?: Review[] }) {
  return (
    <section id="avis" className="px-3 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading eyebrow="Avis des familles" first="HIKAYA dans" second="leur quotidien" />
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-encre/65">
              Des parents partagent leurs moments d&apos;écoute et leurs découvertes en famille.
            </p>
          </div>
          {DEMO_REVIEWS && (
            <p className="self-start rounded-full border border-dashed border-sable-ink/40 px-4 py-2 text-[13px] text-sable-ink md:self-auto">
              Avis fictifs pour la maquette
            </p>
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="flex flex-col justify-between gap-10 rounded-[1.75rem] bg-vert p-8 text-white">
            <div>
              <p className="text-[15px] text-white/70">Sur l&apos;App Store</p>
              <p className="mt-3 text-[72px] leading-none font-light tracking-[-0.04em] tabular-nums">
                4,6
                <span className="text-[28px] tracking-normal text-white/55"> / 5</span>
              </p>
              <Stars rating={APP_STORE_RATING.value} className="mt-4 text-sable" />
              <p className="mt-4 text-[15px] text-white/70">{APP_STORE_RATING.count} notes · Catégorie Éducation</p>
            </div>
            <div>
              <p className="text-[14px] leading-relaxed text-white/70">
                Sur le site, seuls les abonnés peuvent laisser un avis. Chaque avis est relu par HIKAYA
                avant d&apos;être publié.
              </p>
              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-papier px-5 text-[15px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
              >
                Voir la fiche de l&apos;app
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
