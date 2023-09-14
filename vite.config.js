import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@/components': `${path.resolve(__dirname, './src/components/')}`,
      '@/public': `${path.resolve(__dirname, './public/')}`,
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
  base: '/',
  plugins: [react()],
  assetsInclude: ['**/*.m4a'],
  build: {
    chunkSizeWarningLimit: 1600,
  }
})
