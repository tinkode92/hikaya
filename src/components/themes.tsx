import Image from "next/image";
import Link from "next/link";
import { categories, series, seriesEpisodes } from "@/lib/catalogue";
import { ArrowUpRight } from "./icons";
import { SectionHeading } from "./section-heading";

// « Catégories et séries » (textes HIKAYA) : les 3 catégories + la série Al-Andalus.
export function Themes() {
  const [ages, personnages, villes] = categories;
  const andalus = series[0];
  const tiles = [
    { href: `/categories/${ages.id}`, name: ages.name, text: ages.description, image: ages.image, className: "lg:row-span-2", big: true },
    { href: `/categories/${personnages.id}`, name: personnages.name, text: personnages.description, image: personnages.image, className: "" },
    { href: `/categories/${villes.id}`, name: villes.name, text: villes.description, image: villes.image, className: "" },
    {
      href: `/series/${andalus.id}`,
      name: `Série ${andalus.title}`,
      text: `${seriesEpisodes(andalus.id).length} épisodes à suivre dans l'ordre`,
      image: "/episodes/al-andalus-07.webp",
      className: "lg:col-span-2",
    },
  ];

  return (
    <section id="themes" className="px-3 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading
              eyebrow="Catégories et séries"
              first="À chacun son voyage"
              second="dans l'histoire"
            />
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-encre/65">
              Parcourez les grandes époques, rencontrez des personnages remarquables et explorez les
              villes qui ont fait rayonner la civilisation musulmane.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/catalogue"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-vert px-5 text-[15px] font-medium text-white transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
            >
              Explorer les catégories
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href={`/series/${andalus.id}`}
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-encre/8 bg-papier px-5 text-[15px] font-medium text-vert transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
            >
              Découvrir les séries
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:h-[640px] lg:grid-cols-3 lg:grid-rows-2">
          {tiles.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className={`group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-vert p-6 text-white sm:p-8 ${t.className}`}
            >
              <Image
                src={t.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(34_56_38_/_0)_30%,rgb(34_56_38_/_0.94)_100%)]" />
              <span className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full bg-papier text-vert transition-colors group-hover:bg-sable group-hover:text-vert-deep">
                <ArrowUpRight />
              </span>
              <h3
                className={`leading-[1.05] font-light tracking-[-0.02em] italic ${t.big ? "text-[clamp(2rem,3vw,2.75rem)]" : "text-[28px]"}`}
              >
                {t.name}
              </h3>
              <p className="mt-2 line-clamp-3 max-w-[44ch] text-[15px] leading-relaxed text-white/85">{t.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
