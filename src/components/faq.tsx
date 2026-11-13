import { Plus } from "./icons";
import { SectionHeading } from "./section-heading";

// Réponses tirées du cahier des charges. Textes définitifs à valider par HIKAYA.
const faq = [
  {
    q: "À quel âge s'adressent les histoires ?",
    a: "Les histoires sont pensées pour les enfants de 6 à 14 ans. Elles s'écoutent aussi très bien en famille.",
  },
  {
    q: "Puis-je écouter gratuitement ?",
    a: "Chaque histoire propose un extrait de 1 min 30, sans compte. Pour écouter les épisodes en entier, il faut un abonnement.",
  },
  {
    q: "Mon compte fonctionne-t-il sur le site et dans l'app ?",
    a: "Oui. C'est un seul et même compte : ce que vous écoutez sur le site reprend au même endroit dans l'app, et inversement. Un abonnement pris dans l'app via l'App Store ou Google Play donne aussi accès au site.",
  },
  {
    q: "Comment résilier mon abonnement ?",
    a: "Depuis Mon compte, en quelques clics. L'offre mensuelle est sans engagement. Après résiliation, vous gardez l'accès jusqu'à la fin de la période déjà payée.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Carte bancaire, PayPal, Apple Pay et Google Pay. Le paiement est sécurisé par Stripe : aucune donnée bancaire n'est stockée sur le site. Vous pouvez aussi saisir un code promo.",
  },
  {
    q: "Peut-on écouter sur la télé ou une enceinte ?",
    a: "Oui, avec AirPlay depuis Safari sur iPhone, iPad et Mac, ou avec Chromecast depuis Chrome sur ordinateur et Android.",
  },
  {
    q: "Y a-t-il souvent de nouvelles histoires ?",
    a: "De nouvelles histoires audio sont ajoutées chaque mois. Elles apparaissent sur le site et dans l'app en même temps.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-3 sm:px-6">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Questions fréquentes" first="Une question ?" second="On vous répond." />
          <p className="mt-6 max-w-[34ch] text-[16px] leading-relaxed text-encre/60">
            Vous ne trouvez pas votre réponse ?{" "}
            <a href="#contact" className="font-medium text-vert underline underline-offset-4 hover:no-underline">
              Écrivez-nous
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-vert/10 border-y border-vert/10">
          {faq.map((item, i) => (
            <details key={item.q} name="faq" open={i === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[18px] font-medium text-encre transition-colors hover:text-vert [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-papier text-vert transition-transform duration-300 group-open:rotate-45">
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
