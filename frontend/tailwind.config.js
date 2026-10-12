/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Pinyon Script', 'cursive'],
        handwritten: ['"Nothing You Could Do"', 'cursive'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#050505',
          red: '#FF0000',
          white: '#FFFFFF',
          gray: '#1A1A1A',
        },
        'hyped-red': '#ef4444',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      screens: {
        '3xl': '1920px',
      },
    }
  },
  plugins: [],
}
