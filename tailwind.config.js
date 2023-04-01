/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './common/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       colors: {
        back: {
          //Navbar back
          100: "#151b2b",
          //Main back
          200: "#0e151f",
        },
        ui: {
          //Navbar circle active
          100: "#212738",
          //Navbar item :hover
          200: "#121725",
          //Social icons :hover
          300: "#1a2031",
          //Navbar bottom icons
          400: "#363a46",
          //Max button
          500: "#1c2233"
        },
        font: {
          //Navbar section titles
          100: "#a8add4",
          //Soon text color
          200: "#6872a6",
          //Somehow gray
          300: "#a1a8cf"
        },
        accent: {
          //Lighter version 
          100: "#899dd3",
          200: "#5d65ed",
          //Binance
          300: "#f2c94c"
        },
       },
       backgroundImage: {
        main: "./background/coinflip_bg.jpeg"
       }
    },
  },
  plugins: [],
}

