// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES ? '/demo-dapp-with-react-ui/' : '/'
});
