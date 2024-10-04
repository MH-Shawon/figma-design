/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baiJamjuree: ["var(--baiJamjuree-font)", "sans-serif"],
        notoSerifJP: ["var(--notoSerifJP-font)", "serif"],
        poppins: ["var(--poppins-font)", "serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        figmaTheme: {
          primary: "#244D4D",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
