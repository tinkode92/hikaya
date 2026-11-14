import Image from "next/image";
import Link from "next/link";
import { seriesEpisodes, type Series } from "@/lib/catalogue";
import { ArrowUpRight } from "./icons";

// Carte large d'une série (catalogue, catégorie). Bouton : « Découvrir la série » (textes HIKAYA).
export function SeriesCard({ series }: { series: Series }) {
  const count = seriesEpisodes(series.id).length;
  return (
    <article className="grid overflow-hidden rounded-[1.75rem] bg-vert text-white md:grid-cols-[1.1fr_1fr]">
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
        <Image src={series.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col p-8 sm:p-10">
        <p className="text-[14px] font-medium text-sable">Série · {count} épisodes</p>
        <h3 className="mt-2 text-[clamp(2rem,3vw,2.75rem)] leading-[1.05] font-light tracking-[-0.02em] italic">
          {series.title}
        </h3>
        <p className="mt-4 mb-8 max-w-[52ch] text-[16px] leading-relaxed text-white/80">{series.summary}</p>
        <Link
          href={`/series/${series.id}`}
          className="group mt-auto inline-flex h-12 items-center gap-2 self-start rounded-full bg-papier px-5 text-[15px] font-medium text-vert-deep transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
        >
          Découvrir la série
          <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
