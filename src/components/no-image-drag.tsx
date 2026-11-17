"use client";

import { useEffect } from "react";

// Firefox ignore -webkit-user-drag : on bloque aussi le glisser-déposer des images en JavaScript.
export function NoImageDrag() {
  useEffect(() => {
    const block = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement || e.target instanceof SVGElement) e.preventDefault();
    };
    document.addEventListener("dragstart", block);
    return () => document.removeEventListener("dragstart", block);
  }, []);
  return null;
}
