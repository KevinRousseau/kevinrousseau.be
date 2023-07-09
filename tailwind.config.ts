import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {},
      backgroundImage: {},
      container: {
        padding: "1.5rem",
      },
    },
  },
};
