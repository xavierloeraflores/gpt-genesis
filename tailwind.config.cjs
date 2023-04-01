// eslint-disable-next-line @typescript-eslint/no-var-requires
const { slate } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...slate,
      },
    },
  },
  plugins: [],
};

module.exports = config;
