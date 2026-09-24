// Captures live-site screenshots used in the "Munkáink" scene.
// Usage: npm run promo:shots
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outDir = fileURLToPath(new URL('./assets/shots/', import.meta.url));

const targets = [
  { name: 'andihealth', url: 'https://andihealth.hu/' },
  { name: 'ariel-pilismarot', url: 'https://ariel-pilismarot.hu/' },
];

const viewports = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 2 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
};

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
try {
  for (const [kind, vp] of Object.entries(viewports)) {
    const { width, height, ...rest } = vp;
    const ctx = await browser.newContext({ viewport: { width, height }, ...rest, locale: 'hu-HU', reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    for (const t of targets) {
      await page.goto(t.url, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1200);
      const path = `${outDir}${t.name}-${kind}.jpg`;
      await page.screenshot({ path, type: 'jpeg', quality: 88 });
      console.log('saved', path);
    }
    await ctx.close();
  }
} finally {
  await browser.close();
}
