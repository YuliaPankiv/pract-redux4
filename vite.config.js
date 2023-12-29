import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/pract-redux4/',

  plugins: [react()],
  // server: {
  //   open: '/index.html',
  //   port: 8000,
  // },
});
