import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05070D",
          900: "#05070D",
          800: "#0A0E17",
          700: "#0E1420",
          600: "#131B2C",
          500: "#1A2438",
        },
        brand: {
          50: "#E9F7FF",
          100: "#CDEEFF",
          200: "#9BDDFF",
          300: "#63C8FF",
          400: "#2FB0FF",
          500: "#0A96F5",
          600: "#0077D6",
          700: "#005EA8",
          800: "#004A85",
          900: "#053A66",
        },
        gold: {
          50: "#FFF8E8",
          100: "#FFEDC2",
          200: "#FFDD8A",
          300: "#FFC94D",
          400: "#FFB020",
          500: "#F59B0B",
          600: "#D97F06",
          700: "#B3610A",
          800: "#8F4D10",
          900: "#743F12",
        },
        live: {
          400: "#FF5C72",
          500: "#FF3B4E",
          600: "#E31E38",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,7,13,0) 0%, rgba(5,7,13,1) 85%)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(10,150,245,0.25) 0%, rgba(5,7,13,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(10,150,245,0.35)",
        "glow-gold": "0 0 40px rgba(255,176,32,0.3)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        "pulse-slow": "pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
