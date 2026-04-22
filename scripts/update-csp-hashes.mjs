#!/usr/bin/env node
/**
 * Postbuild step: scan dist/**\/*.html for inline <script> tags, compute their
 * SHA-256 hashes, and rewrite the script-src directive in dist/_headers.
 *
 * Cloudflare Pages serves _headers from the deploy output, so updating only
 * dist/_headers is sufficient — public/_headers stays as the source of truth
 * for every other directive.
 */

import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve('dist');
const HEADERS_FILE = path.join(DIST, '_headers');
const SCRIPT_RE = /<script(?:\s+type="module")?>([\s\S]*?)<\/script>/g;

async function collectHashes() {
  const hashes = new Set();
  for await (const file of glob('**/*.html', { cwd: DIST })) {
    const html = await readFile(path.join(DIST, file), 'utf8');
    for (const match of html.matchAll(SCRIPT_RE)) {
      const content = match[1].trim();
      if (!content) continue;
      const digest = createHash('sha256').update(content, 'utf8').digest('base64');
      hashes.add(`'sha256-${digest}'`);
    }
  }
  return [...hashes].sort();
}

async function main() {
  const hashes = await collectHashes();
  if (hashes.length === 0) {
    console.warn('[csp] no inline scripts found in dist/ — leaving _headers unchanged');
    return;
  }

  const headers = await readFile(HEADERS_FILE, 'utf8');
  const newScriptSrc = `script-src 'self' ${hashes.join(' ')}`;

  const scriptSrcRe = /script-src [^;]*/;
  if (!scriptSrcRe.test(headers)) {
    throw new Error('[csp] failed to find script-src directive in dist/_headers');
  }
  const updated = headers.replace(scriptSrcRe, newScriptSrc);

  await writeFile(HEADERS_FILE, updated, 'utf8');
  if (updated === headers) {
    console.log(`[csp] script-src already up to date (${hashes.length} hash(es))`);
  } else {
    console.log(`[csp] updated script-src with ${hashes.length} hash(es):`);
    for (const h of hashes) console.log(`  ${h}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
