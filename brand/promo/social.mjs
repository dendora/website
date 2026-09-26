// Renders the Facebook profile picture, cover photo and post cards from brand/promo/social.html into brand/social/.
// Usage: npm run promo:social [-- kind[:id] ...]   (default: profile + cover; e.g. meccs:nir-hu-2026-09-28)
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { serve } from './serve.mjs';

const OUT = fileURLToPath(new URL('../social/', import.meta.url));
const ART = [
  { kind: 'profile', width: 1080, height: 1080, file: 'dendora-fb-profile.png' },
  { kind: 'cover', width: 1640, height: 624, file: 'dendora-fb-cover.png' },
  { kind: 'meccs', width: 1080, height: 1350, file: 'posts/meccs-hu-ua-2026-09-25.png', onDemand: true },
  ...[1, 2, 3].map((i) => ({ kind: `szerencse${i}`, width: 1080, height: 1350, file: `posts/szerencse-bontas-${i}.png`, onDemand: true })),
];
const only = process.argv.slice(2);
const jobs = only.length
  ? only.map((arg) => {
      const [kind, id] = arg.split(':');
      const a = ART.find((x) => x.kind === kind);
      if (!a) throw new Error(`Unknown kind "${kind}"`);
      if (!id) return a;
      if (!/^[a-z0-9-]+$/.test(id)) throw new Error(`Invalid id "${id}"`);
      return { ...a, query: `&m=${id}`, file: `posts/${kind}-${id}.png` };
    })
  : ART.filter((a) => !a.onDemand);

await mkdir(OUT, { recursive: true });
const server = await serve();
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ channel: 'chrome' });
try {
  for (const a of jobs) {
    const page = await browser.newPage({ viewport: { width: a.width, height: a.height } });
    await page.goto(`${base}/brand/promo/social.html?kind=${a.kind}${a.query || ''}`);
    await page.evaluate(() => window.socialReady);
    await page.screenshot({ path: OUT + a.file, type: 'png' });
    await page.close();
    console.log('saved', OUT + a.file);
  }
} finally {
  await browser.close();
  server.close();
}
