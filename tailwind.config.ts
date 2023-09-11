/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "off-black": "#272727",
        flame: "#e4572e",
        jonquil: "#ffc914",
        mountbatten: "#907F9F",
        "jungle-green": {
          "50": "#f2fbf9",
          "100": "#d3f4ed",
          "200": "#a6e9db",
          "300": "#72d6c6",
          "400": "#44bdac",
          "500": "#2a9d8f",
          "600": "#208177",
          "700": "#1d6861",
          "800": "#1c534f",
          "900": "#1b4642",
          "950": "#0a2928",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
