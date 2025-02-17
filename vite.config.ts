import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    fs: {
      allow: ['..', './content']
    }
  },
  assetsInclude: ['**/*.md', '**/*.xml', '**/*.txt'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    copyPublicDir: true,
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});