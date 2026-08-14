import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import postAudit from '@casoon/astro-post-audit';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://rehacek.tech',
  integrations: [
    sitemap(),
    postAudit({
      preset: 'standard',
      failOn: 'never',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
