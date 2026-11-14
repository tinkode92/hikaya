import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/icons";
import { PageHeader } from "@/components/page-header";

// Texte : « Page Une histoire à transmettre » (Drive HIKAYA), repris tel quel.
export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "HIKAYA invite les enfants à découvrir l'histoire et la richesse de la civilisation musulmane à travers les femmes, les hommes, les lieux et les idées qui l'ont façonnée.",
};

function Heading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`text-[clamp(2rem,4vw,3.2rem)] leading-[1.06] font-light tracking-[-0.025em] text-balance italic ${
        light ? "text-sable" : "text-vert"
      }`}
    >
      {children}
    </h2>
  );
}

const lessons = ["La patience", "L'humilité", "La persévérance", "La générosité", "Le goût du savoir"];

export default function QuiSommesNousPage() {
  return (
    <main className="flex flex-col gap-20 sm:gap-28">
      <PageHeader eyebrow="Qui sommes-nous ?" first="Transmettre une histoire," second="éveiller la curiosité">
        <div className="mt-8 grid max-w-[1040px] gap-6 text-[17px] leading-relaxed text-encre/70 md:grid-cols-3">
          <p>
            HIKAYA invite les enfants à découvrir l&apos;histoire et la richesse de la civilisation
            musulmane à travers les femmes, les hommes, les lieux et les idées qui l&apos;ont façonnée.
          </p>
          <p>
            Nous créons des histoires pour éveiller leur curiosité, nourrir leur imagination et leur
            donner le goût d&apos;explorer cet héritage en famille.
          </p>
          <p>
            Chaque récit associe un travail de recherche à une écriture accessible aux plus jeunes, pour
            transmettre cet héritage avec soin et faire de chaque découverte un plaisir partagé.
          </p>
        </div>
      </PageHeader>

      {/* Une histoire à transmettre */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pl-16">
            <Heading>Une histoire à transmettre</Heading>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-encre/70">
              <p>
                Comment faire découvrir aux enfants l&apos;histoire de la civilisation musulmane ?
                Comment leur parler de ses savants, de ses villes, de ses œuvres et de celles et ceux qui
                ont contribué à la façonner ?
              </p>
              <p>
                HIKAYA est né de cette envie de transmission. Nous souhaitons rendre cet héritage
                accessible aux plus jeunes, à travers des histoires qui se comprennent, s&apos;écoutent et
                donnent envie d&apos;en savoir davantage.
              </p>
              <p>
                Pour un enfant, découvrir l&apos;histoire commence souvent par une rencontre. Un
                personnage l&apos;intrigue, une aventure le captive, une question lui vient. Ces premiers
                instants de curiosité peuvent faire naître un intérêt durable pour le passé et pour le
                monde qui l&apos;entoure.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/livres/ibn-khaldun.webp"
              alt="Illustration HIKAYA : Ibn Khaldun enseigne à trois enfants"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Le fondateur */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto grid max-w-[1280px] gap-10 rounded-[2.25rem] bg-vert px-6 py-14 text-white sm:px-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:p-16">
          <div>
            <p className="text-[15px] font-medium text-sable">Le fondateur</p>
            <p className="mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.1] font-light tracking-[-0.02em] text-balance italic">
              « J&apos;ai voulu créer des récits que les enfants prennent plaisir à écouter. »
            </p>
            <p className="mt-6 text-[16px] text-white/70">Abdurrahman Florian, fondateur de HIKAYA</p>
          </div>
          <div className="space-y-4 text-[17px] leading-relaxed text-white/85">
            <p>
              Je suis Abdurrahman Florian, diplômé en langue et civilisation arabe et fondateur de
              HIKAYA.
            </p>
            <p>
              Mes études m&apos;ont conduit à consacrer de nombreuses heures à la lecture, à la recherche
              et à la découverte de textes historiques. Au fil de ce parcours, j&apos;ai mesuré la
              richesse de cet héritage et les possibilités qu&apos;il offre pour raconter l&apos;histoire
              aux enfants.
            </p>
            <p>
              En tant que père, je suis également attentif aux contenus que nous leur transmettons et au
              plaisir qu&apos;ils peuvent trouver à apprendre.
            </p>
            <p>
              HIKAYA réunit ces préoccupations. J&apos;ai voulu créer des récits que les enfants prennent
              plaisir à écouter, tout en apportant à leur écriture le soin et l&apos;exigence que demande
              le travail sur l&apos;histoire.
            </p>
          </div>
        </div>
      </section>

      {/* Des recherches à l'histoire racontée */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:sticky lg:top-28">
            <Image
              src="/livres/malik-ibn-anas.webp"
              alt="Illustration HIKAYA : un savant enseigne à ses élèves sous les arcades"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:pr-16">
            <Heading>Des recherches à l&apos;histoire racontée</Heading>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-encre/70">
              <p>
                Chaque récit commence par un travail de recherche, fondé notamment sur les sources
                classiques de l&apos;islam et de la civilisation musulmane. Chroniques historiques,
                biographies et ouvrages de savants nourrissent notre écriture. Nous croisons les
                informations et les replaçons dans leur contexte pour transmettre aux enfants des récits
                documentés et accessibles.
              </p>
              <p>
                L&apos;écriture donne ensuite vie à ces connaissances. Nous expliquons les notions
                nouvelles, présentons les personnages et accompagnons les enfants dans la découverte
                d&apos;une époque.
              </p>
              <p>
                Chaque histoire porte également une leçon morale, amenée avec finesse au fil du récit. À
                travers les choix des personnages, les difficultés qu&apos;ils rencontrent et les
                conséquences de leurs actes, les enfants sont invités à réfléchir à la patience, à
                l&apos;humilité, à la persévérance, à la générosité ou au goût du savoir.
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Les leçons au fil des histoires">
              {lessons.map((l) => (
                <li key={l} className="rounded-full bg-sable-soft px-4 py-2 text-[15px] font-medium text-vert-deep">
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[17px] leading-relaxed text-encre/70">
              Ces enseignements prennent ainsi un sens concret. Ils éveillent la réflexion et ouvrent la
              voie à des échanges en famille, en laissant aux enfants le plaisir de découvrir et de
              comprendre par eux-mêmes.
            </p>
          </div>
        </div>
      </section>

      {/* Écouter, imaginer et partager */}
      <section className="px-3 sm:px-6">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-papier px-6 pt-14 sm:px-12 lg:px-16 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="pb-6 lg:pb-16">
              <Heading>Écouter, imaginer et partager</Heading>
              <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-encre/70">
                <p>
                  HIKAYA s&apos;adresse principalement aux enfants de{" "}
                  <strong className="font-medium text-encre">6 à 14 ans (mais pas que !)</strong>, avec
                  des histoires qui peuvent aussi réunir les parents et les plus jeunes autour d&apos;un
                  même moment d&apos;écoute.
                </p>
                <p>
                  À la maison, en voiture ou avant de dormir, l&apos;audio permet de découvrir une
                  histoire sans avoir besoin de regarder un écran. L&apos;enfant écoute à son rythme,
                  retrouve ses récits préférés et construit ses propres images.
                </p>
                <p>
                  Nous espérons que ces histoires se prolongeront dans vos échanges en famille. Une
                  question sur une ville, une discussion autour d&apos;une découverte ou l&apos;envie de
                  chercher un personnage dans un livre sont autant de façons de poursuivre le voyage.
                </p>
              </div>
            </div>
            <div aria-hidden className="flex items-end justify-center gap-2 self-end">
              <Image src="/characters/fatima.webp" alt="" width={900} height={1381} className="h-56 w-auto sm:h-72" />
              <Image src="/characters/ibn-khaldun.webp" alt="" width={900} height={1311} className="h-52 w-auto sm:h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Un univers culturel qui grandit */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <Heading>Un univers culturel qui grandit</Heading>
          <p className="mt-6 text-[18px] leading-relaxed text-encre/70">
            Notre ambition est de faire de HIKAYA une référence culturelle jeunesse consacrée à
            l&apos;histoire de la civilisation musulmane. Les récits audio constituent la première étape
            de ce projet. Nous préparons d&apos;autres façons de découvrir cet univers.
          </p>
          <Link
            href="/catalogue"
            className="group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-vert px-7 text-[17px] font-medium text-white shadow-soft transition-[background-color,transform] hover:bg-vert-deep active:scale-[0.98]"
          >
            Découvrir les livres audio
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
