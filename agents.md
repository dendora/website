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
