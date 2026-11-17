import { company } from "./company";

// Pages légales (CDC §01). Projets de textes, établis à partir du cahier des charges :
// la rédaction juridique définitive revient à HIKAYA (hors périmètre BigBrowser).
// Un paragraphe = une chaîne ; une liste = un tableau de chaînes.

export type LegalBlock = string | string[];
export type LegalDoc = {
  slug: string;
  nav: string;
  first: string;
  second: string;
  description: string;
  updated: string;
  sections: { title: string; body: LegalBlock[] }[];
};

const addr = company.address.join(", ");

export const legalDocs: LegalDoc[] = [
  {
    slug: "mentions-legales",
    nav: "Mentions légales",
    first: "Mentions",
    second: "légales",
    description: "Éditeur, hébergeur et informations légales du site HIKAYA.",
    updated: "17 novembre 2026",
    sections: [
      {
        title: "Éditeur du site",
        body: [
          [
            `${company.name}`,
            `Siège : ${addr}`,
            `SIREN : ${company.siren}`,
            `Contact : ${company.email}`,
          ],
          `Directeur de la publication : le représentant légal de ${company.name}.`,
        ],
      },
      {
        title: "Hébergement",
        body: [
          "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).",
          "Les fichiers audio et les comptes sont hébergés par le prestataire de l'application HIKAYA.",
        ],
      },
      {
        title: "Conception et réalisation",
        body: ["Design et développement : BigBrowser Ltd, bigbrowser.co."],
      },
      {
        title: "Propriété intellectuelle",
        body: [
          "Les histoires, textes, enregistrements, illustrations, personnages, logos et la marque HIKAYA sont protégés. Toute reproduction, diffusion ou utilisation sans l'accord écrit de Hikaya Médias est interdite.",
        ],
      },
      {
        title: "Nous contacter",
        body: [`Pour toute question sur le site : ${company.email}, ou depuis la page Contact.`],
      },
    ],
  },
  {
    slug: "cgv",
    nav: "Conditions générales de vente",
    first: "Conditions générales",
    second: "de vente",
    description: "Offres, prix, paiement, renouvellement et résiliation des abonnements HIKAYA.",
    updated: "17 novembre 2026",
    sections: [
      {
        title: "Objet",
        body: [
          `Les présentes conditions encadrent la vente des abonnements HIKAYA sur ${company.site} par ${company.name}. L'abonnement donne accès à l'écoute de tout le catalogue de livres audio, sur le site et dans l'application HIKAYA, avec le même compte.`,
        ],
      },
      {
        title: "Offres et prix",
        body: [
          [
            "Mensuel : 9,90 € par mois, sans engagement.",
            "Offre découverte sur le mensuel : 4,90 € par mois pendant les 3 premiers mois, puis 9,90 € par mois.",
            "Annuel : 79,20 € par an, soit 6,60 € par mois, avec 7 jours d'essai gratuits.",
          ],
          "Les prix sont en euros, toutes taxes comprises, TVA à 5,5 % incluse. Des codes promo peuvent être proposés ; leurs conditions sont précisées au moment de leur utilisation.",
        ],
      },
      {
        title: "Paiement",
        body: [
          "Le paiement s'effectue par carte bancaire, PayPal, Apple Pay ou Google Pay, via notre prestataire de paiement sécurisé Stripe. Aucune donnée bancaire n'est conservée par HIKAYA. Une facture est envoyée par e-mail à chaque paiement.",
        ],
      },
      {
        title: "Essai gratuit de l'offre annuelle",
        body: [
          "L'offre annuelle commence par 7 jours gratuits. Sans résiliation avant la fin de l'essai, l'abonnement annuel est facturé en une fois le huitième jour.",
        ],
      },
      {
        title: "Renouvellement et résiliation",
        body: [
          "L'abonnement se renouvelle automatiquement à chaque échéance. Il est résiliable à tout moment depuis Mon compte. L'accès reste ouvert jusqu'à la fin de la période déjà payée ; aucun remboursement au prorata n'est effectué.",
          "En cas d'échec de paiement, de nouvelles tentatives sont effectuées et un e-mail vous invite à mettre à jour votre carte. Sans régularisation, l'accès prend fin.",
        ],
      },
      {
        title: "Droit de rétractation",
        body: [
          "L'abonnement donne un accès immédiat à des contenus numériques. En validant votre paiement, vous demandez cet accès immédiat et reconnaissez renoncer à votre droit de rétractation, conformément à l'article L221-28 du Code de la consommation.",
        ],
      },
      {
        title: "Abonnements pris dans l'application",
        body: [
          "Un abonnement souscrit dans l'application via l'App Store ou Google Play donne aussi accès au site. Il est facturé, renouvelé et résilié selon les conditions du store concerné.",
        ],
      },
      {
        title: "Cartes cadeaux",
        body: [
          "Les cartes cadeaux donnent accès à HIKAYA pour la durée choisie (3 mois, 6 mois ou 1 an), sans renouvellement automatique. Le code s'active sur le site ou dans l'application.",
        ],
      },
      {
        title: "Service client et litiges",
        body: [
          `Pour toute réclamation : ${company.email}. En cas de litige, vous pouvez recourir gratuitement à un médiateur de la consommation. Les présentes conditions sont soumises au droit français.`,
        ],
      },
    ],
  },
  {
    slug: "cgu",
    nav: "Conditions d'utilisation",
    first: "Conditions générales",
    second: "d'utilisation",
    description: "Règles d'utilisation du site HIKAYA, du compte et des avis.",
    updated: "17 novembre 2026",
    sections: [
      {
        title: "Accès au site",
        body: [
          "Le site présente HIKAYA, permet d'écouter gratuitement un extrait de 1 min 30 de chaque histoire et de souscrire un abonnement. Les histoires complètes sont réservées aux abonnés.",
        ],
      },
      {
        title: "Votre compte",
        body: [
          "Le compte HIKAYA est le même sur le site et dans l'application. Vous êtes responsable de la confidentialité de vos identifiants. Le compte est réservé à un usage personnel et familial.",
        ],
      },
      {
        title: "Utilisation des histoires",
        body: [
          "Les histoires sont proposées en écoute en ligne. Il est interdit de les télécharger, de les enregistrer, de les copier ou de les diffuser publiquement. Le téléchargement pour l'écoute hors ligne est possible uniquement dans l'application.",
        ],
      },
      {
        title: "Avis",
        body: [
          "Seuls les abonnés peuvent laisser un avis. Chaque avis est lu par HIKAYA avant publication et peut ne pas être publié, ou être retiré, s'il est hors sujet, injurieux ou contraire à la loi. Les avis ne donnent lieu à aucune contrepartie.",
        ],
      },
      {
        title: "Disponibilité",
        body: [
          "HIKAYA s'efforce de rendre le service accessible en permanence, sans pouvoir le garantir, notamment en cas de maintenance ou d'incident technique.",
        ],
      },
      {
        title: "Suspension du compte",
        body: [
          "En cas d'utilisation contraire aux présentes conditions, HIKAYA peut suspendre ou supprimer le compte concerné, après en avoir informé son titulaire.",
        ],
      },
    ],
  },
  {
    slug: "confidentialite",
    nav: "Confidentialité",
    first: "Politique de",
    second: "confidentialité",
    description: "Données personnelles collectées par HIKAYA, finalités, destinataires et droits.",
    updated: "17 novembre 2026",
    sections: [
      {
        title: "Responsable du traitement",
        body: [`${company.name}, ${addr}. Contact : ${company.email}.`],
      },
      {
        title: "Données collectées",
        body: [
          [
            "Compte : prénom, adresse e-mail, mot de passe (chiffré, jamais stocké par le site).",
            "Abonnement : offre, statut, historique de paiement. Les données bancaires sont traitées uniquement par Stripe.",
            "Écoute : histoires écoutées et position de lecture, pour reprendre là où vous vous êtes arrêté.",
            "Avis : note, commentaire, prénom.",
            "Mesure d'audience : uniquement avec votre accord.",
          ],
        ],
      },
      {
        title: "Pourquoi nous les utilisons",
        body: [
          [
            "Gérer votre compte et votre abonnement (exécution du contrat).",
            "Vous envoyer les e-mails liés à votre compte : bienvenue, confirmation, factures, mot de passe.",
            "Vous envoyer nos nouveautés et offres, uniquement si vous l'avez accepté.",
            "Mesurer l'audience du site, uniquement avec votre accord.",
          ],
        ],
      },
      {
        title: "Destinataires",
        body: [
          [
            "Stripe : paiement et factures.",
            "Brevo : envoi des e-mails.",
            "Vercel : hébergement du site.",
            "Le prestataire de l'application HIKAYA : comptes, catalogue et fichiers audio.",
          ],
          "Vos données ne sont jamais vendues.",
        ],
      },
      {
        title: "Durée de conservation",
        body: [
          "Les données du compte sont conservées tant que le compte existe, puis supprimées. Les factures sont conservées pendant la durée légale de 10 ans.",
        ],
      },
      {
        title: "Vos droits",
        body: [
          `Vous pouvez accéder à vos données, les corriger, les supprimer, vous opposer à leur utilisation ou demander leur portabilité. Vous pouvez supprimer votre compte depuis Mon compte, ou nous écrire à ${company.email}. Vous pouvez aussi saisir la CNIL (cnil.fr).`,
        ],
      },
    ],
  },
  {
    slug: "cookies",
    nav: "Cookies",
    first: "Gestion des",
    second: "cookies",
    description: "Les cookies utilisés sur le site HIKAYA et comment les gérer.",
    updated: "17 novembre 2026",
    sections: [
      {
        title: "Qu'est-ce qu'un cookie ?",
        body: [
          "Un cookie est un petit fichier déposé sur votre appareil lors de la visite d'un site. Il permet par exemple de garder votre session ouverte.",
        ],
      },
      {
        title: "Cookies nécessaires",
        body: [
          "Ils font fonctionner le site : connexion à votre compte, lecteur audio, paiement, mémorisation de votre choix sur les cookies. Ils ne demandent pas d'accord.",
        ],
      },
      {
        title: "Mesure d'audience",
        body: [
          "Avec votre accord, nous mesurons la fréquentation du site pour l'améliorer : pages vues, parcours, type d'appareil. Sans accord, aucun cookie de mesure n'est déposé.",
        ],
      },
      {
        title: "Changer d'avis",
        body: [
          "Vous pouvez modifier votre choix à tout moment avec le lien « Gérer les cookies » en bas de chaque page. Votre choix est conservé 6 mois.",
        ],
      },
    ],
  },
];

export const getLegalDoc = (slug: string) => legalDocs.find((d) => d.slug === slug)!;
