"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { faq, type FaqItem } from "@/lib/faq";
import { Plus } from "./icons";
import { SectionHeading } from "./section-heading";

// Accordéon : une réponse ouverte à la fois, ouverture animée.
// La liste réserve la hauteur de sa plus longue réponse : ouvrir ou fermer une question
// ne fait jamais bouger ce qui suit (pied de page).
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function Faq({ items = faq }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const listRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number>();

  useIsoLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const rows = [...list.querySelectorAll<HTMLElement>("[data-faq-q]")];
      const answers = [...list.querySelectorAll<HTMLElement>("[data-faq-a]")];
      const closed = rows.reduce((sum, r) => sum + r.offsetHeight, 0) + rows.length + 1; // + séparateurs
      const tallest = Math.max(0, ...answers.map((a) => a.scrollHeight));
      setMinHeight(closed + tallest);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    return () => ro.disconnect();
  }, [items]);

  return (
    <section id="faq" className="px-3 sm:px-6">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Questions fréquentes" first="Une question ?" second="On vous répond" />
          <p className="mt-6 max-w-[34ch] text-[16px] leading-relaxed text-encre/60">
            Vous ne trouvez pas votre réponse ?{" "}
            <a href="/contact" className="font-medium text-vert underline underline-offset-4 hover:no-underline">
              Écrivez-nous
            </a>
            .
          </p>
        </div>

        <div ref={listRef} style={{ minHeight }}>
          <div className="divide-y divide-vert/10 border-y border-vert/10">
            {items.map((item, i) => {
              const isOpen = open === i;
              const id = `faq-${i}`;
              return (
                <div key={item.q}>
                  <h3 data-faq-q>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-[18px] font-medium text-encre transition-colors hover:text-vert"
                    >
                      {item.q}
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-papier text-vert transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <Plus />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={id}
                    role="region"
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-out-soft)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div data-faq-a className="overflow-hidden" inert={!isOpen}>
                      <p className="max-w-[60ch] pr-12 pb-6 text-[16px] leading-relaxed text-encre/65">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
