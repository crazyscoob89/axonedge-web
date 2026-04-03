import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ax-bg":     "#050d1a",
        "ax-bg2":    "#07111f",
        "ax-card":   "#0c1829",
        "ax-accent": "#f59e0b",
        "ax-accent-hover": "#fbbf24",
        "ax-gold":   "#d97706",
        "ax-text":   "#ffffff",
        "ax-muted":  "#94a3b8",
      },
      backgroundImage: {
        "ax-gradient": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245,158,11,0.3)" },
          "50%":      { boxShadow: "0 0 40px rgba(245,158,11,0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
