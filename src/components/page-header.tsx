import Link from "next/link";
import type { ReactNode } from "react";

// En-tête des pages intérieures : même carte papier que le hero de l'accueil, en plus court.
export function PageHeader({
  crumbs,
  eyebrow,
  first,
  second,
  children,
}: {
  crumbs?: { label: string; href?: string }[];
  eyebrow?: string;
  first: string;
  second?: string;
  children?: ReactNode;
}) {
  return (
    <section className="px-3 pt-[calc(80px+var(--banner-h))] sm:px-6 sm:pt-[calc(96px+var(--banner-h))]">
      <div className="page-enter mx-auto max-w-[1280px] rounded-[2.25rem] bg-papier px-6 pt-8 pb-8 sm:px-12 sm:pt-[clamp(2rem,6vh,4rem)] sm:pb-[clamp(2rem,6vh,4rem)] lg:px-16">
        {crumbs && (
          <nav aria-label="Fil d'Ariane" className="mb-[clamp(1rem,3vh,2rem)] text-[14px] text-encre/60">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-vert">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-encre">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="text-[15px] font-medium text-sable-ink">{eyebrow}</p>}
        <h1 className="mt-4 max-w-[20ch] text-[clamp(2.2rem,min(5.2vw,7vh),4.4rem)] leading-[1.04] font-light tracking-[-0.03em] text-balance italic">
          <span className={`block ${second ? "text-sable-ink" : "text-vert"}`}>{first}</span>
          {second && <span className="block text-vert">{second}</span>}
        </h1>
        {children}
      </div>
    </section>
  );
}
