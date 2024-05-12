import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        scheduleInfo: { DEFAULT: "#F5F5F5", dark: "#3F4344" },
        scheduleContentBox: { DEFAULT: "#F5F5F5", dark: "#3F4344" },
        userProfile: "#F5F5F5",
        loginBtn: "#F5F5F5",
        signupBtn: "#EDF2F1",
        signupBtn_hover: "#CCE8E5",
        userProfileSaveBtn: "#EDF2F1",
        createScheduleBtn: "#EDF2F1",
        createScheduleBtn_hover: "#CCE8E5",
      },
      fill: {
        sidebar: {
          btn: "#8C8D8D",
        },
        profileGoToBtn: "#CCE8E5",
        plusSchedule: "#93DBCC",
      },
      colors: {
        error: "#A7D3CB",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
