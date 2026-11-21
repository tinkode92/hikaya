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
    <section className="px-3 pt-[calc(88px+var(--banner-h))] sm:px-6 sm:pt-[calc(104px+var(--banner-h))]">
      <div className="page-enter mx-auto max-w-[1280px] rounded-[2.25rem] bg-papier px-6 pt-12 pb-12 sm:px-12 sm:pt-16 lg:px-16 lg:pb-16">
        {crumbs && (
          <nav aria-label="Fil d'Ariane" className="mb-8 text-[14px] text-encre/60">
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
        <h1 className="mt-4 max-w-[20ch] text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.04] font-light tracking-[-0.03em] text-balance italic">
          <span className={`block ${second ? "text-sable-ink" : "text-vert"}`}>{first}</span>
          {second && <span className="block text-vert">{second}</span>}
        </h1>
        {children}
      </div>
    </section>
  );
}
