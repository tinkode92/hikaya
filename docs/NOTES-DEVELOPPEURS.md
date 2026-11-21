# HIKAYA · Notes pour le développement

Ce que la maquette fonctionnelle (ce repo) laisse au développeur, et ce que le back-office doit permettre.
Les contenus affichés aujourd'hui viennent de fichiers dans `src/lib/` : chacun est à remplacer par les données
de l'application, du back-office ou de Stripe. Référence : cahier des charges HIKAYA (réf. devis BB-2026-11-002).

---

## 1. Carte des voyages (`/voyages`) : à prévoir dans le back-office

> **À ne pas oublier.** HIKAYA doit pouvoir ajouter des lieux sur la carte, modifier ceux qui existent et y
> rattacher les histoires, sans intervention technique.

### Gestion des lieux (nouvel objet du back-office)

Pour chaque lieu, HIKAYA doit pouvoir **créer, modifier, masquer ou supprimer** :

| Champ | Exemple | Obligatoire | Utilisation |
| --- | --- | --- | --- |
| Nom | Cordoue | oui | Carte, panneau, boutons des villes sur mobile |
| Nom en arabe | قرطبة | oui | Sous le nom sur la carte (ville choisie, survol) et dans le titre du panneau |
| Région | Al-Andalus | oui | Au-dessus du nom dans le panneau |
| Latitude | 37.88 | oui | Placement automatique du point sur la carte |
| Longitude | -4.78 | oui | Placement automatique du point sur la carte |
| Position du nom | à droite / à gauche / dessous / à gauche en haut / à gauche en bas | oui (défaut : à droite) | Évite que deux noms voisins se chevauchent |
| Photo du lieu | image 16:9 | non | Bandeau du panneau (sinon : couverture de la première histoire du lieu) |
| Ordre / statut | publié, brouillon | oui | Seuls les lieux publiés apparaissent |

Un lieu ajouté **se place tout seul** sur la carte à partir de sa latitude et de sa longitude
(`projectPoint` dans `src/lib/voyages-map.ts`). Aucune autre intervention n'est nécessaire, tant que le lieu est
dans la zone couverte : longitude de -17 à 52, latitude de 12,5 à 47,5 (de l'Atlantique à Bagdad, d'Istanbul au
Yémen). Pour un lieu en dehors (Samarcande, l'Inde, l'Afrique de l'Ouest…), élargir l'emprise dans
`scripts/generate-voyages-map.mjs` et regénérer le fond de carte :

```
npm i --no-save d3-geo@3.1.1 topojson-client@3.1.0 world-atlas@2.0.2
node scripts/generate-voyages-map.mjs
```

### Champs à ajouter aux livres et épisodes

| Champ | Exemple | Utilisation |
| --- | --- | --- |
| Lieu | Cordoue (choix dans la liste des lieux) | Rattache l'histoire à un point de la carte |
| Année | 756 (nombre) | Tri dans le temps, siècle de la frise |
| Libellé de la date | « 756 », « vers 820 » | Affiché dans le panneau |

- La frise (VIIIe s., IXe s.…) et le nombre d'histoires par siècle sont **calculés automatiquement** à partir de
  l'année : rien à saisir.
- Une histoire sans lieu n'apparaît pas sur la carte (elle reste dans le catalogue).
- Les dates actuelles sont des repères historiques proposés par BigBrowser : **à faire valider par HIKAYA**.
- Évolution possible : plusieurs lieux pour une histoire de voyage (Ibn Jubayr : Grenade → Le Caire → La Mecque).

### Fichiers concernés

- `src/lib/voyages.ts` : lieux et rattachement des livres (données à remplacer par le back-office).
- `src/lib/voyages-map.ts` : fond de carte généré (ne pas modifier à la main).
- `src/components/voyages-map.tsx` : carte, frise et panneau.
- `scripts/generate-voyages-map.mjs` : génération du fond de carte.

---

## 2. Autres contenus gérés depuis le back-office

| Contenu | Fichier actuel | Attendu |
| --- | --- | --- |
| Catalogue (catégories, séries, livres) | `src/lib/catalogue.ts` | Lecture de la base de l'app, statut publié uniquement, mise à jour en quelques minutes |
| Début de l'extrait de 1 min 30 | `src/lib/episodes.ts` (simulé) | Choisi par HIKAYA pour chaque livre |
| Livre « À la une » / « En avant-première » | `src/lib/featured.ts` | Choix du livre, du libellé, texte et date de sortie |
| Avis clients | `src/lib/reviews.ts` (exemples) | Avis « en attente » puis publiés ou non par HIKAYA, mention « avis vérifié » |
| Notes App Store / Google Play | `src/lib/ratings.ts` | Note et lien de chaque store |
| Vidéo témoignage | `src/lib/video.ts` | Titre, fichier, affiche, durée |
| Offres et prix | `src/lib/plans.ts` | Prix lus dans Stripe |
| Cartes cadeaux | `src/lib/gift.ts` | Prix à confirmer par HIKAYA (3 mois, 6 mois, 1 an) |
| Coordonnées et réseaux | `src/lib/company.ts` | — |
| Textes légaux | `src/lib/legal.ts` | CGV et CGU fournis par HIKAYA ; mentions, confidentialité et cookies à valider |

---

## 3. Branchements à faire

- **Comptes** : comptes de l'application existante (connexion e-mail et Google), même identifiants que l'app,
  retour à la page d'origine après connexion, mot de passe oublié. Formulaires : `src/components/forms/auth-forms.tsx`.
- **Lecteur audio** (`src/components/player.tsx`, simulé) : liens signés, droits vérifiés à chaque lecture, extrait
  pour les visiteurs, histoire complète pour les abonnés, reprise synchronisée avec l'app, vitesse, épisode suivant,
  écran verrouillé (Media Session), AirPlay et Chromecast à tester sur de vrais appareils.
- **Paiement Stripe** (`src/components/checkout.tsx`) : remplacer les champs par le Payment Element et l'Express
  Checkout (Apple Pay, Google Pay, PayPal), codes promo, case CGV obligatoire déjà en place, webhooks d'accès.
- **Mon compte** (`src/app/compte/page.tsx`, données d'exemple dans `src/lib/account.ts`) : liens provisoires
  `#portail-stripe`, `#facture`, `#resiliation`, `#retractation` (résiliation et rétractation en ligne exigées par
  les CGV, art. 11 et 12). États à prévoir : sans abonnement, résilié, paiement échoué, abonnement pris dans un
  store (déjà prévu : champ `source`).
- **Cartes cadeaux** (`src/components/gift-builder.tsx`) : paiement (`#paiement` provisoire), génération du code,
  envoi par e-mail à la date choisie, version à imprimer. **Page d'activation du code à créer.**
- **E-mails Brevo** : les 8 e-mails du cahier des charges, préférences marketing (Mon compte), demande d'avis.
- **Cookies** (`src/components/cookie-banner.tsx`) : charger la mesure d'audience seulement si le choix enregistré
  est « accepte ».
- **Sitemap** (`src/app/sitemap.ts`) : il suit déjà le catalogue, à brancher sur les données réelles.

---

## 4. Lien de validation client

La branche `client-lp` alimente https://hikaya-client.vercel.app (projet Vercel `hikaya-lp`). Le mode
« page d'accueil seule » existe encore dans le code (`NEXT_PUBLIC_LP_ONLY=1`, `src/lib/site-mode.ts`,
`src/proxy.ts`) mais il est désactivé depuis l'envoi du site complet au client.
