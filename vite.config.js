import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/Ikigai_client/',  // Set the base path for GitHub Pages
  plugins: [react(), tailwindcss()],  // Your plugins go here
}) 
 // Add this to tell Vite where the site is hosted
  // other settings here
