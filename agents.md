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

## PinchTab — Browser Testing from Terminal

[PinchTab](https://github.com/pinchtab/pinchtab) is installed globally and can be used to view, review, and test pages from the terminal without screenshots.

**Start server:**
```bash
pinchtab
```

**Useful commands:**
```bash
# Navigate to a page
pinchtab nav http://localhost:4321/dimop

# Extract all text (token-efficient, ~800 tokens/page)
pinchtab text

# Get interactive elements (links, buttons, inputs)
pinchtab snap -i -c

# Click an element by ref
pinchtab click e5

# Fill an input field
pinchtab fill e3 "user@example.com"

# Submit a form
pinchtab press e7 Enter
```

Server runs on `http://localhost:9867` by default. Use `curl http://localhost:9867/health` to check status.

Installed via: `curl -fsSL https://pinchtab.com/install.sh | bash`
