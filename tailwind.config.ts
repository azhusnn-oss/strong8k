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
          DEFAULT: "#000000",
          900: "#000000",
          800: "#0A0A0A",
          700: "#121212",
          600: "#1A1A1A",
          500: "#242424",
        },
        // Gold palette derived from the brand colors #D9AF4A (primary) and
        // #FDF1BD (light highlight). `brand` and `gold` are intentionally
        // identical so every existing brand-*/gold-* utility resolves to
        // the same black-and-gold theme.
        brand: {
          50: "#FDF1BD",
          100: "#F6E4A6",
          200: "#EFD78F",
          300: "#E7C978",
          400: "#E0BC61",
          500: "#D9AF4A",
          600: "#BC963F",
          700: "#A07E34",
          800: "#836529",
          900: "#674D1E",
        },
        gold: {
          50: "#FDF1BD",
          100: "#F6E4A6",
          200: "#EFD78F",
          300: "#E7C978",
          400: "#E0BC61",
          500: "#D9AF4A",
          600: "#BC963F",
          700: "#A07E34",
          800: "#836529",
          900: "#674D1E",
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
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 85%)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(217,175,74,0.22) 0%, rgba(0,0,0,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(217,175,74,0.35)",
        "glow-gold": "0 0 40px rgba(253,241,189,0.25)",
        card: "0 8px 30px rgba(0,0,0,0.5)",
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
