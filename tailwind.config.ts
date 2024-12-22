import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink:"#F98585",
        myBlack : "#21243D",
        recentBackground:"#F4E2E2",
        footerbackground:"#FAFSFS",
        heroElipse:"#dfd8d8",
        background: "#f6f1f1",
        featuredword:"#f6f1f1",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
