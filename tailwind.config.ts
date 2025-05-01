import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add Inter font
      },
      colors: {
        primary: {
          light: "#2563eb", // blue-600
          dark: "#3b82f6", // blue-500
        },
        secondary: {
          light: "#1e40af", // blue-800
          dark: "#60a5fa", // blue-400
        },
        background: {
          light: "#ffffff",
          dark: "#111827", // gray-900
        },
        text: {
          light: "#1f2937", // gray-800
          dark: "#f3f4f6", // gray-100
        },
      },
    },
  },
  plugins: [],
};
export default config;
