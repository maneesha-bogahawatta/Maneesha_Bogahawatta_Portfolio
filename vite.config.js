import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react(), tailwindcss()],
  // Use repository subpath only for production (GitHub Pages). Dev server runs at '/'.
  base: mode === 'production' ? '/Maneesha_Bogahawatta_Portfolio/' : '/',
}))
