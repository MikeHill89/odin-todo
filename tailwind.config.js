/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), require('daisyui'),
    ],
    daisyui:{
        themes: ["dark", "lofi",],
    },
}

