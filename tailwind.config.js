/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",    "./components/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container:{
      center:true,
     
    },
    extend: {
      width:{
        "120":"60rem",
        "100":"45rem"
      }
    },
  },
  plugins: [],
}
