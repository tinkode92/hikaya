// Construit l'aperçu statique de la LP (lien partagé) : export Next + chemins rendus relatifs,
// pour que le site fonctionne même servi depuis un sous-dossier.
// Usage : npm run preview:export  ->  dossier .preview/
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const src = ".next-preview";
const dst = ".preview";

execSync("next build", { stdio: "inherit", env: { ...process.env, PREVIEW_EXPORT: "1" } });

fs.rmSync(dst, { recursive: true, force: true });
fs.cpSync(src, dst, { recursive: true });

const assets = ["_next", "episodes", "characters", "brand", "themes", "app"];
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });

for (const file of walk(dst)) {
  if (!/\.(html|js|css|txt)$/.test(file)) continue;
  let s = fs.readFileSync(file, "utf8");
  const before = s;
  if (file.endsWith(".css")) {
    s = s.replaceAll("/_next/static/media/", "../media/");
  } else {
    for (const a of assets) s = s.replace(new RegExp(`(["'(\\s=,])/${a}/`, "g"), `$1${a}/`);
  }
  if (file.endsWith("index.html")) s = s.replace(/<title>[^<]*<\/title>/, "<title>Aperçu LP HIKAYA</title>");
  if (s !== before) fs.writeFileSync(file, s);
}

// L'hébergeur d'aperçu réserve les chemins qui commencent par « _ » :
// _next/ devient nx/, et les fichiers de préchargement __next.*.txt (inutiles ici) sont retirés.
fs.renameSync(path.join(dst, "_next"), path.join(dst, "nx"));
for (const file of walk(dst)) {
  if (!/\.(html|js|css|txt)$/.test(file)) continue;
  const s = fs.readFileSync(file, "utf8");
  let out = s.replace(/(?<![\w_])_next\//g, "nx/");
  // U+FFFD écrit tel quel dans le JS : on l'échappe (même valeur dans les chaînes)
  if (file.endsWith(".js")) out = out.replaceAll("\uFFFD", "\\uFFFD");
  if (out !== s) fs.writeFileSync(file, out);
}

for (const junk of fs.readdirSync(dst).filter((f) => f.startsWith("_") || f === "404.html")) {
  fs.rmSync(path.join(dst, junk), { recursive: true, force: true });
}
console.log(`Aperçu prêt : ${walk(dst).length} fichiers dans ${dst}/`);
