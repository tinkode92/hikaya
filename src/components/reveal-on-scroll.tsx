"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Apparition au défilement, sur toutes les pages (posé dans le layout, relancé à chaque navigation).
// Repère les blocs de chaque section (titres, cartes, listes) et les fait monter en fondu,
// les cartes d'une même grille l'une après l'autre. Sans JavaScript, tout reste visible.
export function RevealOnScroll({ scope = "main" }: { scope?: string }) {
  const pathname = usePathname();
  useEffect(() => {
    // La page précédente peut rester dans le DOM, masquée : on prend la page affichée
    const root = [...document.querySelectorAll<HTMLElement>(scope)].find((el) => el.offsetParent !== null) ?? null;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: HTMLElement[] = [];
    const tag = (el: Element, i = 0) => {
      const h = el as HTMLElement;
      h.dataset.reveal = "";
      h.style.setProperty("--reveal-i", String(Math.min(i, 5)));
      targets.push(h);
    };
    const isGroup = (el: Element) => {
      const d = getComputedStyle(el).display;
      return (el.tagName === "UL" || d === "grid" || (d === "flex" && el.children.length >= 3)) && el.children.length >= 2;
    };

    // Le hero et les en-têtes de page ont leur propre entrée : on commence à la deuxième section
    [...root.children].slice(1).forEach((section) => {
      const inner = section.firstElementChild;
      if (!inner) return;
      [...inner.children].forEach((block) => {
        if (isGroup(block)) [...block.children].forEach((c, i) => tag(c, i));
        else {
          // Bloc d'en-tête ou carrousel : on regarde un niveau plus bas
          const track = block.querySelector(".no-scrollbar");
          if (track) [...track.children].forEach((c, i) => tag(c, i));
          else tag(block);
        }
      });
    });

    root.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          // Carrousel : les cartes hors écran (à droite) apparaissent avec la première
          const track = e.target.closest(".no-scrollbar");
          const group = track ? [...track.children] : [e.target];
          group.forEach((el) => {
            el.classList.add("is-visible");
            io.unobserve(el);
          });
        }),
      // Seuil à 0 : un bloc plus haut que l'écran (texte légal, liste longue) apparaît dès qu'il entre
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));

    return () => {
      io.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, [scope, pathname]);

  return null;
}
