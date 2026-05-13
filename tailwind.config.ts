import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        teal: "#14B8A6",
        slateText: "#475569",
        page: "#F8FAFC",
        borderSoft: "#E2E8F0",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.08)",
        card: "0 10px 30px rgba(15, 23, 42, 0.06)",
        glow: "0 22px 70px rgba(20, 184, 166, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
