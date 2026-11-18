import type { MetadataRoute } from "next";
import { books, categories, series } from "@/lib/catalogue";

// Sitemap (CDC §02) : se met à jour seul avec le catalogue. Les pages de compte et de paiement n'y figurent pas.
const BASE = "https://www.hikayamedias.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/catalogue", "/abonnements", "/offrir", "/qui-sommes-nous", "/contact"].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const legal = ["/mentions-legales", "/cgv", "/cgu", "/confidentialite", "/cookies"].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));
  return [
    ...pages,
    ...categories.map((c) => ({ url: `${BASE}/categories/${c.id}`, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...series.map((s) => ({ url: `${BASE}/series/${s.id}`, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...books.map((b) => ({ url: `${BASE}/livres/${b.id}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...legal,
  ];
}
