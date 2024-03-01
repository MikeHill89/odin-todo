/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), require('daisyui'),
    ],
    daisyui:{
        themes: ["dark", "cupcake",],
    },
}

