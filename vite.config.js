import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Set the development server port
    open: true, // Automatically open the browser on start
    hmr: {
      timeout: 30000, // Increase timeout for hot module replacement
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Specify dependencies to pre-bundle
    force: true, // Force optimization
  },
  build: {
    sourcemap: true, // Generate source maps for debugging
  },
  resolve: {
    alias: {
      '@': '/src', // Use `@` as a shortcut for the `/src` directory
    },
  },
});
