module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      "bookmark-roxo":"#5267DF",
      "bookmark-red":"#FF5001",
      "bookmark-y":"#EDED32",
      "white":"#FFFFFF",
      "black":"#000000",
    },
    fontFamily:{
      Roboto: ["Roboto, sans-serif"],
      Bowlby:["Bowlby One SC, cursive;"]
    },
    container: {
      center: true,
      padding:"1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl":"1124px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
