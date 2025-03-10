/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        category:"#0066cc",
        "gray-300":"#ccc",
        "gray-500":"#333333",
      }
    },
  },
  plugins: [],
}

