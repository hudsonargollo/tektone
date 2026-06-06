import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Neutral dark elevation ladder (Material overlay math on #0A0A0A base)
        ink: {
          base: "#0A0A0A", // 00dp canvas
          900: "#121212",
          800: "#171717", // 01dp panels
          700: "#1E1E1E",
          600: "#272727", // 04dp cards
          500: "#353535", // 16dp dialogs
          400: "#3A3A3A",
        },
        // Brand — used as scarce, high-potency accents only
        "pillar-blue": "#002D62",
        "ai-cyan": "#00E5FF",
        "result-lime": "#C2FF00",
        // Semantic state lexicon
        action: "#00E5FF", // primary conversion accent
        success: "#46FF9E", // positive metrics / revenue
        danger: "#E5484D", // operational failure / "rasgando dinheiro"
        warning: "#FFB224", // bottleneck / gargalo
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [],
};
export default config;
