/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff6257',
        'bg-color': '#36384e',
        'semi-grey': '#242742',
        'grey': '#9294a0',
        'white': '#ffffff'
      }
    },
    fontFamily: {
      'Roboto-Reg': ['Roboto-Reg', 'sans-serif'],
      'Roboto-Bold': ['Roboto-Bold', 'sans-serif']
    }
  },
  plugins: [],
}

