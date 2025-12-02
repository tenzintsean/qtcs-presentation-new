// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Use relative URLs for assets - works on any subdirectory
  build: {
    assetsPrefix: './'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsDir: '_astro',
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name][extname]',
          chunkFileNames: '_astro/[name].js',
          entryFileNames: '_astro/[name].js'
        }
      }
    }
  }
});