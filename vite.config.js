import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Newsletter-sign-up-form-with-success-message/",
  plugins: [svgr(), react()],
})
