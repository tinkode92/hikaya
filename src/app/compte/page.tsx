import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { EmailPreferences } from "@/components/account/email-preferences";
import { ProfileForm } from "@/components/account/profile-form";
import { ResumeButton } from "@/components/account/resume-button";
import { ArrowUpRight, CreditCard, Download, LogOut, Receipt, Star, Trash } from "@/components/icons";
import { account } from "@/lib/account";
import { bookLabel, getBook } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Mon compte",
  robots: { index: false },
};

const sections = [
  { id: "ecoute", label: "En cours d'écoute" },
  { id: "abonnement", label: "Abonnement" },
  { id: "factures", label: "Factures et paiement" },
  { id: "informations", label: "Informations" },
  { id: "preferences", label: "Préférences e-mails" },
  { id: "donnees", label: "Données personnelles" },
];

function Card({ id, title, aside, children }: { id: string; title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-titre`} className="scroll-mt-[calc(var(--banner-h)+7rem)] rounded-[1.75rem] bg-papier p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 id={`${id}-titre`} className="text-[22px] font-medium text-vert">
          {title}
        </h2>
        {aside}
      </div>
      {children}
    </section>
  );
}

const pill =
  "inline-flex h-12 items-center gap-2 rounded-full px-5 text-[15px] font-medium transition-[background-color,transform] active:scale-[0.98]";

export default function ComptePage() {
  const sub = account.subscription;
  const fromStore = sub.source !== "stripe";

  return (
    <main className="flex flex-col gap-3">
      {/* En-tête */}
      <section className="px-3 pt-[calc(80px+var(--banner-h))] sm:px-6 sm:pt-[calc(96px+var(--banner-h))]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-6 rounded-[2.25rem] bg-papier px-6 py-12 sm:px-12 sm:py-14 lg:px-16">
          <div className="page-enter">
            <p className="text-[15px] font-medium text-sable-ink">Mon compte</p>
            <h1 className="mt-4 text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] font-light tracking-[-0.03em] italic">
              <span className="text-sable-ink">Bonjour</span> <span className="text-vert">{account.firstName}</span>
            </h1>
            <p className="mt-4 text-[16px] text-encre/65">
              Abonnement {sub.plan.toLowerCase()} · {sub.status.toLowerCase()} depuis le {sub.since}
            </p>
          </div>
          <button type="button" className={`${pill} border border-encre/10 bg-white text-encre hover:bg-creme`}>
            <LogOut />
            Se déconnecter
          </button>
        </div>
      </section>

      <section className="px-3 sm:px-6">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)] gap-3 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Sommaire : colonne fixe en desktop, rangée défilante en mobile */}
          <nav aria-label="Sections du compte" className="min-w-0 lg:sticky lg:top-[calc(var(--banner-h)+7rem)] lg:self-start">
            <ul className="no-scrollbar -mx-3 flex gap-2 overflow-x-auto px-3 lg:mx-0 lg:flex-col lg:gap-1 lg:rounded-[1.75rem] lg:bg-papier lg:p-3">
              {sections.map((s) => (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    className="block rounded-full bg-papier px-4 py-2.5 text-[15px] text-encre/75 transition-colors hover:bg-creme hover:text-vert lg:rounded-xl lg:bg-transparent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-3">
            {/* En cours d'écoute : reprise en un clic, position synchronisée avec l'app */}
            <Card
              id="ecoute"
              title="En cours d'écoute"
              aside={
                <Link href="/catalogue" className="text-[15px] font-medium text-vert underline-offset-4 hover:underline">
                  Tout le catalogue
                </Link>
              }
            >
              <ul className="grid gap-3 md:grid-cols-3">
                {account.listening.map((item) => {
                  const book = getBook(item.bookId);
                  if (!book) return null;
                  return (
                    <li key={book.id}>
                      <article className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-encre/8 bg-white">
                        <Link href={`/livres/${book.id}`} tabIndex={-1} aria-hidden className="relative block aspect-[16/10] overflow-hidden">
                          <Image src={book.image} alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                        </Link>
                        <div className="flex flex-1 flex-col p-5">
                          <p className="text-[13px] font-medium text-sable-ink">{bookLabel(book)}</p>
                          <Link href={`/livres/${book.id}`} className="mt-1 text-[17px] leading-snug font-medium text-encre hover:text-vert">
                            {book.title}
                          </Link>
                          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-encre/8" role="progressbar" aria-valuenow={Math.round(item.progress * 100)} aria-valuemin={0} aria-valuemax={100} aria-label="Progression">
                            <div className="h-full rounded-full bg-sable" style={{ width: `${item.progress * 100}%` }} />
                          </div>
                          <p className="mt-2 text-[13px] text-encre/55">{item.remaining}</p>
                          <div className="mt-auto pt-5">
                            <ResumeButton book={book} />
                          </div>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </Card>

            {/* Abonnement */}
            <section
              id="abonnement"
              aria-labelledby="abonnement-titre"
              className="scroll-mt-[calc(var(--banner-h)+7rem)] rounded-[1.75rem] bg-vert p-6 text-white sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <h2 id="abonnement-titre" className="text-[15px] font-medium text-sable">
                    Mon abonnement
                  </h2>
                  <p className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="text-[30px] leading-none font-light tracking-[-0.02em] italic">{sub.plan}</span>
                    <span className="rounded-md bg-sable px-2 py-1 text-[13px] leading-none font-medium text-vert-deep">{sub.status}</span>
                  </p>
                  <p className="mt-3 text-[16px] text-white/85">{sub.price}</p>
                  <p className="mt-1 text-[14px] text-white/65">{sub.detail}</p>
                </div>
                <dl className="grid gap-1 text-right max-sm:text-left">
                  <dt className="text-[13px] text-white/60">Prochain prélèvement</dt>
                  <dd className="text-[17px] font-medium">{sub.nextCharge}</dd>
                </dl>
              </div>

              {fromStore ? (
                <p className="mt-8 rounded-2xl bg-white/10 px-4 py-4 sm:px-5 text-[15px] leading-relaxed text-white/85">
                  Votre abonnement a été pris dans l&apos;application, via {sub.source === "app-store" ? "l'App Store" : "Google Play"}.
                  Il vous donne accès au site. Pour le modifier ou le résilier, rendez-vous dans les réglages de votre store.
                </p>
              ) : (
                <>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#portail-stripe" className={`${pill} group bg-papier text-vert-deep hover:bg-white`}>
                      Gérer mon abonnement
                      <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a href="#portail-stripe" className={`${pill} border border-white/20 text-white hover:bg-white/10`}>
                      Passer à l&apos;annuel · 6,60&nbsp;€/mois
                    </a>
                  </div>
                  {/* CGV art. 11 et 12 : résiliation et rétractation en ligne, accessibles directement */}
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/12 pt-5 text-[15px]">
                    <a href="#resiliation" className="font-medium text-white underline-offset-4 hover:underline">
                      Résilier mon abonnement
                    </a>
                    <a href="#retractation" className="font-medium text-white underline-offset-4 hover:underline">
                      Me rétracter (jusqu&apos;au {sub.withdrawalUntil})
                    </a>
                  </div>
                  <p className="mt-3 text-[13px] text-white/60">
                    En cas de résiliation, vous gardez l&apos;accès jusqu&apos;à la fin de la période payée. Changement
                    d&apos;offre, carte et factures se font sur l&apos;espace sécurisé Stripe.
                  </p>
                </>
              )}
            </section>

            {/* Factures et moyen de paiement */}
            <Card id="factures" title="Factures et paiement">
              <div className="grid grid-cols-[minmax(0,1fr)] gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
                <div className="overflow-x-auto rounded-[1.25rem] border border-encre/8 bg-white">
                  <table className="w-full text-left text-[15px]">
                    <caption className="sr-only">Factures</caption>
                    <thead className="border-b border-encre/8 text-[13px] text-encre/55">
                      <tr>
                        <th scope="col" className="px-4 py-3 sm:px-5 font-normal">Date</th>
                        <th scope="col" className="px-4 py-3 sm:px-5 font-normal max-sm:hidden">Offre</th>
                        <th scope="col" className="px-4 py-3 sm:px-5 font-normal">Montant</th>
                        <th scope="col" className="px-4 py-3 sm:px-5 text-right font-normal">
                          <span className="sr-only">Télécharger</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {account.invoices.map((inv) => (
                        <tr key={inv.id} className="border-b border-encre/8 last:border-0">
                          <td className="px-4 py-4 sm:px-5 text-encre">{inv.date}</td>
                          <td className="px-4 py-4 sm:px-5 text-encre/70 max-sm:hidden">{inv.label}</td>
                          <td className="px-4 py-4 sm:px-5 text-encre tabular-nums">
                            {inv.amount}
                            <span className="ml-2 rounded-md bg-creme px-1.5 py-0.5 text-[12px] text-vert max-sm:hidden">{inv.status}</span>
                          </td>
                          <td className="px-4 py-4 sm:px-5 text-right">
                            <a href="#facture" className="inline-flex items-center gap-1.5 font-medium text-vert hover:text-vert-deep">
                              <Download width={16} height={16} />
                              PDF
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-[1.25rem] border border-encre/8 bg-white p-5">
                  <p className="text-[13px] text-encre/55">Moyen de paiement</p>
                  <p className="mt-3 flex items-center gap-3 text-[16px] font-medium text-encre">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-creme text-vert">
                      <CreditCard />
                    </span>
                    {account.card.brand} •••• {account.card.last4}
                  </p>
                  <p className="mt-2 text-[14px] text-encre/55">Expire le {account.card.expires}</p>
                  <a href="#portail-stripe" className="mt-4 inline-block text-[15px] font-medium text-vert underline-offset-4 hover:underline">
                    Modifier la carte
                  </a>
                </div>
              </div>
              <p className="mt-4 flex items-center gap-2 text-[13px] text-encre/55">
                <Receipt width={15} height={15} />
                Factures TTC avec TVA à 5,5&nbsp;%, envoyées aussi par e-mail.
              </p>
            </Card>

            {/* Avis : seuls les abonnés peuvent en laisser un (CDC §07) */}
            <section className="flex flex-wrap items-center justify-between gap-5 rounded-[1.75rem] bg-sable-soft p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-vert text-sable">
                  <Star width={18} height={18} />
                </span>
                <div>
                  <h2 className="text-[18px] font-medium text-vert-deep">Que pensez-vous de HIKAYA ?</h2>
                  <p className="mt-1 text-[15px] text-vert-deep/75">Votre avis aide d&apos;autres familles à nous découvrir.</p>
                </div>
              </div>
              <Link href="/avis" className={`${pill} group bg-vert text-white hover:bg-vert-deep`}>
                Laisser un avis
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </section>

            <Card id="informations" title="Informations personnelles">
              <ProfileForm firstName={account.firstName} email={account.email} />
            </Card>

            <Card id="preferences" title="Préférences e-mails">
              <EmailPreferences initial={account.marketing} />
            </Card>

            {/* RGPD : suppression du compte et des données */}
            <Card id="donnees" title="Données personnelles">
              <p className="max-w-[60ch] text-[15px] leading-relaxed text-encre/65">
                Vous pouvez supprimer votre compte et vos données à tout moment. Ce compte étant le même que dans
                l&apos;application, il y sera aussi supprimé. Pensez à résilier votre abonnement avant.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                <button type="button" className={`${pill} border border-encre/15 bg-white text-encre hover:bg-creme`}>
                  <Trash />
                  Supprimer mon compte
                </button>
                <Link href="/confidentialite" className="text-[15px] font-medium text-vert underline-offset-4 hover:underline">
                  Politique de confidentialité
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
