import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import addTimestamp from 'vite-plugin-add-timestamp'

export default defineConfig({
  plugins: [react(), addTimestamp()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
