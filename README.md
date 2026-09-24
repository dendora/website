# Dendora website

Source of [dendora.hu](https://dendora.hu) — Dendora Bt., software development from Esztergom.

## Stack

- **Astro 7** (static output) with **React 19** islands, TypeScript
- **Tailwind CSS 4**
- **Cloudflare Pages** hosting + Pages Functions in `functions/api/` (chatbot via Workers AI, contact form via Resend)

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # OG images → screenshots → astro build → CSP hashes
npm run preview   # serve dist/
```

## Repository layout

| Path | Contents |
|------|----------|
| `src/` | Pages, components, layouts, HU/EN locales |
| `public/` | Static assets served as-is (fonts, icons, `_headers`) |
| `functions/api/` | Cloudflare Pages Functions: `chat.ts`, `contact.ts` |
| `scripts/` | Build steps: OG images, screenshot optimisation, CSP hashes |
| `brand/` | Logo, print, social images and promo video tooling — not part of the site build ([brand/README.md](brand/README.md)) |
| `docs/dimop/` | DIMOP strategy documents and the official DKF assessment PDFs |
| `docs/prompts/` | Agent prompts that pages were built from |
| `AGENTS.md` | Notes for coding agents (CSP hashes, OG images, DKF assessment) |

## Deployment

Cloudflare Pages builds `main` automatically.

- Build command: `npm run build` · output directory: `dist` · root: `/`
- Bindings and variables (Pages → Settings):
  - `AI` — Workers AI binding (declared in `wrangler.jsonc`), used by `/api/chat`
  - `RESEND_API_KEY` — secret, required by `/api/contact`
  - `CONTACT_EMAIL` — optional recipient, defaults to hello@dendora.hu

## Contact

[hello@dendora.hu](mailto:hello@dendora.hu) · [dendora.hu](https://dendora.hu) · [Facebook](https://www.facebook.com/dendora.hu/)

## License

MIT — see [LICENSE](LICENSE).
