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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pillar-blue": "#002D62",
        "ai-cyan": "#00E5FF",
        "arch-grey": "#333333",
        "result-lime": "#C2FF00",
      },
    },
  },
  plugins: [],
};
export default config;
