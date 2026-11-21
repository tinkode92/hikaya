import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCard } from "@/components/book-card";
import { EpisodeList } from "@/components/episode-list";
import { ArrowUpRight, Mic } from "@/components/icons";
import { VOICE_ONLY } from "@/lib/voice";
import { ListenButton } from "@/components/listen-button";
import {
  bookLabel,
  books,
  getBook,
  getCategory,
  getSeries,
  relatedBooks,
  seriesEpisodes,
} from "@/lib/catalogue";

// Fiche livre audio (CDC §01) : couverture, titre, auteur, narrateur, durée, résumé, extrait,
// bouton écouter, titres liés. Aperçu de partage avec la couverture.
export function generateStaticParams() {
  return books.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: PageProps<"/livres/[id]">): Promise<Metadata> {
  const book = getBook((await params).id);
  if (!book) return {};
  return {
    title: book.title,
    description: book.summary,
    openGraph: { title: book.title, description: book.summary, images: [book.image] },
  };
}

async function BookContent({ id }: { id: string }) {
  const book = getBook(id);
  if (!book) notFound();

  const category = getCategory(book.categoryId);
  const series = book.seriesId ? getSeries(book.seriesId) : undefined;
  const episodes = series ? seriesEpisodes(series.id) : [];
  const related = relatedBooks(book);

  // Une info absente du back-office n'est pas affichée
  const details = [
    { label: "Durée", value: book.duration },
    { label: "Âge", value: book.age },
    { label: "Auteur", value: book.author },
    { label: "Narration", value: book.narrator },
  ].filter((d): d is { label: string; value: string } => Boolean(d.value));

  return (
    <main className="flex flex-col gap-16 sm:gap-20">
      <section className="px-3 pt-[calc(80px+var(--banner-h))] sm:px-6 sm:pt-[calc(96px+var(--banner-h))]">
        <div className="mx-auto grid max-w-[1280px] gap-8 rounded-[2.25rem] bg-papier p-3 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <Image src={book.image} alt="" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>

          <div className="flex flex-col px-3 pb-6 sm:px-6 lg:py-[clamp(1rem,3vh,2rem)] lg:pr-12 lg:pl-0">
            <nav aria-label="Fil d'Ariane" className="text-[14px] text-encre/60">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/catalogue" className="hover:text-vert">
                    Catalogue
                  </Link>
                </li>
                {category && (
                  <li className="flex items-center gap-2">
                    <span aria-hidden>/</span>
                    <Link href={`/categories/${category.id}`} className="hover:text-vert">
                      {category.name}
                    </Link>
                  </li>
                )}
                {series && (
                  <li className="flex items-center gap-2">
                    <span aria-hidden>/</span>
                    <Link href={`/series/${series.id}`} className="hover:text-vert">
                      {series.title}
                    </Link>
                  </li>
                )}
              </ol>
            </nav>

            <p className="mt-[clamp(1rem,3vh,2rem)] text-[15px] font-medium text-sable-ink">{bookLabel(book)}</p>
            <h1 className="mt-2 text-[clamp(2rem,min(4vw,6vh),3.4rem)] leading-[1.05] font-light tracking-[-0.03em] text-balance text-vert italic">
              {book.title}
            </h1>

            <dl className="mt-[clamp(1rem,3vh,2rem)] grid grid-cols-2 gap-x-6 gap-y-3 border-y border-encre/8 py-[clamp(0.75rem,2.2vh,1.5rem)] sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="text-[13px] text-encre/55">{d.label}</dt>
                  <dd className="mt-1 text-[15px] font-medium text-encre">{d.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 flex items-start gap-2 text-[15px] text-vert">
              <Mic width={16} height={16} className="mt-0.5 shrink-0" />
              {VOICE_ONLY}
            </p>

            <p className="mt-4 max-w-[56ch] text-[17px] leading-relaxed text-encre/75">{book.summary}</p>

            <div className="mt-[clamp(1rem,3vh,2rem)] grid max-w-[420px] gap-3">
              <ListenButton book={book} className="w-full justify-center" />
              <Link
                href="/abonnements"
                className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-encre/8 bg-white px-6 text-[17px] font-medium text-vert transition-[background-color,transform] hover:bg-creme active:scale-[0.98]"
              >
                Choisir mon abonnement
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <p className="mt-4 text-[14px] text-encre/60">
              Extrait de 1 min 30, sans compte. L&apos;histoire complète est réservée aux abonnés, sur le
              site et dans l&apos;application.
            </p>
          </div>
        </div>
      </section>

      {series && (
        <section className="px-3 sm:px-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight font-light tracking-[-0.02em] text-vert italic">
                Les épisodes de la série
              </h2>
              <Link href={`/series/${series.id}`} className="text-[15px] font-medium text-vert hover:text-vert-deep">
                Voir la série {series.title}
              </Link>
            </div>
            <EpisodeList episodes={episodes} currentId={book.id} />
          </div>
        </section>
      )}

      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-8 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight font-light tracking-[-0.02em] text-vert italic">
            Titres liés
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Les adresses connues sont pré-générées au build ; Suspense couvre celles qui
// arriveront plus tard du back-office (navigation instantanée avec Cache Components).
export default function BookPage({ params }: PageProps<"/livres/[id]">) {
  return (
    <Suspense fallback={<main className="min-h-screen" />}>
      {params.then(({ id }) => (
        <BookContent id={id} />
      ))}
    </Suspense>
  );
}
