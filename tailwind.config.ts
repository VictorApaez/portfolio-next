import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-0": "linear-gradient(0deg, #000, #14213D)",
        "gradient-180": "linear-gradient(180deg, #000, #14213D)",
      },
      colors: {
        cloud: "#EEEEEE",
        primary: {
          1: "rgb(var(--primary-color-1))",
          2: "rgb(var(--primary-color-2))",
          3: "rgb(var(--primary-color-3))",
        },
        accent: {
          1: "rgb(var(--accent-color-1))",
          2: "rgb(var(--accent-color-2))",
          3: "rgb(var(--accent-color-3))",
        },
        content: {
          header: "rgb(var(--text-color-header))",
          primary: "rgb(var(--text-color-primary))",
          secondary: "rgb(var(--text-color-secondary))",
        },
        lines: {
          primary: "rgb(var(--border-color-primary))",
        },
        button: {
          primary: "rgb(var(--button-color-primary))",
        },
      },

      boxShadow: {
        primary: "0 20px 50px rgba(var(--accent-color-3), 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
