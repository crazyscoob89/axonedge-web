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
        "ax-bg": "#150f1f",
        "ax-bg2": "#0d0d1a",
        "ax-accent": "#386aff",
        "ax-accent-hover": "#4f7eff",
        "ax-purple": "#6d40ff",
        "ax-text": "#ffffff",
        "ax-muted": "#a0a0b8",
      },
      backgroundImage: {
        "ax-gradient": "linear-gradient(135deg, #386aff 0%, #a78bfa 100%)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "aurora-1": "aurora-1 8s ease-in-out infinite",
        "aurora-2": "aurora-2 10s ease-in-out infinite",
        "aurora-3": "aurora-3 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(56, 106, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(56, 106, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
