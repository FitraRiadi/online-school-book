import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host : '0.0.0.0',
    port: 5173
  },
  __API_URL__: JSON.stringify('http://localhost:8000')
})
