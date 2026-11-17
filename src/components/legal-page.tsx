import type { Metadata } from "next";
import Link from "next/link";
import { getLegalDoc, legalDocs } from "@/lib/legal";
import { PageHeader } from "./page-header";

export function legalMetadata(slug: string): Metadata {
  const doc = getLegalDoc(slug);
  return { title: doc.nav, description: doc.description };
}

// Page légale : en-tête, sommaire des pages légales à gauche, texte à droite.
export function LegalPage({ slug }: { slug: string }) {
  const doc = getLegalDoc(slug);
  return (
    <main className="flex flex-col gap-3">
      <PageHeader eyebrow="Informations légales" first={doc.first} second={doc.second}>
        <p className="mt-6 text-[15px] text-encre/60">Mise à jour le {doc.updated}</p>
      </PageHeader>

      <section className="px-3 sm:px-6">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)] gap-3 lg:grid-cols-[280px_minmax(0,1fr)]">
          <nav aria-label="Pages légales" className="min-w-0 lg:sticky lg:top-[calc(var(--banner-h)+7rem)] lg:self-start">
            <ul className="no-scrollbar -mx-3 flex gap-2 overflow-x-auto px-3 lg:mx-0 lg:flex-col lg:gap-1 lg:rounded-[1.75rem] lg:bg-papier lg:p-3">
              {legalDocs.map((d) => {
                const active = d.slug === slug;
                return (
                  <li key={d.slug} className="shrink-0">
                    <Link
                      href={`/${d.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-full px-4 py-2.5 text-[15px] transition-colors lg:rounded-xl ${
                        active ? "bg-vert text-white" : "bg-papier text-encre/75 hover:bg-creme hover:text-vert lg:bg-transparent"
                      }`}
                    >
                      {d.nav}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="rounded-[1.75rem] bg-papier px-6 py-10 sm:px-12 sm:py-12 lg:px-16">
            <div className="max-w-[68ch]">
              {doc.sections.map((s, i) => (
                <section key={s.title} className={i > 0 ? "mt-10 border-t border-encre/8 pt-10" : ""}>
                  <h2 className="text-[22px] font-medium text-vert">{s.title}</h2>
                  {s.body.map((b, j) =>
                    Array.isArray(b) ? (
                      <ul key={j} className="mt-4 space-y-2">
                        {b.map((li) => (
                          <li key={li} className="flex gap-3 text-[16px] leading-relaxed text-encre/75">
                            <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-sable" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j} className="mt-4 text-[16px] leading-relaxed text-encre/75">
                        {b}
                      </p>
                    ),
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
