// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dendora.hu',
  
  // i18n configuration
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en'],
    routing: {
      prefixDefaultLocale: false, // hu = /, en = /en/
    }
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'hu',
        locales: {
          hu: 'hu-HU',
          en: 'en-US',
        },
      },
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});