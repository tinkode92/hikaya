import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EpisodeList } from "@/components/episode-list";
import { ArrowUpRight } from "@/components/icons";
import { ListenButton } from "@/components/listen-button";
import { getCategory, getSeries, series, seriesEpisodes } from "@/lib/catalogue";

// Page série (textes HIKAYA) : titre, présentation, « Les épisodes de la série »,
// boutons « Commencer la série » / « Reprendre la série » (abonnés) et
// « Écouter l'extrait du premier épisode » (visiteurs).
export function generateStaticParams() {
  return series.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: PageProps<"/series/[id]">): Promise<Metadata> {
  const s = getSeries((await params).id);
  if (!s) return {};
  return { title: `Série ${s.title}`, description: s.summary };
}

async function SeriesContent({ id }: { id: string }) {
  const s = getSeries(id);
  if (!s) notFound();
  const episodes = seriesEpisodes(s.id);
  const category = getCategory(s.categoryId);

  return (
    <main className="flex flex-col gap-16 sm:gap-20">
      <section className="px-3 pt-[88px] sm:px-6 sm:pt-[104px]">
        <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-papier lg:grid-cols-[1fr_1.05fr]">
          <div className="px-6 pt-12 pb-12 sm:px-12 sm:pt-16 lg:px-16 lg:pb-16">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-[14px] text-encre/60">
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
                <li className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <span aria-current="page" className="text-encre">
                    {s.title}
                  </span>
                </li>
              </ol>
            </nav>
            <p className="text-[15px] font-medium text-sable-ink">Série · {episodes.length} épisodes</p>
            <h1 className="mt-4 text-[clamp(2.6rem,5.6vw,4.8rem)] leading-[1.02] font-light tracking-[-0.03em] text-vert italic">
              {s.title}
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-encre/70">{s.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/livres/${episodes[0].id}`}
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-vert px-7 text-[17px] font-medium text-white shadow-soft transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
              >
                Commencer la série
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <ListenButton
                book={episodes[0]}
                label="Écouter l'extrait du premier épisode"
                variant="secondary"
              />
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image src={s.image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-8 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight font-light tracking-[-0.02em] text-vert italic">
            Les épisodes de la série
          </h2>
          <EpisodeList episodes={episodes} />
        </div>
      </section>
    </main>
  );
}

// Les adresses connues sont pré-générées au build ; Suspense couvre celles qui
// arriveront plus tard du back-office (navigation instantanée avec Cache Components).
export default function SeriesPage({ params }: PageProps<"/series/[id]">) {
  return (
    <Suspense fallback={<main className="min-h-screen" />}>
      {params.then(({ id }) => (
        <SeriesContent id={id} />
      ))}
    </Suspense>
  );
}
