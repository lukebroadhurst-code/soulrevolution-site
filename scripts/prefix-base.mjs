// Post-build: prefix root-relative URLs with BASE_PATH so the site works from a sub-folder
// (GitHub Pages project sites). Not used for production builds on the real domain.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (!base) { console.log('BASE_PATH not set, nothing to do'); process.exit(0); }

const fix = (u) => (u.startsWith('/') && !u.startsWith('//') && u !== base && !u.startsWith(base + '/') ? base + u : u);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let files = 0, changed = 0;
for await (const f of walk('dist')) {
  if (!f.endsWith('.html')) continue;
  files++;
  const src = await readFile(f, 'utf8');
  let out = src.replace(/\b(href|src|action|poster)="(\/[^"]*)"/g, (m, a, u) => `${a}="${fix(u)}"`);
  out = out.replace(/\b(srcset|imagesrcset)="([^"]*)"/g, (m, a, v) =>
    `${a}="${v.split(',').map((part) => { const t = part.trim(); const [u, ...rest] = t.split(/\s+/); return [fix(u), ...rest].join(' '); }).join(', ')}"`);
  if (out !== src) { await writeFile(f, out); changed++; }
}
console.log(`prefix-base: ${changed}/${files} HTML files rewritten with base "${base}"`);
