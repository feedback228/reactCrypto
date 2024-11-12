/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(2,1,41,1) 0%, rgba(81,1,150,1) 51%, rgba(0,212,255,1) 100%)',
      },
    },
  },
  plugins: [],
}

