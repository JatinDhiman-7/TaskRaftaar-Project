// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TaskRaftaar-Project/',  // 👈 this is mandatory for GitHub Pages
})
