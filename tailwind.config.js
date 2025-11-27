/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'anton': ['"Anton"', 'sans-serif'],
      },
      colors: {
        'neon-red': '#ff0040',
        'neon-purple': '#bc13fe',
        'gold': '#FFD700',
        'deep-black': '#0a0a0a',
      },
      animation: {
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
}


