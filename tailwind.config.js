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
      backgroundImage: {
        //'grid-darkmode': "url('/icons/grid-light.svg')",
        //'grid-lightmode': "url('/icons/grid-dark.svg')",
        'grid-darkmode': "linear-gradient(0deg, rgba(32,32,35,1) 65%, rgba(0,212,255,0) 100%), url('/icons/grid-light.svg')",
        'grid-lightmode': "linear-gradient(0deg, rgba(244,244,245,1) 58%, rgba(0,212,255,0) 100%), url('/icons/grid-dark.svg')",
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
        // Set opacity to 0.1 i use 0.6 for test
        'work-card-header': 'rgba(31, 41, 55, 0.6)',
        'test': 'rgb(107, 114, 128)'
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
