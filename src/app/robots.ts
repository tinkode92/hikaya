import type { MetadataRoute } from "next";

// Les pages personnelles (compte, paiement, confirmation, avis) ne sont pas indexées.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/compte", "/paiement", "/confirmation", "/avis", "/mot-de-passe-oublie"],
    },
    sitemap: "https://www.hikayamedias.com/sitemap.xml",
  };
}
