/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "back-color": "rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "orange-gradient":
          "linear-gradient(180deg, rgba(249,172,22,1) 0%, rgba(249,115,22,1) 49%);",
        test: "url('/record.png')",
        "card-noise": "url('/card.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        "sh-border": "1px 1px 0px rgba(0, 0, 0, 1)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
