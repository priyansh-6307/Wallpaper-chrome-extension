import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json', // Source file
          dest: '' // Destination folder in "dist"
        }
      ]
    })
  ],
  build: {
    outDir: 'dist', // Output folder for build
  },
});
