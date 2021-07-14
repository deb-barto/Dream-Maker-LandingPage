module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      "bookmark-roxo":"#5267DF",
      "bookmark-red":"#FF0F4F",
      "white":"#FFFFFF",
    },
    fontFamily:{
      Roboto: ["Roboto, sans-serif"]
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
