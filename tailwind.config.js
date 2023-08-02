/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    
    extend: {
      colors: {
        'bg': '#1c1c1c',
        'accent': '#009DDC',
      },
      animation: {
        'slide-right': 'slideRight 0.5s ease-in-out forwards',
      },
      keyframes: {
        slideRight: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(10px)' },
        }
      }
    },
  },
  plugins: [],
}

