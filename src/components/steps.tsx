import Image from "next/image";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    n: "01",
    title: "Choisissez votre offre",
    text: "Mensuel ou annuel, réglé en toute sécurité par carte, PayPal, Apple Pay ou Google Pay.",
  },
  {
    n: "02",
    title: "Créez votre compte",
    text: "Avec votre email ou Google. Le même compte fonctionne sur le site et dans l'app.",
  },
  {
    n: "03",
    title: "Écoutez partout",
    text: "Sur ordinateur, iPhone ou Android, et sur la télé avec AirPlay ou Chromecast. L'écoute reprend là où elle s'était arrêtée.",
  },
];

export function Steps() {
  return (
    <section id="comment" className="px-3 sm:px-6">
      <div className="relative mx-auto grid max-w-[1280px] gap-10 overflow-hidden rounded-[2.25rem] bg-papier px-6 pt-14 sm:px-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16 lg:px-16 lg:pt-20">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="Comment ça marche"
            first="Trois étapes,"
            second="et l'aventure commence"
          />
          <Image
            src="/characters/ibn-khaldun.webp"
            alt=""
            width={900}
            height={1311}
            className="mt-10 hidden h-[300px] w-auto self-start lg:mt-auto lg:block"
          />
        </div>

        <ol className="pb-12 lg:pb-20">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`grid grid-cols-[72px_1fr] gap-x-5 py-7 sm:grid-cols-[110px_1fr] sm:gap-x-8 ${
                i > 0 ? "border-t border-vert/10" : "pt-0"
              }`}
            >
              <span className="text-[56px] leading-none font-light tracking-[-0.04em] text-sable-ink tabular-nums sm:text-[72px]">
                {s.n}
              </span>
              <div className="pt-1 sm:pt-3">
                <h3 className="text-[22px] font-medium text-vert">{s.title}</h3>
                <p className="mt-2 max-w-[44ch] text-[16px] leading-relaxed text-encre/65">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <Image
          src="/characters/ibn-khaldun.webp"
          alt=""
          width={900}
          height={1311}
          className="-mt-6 -mb-1 h-[200px] w-auto justify-self-end lg:hidden"
        />
      </div>
    </section>
  );
}
