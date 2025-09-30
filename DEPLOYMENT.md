# Cloudflare Pages Deployment

## Build Settings
- **Build command**: `npm run build`  
- **Build output directory**: `dist`
- **Root directory**: `/` (if repo root)

## Environment Variables
None required for this static site.

## Important Notes
- Uses npm (not yarn) - yarn.lock has been removed
- All peer dependencies are properly installed
- Node.js 20 specified for consistent builds

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

## Optional Enhancements
- Add `_headers` file for custom headers
- Add `_redirects` file for SPA routing (if needed)
- Enable Web Analytics in Cloudflare dashboard