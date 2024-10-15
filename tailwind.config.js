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
        slideUp: {
          '0%': { transform: 'translate(-50%, 200%)' },
          '100%': { transform: 'translate(-50%, 0)' },
        },
        slideDown: {
          '0%': { transform: 'translate(-50%, 0)' },
          '100%': { transform: 'translate(-50%, 200%)' },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
        slideUp: 'slideUp 0.5s ease-in-out',
        slideDown: 'slideDown 0.5s ease-in-out',
      },
      backgroundColor: {
        home: {
          light: '#F4F4F5',
          //light: '#F1E6DB',
          dark: '#202023',
          //navbarContrast: '#F3EDE5',
          navbarContrast: '#ffffff40',
        },
      },
      colors: {
        'portfolio-gray': '#D4D4D8',
        'navbar-theme-btn': '#0090FF',
        'navbar-theme-btn-hover': '#0588F0',
        'navbar-theme-btn-dark-hover': '#3B9EFF',
        'portfolio-blue-light': '#0090FF',
        'portfolio-blue-light-hover': '#3B9EFF',
        'portfolio-blue-dark': '#0090FF',
        'portfolio-blue-dark-hover': '#0D74CE',
        'table-of-content': '#F0F1F3',
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
