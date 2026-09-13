import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

var module = { exports: {} };

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
