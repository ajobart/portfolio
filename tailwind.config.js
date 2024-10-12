/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        home: {
          light: '##F1E6DB',
          dark: '#202023',
        },
      },
      textColor: {
        primary: {
          light: '#333333',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
