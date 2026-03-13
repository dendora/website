# Agent Notes

## CSP Script Hashes

If you upgrade Astro or change inline scripts, the CSP hashes in `public/_headers` will need to be regenerated.

Run this after `npm run build` to compute the new hashes:

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

Then update the `script-src` directive in `public/_headers` with the output.

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
