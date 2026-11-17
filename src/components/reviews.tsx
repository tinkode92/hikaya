import { MaybeLink } from "./maybe-link";
import { getBook } from "@/lib/catalogue";
import { featuredReviews, type Review } from "@/lib/reviews";
import { ShieldCheck, Star } from "./icons";
import { SectionHeading } from "./section-heading";
import { ratings } from "@/lib/ratings";
import { siteHref } from "@/lib/site-mode";
import { testimonialVideo } from "@/lib/video";
import { VideoTestimonial } from "./video-testimonial";

// « HIKAYA dans leur quotidien » (textes HIKAYA) : notes App Store et Google Play + avis mis en avant
// depuis le back-office. Chaque avis renvoie à l'histoire qu'il note.

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
    <li className="flex flex-col rounded-[1.75rem] border border-encre/8 bg-papier p-8 lg:p-6 xl:p-8">
      <div className="flex items-center justify-between gap-4">
        <Stars rating={review.rating} className="text-sable-ink" />
        <span className="text-[13px] text-encre/55">{review.date}</span>
      </div>
      <blockquote className="mt-5 flex-1 text-[18px] leading-relaxed text-encre/85 lg:text-[16px] xl:text-[18px]">« {review.text} »</blockquote>
      {book && (
        <MaybeLink
          href={siteHref(`/livres/${book.id}`)}
          className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-creme px-4 py-2 text-[14px] font-medium text-vert transition-colors hover:bg-sable-soft"
        >
          A écouté : {book.title}
        </MaybeLink>
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

          {/* Notes des deux stores, côte à côte */}
          <dl className="grid grid-cols-2 divide-x divide-white/15 rounded-[1.75rem] bg-vert py-5 text-white">
            {[ratings.appStore, ratings.googlePlay].map((r) => (
              <div key={r.label} className="px-6 sm:px-8">
                <dt className="text-[14px] text-white/75">{r.label}</dt>
                <dd className="mt-1">
                  <span className="text-[44px] leading-none font-light tracking-[-0.04em] tabular-nums sm:text-[52px]">
                    {r.value}
                  </span>
                  <span className="text-[18px] text-white/55"> / 5</span>
                  <div className="mt-2">
                    <Stars rating={r.stars} className="text-sable" />
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Le témoignage vidéo à gauche, les avis à droite (empilés en mobile) */}
        <div
          className={`grid gap-4 ${
            testimonialVideo.src ? "lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)]" : ""
          }`}
        >
          <VideoTestimonial className="mx-auto w-full max-w-[360px] lg:max-w-none" />
          <ul className="grid gap-4 md:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </ul>
        </div>

        {/* Mention exigée pour les avis en ligne (CDC §07) */}
        <p className="mt-6 max-w-[90ch] text-[13px] leading-relaxed text-encre/55">
          Avis vérifiés : seuls les abonnés peuvent laisser un avis, depuis l&apos;e-mail reçu après leur abonnement
          ou depuis leur compte. Chaque avis est lu par HIKAYA avant publication et ne donne lieu à aucune
          contrepartie. Les notes affichées sont celles de l&apos;App Store et de Google Play.
        </p>
      </div>
    </section>
  );
}
