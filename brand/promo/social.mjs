// Renders the Facebook profile picture and cover photo from brand/promo/social.html into brand/social/.
// Usage: npm run promo:social
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { serve } from './serve.mjs';

const OUT = fileURLToPath(new URL('../social/', import.meta.url));
const ART = [
  { kind: 'profile', width: 1080, height: 1080, file: 'dendora-fb-profile.png' },
  { kind: 'cover', width: 1640, height: 624, file: 'dendora-fb-cover.png' },
];

await mkdir(OUT, { recursive: true });
const server = await serve();
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ channel: 'chrome' });
try {
  for (const a of ART) {
    const page = await browser.newPage({ viewport: { width: a.width, height: a.height } });
    await page.goto(`${base}/brand/promo/social.html?kind=${a.kind}`);
    await page.evaluate(() => window.socialReady);
    await page.screenshot({ path: OUT + a.file, type: 'png' });
    await page.close();
    console.log('saved', OUT + a.file);
  }
} finally {
  await browser.close();
  server.close();
}
