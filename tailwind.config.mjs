/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        metaltheme: {
          "primary": "#b91c1c",     // Rojo oscuro / Sangre para CTAs principales
          "secondary": "#374151",   // Gris oscuro para elementos secundarios
          "accent": "#f3f4f6",      // Blanco/Gris claro para contrastes destructivos
          "neutral": "#111827",     // Fondo de componentes oscuros
          "base-100": "#0b0f17",    // Fondo general ultra-oscuro de la web
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
}
