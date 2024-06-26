"use client";
// 쿠키 이용하기 : https://github.com/vercel/next.js/discussions/53063
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./dark-mode/sunIcon";
import { MoonIcon } from "./dark-mode/moonIcon";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function SidebarLinkBtn() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div className="px-3 mt-0 mb-4 flex gap-2 justify-center">
      <Button isIconOnly aria-label="home" className="bg-layout-sidebar">
        <Link href={"/"} id="home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-sidebar-btn hover:fill-zinc-600 dark:hover:fill-zinc-100"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </Link>
      </Button>
      <Button
        isIconOnly
        aria-label="user-profile"
        className="bg-layout-sidebar"
      >
        <Link href={"/user"} id="user">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-sidebar-btn hover:fill-zinc-600 dark:hover:fill-zinc-100"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </Button>
      <Switch
        defaultSelected
        aria-label="dark-mode"
        size="sm"
        color="default"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      />
    </div>
  );
}
