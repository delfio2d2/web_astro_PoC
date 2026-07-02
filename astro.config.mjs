import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Importación limpia del adaptador

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Modo Híbrido: Todo estático por defecto, SSR preparado
  adapter: vercel(), // Pasamos el adaptador limpio de parámetros para heredar los valores estables por defecto
  devToolbar: {
    enabled: false // Mantenemos el lienzo de desarrollo libre de barras flotantes
  }
});