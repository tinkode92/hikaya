import Image from "next/image";

// Les 4 promesses reprises des visuels App Store de HIKAYA.
const values = [
  {
    n: "01",
    title: "Pensée pour les enfants",
    text: "Une écoute simple et sûre, de 6 à 14 ans. Pas d'écran à regarder : juste une voix et une histoire.",
  },
  {
    n: "02",
    title: "Le savoir et les valeurs",
    text: "Des récits qui rassemblent la famille autour de l'histoire de l'Islam et de ses grandes figures.",
  },
  {
    n: "03",
    title: "Des voix et des sons",
    text: "Des voix et des sons pour voyager dans l'histoire de l'Islam, de Cordoue à Fès.",
  },
  {
    n: "04",
    title: "Chaque mois, du nouveau",
    text: "De nouvelles histoires audio ajoutées tous les mois, sur le site comme dans l'app.",
  },
];

export function Values() {
  return (
    <section id="valeurs" className="px-3 sm:px-6">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.25rem] bg-vert text-white">
        <div className="relative px-6 pt-16 sm:px-12 lg:px-16 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="text-[15px] font-medium text-sable">Pourquoi HIKAYA</p>
              <h2 className="mt-5 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04] font-light tracking-[-0.025em] italic">
                <span className="block text-sable">La richesse d&apos;une civilisation,</span>
                <span className="block">racontée à hauteur d&apos;enfant</span>
              </h2>
            </div>

            <ul className="grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v.n} className="bg-vert p-6 sm:p-7">
                  <span className="text-sm font-medium text-sable tabular-nums">{v.n}</span>
                  <h3 className="mt-3 text-xl font-medium">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/70">{v.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 flex flex-col items-center lg:mt-16">
            <p className="max-w-[44ch] text-center text-[15px] text-white/70">
              Ibn Khaldūn, Fāṭima al-Fihriyya, Ṣalāḥ al-Dīn, Sinān l&apos;architecte et les autres
              grandes figures
            </p>
            <Image
              src="/characters/group.webp"
              alt="Les personnages HIKAYA : savants, bâtisseurs, souverains et souveraines de l'histoire de l'Islam"
              width={2400}
              height={432}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="mt-6 -mb-2 h-auto w-[190%] max-w-none sm:w-full sm:max-w-[1150px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
