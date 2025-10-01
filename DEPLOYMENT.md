# Cloudflare Pages Deployment

## Build Settings
- **Build command**: `npm run build`  
- **Build output directory**: `dist`
- **Root directory**: `/` (repository root)

## Environment Variables
None required for this static site.

## Important Notes
- Built with Astro 5 for optimal static generation
- Uses npm (not yarn) - yarn.lock has been removed
- All peer dependencies are properly installed
- Node.js 20+ recommended for consistent builds

## Custom Domain
1. Add your custom domain in Cloudflare Pages dashboard
2. Cloudflare will automatically handle SSL certificates
3. Configure DNS records as instructed

## Performance Features (Automatic)
- ✅ Global CDN
- ✅ HTTP/2 & HTTP/3
- ✅ Brotli compression  
- ✅ Asset optimization
- ✅ Cache headers
- ✅ Static site generation for optimal performance

## SEO Features
- ✅ Automatic sitemap generation with hreflang
- ✅ Multilingual URL structure (`/` for Hungarian, `/en/` for English)
- ✅ Proper meta tags and Open Graph support
- ✅ Structured data for search engines

## Optional Enhancements
- Add `_headers` file for custom headers (already included)
- Enable Web Analytics in Cloudflare dashboard
- Configure custom 404 pages if needed