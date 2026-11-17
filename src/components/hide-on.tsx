"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Masque un bloc sur certaines pages (ex. l'appel à s'abonner du pied de page pour un abonné).
export function HideOn({ paths, children }: { paths: string[]; children: ReactNode }) {
  const pathname = usePathname();
  return paths.some((p) => pathname.startsWith(p)) ? null : children;
}
