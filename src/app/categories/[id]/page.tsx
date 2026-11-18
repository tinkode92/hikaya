import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { BookCard } from "@/components/book-card";
import { PageHeader } from "@/components/page-header";
import { SeriesCard } from "@/components/series-card";
import { categories, categoryBooks, categorySeries, getCategory } from "@/lib/catalogue";

// Modèle de catégorie (textes HIKAYA) : nom, description, « Nos séries », « Les histoires à découvrir ».
export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps<"/categories/[id]">): Promise<Metadata> {
  const category = getCategory((await params).id);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    openGraph: { title: category.name, description: category.description, images: [category.image] },
  };
}

async function CategoryContent({ id }: { id: string }) {
  const category = getCategory(id);
  if (!category) notFound();

  const seriesList = categorySeries(category.id);
  const stories = categoryBooks(category.id);

  return (
    <main className="flex flex-col gap-16 sm:gap-20">
      <PageHeader
        crumbs={[{ label: "Catalogue", href: "/catalogue" }, { label: category.name }]}
        eyebrow="Catégorie"
        first={category.name}
      >
        <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-encre/65">{category.description}</p>
      </PageHeader>

      {seriesList.length > 0 && (
        <section className="px-3 sm:px-6">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="mb-8 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight font-light tracking-[-0.02em] text-vert italic">
              Nos séries
            </h2>
            <div className="grid gap-4">
              {seriesList.map((s) => (
                <SeriesCard key={s.id} series={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {stories.length > 0 && (
        <section className="px-3 sm:px-6">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="mb-8 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight font-light tracking-[-0.02em] text-vert italic">
              Les histoires à découvrir
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stories.map((b) => (
                <BookCard key={b.id} book={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

// Les adresses connues sont pré-générées au build ; Suspense couvre celles qui
// arriveront plus tard du back-office (navigation instantanée avec Cache Components).
export default function CategoryPage({ params }: PageProps<"/categories/[id]">) {
  return (
    <Suspense fallback={<main className="min-h-screen" />}>
      {params.then(({ id }) => (
        <CategoryContent id={id} />
      ))}
    </Suspense>
  );
}
