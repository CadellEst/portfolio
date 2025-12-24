import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05060f",
        obsidian: "#0b0f19",
        midnight: "#0f172a",
        onyx: "#101520",
        pewter: "#9ca3af",
        gold: "#d6b25e",
        champagne: "#f5efe7",
        azure: "#7dd3fc",
        jade: "#34d399",
        amberGlass: "rgba(214, 178, 94, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(214, 178, 94, 0.35)",
        card: "0 10px 60px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        'slow-pulse': "pulse 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
