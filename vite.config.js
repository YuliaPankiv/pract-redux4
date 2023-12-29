import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pract-redux4/',
  server: {
    open: '/index.html',
    port: 8000,
  },
});
