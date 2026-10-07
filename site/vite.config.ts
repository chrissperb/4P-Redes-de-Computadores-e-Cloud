import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo = nome exato da pasta
export default defineConfig({
  plugins: [react()],
  base: '/4P-Redes-de-Computadores-e-Cloud/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsDir: 'assets',
    rollupOptions: {
      output: {},
    },
  },
  server: {
    host: true,
    port: 5173,
  },
})
