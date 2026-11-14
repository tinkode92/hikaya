import { Plus } from "./icons";
import { SectionHeading } from "./section-heading";

// Questions et réponses fournies par HIKAYA (Textes_site_HIKAYA).
export type FaqItem = { q: string; a: string };

export const faq: FaqItem[] = [
  {
    q: "À quel âge les histoires HIKAYA sont-elles destinées ?",
    a: "Nos récits s'adressent principalement aux enfants de 6 à 14 ans (mais pas que !). Ils peuvent aussi se découvrir en famille, chacun y trouvant des personnages, des idées et des questions à partager.",
  },
  {
    q: "Que trouve-t-on dans le catalogue ?",
    a: "Des récits consacrés aux grandes époques, aux personnages et aux villes de la civilisation musulmane. Certaines histoires se découvrent seules, d'autres se suivent en série, dans l'ordre des épisodes.",
  },
  {
    q: "Sur quelles sources reposent les histoires ?",
    a: "Nos récits s'appuient notamment sur les sources classiques de l'islam et de la civilisation musulmane.",
  },
  {
    q: "Peut-on écouter avant de s'abonner ?",
    a: "Oui. Chaque livre audio propose un extrait de 1 minute 30, accessible sur le site sans créer de compte. Vous pouvez ainsi découvrir la narration et l'univers de l'histoire avec votre enfant.",
  },
  {
    q: "Que comprend l'abonnement ?",
    a: "Votre abonnement donne accès à l'ensemble du catalogue audio et aux nouveaux récits ajoutés pendant sa durée. Vous pouvez écouter sur le site et dans l'application avec le même compte.",
  },
  {
    q: "Comment accéder à l'application après un achat sur le site ?",
    a: "Téléchargez HIKAYA depuis l'App Store ou Google Play, puis connectez-vous avec le compte utilisé sur le site. Votre accès est activé après confirmation du paiement. Utilisez le même mode de connexion, par e-mail ou avec Google.",
  },
  {
    q: "Faut-il regarder un écran pour écouter ?",
    a: "Une fois l'histoire lancée, votre enfant peut écouter sans regarder l'écran. Sur les appareils compatibles, la lecture se poursuit lorsque l'écran est verrouillé.",
  },
  {
    q: "Peut-on écouter sans connexion internet ?",
    a: "L'application HIKAYA propose un mode hors ligne. Préparez vos histoires dans l'application lorsque vous êtes connecté pour les écouter ensuite sans réseau. L'écoute sur le site nécessite une connexion internet.",
  },
  {
    q: "Peut-on écouter sur une enceinte ou un téléviseur ?",
    a: "Le lecteur du site permet la diffusion avec AirPlay depuis Safari sur iPhone, iPad et Mac, et avec Chromecast depuis Chrome sur ordinateur et Android. Un appareil de diffusion compatible est nécessaire.",
  },
  {
    q: "Comment résilier mon abonnement ?",
    a: "Pour un abonnement acheté sur le site, ouvrez « Mon compte », puis « Gérer mon abonnement ». La résiliation arrête les prochains renouvellements. Vous conservez votre accès jusqu'à la fin de la période payée. Pour un abonnement acheté via l'App Store ou Google Play, la gestion se fait auprès du store concerné.",
  },
  {
    q: "Une question sur un paiement ou une demande de remboursement ?",
    a: "Écrivez-nous depuis la page Contact en indiquant l'adresse e-mail de votre compte. Les conditions applicables à votre abonnement sont précisées dans nos conditions générales de vente.",
  },
];

export function Faq({ items = faq }: { items?: FaqItem[] }) {
  return (
    <section id="faq" className="px-3 sm:px-6">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Questions fréquentes" first="Une question ?" second="On vous répond" />
          <p className="mt-6 max-w-[34ch] text-[16px] leading-relaxed text-encre/60">
            Vous ne trouvez pas votre réponse ?{" "}
            <a href="#contact" className="font-medium text-vert underline underline-offset-4 hover:no-underline">
              Écrivez-nous
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-vert/10 border-y border-vert/10">
          {items.map((item, i) => (
            <details key={item.q} name="faq" open={i === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[18px] font-medium text-encre transition-colors hover:text-vert [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-papier text-vert transition-transform group-open:rotate-45">
                  <Plus />
                </span>
              </summary>
              <p className="max-w-[60ch] pr-12 pb-6 text-[16px] leading-relaxed text-encre/65">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
