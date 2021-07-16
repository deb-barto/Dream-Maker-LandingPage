module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'eye': "url('./public/assests/bg4.svg')",
    })
    },
    colors:{
      "bookmark-roxo":"#3e00a8",
      "bookmark-red":"#FF5001",
      "bookmark-y":"#EDED32",
      "bookmark-bg":"lemonchiffon",
      "bookmark-bc":"#a795c7",
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
    scrollBehavior: ['motion-safe', 'motion-reduce', 'responsive'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
