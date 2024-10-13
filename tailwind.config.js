/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
      },
      backgroundColor: {
        home: {
          light: '##F1E6DB',
          dark: '#202023',
        },
      },
      colors: {
        'portfolio-gray': '#D4D4D8',
      },
      textColor: {
        primary: {
          light: '#333333',
          dark: '#ffffff',
          gray: '#D4D4D8',
        },
      },
    },
  },
  plugins: [],
}
