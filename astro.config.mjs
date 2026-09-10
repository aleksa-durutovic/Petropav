// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// Pun URL sajta (canonical, og:image) se čita iz .env fajla (nije u git-u):
//   SITE_URL=https://domen-firme.rs
const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

export default defineConfig({
  site: SITE_URL || 'https://example.com',
  trailingSlash: 'ignore',
});
