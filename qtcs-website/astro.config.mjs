// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Set base path for GitHub Pages subdirectory deployment
  base: '/qtcs-presentation-new/website/',
  vite: {
    plugins: [tailwindcss()]
  }
});