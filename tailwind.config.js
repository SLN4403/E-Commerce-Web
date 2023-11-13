/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily : {
      sans : ['Poppins', 'san-serif']
    },
    extend: {
      fontFamily : {
        heading : ['Agbalumo', "sans-serif"]
      },
      colors: {
        primary: '#E85C90',
        lines : '#A0A6BE',
        secondary : '#C481A7'
      },
    },
    container: {
      center: true,
    },
  },

  plugins: [],
}

