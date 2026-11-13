# HIKAYA · site vitrine (maquette design)

Landing page de HIKAYA en Next.js. Ce dépôt couvre le **design** ; les fonctionnalités (catalogue, comptes, Stripe, Brevo, lecteur réel) sont branchées par le dev selon le cahier des charges.

```bash
npm install
npm run dev
```

## Direction artistique

- Couleurs de la charte (NL Agence, 07/2025) : vert `#2D4731`, sable `#D4A373`. Dérivés web dans `src/app/globals.css` (`sable-ink` pour le texte sable lisible, `creme`, `papier`).
- Typo : Urbanist (titres en light italique, texte en regular / medium).
- Forme signature : l'arc outrepassé de Cordoue (`src/components/arch.tsx`).

## À savoir pour le dev

- `src/components/player.tsx` simule la lecture (extrait de 1 min 30, sans fichier audio) : c'est là qu'il faut brancher l'élément audio et les liens signés.
- `src/lib/episodes.ts` contient des données de maquette ; résumés et durées sont à remplacer par le catalogue du back-office.
- Assets dans `public/` : logos SVG de la charte, personnages et illustrations de la série Al-Andalus (optimisés en WebP depuis le Drive HIKAYA).
