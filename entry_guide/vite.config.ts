import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from '@rollup/plugin-yaml';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    yaml(),
  ],
  base: "./",
})
