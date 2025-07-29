/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F6F7', // Grigio molto chiaro invece del rosa
        secondary: '#D4AF37', // Oro mantenuto
        accent: '#800020', // Borgogna mantenuto
        'text-main': '#2C2C2C', // Grigio scuro più professionale
        'background': '#FFFFFF', // Bianco puro
        'light-gray': '#E5E7EB', // Grigio chiaro
        'dark-gray': '#374151', // Grigio scuro per testi
        'warm-white': '#FDFCFA', // Bianco caldo
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}