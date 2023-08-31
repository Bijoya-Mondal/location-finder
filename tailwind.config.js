/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors : {
        primary : '#2293b0',
        secondary : '#d9d9d9'
      }
    },
  },
  plugins: [],
}

