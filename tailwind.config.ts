import type { Config } from "tailwindcss";

export default {
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
          "primary":"#3c39D0",
          "secondary":"#676767",
          "grey":"#2B2A2A",
          "pattern":"#343434",
          "linear":"#6D6AFF",
          "bgWhite":"#FFFFFF",
          "bgGrey":"#F7F7F8",
      },
      padding:{
        "paddingY":"5rem",
        "paddingX":"2rem"
      },
      margin:{
        "marginT":"9rem",
      },
      borderRadius:{
          "rounded":"4rem"
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "3xl": "1360px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
