import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // If we are running 'npm run dev', use root '/'
    // If we are building for GitHub, use the repo name
    base: command === 'serve' ? '/' : '/Anthoscope-Landing-page/',
  }
})