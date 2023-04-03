// eslint-disable-next-line @typescript-eslint/no-var-requires
const { slate, blackA } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...slate,
        ...blackA,
      },
    },
  },
  plugins: [],
};

module.exports = config;
