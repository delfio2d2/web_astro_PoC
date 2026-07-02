import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Adaptador serverless oficial

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Arquitectura Híbrida
  adapter: vercel({
    webAnalytics: { enabled: true },
    imagesConfig: { sizes: [640, 750, 828, 1080, 1200] },
    // Forzamos explícitamente el runtime moderno que Vercel sí acepta de forma nativa
    edgeMiddleware: false,
    functionPerRoute: false
  }),
  devToolbar: {
    enabled: false
  }
});