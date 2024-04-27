import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        layout: {
          footer: "#E3E9E8",
          sidebar: {
            default: "#EDF2F1",
            btn: "#8C8D8D",
          },
          activeBtn: "#CCE8E5",
        },
        scheduleInfo: "#F5F5F5",
        scheduleContentBox: "#F5F5F5",
        userProfile: "#F5F5F5",
        userProfileSaveBtn: "#EDF2F1",
      },
      fill: {
        sidebar: {
          btn: "#8C8D8D",
        },
        profileGoToBtn: "#CCE8E5",
      },
      colors: {
        error: "#A7D3CB",
      },
    },
  },
  plugins: [],
};
export default config;
