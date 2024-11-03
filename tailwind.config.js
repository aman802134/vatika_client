/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "875px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        BodyColor: "#fffbf0",
        ButtonBg: "#ccd5ae",
        blueMoonShell: "#0091AD",
        WheatColor: "#C9C778",
        BlackColor: "#132a13",
        DarkGreen: "#31572c",
        LightGreen: "#4f772d",
        GreenShade: "#90a955",
        lightWhite: "#f0f7f4",
        orange: " #FF885B",
        skingcolor: "#FFE5CF",
      },
      fontFamily: {
        Young_serif: ["Young Serif", "serif"],
        Roboto_slab: ["Roboto Slab", "serif"],
        Roboto_serif: ["Roboto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
