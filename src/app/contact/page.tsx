import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { ArrowUpRight, Mail, MapPin } from "@/components/icons";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Une question sur HIKAYA, votre abonnement ou les histoires ? Écrivez-nous.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Titre et formulaire dans la même carte : le bouton d'envoi reste visible sans défiler */}
      <section className="px-3 pt-[calc(80px+var(--banner-h))] sm:px-6 sm:pt-[calc(96px+var(--banner-h))]">
        <div className="mx-auto grid max-w-[1280px] gap-3 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[2.25rem] bg-papier px-5 py-6 sm:px-12 sm:py-8 lg:px-16 lg:py-[clamp(1.5rem,4.5vh,3.5rem)]">
            <div className="page-enter">
              <p className="text-[15px] font-medium text-sable-ink">Contact</p>
              <h1 className="mt-2 text-[clamp(1.65rem,min(3.2vw,5vh),2.75rem)] leading-[1.06] font-light tracking-[-0.03em] italic">
                <span className="text-sable-ink">Une question ?</span> <span className="text-vert">Écrivez-nous</span>
              </h1>
              <p className="mt-2 max-w-[52ch] text-[15px] leading-snug text-encre/65 [@media(max-height:760px)]:hidden">
                Abonnement, compte, histoires ou partenariat : l&apos;équipe HIKAYA vous répond par e-mail.
              </p>
              <div className="mt-[clamp(1rem,3.5vh,2rem)]">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="grid gap-3 lg:self-start">
            <div className="rounded-[2.25rem] bg-vert p-6 text-white sm:p-8">
              <p className="text-[15px] font-medium text-sable">Nous écrire directement</p>
              <a href={`mailto:${company.email}`} className="mt-4 flex items-center gap-3 text-[18px] font-medium break-all hover:text-sable">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sable">
                  <Mail />
                </span>
                {company.email}
              </a>
              <p className="mt-6 flex items-start gap-3 text-[16px] leading-relaxed text-white/80">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sable">
                  <MapPin />
                </span>
                <span>
                  {company.name}
                  {company.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </p>
              <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/12 pt-6">
                {company.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center rounded-full bg-white/10 px-4 text-[15px] transition-colors hover:bg-white/20">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/#faq" className="group flex items-center justify-between gap-4 rounded-[2.25rem] bg-sable-soft p-6 sm:px-10">
              <span>
                <span className="block text-[18px] font-medium text-vert-deep">Questions fréquentes</span>
                <span className="mt-1 block text-[15px] text-vert-deep/70">La réponse y est peut-être déjà.</span>
              </span>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-vert text-sable transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
