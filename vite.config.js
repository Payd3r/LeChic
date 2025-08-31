import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Ottimizzazioni per le prestazioni
  build: {
    // Abilita tree shaking avanzato
    rollupOptions: {
      output: {
        // Migliore splitting dei chunk per il caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        },
        // Nomi consistenti per il caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Aumenta la soglia per i warning sui chunk
    chunkSizeWarningLimit: 1000,
    // Ottimizza la minificazione (usa esbuild di default che è più veloce)
    minify: true
  },
  
  // Ottimizzazioni per il dev server
  server: {
    host: true,
    port: 5173
  },
  
  // Preload delle dipendenze
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: []
  }
})
