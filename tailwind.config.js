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
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-flicker': 'neon-flicker 2s ease-in-out infinite',
        'sheen': 'sheen 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        'neon-flicker': {
          '0%, 100%': { 
            textShadow: '0 0 10px #ff0040, 0 0 20px #ff0040, 0 0 30px #ff0040, 0 0 40px #ff0040',
            opacity: '1',
          },
          '50%': { 
            textShadow: '0 0 5px #ff0040, 0 0 10px #ff0040, 0 0 15px #ff0040, 0 0 20px #ff0040',
            opacity: '0.8',
          },
        },
        'sheen': {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(30deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(30deg)' },
        },
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


