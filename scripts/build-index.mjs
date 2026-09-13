#!/usr/bin/env node
// Génère menus/index.json : la liste des semaines et de leurs fichiers Markdown.
import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const MENUS_DIR = 'menus';

const entries = await readdir(MENUS_DIR, { withFileTypes: true });

const weeks = [];
for (const entry of entries) {
  if (!entry.isDirectory() || !/^\d{4}-\d{2}-\d{2}$/.test(entry.name)) continue;
  const files = (await readdir(join(MENUS_DIR, entry.name)))
    .filter((f) => f.endsWith('.md'))
    .sort();
  if (files.length) weeks.push({ week: entry.name, files });
}

weeks.sort((a, b) => b.week.localeCompare(a.week)); // plus récente en premier

const payload = { generatedAt: new Date().toISOString(), weeks };
await writeFile(join(MENUS_DIR, 'index.json'), JSON.stringify(payload, null, 2) + '\n');

console.log(`index.json : ${weeks.length} semaine(s) — ${weeks.map((w) => w.week).join(', ')}`);
