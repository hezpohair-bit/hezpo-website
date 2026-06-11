import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161616",
        charcoal: "#2B2B2B",
        mist: "#F5F7F8",
        line: "#E4E8EA",
        hezpo: {
          red: "#C91F2E",
          coral: "#F05A43",
          green: "#1D7C63",
          gold: "#C99837"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(20, 20, 20, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
