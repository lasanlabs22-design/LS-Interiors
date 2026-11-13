// Optimises generated / supplied photographs for the website.
//
// 1. Save an image in /assets using one of the slot names below (any of .jpg .jpeg .png .webp .avif)
//    e.g. assets/hero-1.png
// 2. Run: npm run images
// 3. The optimised WebP is written to /public/assets/<slot>.webp and the Next.js image cache is cleared.
//
// See IMAGE-PROMPTS.md for the prompt, aspect ratio and purpose of every slot.
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(ROOT, 'assets');
const OUT = join(ROOT, 'public', 'assets');

// slot -> longest edge in px
export const SLOTS = {
  'hero-1': 2400, 'hero-2': 2400, 'hero-3': 2400,
  'studio-main': 1600, 'studio-detail': 1200,
  'service-home': 1600, 'service-kitchen': 1600, 'service-wardrobe': 1600,
  'service-furniture': 1600, 'service-ceiling': 1600, 'service-washroom': 1600, 'service-commercial': 1600,
  'space-living': 1800, 'space-kitchen': 1800, 'space-bedroom': 1800,
  'space-dining': 1800, 'space-wardrobe': 1800, 'space-pooja': 1800,
  'craft-workshop': 1800, 'craft-detail': 1200,
  'cta-band': 2400,
  'design-3d': 2000,
  'founder': 1200,
};

const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
let count = 0;
for (const file of readdirSync(SRC)) {
  const { name, ext } = parse(file);
  if (!EXT.has(ext.toLowerCase()) || !(name in SLOTS)) continue;
  const size = SLOTS[name];
  await sharp(join(SRC, file))
    .rotate()
    .resize({ width: size, height: size, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(join(OUT, `${name}.webp`));
  console.log(`✓ ${file} → public/assets/${name}.webp`);
  count++;
}

const unknown = readdirSync(SRC).filter(f => EXT.has(parse(f).ext.toLowerCase()) && !(parse(f).name in SLOTS));
if (unknown.length) console.log(`\nSkipped (not a slot name): ${unknown.join(', ')}`);

// Next.js keeps separate image caches for `next dev` and `next build`
for (const cache of [join(ROOT, '.next', 'cache', 'images'), join(ROOT, '.next', 'dev', 'cache', 'images')]) {
  if (count && existsSync(cache)) { rmSync(cache, { recursive: true, force: true }); console.log(`\nCleared ${cache.slice(ROOT.length)}`); }
}
console.log(count ? `\n${count} image(s) optimised.` : '\nNo slot images found in /assets.');
