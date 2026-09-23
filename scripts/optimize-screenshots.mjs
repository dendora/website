/**
 * Optimise work-card screenshots: src/assets/work/{slug}.{png,jpg,jpeg}
 * → public/work/{slug}-{width}.{avif,webp}, cropped to 16:10 from the top.
 * Runs as part of `npm run build`, or standalone: `npm run build:screenshots`.
 */

import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = join(ROOT, 'src/assets/work');
const OUT_DIR = join(ROOT, 'public/work');
// Keep in sync with WORK_SHOT_WIDTHS in ConfigurableLanding.tsx.
const WIDTHS = [480, 800, 1200];
const FORMATS = {
  avif: (img) => img.avif({ quality: 55, effort: 6 }),
  webp: (img) => img.webp({ quality: 78, effort: 6 }),
};

if (!existsSync(SRC_DIR)) process.exit(0);
mkdirSync(OUT_DIR, { recursive: true });

const sources = readdirSync(SRC_DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of sources) {
  const src = join(SRC_DIR, file);
  const slug = basename(file, extname(file));
  const srcTime = statSync(src).mtimeMs;

  for (const width of WIDTHS) {
    for (const [ext, encode] of Object.entries(FORMATS)) {
      const out = join(OUT_DIR, `${slug}-${width}.${ext}`);
      if (existsSync(out) && statSync(out).mtimeMs >= srcTime) continue;
      await encode(
        sharp(src).resize(width, Math.round((width * 10) / 16), { fit: 'cover', position: 'top' }),
      ).toFile(out);
      console.log(`[screenshots] ${out.replace(ROOT + '/', '')}`);
    }
  }
}
