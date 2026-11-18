import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArchOutline } from "@/components/arch";
import { ArrowUpRight } from "@/components/icons";
import { categories } from "@/lib/catalogue";

export const metadata: Metadata = { title: "Page introuvable" };

// Page 404 (CDC §01) : page introuvable, retour au catalogue.
export default function NotFound() {
  return (
    <main>
      <section className="px-3 pt-[calc(88px+var(--banner-h))] sm:px-6 sm:pt-[calc(104px+var(--banner-h))]">
        <div className="mx-auto grid max-w-[1280px] items-end overflow-hidden rounded-[2.25rem] bg-papier lg:grid-cols-[1.3fr_1fr]">
          <div className="page-enter px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <p className="text-[15px] font-medium text-sable-ink">Erreur 404</p>
            <h1 className="mt-4 text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.04] font-light tracking-[-0.03em] text-balance italic">
              <span className="block text-sable-ink">Cette page s&apos;est perdue</span>
              <span className="block text-vert">dans l&apos;histoire</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-encre/65">
              L&apos;adresse est peut-être mal écrite, ou la page a changé de place. Les histoires, elles, sont
              toujours là.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalogue"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-vert px-7 text-[17px] font-medium text-white shadow-soft transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
              >
                Retour au catalogue
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/"
                className="inline-flex h-14 items-center rounded-full border border-encre/10 bg-white px-7 text-[17px] font-medium text-vert transition-[background-color,transform] hover:bg-creme active:scale-[0.98]"
              >
                Accueil
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link href={`/categories/${c.id}`} className="inline-flex h-10 items-center rounded-full bg-creme px-4 text-[15px] text-vert transition-colors hover:bg-sable-soft">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto hidden w-[62%] max-w-[360px] pt-16 lg:block">
            <ArchOutline className="absolute inset-x-[-16%] bottom-0 h-[106%] w-[132%] text-sable" />
            <Image src="/characters/abd-al-rahman.webp" alt="" width={900} height={1409} sizes="360px" className="relative h-auto w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
