/**
 * Generate Open Graph images (1200×630) for all pages using satori + sharp.
 * Run after `astro build` or standalone: `node scripts/generate-og-images.mjs`
 * 
 * Generates:
 *   public/og/home-hu.png     — Hungarian homepage
 *   public/og/home-en.png     — English homepage
 *   public/og/dimop.png       — DIMOP landing
 *   public/og/work-{slug}-{lang}.png — Per-project pages
 */

import satori from 'satori';
import sharp from 'sharp';
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'og');

// Load fonts
const interRegular = readFileSync(join(ROOT, 'public/fonts/Inter-Regular.ttf'));
const interBold = readFileSync(join(ROOT, 'public/fonts/Inter-Bold.ttf'));

// Load logo and invert to white (original is black, invisible on dark bg)
const logoInvertedBuffer = await sharp(join(ROOT, 'public/dendora-d-logo.png'))
  .negate({ alpha: false })
  .png()
  .toBuffer();
const logoDataUri = `data:image/png;base64,${logoInvertedBuffer.toString('base64')}`;

const WIDTH = 1200;
const HEIGHT = 630;

const fonts = [
  { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
  { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
];

/**
 * Render a card to PNG.
 * @param {object} opts
 * @param {string} opts.title - Main heading
 * @param {string} opts.subtitle - Subheading / description
 * @param {string} opts.url - URL displayed at bottom
 * @param {string} [opts.badge] - Optional badge text (e.g. "DIMOP")
 * @param {string} [opts.accentColor] - Accent color for the top bar
 */
async function renderCard({ title, subtitle, url, badge, accentColor = '#000000' }) {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#000000',
          color: '#ffffff',
          fontFamily: 'Inter',
          padding: 0,
        },
        children: [
          // Accent bar at top
          {
            type: 'div',
            props: {
              style: {
                width: '100%',
                height: '6px',
                background: accentColor === '#000000'
                  ? 'linear-gradient(90deg, #ffffff 0%, #888888 100%)'
                  : accentColor,
              },
            },
          },
          // Main content area
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
                padding: '60px 70px 50px 70px',
              },
              children: [
                // Top section: logo + badge
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                    },
                    children: [
                      {
                        type: 'img',
                        props: {
                          src: logoDataUri,
                          width: 52,
                          height: 59,
                          style: { opacity: 0.95 },
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '24px',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            color: '#ffffff',
                          },
                          children: 'Dendora',
                        },
                      },
                      ...(badge ? [{
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#000000',
                            backgroundColor: '#ffffff',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            marginLeft: '8px',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                          },
                          children: badge,
                        },
                      }] : []),
                    ],
                  },
                },
                // Middle: title + subtitle
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      marginTop: '10px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: title.length > 45 ? '36px' : '44px',
                            fontWeight: 700,
                            lineHeight: 1.15,
                            letterSpacing: '-0.03em',
                            color: '#ffffff',
                            maxWidth: '900px',
                          },
                          children: title,
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '20px',
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: 'rgba(255,255,255,0.65)',
                            maxWidth: '800px',
                          },
                          children: subtitle,
                        },
                      },
                    ],
                  },
                },
                // Bottom: URL
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.02em',
                    },
                    children: url,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { width: WIDTH, height: HEIGHT, fonts }
  );

  return sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
}

// ── Page definitions ──────────────────────────────────────────────

const pages = [
  {
    filename: 'home-hu.png',
    title: 'Szoftverfejlesztés & AI Megoldások',
    subtitle: 'Egyedi szoftverfejlesztés, webfejlesztés és AI megoldások. Full-stack fejlesztés modern eszközökkel.',
    url: 'dendora.hu',
  },
  {
    filename: 'home-en.png',
    title: 'Software Development & AI Solutions',
    subtitle: 'Custom software development, web applications and AI solutions from Hungary. From idea to production.',
    url: 'dendora.hu/en',
  },
  {
    filename: 'dimop.png',
    title: '90%-os Digitalizációs Pályázat',
    subtitle: 'DIMOP Plusz-1.2.6/B-26: Teljes digitális szintlépés Budapesten kívüli mikro- és kisvállalkozásoknak.',
    url: 'dendora.hu/dimop',
    badge: 'DIMOP',
    accentColor: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
  },
  // Project pages — Hungarian
  {
    filename: 'work-ariel-pilismarot-hu.png',
    title: 'Ariel Pilismarót Vendégház',
    subtitle: 'Többnyelvű bemutatkozó oldal dunakanyari vendégház számára',
    url: 'dendora.hu/work/ariel-pilismarot',
    badge: 'Projekt',
  },
  {
    filename: 'work-andihealth-hu.png',
    title: 'AndiHealth',
    subtitle: 'Kétnyelvű fitness foglalási platform az edge-en',
    url: 'dendora.hu/work/andihealth',
    badge: 'Projekt',
  },
  {
    filename: 'work-foundrypulse-hu.png',
    title: 'FoundryPulse',
    subtitle: 'Valós idejű gyártási teljesítmény monitoring',
    url: 'dendora.hu/work/foundrypulse',
    badge: 'Projekt',
  },
  {
    filename: 'work-data-platform-hu.png',
    title: 'Adat- és Analitikai Platform',
    subtitle: 'Valós idejű analitika és felhő infrastruktúra nagyvállalati ügyfélnek',
    url: 'dendora.hu/work/data-platform',
    badge: 'Projekt',
  },
  // Project pages — English
  {
    filename: 'work-ariel-pilismarot-en.png',
    title: 'Ariel Pilismarót Guesthouse',
    subtitle: 'Multilingual showcase website for a Danube Bend guesthouse',
    url: 'dendora.hu/en/work/ariel-pilismarot',
    badge: 'Project',
  },
  {
    filename: 'work-andihealth-en.png',
    title: 'AndiHealth',
    subtitle: 'Bilingual fitness booking platform on the edge',
    url: 'dendora.hu/en/work/andihealth',
    badge: 'Project',
  },
  {
    filename: 'work-foundrypulse-en.png',
    title: 'FoundryPulse',
    subtitle: 'Real-time manufacturing performance monitoring',
    url: 'dendora.hu/en/work/foundrypulse',
    badge: 'Project',
  },
  {
    filename: 'work-data-platform-en.png',
    title: 'Data & Analytics Platform',
    subtitle: 'Real-time analytics and cloud infrastructure for an enterprise client',
    url: 'dendora.hu/en/work/data-platform',
    badge: 'Project',
  },
];

// ── Generate ──────────────────────────────────────────────────────

async function main() {
  if (!existsSync(OUT_DIR)) {
    mkdirSync(OUT_DIR, { recursive: true });
  }

  console.log(`Generating ${pages.length} OG images...`);

  for (const page of pages) {
    const png = await renderCard(page);
    const outPath = join(OUT_DIR, page.filename);
    await sharp(png).toFile(outPath);
    console.log(`  ✓ ${page.filename}`);
  }

  console.log('Done!');
}

main().catch((err) => {
  console.error('OG image generation failed:', err);
  process.exit(1);
});
