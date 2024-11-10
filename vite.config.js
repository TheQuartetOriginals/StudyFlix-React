import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.18.30',  // This allows external devices to access the server
    port: 3000,        // Or whatever port you're using
  }
})
