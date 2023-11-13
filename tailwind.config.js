/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      primary: '#E85C90',
    },
    fontFamily : {
      sans : ['Poppins', 'san-serif']
    },
    extend: {
      fontFamily : {
        heading : ['Agbalumo', "sans-serif"]
      }
    },
    container: {
      center: true,
    },
  },

  plugins: [],
}

