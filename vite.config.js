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
  //       main: resolve(__dirname, 'index.html'),
  //       nested: resolve(__dirname, 'pages/index.html'),
  //     },
  //   },
  // },
})