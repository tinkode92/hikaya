import type { Metadata } from "next";
import { Faq } from "@/components/faq";
import { GiftBuilder } from "@/components/gift-builder";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { giftFaq } from "@/lib/gift";

export const metadata: Metadata = {
  title: "Offrir HIKAYA",
  description:
    "Offrez un abonnement HIKAYA : des livres audio sur l'histoire de la civilisation musulmane, pour les 6–14 ans. Carte cadeau par e-mail ou à imprimer.",
};

const steps = [
  { n: "01", title: "Vous choisissez", text: "La durée, votre message, et la date d'envoi ou l'impression." },
  { n: "02", title: "Il reçoit sa carte", text: "Une carte cadeau avec un code personnel, par e-mail ou en main propre." },
  { n: "03", title: "Il écoute tout", text: "Il active son code et accède à tout le catalogue, sur le site et dans l'application." },
];

export default function OffrirPage() {
  return (
    <main className="flex flex-col gap-16 sm:gap-24">
      <PageHeader eyebrow="Offrir HIKAYA" first="Offrez des histoires" second="qui font grandir">
        <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-encre/65">
          Un abonnement à offrir à un enfant, une famille ou des amis. Des livres audio pour voyager dans
          l&apos;histoire de la civilisation musulmane, à écouter ensemble.
        </p>
      </PageHeader>

      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <GiftBuilder />
        </div>
      </section>

      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading eyebrow="Comment ça marche" first="Un cadeau simple" second="à offrir et à utiliser" className="mb-8 sm:mb-10" />
          <ol className="grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-[1.75rem] border border-encre/8 bg-papier p-8">
                <span className="text-[48px] leading-none font-light tracking-[-0.04em] text-sable-ink tabular-nums">{s.n}</span>
                <h3 className="mt-5 text-[22px] font-medium text-vert">{s.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-encre/65">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={giftFaq} />
    </main>
  );
}
