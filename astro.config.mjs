// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// Pun URL sajta (canonical, og:image) = domen iz src/data/company.json.
// Može se pregaziti sa SITE_URL u .env fajlu ili u Vercel podešavanjima.
const company = JSON.parse(readFileSync(new URL('./src/data/company.json', import.meta.url), 'utf-8'));
const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

export default defineConfig({
  site: SITE_URL || `https://${company.domen}`,
  trailingSlash: 'ignore',
});
