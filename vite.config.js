import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/geunie_hydraulics/",   // 👈 IMPORTANT for GitHub Pages
  plugins: [react()],
})



