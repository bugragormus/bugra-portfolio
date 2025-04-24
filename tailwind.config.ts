import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add Inter font
      },
      colors: {
        primary: "#2563eb", // blue-600
        secondary: "#1e40af", // blue-800
      },
    },
  },
  plugins: [],
};
export default config;
