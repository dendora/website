// Renders brand/promo/index.html frame by frame with system Chrome and pipes PNGs into ffmpeg.
// Usage: npm run promo -- [4x5|9x16|16x9 ...]   (default: 4x5)
//        npm run promo -- serve                 (preview server only)
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { serve } from './serve.mjs';

const OUT = fileURLToPath(new URL('./out/', import.meta.url));
const FPS = 30;
const FFMPEG = process.env.FFMPEG || 'ffmpeg';
const FORMATS = { '4x5': [1080, 1350], '9x16': [1080, 1920], '16x9': [1920, 1080] };

async function render(browser, base, fmt) {
  const [width, height] = FORMATS[fmt];
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.error('[page]', e.message));
  await page.goto(`${base}/brand/promo/index.html?render&f=${fmt}`);
  await page.evaluate(() => window.promoReady);
  const duration = await page.evaluate(() => window.DURATION);
  const frames = Math.round(duration * FPS);
  const file = join(OUT, `dendora-promo-${fmt}.mp4`);

  const ff = spawn(FFMPEG, [
    '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', file,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = once(ff, 'close');

  const t0 = Date.now();
  for (let i = 0; i < frames; i++) {
    await page.evaluate((t) => window.seek(t), i / FPS);
    const png = await page.screenshot({ type: 'png' });
    if (!ff.stdin.write(png)) await once(ff.stdin, 'drain');
    if (i % 60 === 0) process.stdout.write(`\r${fmt}: ${i}/${frames}`);
  }
  ff.stdin.end();
  const [code] = await done;
  await page.close();
  if (code !== 0) throw new Error(`ffmpeg exited with ${code}`);
  console.log(`\r${fmt}: ${frames} frames → ${file} (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
}

const args = process.argv.slice(2);
if (args[0] === 'serve') {
  const server = await serve(Number(args[1]) || 4555);
  const { port } = server.address();
  console.log(`Preview: http://127.0.0.1:${port}/brand/promo/index.html?f=4x5  (f=9x16|16x9, &t=12.3 to freeze)`);
} else {
  const fmts = args.length ? args : ['4x5'];
  for (const f of fmts) if (!FORMATS[f]) throw new Error(`Unknown format "${f}" (use ${Object.keys(FORMATS).join('|')})`);
  await mkdir(OUT, { recursive: true });
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ channel: 'chrome' });
  try {
    for (const f of fmts) await render(browser, base, f);
  } finally {
    await browser.close();
    server.close();
  }
}
