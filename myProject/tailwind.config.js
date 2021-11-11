module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light_gray: "#d2d2d2",
        gray: "#1C1C1C",
        orange: "#FF9300",
        purple: "#932191",
        dark_purple: "#691867",
      },
      boxShadow: {
        orange: "0px -12px 0 0 #FF9300 inset ",
        purple: "0px -12px 0 0 #932191 inset",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl": "0 35px 60px -15px rgba(0, 0, 0, 0.4)",
        "5xl": "0 35px 60px -15px rgba(0, 0, 0, 0.5)",
      },
      height: {
        "1/8": "12.5%",
        "2/8": "25%",
        "7/8": "87.5%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "9/10": "90%",
        def: "calc(2*[100%-5rem])",
        100: "25rem",
        116: "29rem",
        132: "33rem",
        150: "38rem",
        164: "42rem",
        172: "44rem",
        180: "46rem",
        196: "50rem",
      },
      width: {
        100: "25rem",
        116: "29rem",
        132: "33rem",
        150: "38rem",
        164: "42rem",
        180: "46rem",
        196: "50rem",
      },
      minHeight: {
        "1/10": "10%",
        "1/2": "50%",
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const orangeHighlight = {
        ".orange_highlight": {
          background: "linear-gradient(120deg, #FF9300 0%, #FF9300 100%)",
          "background-repeat": "no-repeat",
          "background-size": "100% 40%",
          "background-position": "0 100%",
        },
        ".purple_highlight": {
          background: "linear-gradient(120deg, #932191 0%, #932191 100%)",
          "background-repeat": "no-repeat",
          "background-size": "100% 40%",
          "background-position": "0 100%",
        },
      };
      addUtilities(orangeHighlight);
    },
  ],
};
