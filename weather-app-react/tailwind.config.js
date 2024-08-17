// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'responsive-sm': ['1.6rem'], // text-4xl
        'responsive-md': ['2rem'],    // text-5xl
        'responsive-lg': ['2.4rem'], // text-6xl
        'responsive-title-sm': ['4rem'],  // text-4xl
        'responsive-title-md': ['5rem'], // text-5xl
        'responsive-title-lg': ['6rem'], // text-6xl
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [],
}
