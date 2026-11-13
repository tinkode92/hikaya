import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { SectionHeading } from "./section-heading";

// Catégories : les deux premières viennent de l'app (« Âges de l'Islam », « Étoiles de l'H… »),
// les deux autres des préfixes des fichiers d'illustration. Noms exacts à confirmer avec HIKAYA.
const themes = [
  {
    name: "Âges de l'Islam",
    text: "Les grandes époques racontées en séries, à commencer par Al-Andalus.",
    image: "/episodes/al-andalus-04.webp",
    className: "lg:col-span-1 lg:row-span-2",
    tall: true,
  },
  {
    name: "Étoiles de l'Histoire",
    text: "Bâtisseurs, souverains, savantes : les grandes figures, une par une.",
    image: "/themes/grandes-figures.webp",
    className: "",
  },
  {
    name: "Sagesse & Science",
    text: "Al-Khwārizmī, al-Farghānī, les Banū Mūsā : les savants et leurs découvertes.",
    image: "/themes/sagesse-science.webp",
    className: "",
  },
  {
    name: "Cités & Merveilles",
    text: "Fès, Cordoue : voyager dans les villes qui ont fait l'histoire.",
    image: "/themes/cites-merveilles.webp",
    className: "lg:col-span-2",
  },
];

export function Themes() {
  return (
    <section id="themes" className="px-3 sm:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Explorer par thème"
            first="Des califes aux savants,"
            second="chaque histoire a son univers"
          />
          <a
            href="#catalogue"
            className="group inline-flex h-12 items-center gap-2 self-start rounded-full border border-encre/8 bg-papier px-5 text-[15px] font-medium text-vert transition-colors hover:bg-white md:self-auto"
          >
            Voir tout le catalogue
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:h-[640px] lg:grid-cols-3 lg:grid-rows-2">
          {themes.map((t) => (
            <a
              key={t.name}
              href="#catalogue"
              className={`group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-vert p-6 text-white sm:p-7 ${t.className}`}
            >
              <Image
                src={t.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(34_56_38_/_0)_35%,rgb(34_56_38_/_0.92)_100%)]" />
              <span className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full bg-papier text-vert transition-colors group-hover:bg-sable group-hover:text-vert-deep">
                <ArrowUpRight />
              </span>
              <h3
                className={`font-light tracking-[-0.02em] italic ${t.tall ? "text-[clamp(2rem,3vw,2.75rem)]" : "text-[28px]"} leading-[1.05]`}
              >
                {t.name}
              </h3>
              <p className="mt-2 max-w-[38ch] text-[15px] leading-relaxed text-white/80">{t.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
