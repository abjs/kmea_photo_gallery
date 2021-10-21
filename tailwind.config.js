module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      shadow: {
        "shadow-small":
          "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      },
      backgroundImage: {
        "kmea-bg-image": "url('/kmea-bg-image.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
