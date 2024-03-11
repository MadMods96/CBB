module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_0c: "#ffffff0c",
          A700_05: "#ffffff05",
          A700_11: "#ffffff11",
          A700: "#ffffff",
          A700_14: "#ffffff14",
          A700_19: "#ffffff19",
        },
        teal: { 400: "#0fae95" },
        blue_gray: { 50: "#ecf1f0", "50_5e": "#ecf1f05e" },
        gray: {
          200: "#eaeaea",
          400: "#b5b5b5",
          900: "#1d1429",
          "400_01": "#c5c5c5",
          "900_bf": "#260144bf",
          "900_02": "#160c24",
          "900_01": "#211631",
        },
        black: { 900: "#11011e" },
        red: { A700: "#ae0000" },
      },
      boxShadow: {},
      fontFamily: { raleway: "Raleway", roboto: "Roboto" },
      opacity: { 0.25: 0.25, 0.15: 0.15 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
