/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/theme");
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    keyframes: {
      "scrolling-banner": {
        from: { transform: "translateX(0%)" },
        to: { transform: "translateX(-50%)" }, // Solo se desplaza la mitad, no todo de golpe
      },
      "scrolling-banner-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-50% - var(--gap)/2))" },
      },
      "fade-in": {
        "0%": { transform: "translateY(15pt)", opacity: 0 },
        "100%": { transform: "translateY(0pt)" },
      },
      "fade-out": {
        "0%": { transform: "translateY(0pt)" },
        "100%": { transform: "translateY(15pt)", opacity: 0 },
      },
      dissappear: {
        "0%": { opacity: 1, visibility: "visible" },
        "100%": { visibility: "hidden", opacity: 0 },
      },
    },
    animation: {
      "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
      "scrolling-banner-vertical":
        "scrolling-banner-vertical var(--duration) linear infinite",
      "fade-in": "fade-in 1s ease-in-out",
      "fade-out": "fade-out 1s ease-in-out",
      dissappear: "dissappear 1.5s ease-in-out forwards",
    },
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#1d4ed8",
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
      },
      screens: {
        midmd: "880px",
      },
    },
  },
  plugins: [heroui()],
};
