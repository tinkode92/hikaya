import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { getLegalDoc, legalDocs, parseLegal } from "@/lib/legal";
import { PageHeader } from "./page-header";

export function legalMetadata(slug: string): Metadata {
  const doc = getLegalDoc(slug);
  return { title: doc.nav, description: doc.description };
}

const linkClass = "font-medium text-vert underline underline-offset-2 hover:text-vert-deep";

// Liens [texte](/adresse) et adresses e-mail rendus cliquables
function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1])
      parts.push(
        <Link key={m.index} href={m[2]} className={linkClass}>
          {m[1]}
        </Link>,
      );
    else
      parts.push(
        <a key={m.index} href={`mailto:${m[3]}`} className={linkClass}>
          {m[3]}
        </a>,
      );
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}

// Page légale : en-tête, sommaire des pages légales à gauche, texte à droite.
export function LegalPage({ slug }: { slug: string }) {
  const doc = getLegalDoc(slug);
  const sections = parseLegal(doc.content);
  const long = sections.length > 8;

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
              {/* Sommaire des articles pour les textes longs (CGV, CGU) */}
              {long && (
                <nav aria-label="Sommaire" className="mb-12 rounded-[1.25rem] border border-encre/8 bg-white p-5 sm:p-6">
                  <p className="text-[14px] font-medium text-sable-ink">Sommaire</p>
                  <ol className="mt-3 grid gap-x-6 sm:grid-cols-2">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="inline-block py-1 text-[14px] leading-snug text-encre/70 transition-colors hover:text-vert">
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className={`scroll-mt-[calc(var(--banner-h)+7rem)] ${i > 0 ? "mt-10 border-t border-encre/8 pt-10" : ""}`}
                >
                  <h2 className="text-[22px] leading-snug font-medium text-vert">{s.title}</h2>
                  {s.nodes.map((n, j) =>
                    n.type === "h3" ? (
                      <h3 key={j} className="mt-7 text-[17px] font-medium text-encre">
                        {n.text}
                      </h3>
                    ) : n.type === "ul" ? (
                      <ul key={j} className="mt-4 space-y-2">
                        {n.items.map((li) => (
                          <li key={li} className="flex gap-3 text-[16px] leading-relaxed text-encre/75">
                            <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-sable" />
                            <span>
                              <Inline text={li} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j} className="mt-4 text-[16px] leading-relaxed break-words text-encre/75">
                        {n.lines.map((l, k) => (
                          <Fragment key={k}>
                            {k > 0 && <br />}
                            <Inline text={l} />
                          </Fragment>
                        ))}
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
