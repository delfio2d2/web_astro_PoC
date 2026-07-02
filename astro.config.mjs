import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Importación manual del adaptador serverless

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Arquitectura Híbrida: Todo estático (SSG) por defecto, SSR preparado
  adapter: vercel(), // Vinculación automática con la infraestructura serverless de Vercel
  devToolbar: {
    enabled: false // Desactivamos la barra de herramientas para limpiar el lienzo de desarrollo
  }
});