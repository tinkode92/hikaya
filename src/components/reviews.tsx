import Link from "next/link";
import { getBook } from "@/lib/catalogue";
import { featuredReviews, type Review } from "@/lib/reviews";
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
        <div className="mb-8 grid gap-8 sm:mb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionHeading eyebrow="Avis des familles" first="HIKAYA dans" second="leur quotidien" />
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-encre/65">
              Des parents partagent leurs moments d&apos;écoute et leurs découvertes en famille.
            </p>
          </div>

          {/* Note de l'app : un bandeau compact, pas une colonne vide */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-[1.75rem] bg-vert px-6 py-5 text-white sm:px-8">
            <p className="text-[56px] leading-none font-light tracking-[-0.04em] tabular-nums">4,6</p>
            <div>
              <Stars rating={APP_STORE_RATING.value} className="text-sable" />
              <p className="mt-2 text-[14px] text-white/75">
                {APP_STORE_RATING.count} notes sur l&apos;App Store
              </p>
            </div>
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-papier px-5 text-[15px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
            >
              Voir l&apos;app
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
    </section>
  );
}
