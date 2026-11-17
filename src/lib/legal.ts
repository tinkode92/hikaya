import { company } from "./company";

// Pages légales (CDC §01).
// CGV et CGU : textes fournis par HIKAYA (Drive « BB X HIKAYA », documents « CGV » et « CGU »), repris tels quels.
// Mentions légales, confidentialité et cookies : projets établis à partir des CGV/CGU et du cahier des charges,
// à faire valider par HIKAYA.
//
// Format du texte : « ## » titre de section, « ### » sous-titre, « - » élément de liste,
// une ligne vide entre deux paragraphes, un retour à la ligne simple = saut de ligne (adresses).
// Liens : [texte](/adresse). Les adresses e-mail deviennent des liens automatiquement.

export type LegalDoc = {
  slug: string;
  nav: string;
  first: string;
  second: string;
  description: string;
  updated: string;
  content: string;
};

const addr = company.address.join("\n");

const cgv = `## Article 1 — Identification du vendeur

Les présentes Conditions Générales de Vente (ci-après « CGV ») sont établies par la société HIKAYA MEDIAS, société par actions simplifiée unipersonnelle (SASU) au capital social de 1,00 euro, immatriculée au Registre du Commerce et des Sociétés de Lille Métropole sous le numéro 991 776 501.

Son siège social est situé :

61 rue Gustave Delory
59155 Faches-Thumesnil — France

- SIREN : 991 776 501
- SIRET : 991 776 501 00017
- TVA intracommunautaire : FR15 991776501
- Adresse électronique : contact@hikayamedias.com
- Site internet : www.hikayamedias.com

Ci-après dénommée « HIKAYA MEDIAS ».

## Article 2 — Objet et champ d'application

Les présentes CGV définissent les conditions applicables à la souscription d'abonnements donnant accès aux contenus numériques proposés par HIKAYA MEDIAS.

HIKAYA est un service de livres audio consacrés notamment à l'histoire, à la culture et à la civilisation musulmanes, destinés principalement aux enfants et aux familles.

Les abonnements commercialisés sur le site internet permettent d'accéder à l'ensemble du catalogue de livres audio directement depuis le site internet HIKAYA ainsi que depuis l'application mobile HIKAYA, disponible sur les appareils compatibles avec iOS et Android.

Les présentes CGV s'appliquent exclusivement aux abonnements achetés directement sur le site internet HIKAYA.

Les abonnements souscrits depuis l'Apple App Store ou Google Play sont soumis aux conditions de vente applicables à ces plateformes et aux dispositions contractuelles de HIKAYA qui leur sont opposables.

Les abonnements proposés sur le site sont réservés aux consommateurs agissant à des fins personnelles et non professionnelles.

La souscription est réservée aux personnes majeures disposant de la capacité juridique de contracter.

## Article 3 — Acceptation des conditions générales

Toute souscription d'un abonnement implique l'acceptation préalable des présentes CGV.

Avant la validation de sa commande, le Client reconnaît avoir été informé des caractéristiques essentielles du service, de son prix, de sa durée, de ses conditions de renouvellement et de résiliation ainsi que de son droit de rétractation.

Ces informations sont communiquées conformément aux dispositions des articles L.111-1 et L.221-5 du Code de la consommation.

L'acceptation des CGV est matérialisée par une case dédiée, non précochée, que le Client doit sélectionner avant de confirmer sa commande.

La validation de la commande constitue l'expression du consentement du Client aux conditions contractuelles qui lui ont été présentées.

HIKAYA MEDIAS conserve, dans les conditions prévues par la réglementation applicable, les éléments permettant d'établir la conclusion du contrat.

## Article 4 — Description du service

L'abonnement HIKAYA donne accès à un catalogue de livres audio disponibles depuis le site internet HIKAYA et son application mobile.

Selon les fonctionnalités proposées, le service permet notamment :

- L'écoute en ligne de l'ensemble des livres audio directement depuis le site internet HIKAYA, au moyen d'un navigateur compatible ;
- L'écoute des livres audio depuis l'application mobile HIKAYA sur smartphone et tablette ;
- L'accès aux nouvelles publications pendant toute la durée de l'abonnement ;
- L'écoute en arrière-plan depuis l'application mobile, notamment lorsque l'écran de l'appareil est verrouillé ;
- L'écoute dans un véhicule ou au moyen d'une enceinte connectée compatible ;
- L'écoute hors ligne depuis l'application mobile, selon les fonctionnalités disponibles.

L'Utilisateur peut accéder à son abonnement depuis le site internet et l'application mobile au moyen de son compte HIKAYA, sous réserve des conditions techniques et des éventuelles limitations d'utilisation simultanée.

L'abonnement donne accès aux contenus numériques sans transfert de propriété.

Les fichiers éventuellement enregistrés pour une écoute hors ligne restent destinés exclusivement à une utilisation dans l'environnement HIKAYA.

Le catalogue peut évoluer pendant la durée de l'abonnement, notamment par l'ajout de nouveaux livres audio.

HIKAYA MEDIAS peut également modifier ou retirer certains contenus pour des raisons éditoriales, techniques ou juridiques, dans le respect des dispositions légales relatives à la conformité des contenus et services numériques.

## Article 5 — Création du compte

L'accès aux services HIKAYA nécessite la création d'un compte utilisateur au moyen d'une adresse électronique valide.

Le Client s'engage à communiquer des informations exactes et à les maintenir à jour.

Les identifiants de connexion sont personnels et confidentiels.

Le compte est destiné à un usage privé et familial. Sa mise à disposition de personnes extérieures au foyer, notamment dans un cadre commercial ou collectif, est interdite sans autorisation préalable de HIKAYA MEDIAS.

En cas de suspicion d'utilisation frauduleuse, le Client est invité à contacter le service d'assistance à l'adresse contact@hikayamedias.com.

## Article 6 — Modalités de commande

La souscription d'un abonnement s'effectue depuis le site internet HIKAYA.

Le Client sélectionne la formule d'abonnement correspondant à ses besoins.

Avant de confirmer sa commande, il peut consulter un récapitulatif indiquant notamment :

- la formule sélectionnée ;
- le prix total toutes taxes comprises ;
- la durée de l'abonnement ;
- les conditions de renouvellement, lorsqu'il est prévu ;
- les modalités de résiliation ;
- les informations relatives au droit de rétractation.

Le Client peut corriger les éventuelles erreurs avant la validation définitive de sa commande.

La confirmation intervient au moyen d'un bouton comportant une mention explicite de l'obligation de paiement.

Après validation du paiement, un courrier électronique de confirmation est adressé au Client sur un support durable, conformément à l'article L.221-13 du Code de la consommation.

L'accès aux contenus est activé après confirmation de la souscription, sous réserve des délais techniques nécessaires.

## Article 7 — Tarifs et offres d'abonnement

HIKAYA MEDIAS propose différentes formules d'abonnement, notamment mensuelles, trimestrielles et annuelles.

Les tarifs applicables sont ceux affichés sur le site internet au moment de la commande.

Les prix destinés aux consommateurs situés en France sont indiqués en euros, toutes taxes comprises.

HIKAYA MEDIAS peut modifier les tarifs de ses offres pour les souscriptions futures.

Toute modification affectant un abonnement en cours ou son renouvellement est communiquée dans le respect des dispositions légales applicables.

Les tarifs proposés sur le site internet peuvent différer de ceux pratiqués sur l'Apple App Store et Google Play.

## Article 8 — Offres promotionnelles

HIKAYA MEDIAS peut proposer ponctuellement des offres promotionnelles, notamment à l'occasion du lancement de nouveaux services ou d'opérations commerciales.

Chaque offre précise ses conditions d'application, sa durée de validité et les éventuelles restrictions.

Les offres promotionnelles ne sont pas cumulables, sauf indication contraire.

Lorsqu'une réduction s'applique uniquement à une période initiale, le prix applicable aux périodes suivantes est communiqué avant la souscription.

HIKAYA MEDIAS respecte les obligations légales relatives à l'information sur les prix et aux annonces de réduction.

## Article 9 — Paiement et facturation

Les abonnements souscrits sur le site internet sont réglés au moyen des solutions de paiement proposées lors de la commande.

Le paiement peut notamment être réalisé par carte bancaire ou par l'intermédiaire de prestataires de paiement partenaires, selon les moyens effectivement disponibles.

Les transactions sont traitées au moyen de systèmes de paiement sécurisés.

HIKAYA MEDIAS ne conserve pas les données bancaires complètes des Clients.

Pour les abonnements souscrits directement sur le site, HIKAYA MEDIAS demeure le vendeur du service et assure les obligations de facturation qui lui incombent.

Le recours à un prestataire de paiement ne transfère pas à celui-ci les obligations légales du vendeur envers le consommateur.

En cas de paiement refusé ou non finalisé, l'activation ou le renouvellement de l'abonnement peut être suspendu, sous réserve des droits du Client.

Les éventuelles facilités de paiement sont soumises aux conditions communiquées avant leur utilisation.

## Article 10 — Durée et renouvellement

L'abonnement est conclu pour la durée choisie par le Client lors de la souscription.

Les conditions de renouvellement sont précisées dans la présentation de chaque offre.

Lorsqu'un abonnement est assorti d'un renouvellement automatique, cette caractéristique est clairement portée à la connaissance du Client avant la validation de sa commande.

Le Client est informé de la périodicité du renouvellement, de son prix et des modalités permettant d'y mettre fin.

HIKAYA MEDIAS respecte les obligations d'information prévues par les articles L.215-1 et suivants du Code de la consommation lorsqu'ils sont applicables.

## Article 11 — Résiliation

Le Client peut mettre fin au renouvellement de son abonnement conformément aux conditions de la formule souscrite.

Pour les contrats reconductibles conclus sur le site internet, HIKAYA MEDIAS met à disposition une fonctionnalité de résiliation électronique gratuite, facilement accessible et conforme à la réglementation française.

Le Client peut également contacter le service client :

contact@hikayamedias.com

Sauf disposition légale contraire ou condition contractuelle plus favorable, la résiliation du renouvellement prend effet à la fin de la période d'abonnement déjà réglée.

Le Client conserve son accès aux contenus jusqu'à cette échéance.

La résiliation ne donne pas automatiquement lieu au remboursement des sommes correspondant à la période déjà commencée, sans préjudice du droit de rétractation et des garanties légales.

La suppression du compte utilisateur ne constitue pas nécessairement une résiliation de l'abonnement.

## Article 12 — Droit de rétractation

Conformément à l'article L.221-18 du Code de la consommation, le Client dispose d'un délai de quatorze (14) jours à compter de la conclusion du contrat d'abonnement pour exercer son droit de rétractation, sans avoir à justifier sa décision.

HIKAYA MEDIAS permet au Client d'exercer ce droit pendant ce délai pour les abonnements souscrits directement sur son site internet.

Le Client peut notifier sa décision de rétractation au moyen d'une déclaration claire et dénuée d'ambiguïté adressée à :

contact@hikayamedias.com

Il peut également utiliser le formulaire type de rétractation annexé aux présentes CGV.

Une fonctionnalité de rétractation en ligne est mise à disposition sur le site internet conformément aux dispositions légales applicables depuis le 19 juin 2026.

Lorsque la fourniture du service a commencé avant l'expiration du délai de rétractation, les conséquences financières sont déterminées conformément aux règles légales applicables à la nature du contrat.

Lorsqu'un paiement proportionnel au service déjà fourni est légalement dû, il est calculé dans les conditions prévues notamment par l'article L.221-25 du Code de la consommation.

Aucune retenue ne peut être appliquée en dehors des cas autorisés par la loi.

Les sommes devant être remboursées le sont dans un délai maximal de quatorze (14) jours à compter de la date à laquelle HIKAYA MEDIAS a été informée de la décision de rétractation.

Le remboursement est effectué au moyen du mode de paiement initial, sauf accord exprès du Client pour un autre moyen, sans frais supplémentaires.

Le présent article ne constitue pas une garantie commerciale de remboursement au-delà des droits légaux du consommateur.

## Article 13 — Garantie légale de conformité

Les contenus et services numériques fournis par HIKAYA MEDIAS bénéficient de la garantie légale de conformité prévue aux articles L.224-25-12 et suivants du Code de la consommation.

HIKAYA MEDIAS s'engage à fournir un service conforme aux caractéristiques annoncées lors de la souscription.

Pour les contrats prévoyant une fourniture continue de contenus ou de services numériques, HIKAYA MEDIAS répond des défauts de conformité apparaissant pendant la période de fourniture.

En cas de défaut de conformité, le Client peut demander la mise en conformité du service, sans frais, dans les conditions prévues par la loi.

Lorsque les conditions légales sont réunies, le Client peut également obtenir une réduction du prix ou la résolution du contrat.

HIKAYA MEDIAS fournit les mises à jour nécessaires au maintien de la conformité du service dans les conditions légales applicables.

Ces garanties s'appliquent indépendamment de toute garantie commerciale.

## Article 14 — Disponibilité du service

HIKAYA MEDIAS met en œuvre les moyens raisonnables nécessaires pour assurer l'accessibilité et le bon fonctionnement de son service.

L'accès peut être temporairement interrompu en raison d'opérations de maintenance, de mises à jour ou d'incidents techniques.

HIKAYA MEDIAS s'efforce de limiter la durée et les conséquences de ces interruptions.

Certaines difficultés d'accès peuvent résulter de l'équipement du Client, de sa connexion internet ou de services techniques tiers.

Les présentes dispositions ne limitent pas les droits du Client au titre de la garantie légale de conformité ou d'une inexécution contractuelle imputable à HIKAYA MEDIAS.

## Article 15 — Propriété intellectuelle

L'ensemble des éléments constituant le service HIKAYA, notamment les livres audio, textes, scénarios, narrations, enregistrements sonores, illustrations, créations graphiques, marques, logos et éléments logiciels, est protégé par le Code de la propriété intellectuelle.

Ces éléments appartiennent à HIKAYA MEDIAS ou sont exploités avec l'autorisation de leurs titulaires de droits.

La souscription d'un abonnement ne confère aucun droit de propriété sur les contenus.

Le Client bénéficie uniquement d'une licence personnelle, non exclusive, non cessible et non transférable, limitée à une utilisation privée et familiale pendant la durée de son abonnement.

Toute reproduction, extraction, redistribution, mise à disposition du public ou exploitation commerciale non autorisée est interdite, sous réserve des exceptions prévues par la loi.

## Article 16 — Responsabilité

HIKAYA MEDIAS répond de l'exécution de ses obligations contractuelles conformément aux dispositions du Code civil et du Code de la consommation.

Sa responsabilité est appréciée notamment au regard des articles 1231-1 et suivants du Code civil.

HIKAYA MEDIAS ne peut être tenue responsable des conséquences exclusivement imputables à une faute du Client, à un événement de force majeure au sens de l'article 1218 du Code civil ou à toute autre cause d'exonération légalement admise.

Aucune disposition des présentes CGV ne peut avoir pour effet de limiter ou d'exclure les droits impératifs reconnus au consommateur.

Les contenus HIKAYA ont une finalité culturelle et éducative et ne garantissent aucun résultat scolaire ou pédagogique individualisé.

## Article 17 — Données personnelles

HIKAYA MEDIAS traite certaines données personnelles nécessaires à la création des comptes, à la gestion des abonnements, à l'assistance et à la sécurité du service.

Les traitements nécessaires à la fourniture du service reposent notamment sur l'exécution du contrat, conformément à l'article 6, paragraphe 1, point b), du Règlement général sur la protection des données (RGPD).

D'autres traitements peuvent reposer sur une obligation légale, un intérêt légitime ou le consentement, selon leur finalité.

HIKAYA MEDIAS ne demande pas aux enfants de créer un compte et ne collecte pas volontairement de données personnelles directement auprès d'eux.

Les modalités détaillées des traitements, les durées de conservation et les droits des personnes concernées figurent dans la [Politique de Confidentialité](/confidentialite) accessible depuis le site et l'application.

Toute demande relative aux données personnelles peut être adressée à :

contact@hikayamedias.com

## Article 18 — Service client

Pour toute question relative à un abonnement, un paiement, une difficulté technique ou une réclamation, le Client peut contacter HIKAYA MEDIAS :

Par courrier :

HIKAYA MEDIAS
61 rue Gustave Delory
59155 Faches-Thumesnil — France

Par courrier électronique :

contact@hikayamedias.com

Le service client s'efforce de répondre dans un délai indicatif de 72 heures ouvrées.

Ce délai ne modifie pas les délais légaux applicables à certaines demandes.

## Article 19 — Médiation de la consommation

En cas de litige, le Client est invité à adresser préalablement une réclamation écrite au service client HIKAYA.

Si aucune solution amiable n'est trouvée, le Client peut recourir gratuitement à un médiateur de la consommation, conformément aux articles L.611-1 et suivants du Code de la consommation.

Le recours à la médiation ne prive pas le Client de son droit de saisir les juridictions compétentes.

## Article 20 — Modification des CGV

HIKAYA MEDIAS peut modifier les présentes CGV afin de tenir compte notamment de l'évolution de ses services, de son organisation ou de la réglementation.

Les nouvelles conditions s'appliquent aux souscriptions conclues après leur entrée en vigueur.

Pour les contrats en cours, les modifications sont mises en œuvre dans le respect des droits des consommateurs et des dispositions applicables aux contenus et services numériques.

Les modifications nécessitant une information préalable ou l'accord du Client sont traitées conformément aux dispositions légales.

La version applicable est mise à disposition sur le site internet HIKAYA.

## Article 21 — Droit applicable et litiges

Les présentes CGV sont régies par le droit français.

Cette stipulation ne prive pas les consommateurs résidant dans un autre État des dispositions impératives de protection qui leur seraient applicables en vertu des règles de droit international privé.

En cas de différend, les parties sont invitées à rechercher une solution amiable.

À défaut, le litige peut être porté devant les juridictions compétentes conformément aux règles légales de compétence territoriale applicables aux consommateurs.

## Annexe — Formulaire type de rétractation

À l'attention de :

HIKAYA MEDIAS
61 rue Gustave Delory
59155 Faches-Thumesnil — France
contact@hikayamedias.com

Je vous notifie par la présente ma rétractation du contrat portant sur l'abonnement HIKAYA suivant :

Formule d'abonnement : ....................................
Date de souscription : ....................................
Nom du consommateur : ....................................
Adresse électronique du compte : ....................................
Adresse postale : ....................................
Date : ....................................
Signature du consommateur (uniquement en cas de notification sur papier) : ....................................

Le présent formulaire peut être transmis par courrier électronique ou postal.`;

const cgu = `## Article 1 — Objet

Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») définissent les règles applicables à l'accès et à l'utilisation des services numériques proposés sous la marque HIKAYA.

HIKAYA est une plateforme culturelle et éducative proposant des livres audio consacrés notamment à l'histoire et à la civilisation musulmanes.

Les contenus sont accessibles directement depuis le site internet HIKAYA ainsi que depuis l'application mobile disponible sur iOS et Android.

Les présentes CGU s'appliquent à l'ensemble des fonctionnalités proposées sur ces différents supports, notamment la création et la gestion du compte utilisateur, l'accès aux livres audio et leur écoute.

Elles complètent les [Conditions Générales de Vente](/cgv) applicables aux abonnements.

## Article 2 — Éditeur du service

Le service HIKAYA est édité par :

HIKAYA MEDIAS, société par actions simplifiée unipersonnelle (SASU) au capital social de 1,00 euro.

Immatriculée au Registre du Commerce et des Sociétés de Lille Métropole sous le numéro 991 776 501.

Siège social :

61 rue Gustave Delory
59155 Faches-Thumesnil — France

- SIRET : 991 776 501 00017
- TVA intracommunautaire : FR15 991776501
- Adresse électronique : contact@hikayamedias.com
- Site internet : www.hikayamedias.com

## Article 3 — Acceptation des CGU

L'utilisation des fonctionnalités nécessitant la création d'un compte est subordonnée à l'acceptation des présentes CGU.

L'Utilisateur est invité à prendre connaissance des conditions avant son inscription.

En créant son compte et en acceptant les CGU, il s'engage à respecter les règles d'utilisation du service.

Les CGU sont accessibles à tout moment depuis le site internet et l'application mobile.

## Article 4 — Public concerné et protection des mineurs

Le service HIKAYA est destiné à un usage privé et familial.

Les contenus audio s'adressent principalement aux enfants, mais la création du compte et la souscription d'un abonnement sont réservées aux personnes majeures disposant de la capacité juridique nécessaire.

Les enfants peuvent écouter les contenus sous la responsabilité de leurs parents ou représentants légaux.

Le titulaire du compte demeure responsable de la gestion de son abonnement, de ses identifiants et de l'utilisation du service dans son foyer.

HIKAYA MEDIAS recommande aux parents de sélectionner les contenus adaptés à l'âge et à la compréhension de leurs enfants.

L'application ne propose pas de messagerie entre utilisateurs ni de fonctionnalité permettant aux enfants de publier librement des contenus accessibles au public.

## Article 5 — Création et gestion du compte

L'accès aux fonctionnalités personnalisées de HIKAYA nécessite la création d'un compte utilisateur.

L'inscription est réalisée au moyen d'une adresse électronique valide.

L'Utilisateur s'engage à fournir des informations exactes et à les maintenir à jour.

Il lui appartient de préserver la confidentialité de ses moyens d'authentification.

En cas de suspicion d'accès non autorisé, il doit contacter HIKAYA MEDIAS à l'adresse :

contact@hikayamedias.com

HIKAYA MEDIAS peut mettre en œuvre les mesures techniques nécessaires pour sécuriser les comptes et prévenir les accès frauduleux.

## Article 6 — Accès aux contenus

L'accès à l'intégralité du catalogue HIKAYA est réservé aux utilisateurs disposant d'un abonnement actif ou d'un droit d'accès expressément accordé par HIKAYA MEDIAS.

L'abonnement peut être souscrit, selon les offres disponibles :

- directement sur le site internet HIKAYA ;
- depuis l'application mobile via l'Apple App Store ;
- depuis l'application mobile via Google Play.

Quel que soit le canal de souscription, l'abonnement permet d'accéder aux livres audio depuis le site internet HIKAYA et l'application mobile, au moyen du compte utilisateur associé à l'abonnement.

L'écoute depuis le site internet nécessite un navigateur compatible et une connexion internet.

L'application mobile propose également une fonctionnalité d'écoute hors ligne, selon les conditions techniques du service.

Les conditions de paiement, de renouvellement et de résiliation dépendent du canal utilisé pour souscrire l'abonnement.

L'Utilisateur ayant souscrit son abonnement sur le site internet doit gérer celui-ci conformément aux CGV du site.

L'Utilisateur ayant souscrit son abonnement par l'intermédiaire d'Apple ou de Google doit utiliser les fonctionnalités de gestion des abonnements de la plateforme concernée.

## Article 7 — Licence d'utilisation

HIKAYA MEDIAS accorde à l'Utilisateur, pendant la durée de son droit d'accès, une licence d'utilisation personnelle, non exclusive, non transférable et non cessible.

Cette licence autorise l'écoute des contenus dans un cadre privé et familial, au moyen des fonctionnalités mises à disposition par HIKAYA.

Elle n'autorise aucune exploitation commerciale des livres audio ou des autres éléments du service.

L'abonnement ne confère aucun droit de propriété sur les contenus numériques.

L'utilisation du service reste soumise au respect des présentes CGU et des dispositions légales applicables.

## Article 8 — Utilisations interdites

L'Utilisateur s'engage à respecter les droits de propriété intellectuelle de HIKAYA MEDIAS et de ses partenaires.

Il lui est notamment interdit, sauf autorisation préalable ou exception légale applicable :

- de reproduire ou redistribuer les livres audio ;
- d'extraire les fichiers sonores en vue de leur diffusion ;
- de mettre les contenus à disposition sur des plateformes publiques ;
- de commercialiser ou louer les contenus ;
- de partager ses identifiants avec des personnes extérieures à son foyer ;
- de contourner les dispositifs de protection technique ;
- de perturber le fonctionnement du service ;
- d'utiliser des procédés automatisés non autorisés pour extraire les contenus.

Toute utilisation non conforme peut entraîner les mesures prévues aux présentes CGU, sans préjudice des recours légaux ouverts à HIKAYA MEDIAS.

## Article 9 — Utilisation sur plusieurs appareils

L'application HIKAYA est conçue pour fonctionner sur les appareils mobiles compatibles avec les systèmes iOS et Android.

L'Utilisateur peut accéder à son compte sur les appareils autorisés par les fonctionnalités techniques du service.

HIKAYA MEDIAS peut mettre en place des limitations raisonnables concernant le nombre de connexions ou d'écoutes simultanées afin de prévenir les utilisations abusives.

Les limitations effectivement appliquées sont portées à la connaissance des utilisateurs.

L'utilisation du compte demeure limitée au cadre privé et familial.

## Article 10 — Écoute hors ligne

Certaines fonctionnalités de l'application permettent l'écoute de contenus sans connexion internet permanente.

Les contenus enregistrés pour l'écoute hors ligne restent accessibles exclusivement dans les conditions techniques prévues par l'application.

Ils ne peuvent être exportés, transférés ou exploités indépendamment du service HIKAYA.

L'accès aux contenus enregistrés peut nécessiter une vérification périodique de la validité de l'abonnement.

À l'expiration du droit d'accès, les contenus enregistrés peuvent devenir indisponibles.

## Article 11 — Disponibilité et maintenance

HIKAYA MEDIAS s'efforce d'assurer la disponibilité et le bon fonctionnement du service.

Des interruptions temporaires peuvent intervenir notamment en raison d'opérations de maintenance, de mises à jour ou d'incidents techniques.

L'Utilisateur est invité à maintenir son application et le système d'exploitation de son appareil à jour.

Les caractéristiques de compatibilité et les éventuelles exigences techniques sont précisées sur les pages de présentation du service.

Les dispositions du présent article ne limitent pas les obligations légales de conformité et de fourniture du service.

## Article 12 — Évolution du catalogue

Le catalogue HIKAYA est destiné à évoluer régulièrement.

HIKAYA MEDIAS peut notamment ajouter de nouveaux livres audio, créer de nouvelles catégories ou modifier l'organisation des contenus.

Certains contenus peuvent être retirés pour des raisons éditoriales, juridiques ou techniques.

Lorsque ces changements constituent une modification du service numérique au sens de la réglementation applicable, HIKAYA MEDIAS respecte les obligations d'information et les droits reconnus au consommateur.

## Article 13 — Propriété intellectuelle

Les éléments constituant HIKAYA, notamment les livres audio, textes, scénarios, narrations, illustrations, marques, logos, graphismes et éléments logiciels, sont protégés par le droit de la propriété intellectuelle.

Ils appartiennent à HIKAYA MEDIAS ou sont utilisés avec l'autorisation de leurs titulaires de droits.

Toute reproduction, représentation, adaptation ou diffusion non autorisée est interdite, sous réserve des exceptions prévues par la loi.

L'utilisation du service ne constitue en aucun cas une cession de droits de propriété intellectuelle.

## Article 14 — Protection des données personnelles

### 14.1. Responsable du traitement

HIKAYA MEDIAS agit en qualité de responsable du traitement des données personnelles nécessaires à l'exploitation du service, dans les conditions définies par le Règlement général sur la protection des données (RGPD).

### 14.2. Données traitées

Dans le cadre de l'utilisation du service, HIKAYA MEDIAS peut traiter notamment :

- l'adresse électronique du titulaire du compte ;
- les identifiants techniques nécessaires à l'authentification ;
- les informations relatives à l'abonnement ;
- les informations nécessaires au support client ;
- les données techniques nécessaires au fonctionnement, à la sécurité et à la maintenance de l'application.

Des prestataires techniques, notamment des services de l'environnement Firebase, peuvent intervenir dans le traitement de certaines données.

Les données effectivement collectées dépendent des fonctionnalités utilisées et des paramètres techniques du service.

### 14.3. Finalités et bases légales

Les traitements ont notamment pour finalités :

- la création et la gestion des comptes ;
- la fourniture des contenus et fonctionnalités ;
- la gestion des abonnements ;
- l'assistance aux utilisateurs ;
- la sécurité et la maintenance du service ;
- le respect des obligations légales.

Les traitements nécessaires à la fourniture du service reposent sur l'exécution du contrat, conformément à l'article 6, paragraphe 1, point b), du RGPD.

D'autres traitements peuvent reposer, selon les cas, sur une obligation légale, l'intérêt légitime de HIKAYA MEDIAS ou le consentement de l'Utilisateur.

### 14.4. Protection des données des enfants

HIKAYA MEDIAS ne demande pas aux enfants de créer un compte personnel.

Les comptes sont créés et administrés par des adultes.

HIKAYA MEDIAS ne collecte pas volontairement de données personnelles directement auprès des enfants et ne leur demande pas de communiquer des informations les concernant.

L'application ne comporte pas de fonctionnalité permettant aux enfants de publier des données personnelles auprès d'autres utilisateurs.

Les éventuelles données techniques générées par l'utilisation d'un appareil sont traitées conformément à la Politique de Confidentialité et aux principes de minimisation et de protection des données.

### 14.5. Conservation et sécurité

Les données personnelles sont conservées pendant les durées nécessaires aux finalités pour lesquelles elles ont été collectées, sous réserve des obligations légales de conservation et des délais de prescription applicables.

HIKAYA MEDIAS met en œuvre des mesures techniques et organisationnelles adaptées pour préserver leur confidentialité, leur intégrité et leur sécurité.

En cas de violation de données personnelles, HIKAYA MEDIAS applique les procédures prévues aux articles 33 et 34 du RGPD, notamment en matière de notification à la CNIL et d'information des personnes concernées lorsque les conditions légales sont réunies.

### 14.6. Droits des utilisateurs

Conformément aux articles 15 à 22 du RGPD, l'Utilisateur bénéficie, selon les conditions légales applicables, des droits suivants :

- droit d'accès à ses données personnelles ;
- droit de rectification ;
- droit à l'effacement ;
- droit à la limitation du traitement ;
- droit à la portabilité ;
- droit d'opposition ;
- droit de retirer son consentement lorsqu'un traitement repose sur cette base légale.

Ces droits peuvent être exercés en écrivant à :

contact@hikayamedias.com

HIKAYA MEDIAS répond aux demandes dans les délais prévus par le RGPD, en principe dans un délai d'un mois.

Un justificatif d'identité peut être demandé uniquement lorsque cela est nécessaire pour vérifier l'identité du demandeur.

L'Utilisateur peut également introduire une réclamation auprès de la Commission nationale de l'informatique et des libertés (CNIL).

### 14.7. Politique de Confidentialité

Les informations détaillées relatives aux catégories de données traitées, aux finalités, aux destinataires, aux durées de conservation, aux éventuels transferts internationaux et aux droits des utilisateurs figurent dans la Politique de Confidentialité HIKAYA.

Cette politique est accessible depuis le site internet et l'application mobile : [lire la Politique de Confidentialité](/confidentialite).

## Article 15 — Suspension et restriction d'accès

HIKAYA MEDIAS peut prendre des mesures proportionnées lorsqu'un Utilisateur ne respecte pas les présentes CGU.

Ces mesures peuvent notamment comprendre un avertissement, une restriction temporaire ou une suspension du compte.

Sauf urgence, risque de sécurité, fraude manifeste ou autre motif légitime, l'Utilisateur est informé du manquement constaté et invité à y remédier lorsque cela est possible.

La suspension ou la clôture d'un compte ne prive pas l'Utilisateur de ses droits légaux, notamment en matière de remboursement, de conformité et de contestation.

## Article 16 — Suppression du compte

L'Utilisateur peut demander la suppression de son compte HIKAYA en contactant :

contact@hikayamedias.com

Lorsque la réglementation ou les règles applicables aux plateformes de distribution l'exigent, une fonctionnalité de suppression de compte est également proposée directement depuis l'application.

La suppression du compte entraîne la désactivation de ses fonctionnalités et la suppression ou l'archivage des données selon les obligations légales applicables.

Lorsque l'Utilisateur dispose d'un abonnement actif, il est informé des conséquences de la suppression de son compte sur l'accès aux contenus et sur la facturation.

La suppression du compte n'entraîne pas nécessairement l'arrêt automatique d'un abonnement géré par Apple ou Google.

## Article 17 — Assistance et signalement

L'Utilisateur peut contacter le service d'assistance HIKAYA pour toute difficulté liée à son compte, à l'accès aux contenus ou au fonctionnement du service.

Adresse électronique :

contact@hikayamedias.com

Le délai indicatif de réponse est de 72 heures ouvrées.

Tout dysfonctionnement, accès suspect ou utilisation non autorisée peut être signalé à cette adresse.

## Article 18 — Responsabilité

HIKAYA MEDIAS fournit ses services conformément à ses obligations contractuelles et légales.

L'Utilisateur demeure responsable de l'utilisation qu'il fait de son compte et du respect des présentes CGU.

HIKAYA MEDIAS ne peut être tenue responsable des conséquences exclusivement imputables à un usage fautif du service par l'Utilisateur ou à un événement présentant les caractéristiques de la force majeure.

Aucune disposition des présentes CGU ne limite les garanties légales ou les droits impératifs du consommateur.

Les contenus HIKAYA ont une finalité culturelle et éducative. Ils ne constituent pas un enseignement scolaire individualisé et ne garantissent aucun résultat pédagogique particulier.

## Article 19 — Modification des CGU

HIKAYA MEDIAS peut modifier les présentes CGU pour tenir compte notamment des évolutions techniques, fonctionnelles, éditoriales ou réglementaires.

Les modifications sont portées à la connaissance des utilisateurs dans des conditions adaptées à leur importance.

Lorsque la modification affecte les droits contractuels d'un consommateur, les dispositions légales applicables sont respectées.

La version en vigueur est accessible depuis le site internet et l'application.

## Article 20 — Droit applicable et litiges

Les présentes CGU sont régies par le droit français, sans préjudice des dispositions impératives applicables aux consommateurs résidant dans un autre pays.

En cas de difficulté, l'Utilisateur peut contacter le service client afin de rechercher une solution amiable.

Lorsque le différend relève d'un contrat de consommation, le Client bénéficie des dispositifs de médiation prévus par les CGV applicables.

À défaut de résolution amiable, les juridictions compétentes sont déterminées conformément aux règles légales applicables.`;

// Projet : reprend l'identité de la société telle qu'indiquée dans les CGV/CGU.
const mentions = `## Éditeur du site

HIKAYA MEDIAS, société par actions simplifiée unipersonnelle (SASU) au capital social de 1,00 euro, immatriculée au Registre du Commerce et des Sociétés de Lille Métropole sous le numéro 991 776 501.

Siège social :

${addr}

- SIRET : 991 776 501 00017
- TVA intracommunautaire : FR15 991776501
- Adresse électronique : ${company.email}

Directeur de la publication : le représentant légal de HIKAYA MEDIAS.

## Hébergement

Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).

Les comptes, le catalogue et les fichiers audio sont hébergés par le prestataire technique de l'application HIKAYA.

## Conception et réalisation

Design et développement du site : BigBrowser Ltd, bigbrowser.co.

## Propriété intellectuelle

Les livres audio, textes, scénarios, narrations, illustrations, marques, logos et éléments graphiques du site sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou diffusion non autorisée est interdite, sous réserve des exceptions prévues par la loi.

## Nous contacter

Pour toute question sur le site : ${company.email}, ou depuis la page [Contact](/contact).`;

// Projet : reprend les éléments de l'article 14 des CGU et les prestataires du cahier des charges.
const confidentialite = `## Responsable du traitement

HIKAYA MEDIAS, ${company.address.join(", ")}, est responsable du traitement des données personnelles nécessaires au service, dans les conditions définies par le Règlement général sur la protection des données (RGPD). Contact : ${company.email}.

## Données traitées

- Compte : prénom, adresse électronique et identifiants techniques nécessaires à l'authentification.
- Abonnement : formule, statut, historique de paiement. Les données bancaires sont traitées uniquement par le prestataire de paiement.
- Écoute : histoires écoutées et position de lecture, pour reprendre là où l'écoute s'est arrêtée, sur le site comme dans l'application.
- Avis : note, commentaire et prénom affiché.
- Assistance : échanges avec le service client.
- Mesure d'audience : uniquement avec votre accord (voir la page [Cookies](/cookies)).

## Finalités et bases légales

- Création et gestion des comptes, fourniture des contenus et gestion des abonnements : exécution du contrat.
- E-mails liés au compte (bienvenue, confirmation, factures, mot de passe) : exécution du contrat.
- Nouveautés et offres par e-mail : consentement, modifiable à tout moment depuis Mon compte.
- Mesure d'audience : consentement.
- Sécurité, maintenance et obligations comptables : intérêt légitime et obligation légale.

## Données des enfants

HIKAYA MEDIAS ne demande pas aux enfants de créer un compte. Les comptes sont créés et administrés par des adultes, et aucune donnée n'est volontairement collectée directement auprès des enfants.

## Destinataires

- Stripe : paiement et factures.
- Brevo : envoi des e-mails.
- Vercel : hébergement du site.
- Le prestataire technique de l'application HIKAYA, notamment des services de l'environnement Firebase : comptes, catalogue et fichiers audio.

Vos données ne sont jamais vendues.

## Durée de conservation

Les données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, sous réserve des obligations légales de conservation (notamment 10 ans pour les factures).

## Vos droits

Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition, ainsi que du droit de retirer votre consentement. Vous pouvez supprimer votre compte depuis Mon compte, ou écrire à ${company.email}. HIKAYA MEDIAS répond en principe dans un délai d'un mois.

Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).`;

// Projet : bandeau avec accord préalable (cahier des charges §09).
const cookies = `## Qu'est-ce qu'un cookie ?

Un cookie est un petit fichier déposé sur votre appareil lors de la visite d'un site. Il permet par exemple de garder votre session ouverte.

## Cookies nécessaires

Ils font fonctionner le site : connexion à votre compte, lecteur audio, paiement, mémorisation de votre choix sur les cookies. Ils ne demandent pas d'accord.

## Mesure d'audience

Avec votre accord, nous mesurons la fréquentation du site pour l'améliorer : pages vues, parcours, type d'appareil. Sans accord, aucun cookie de mesure n'est déposé.

## Changer d'avis

Vous pouvez modifier votre choix à tout moment avec le lien « Gérer les cookies » en bas de chaque page. Votre choix est conservé 6 mois.`;

export const legalDocs: LegalDoc[] = [
  {
    slug: "mentions-legales",
    nav: "Mentions légales",
    first: "Mentions",
    second: "légales",
    description: "Éditeur, hébergeur et informations légales du site HIKAYA.",
    updated: "17 novembre 2026",
    content: mentions,
  },
  {
    slug: "cgv",
    nav: "Conditions générales de vente",
    first: "Conditions générales",
    second: "de vente",
    description: "Offres, paiement, renouvellement, résiliation et rétractation des abonnements HIKAYA.",
    updated: "13 novembre 2026",
    content: cgv,
  },
  {
    slug: "cgu",
    nav: "Conditions d'utilisation",
    first: "Conditions générales",
    second: "d'utilisation",
    description: "Règles d'accès et d'utilisation du service HIKAYA, sur le site et dans l'application.",
    updated: "13 novembre 2026",
    content: cgu,
  },
  {
    slug: "confidentialite",
    nav: "Confidentialité",
    first: "Politique de",
    second: "confidentialité",
    description: "Données personnelles traitées par HIKAYA, finalités, destinataires et droits.",
    updated: "17 novembre 2026",
    content: confidentialite,
  },
  {
    slug: "cookies",
    nav: "Cookies",
    first: "Gestion des",
    second: "cookies",
    description: "Les cookies utilisés sur le site HIKAYA et comment les gérer.",
    updated: "17 novembre 2026",
    content: cookies,
  },
];

export const getLegalDoc = (slug: string) => legalDocs.find((d) => d.slug === slug)!;

// Découpe le texte en sections pour l'affichage et le sommaire.
export type LegalNode =
  | { type: "h3"; text: string }
  | { type: "p"; lines: string[] }
  | { type: "ul"; items: string[] };

export function parseLegal(content: string) {
  const sections: { id: string; title: string; nodes: LegalNode[] }[] = [];
  for (const chunk of content.split(/^## /m).filter((c) => c.trim())) {
    const [title, ...rest] = chunk.split("\n");
    const nodes: LegalNode[] = [];
    for (const block of rest.join("\n").split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean)) {
      const lines = block.split("\n").map((l) => l.trim());
      if (lines[0].startsWith("### ")) nodes.push({ type: "h3", text: lines[0].slice(4) });
      else if (lines.every((l) => l.startsWith("- "))) nodes.push({ type: "ul", items: lines.map((l) => l.slice(2)) });
      else nodes.push({ type: "p", lines });
    }
    const id = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    sections.push({ id, title: title.trim(), nodes });
  }
  return sections;
}
