import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "connect-src 'self' http://localhost:4000",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'"
].join('; ')

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    headers: { 'Content-Security-Policy': contentSecurityPolicy }
  },
  preview: {
    headers: { 'Content-Security-Policy': contentSecurityPolicy }
  }
})
