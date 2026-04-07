import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // If we are in 'serve' (npm run dev), use root '/'
    // If we are in 'build' (GitHub Actions), use the repo folder
    base: command === 'serve' ? '/' : '/Anthoscope-Landing-page/',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    }
  }
})