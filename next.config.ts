import type { NextConfig } from "next";

// PREVIEW_EXPORT=1 : export statique pour le lien d'aperçu (npm run preview:export).
// Le site de production (Vercel) garde la config normale.
const previewExport = process.env.PREVIEW_EXPORT === "1";

const nextConfig: NextConfig = {
  // Le PPR n'est pas compatible avec l'export statique
  cacheComponents: !previewExport,
  partialPrefetching: !previewExport,
  ...(previewExport && {
    output: "export",
    distDir: ".next-preview",
    images: { unoptimized: true },
  }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
