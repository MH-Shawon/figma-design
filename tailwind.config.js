/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baiJamjuree: ["var(--baiJamjuree-font)", "sans-serif"],
        notoSerifJP: ["var(--notoSerifJP-font)", "serif"],
        poppins: ["var(--poppins-font)", "serif"],
        volkhov: ["var(--volkhov-font)", "serif"],
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
