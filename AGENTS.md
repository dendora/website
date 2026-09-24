# Agent Notes

## CSP Script Hashes

Inline-script SHA-256 hashes in the `script-src` directive of `dist/_headers`
are regenerated automatically by `scripts/update-csp-hashes.mjs`, which runs
as the final step of `npm run build`. Re-run standalone with `npm run build:csp`
after a fresh `astro build` if you want to inspect the result without rebuilding
OG images.

The script:
1. Walks every `dist/**/*.html` and hashes each inline `<script>` block.
2. Rewrites only the `script-src` directive in `dist/_headers` (the source
   `public/_headers` keeps the old hashes — Cloudflare Pages serves the deploy
   output, so this is sufficient).

If you ever need to compute hashes manually:

```bash
python3 -c "
import re, hashlib, base64, glob

all_hashes = set()
for path in glob.glob('dist/**/*.html', recursive=True):
    with open(path, 'r') as f:
        html = f.read()
    for m in re.finditer(r'<script(?:\s+type=\"module\")?>(.*?)</script>', html, re.DOTALL):
        content = m.group(1).strip()
        sha = hashlib.sha256(content.encode('utf-8')).digest()
        b64 = base64.b64encode(sha).decode('utf-8')
        all_hashes.add(f\"'sha256-{b64}'\")

print('script-src value for _headers:')
print(\"'self' \" + ' '.join(sorted(all_hashes)))
"
```

## OG Image Generation

When adding, removing, or renaming projects, you **must** update the page list in `scripts/generate-og-images.mjs` to add/remove the corresponding OG image entries (both HU and EN variants).

The script generates 1200×630 social preview cards for every page. It runs automatically as part of `npm run build`, or standalone via `npm run build:og`.

Current pages with OG images:
- `home-hu.png`, `home-en.png` — homepage cards
- `dimop.png` — DIMOP landing card
- `work-{slug}-hu.png`, `work-{slug}-en.png` — per-project cards

After changes, verify images at `public/og/` or via `npx astro preview`.

## Browser Testing

VS Code 1.110+ includes built-in agentic browser tools. Enable with `"workbench.browser.enableChatTools": true` and activate the browser tools in the chat tools picker.

Available tools: `openBrowserPage`, `navigatePage`, `readPage`, `screenshotPage`, `clickElement`, `hoverElement`, `dragElement`, `typeInPage`, `handleDialog`, `runPlaywrightCode`.

No external dependencies required.

## DKF Digital Assessment (kkvdigital.dkf.hu)

The DIMOP grant requires applicants to complete a 26-question digital intensity assessment on kkvdigital.dkf.hu. Official reference PDFs are saved locally:

- `docs/dimop/dkf/Minta_kerdoiv.pdf` — Sample questionnaire with all 26 questions, answer options, and DII/RCR13 scoring rules
- `docs/dimop/dkf/DIMOP_felmeresi_modszertan.pdf` — Full methodology guide

Original URLs (may change):
- https://kkvdigital.dkf.hu/assets/pdf/Minta_kerdoiv.pdf
- https://kkvdigital.dkf.hu/assets/pdf/DIMOP_felmeresi_modszertan.pdf

**6 categories, 26 questions:**
1. Internethasználat (Q1–5): bandwidth, employee internet %, mobile devices, remote access, online meetings
2. Internetes jelenlét (Q6–8): website features, social media, paid online ads
3. IKT-készségek (Q9–10): ICT training, ICT specialist employment
4. IKT-biztonság (Q11–13): security awareness, security measures (11 options), security documentation
5. Üzleti szoftverek (Q14–16): ERP, CRM, e-invoicing
6. Technológia + E-kereskedelem (Q17–26): cloud services, data analytics, AI, robots, IoT, web/EDI sales %

Scoring: each question maps to DII and/or RCR13 indicators (binary 0/1). Low DII score = eligible for DIMOP grant.

When modifying the chatbot system prompt (`functions/api/chat.ts`) or FAQ (`src/locales/dimop/hu.json`), consult these PDFs for accuracy.

## Contact Details

Contact constants live in `src/lib/site-config.ts`. The phone number is hidden site-wide (`SHOW_PHONE = false`, spam calls) — don't hard-code it in pages, JSON-LD or the chatbot prompts.

## Brand, Promo Video & Social Images

`brand/` is outside the site build. The promo video (`brand/promo/`, `npm run promo`) and Facebook images (`npm run promo:social`) are documented in `brand/README.md`. After re-rendering the video, check a contact sheet (`ffmpeg -i out.mp4 -vf "fps=1/2,scale=360:-1,tile=7x2" -frames:v 1 sheet.jpg`) before handing it over.
