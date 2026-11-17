import Image from "next/image";
import { bookLabel, bookMeta, getBook } from "@/lib/catalogue";
import { featured } from "@/lib/featured";
import { siteHref } from "@/lib/site-mode";
import { ArrowUpRight } from "./icons";
import { ListenButton } from "./listen-button";
import { MaybeLink } from "./maybe-link";

// Encart « À la une » / « En avant-première » : un livre choisi dans le back-office.
export function FeaturedBook() {
  const book = getBook(featured.bookId);
  if (!book) return null;
  const upcoming = featured.label === "En avant-première";
  const href = siteHref(`/livres/${book.id}`);

  return (
    <section aria-labelledby="a-la-une" className="px-3 sm:px-6">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-vert-deep text-white lg:grid-cols-[1.15fr_1fr]">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
          <Image src={book.image} alt="" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
          <p className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-sable px-3 py-1.5 text-[14px] leading-none font-medium text-vert-deep">
              {featured.label}
            </span>
            <span className="text-[14px] text-white/70">
              {upcoming && featured.releaseDate ? `Sortie le ${featured.releaseDate}` : bookLabel(book)}
            </span>
          </p>
          <h2
            id="a-la-une"
            className="mt-5 text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] font-light tracking-[-0.025em] text-balance italic"
          >
            {book.title}
          </h2>
          <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-white/80">
            {featured.presentation ?? book.summary}
          </p>
          <p className="mt-4 text-[14px] text-sable">{bookMeta(book)}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ListenButton book={book} variant="secondary" />
            {href && !upcoming && (
              <MaybeLink
                href={href}
                className="group inline-flex h-14 items-center gap-2 rounded-full border border-white/20 px-6 text-[17px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Découvrir le livre
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MaybeLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
