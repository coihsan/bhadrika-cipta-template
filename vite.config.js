import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// const root = resolve(__dirname, 'src')
// const outDir = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://coihsan.github.io/vite-first/',
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: './index.html',
  //       services: './src/pages/Services.jsx',
  //     },
  //     output: {
  //       css: './dist/main.css',
  //       js: './dist/main.js',
  //     },
  //   },
  // },
})