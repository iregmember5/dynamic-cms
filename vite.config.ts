import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/blogs': {
        target: 'https://esign-admin.signmary.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      }
    }
  }
})