// Génère le fond de la carte des voyages : src/lib/voyages-map.ts
// Données : Natural Earth via world-atlas (domaine public). Projection Mercator.
//
// Utilisation (depuis la racine du projet) :
//   npm i --no-save d3-geo@3.1.1 topojson-client@3.1.0 world-atlas@2.0.2
//   node scripts/generate-voyages-map.mjs
//
// Pour couvrir une zone plus large (un lieu hors de la carte), modifier l'emprise ci-dessous et relancer.
// Les lieux sont placés à partir de leur latitude et longitude (projectPoint) : rien d'autre à changer.
import { createRequire } from "module";
import fs from "fs";
import nodePath from "path";
const root = nodePath.resolve(nodePath.dirname(new URL(import.meta.url).pathname), "..");
const geoDir = root, out = nodePath.join(root, "src/lib/voyages-map.ts");
const require = createRequire(geoDir + "/package.json");
const d3 = await import(require.resolve("d3-geo"));
const topo = require("topojson-client");
const world = JSON.parse(fs.readFileSync(geoDir + "/node_modules/world-atlas/land-50m.json"));
const land = topo.feature(world, world.objects.land);

// Emprise de la carte (longitude ouest, est, latitude sud, nord) : de l'Atlantique à Bagdad, d'Istanbul au Yémen
const [lon0, lon1, lat0, lat1] = [-17, 52, 12.5, 47.5];
const W = 1000;
const frame = { type: "Feature", geometry: { type: "MultiPoint", coordinates: [[lon0, lat0], [lon1, lat0], [lon1, lat1], [lon0, lat1]] } };
const projection = d3.geoMercator().fitWidth(W, frame);
const [[, y0], [, y1]] = d3.geoPath(projection).bounds(frame);
const H = Math.round(y1 - y0);
projection.translate([projection.translate()[0], projection.translate()[1] - y0]).clipExtent([[0, 0], [W, H]]);
const path = d3.geoPath(projection).digits(1);
const d = path(land);
const graticule = path(d3.geoGraticule().step([10, 10]).extent([[-20, 0], [60, 60]])());

fs.writeFileSync(out, `// Fond de carte généré depuis Natural Earth (world-atlas, domaine public), projection Mercator.
// Ne pas modifier à la main : regénérer avec « node scripts/generate-voyages-map.mjs ».
export const MAP_WIDTH = ${W};
export const MAP_HEIGHT = ${H};
export const LAND_PATH = ${JSON.stringify(d)};
export const GRATICULE_PATH = ${JSON.stringify(graticule)};
// Projection Mercator de la carte : permet de placer n'importe quel lieu à partir de sa latitude et longitude
export const MAP_PROJECTION = ${JSON.stringify({ scale: +projection.scale().toFixed(4), tx: +projection.translate()[0].toFixed(4), ty: +projection.translate()[1].toFixed(4) })};

/** Position d'un lieu sur la carte, en % de la largeur et de la hauteur. */
export function projectPoint(lon: number, lat: number) {
  const { scale, tx, ty } = MAP_PROJECTION;
  const x = tx + scale * ((lon * Math.PI) / 180);
  const y = ty - scale * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
  return { x: (x / MAP_WIDTH) * 100, y: (y / MAP_HEIGHT) * 100 };
}

export const SEA_LABELS = ${JSON.stringify([
  { name: "Mer Méditerranée", at: projection([16.5, 34.3]), rotate: 0 },
  { name: "Océan", at: projection([-14.5, 31.5]), rotate: 0 },
  { name: "Atlantique", at: projection([-14.5, 30.4]), rotate: 0 },
  { name: "Mer Rouge", at: projection([36.4, 25.6]), rotate: 59 },
  { name: "Mer Noire", at: projection([31.5, 43.4]), rotate: 0 },
].map(s => ({ name: s.name, x: Math.round(s.at[0]), y: Math.round(s.at[1]), rotate: s.rotate })), null, 2)};
`);
console.log(`Carte générée : ${out} (${W} × ${H}, ${Math.round(d.length / 1000)} ko)`);
