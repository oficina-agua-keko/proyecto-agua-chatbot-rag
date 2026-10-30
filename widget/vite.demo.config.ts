import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Página de demostración del widget (index.html + playground) como sitio estático, para el
// despliegue. El paquete npm se sigue construyendo con `npm run build` (vite.config.ts).
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist-demo', emptyOutDir: true },
});
