"use client";
import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function UserActionBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  function handleClosePopover() {
    setIsOpen(false);
  }

  return (
    <Popover
      placement="top"
      offset={10}
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button
          id="user_action_btn"
          size="sm"
          className="absolute bottom-3 right-3 p-4 bg-layout-activeBtn/70 hover:bg-layout-activeBtn/90 w-fit h-fit backdrop-blur-md z-10 rounded-xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#3F4344"
            className="w-6 h-6 fill-sidebar-btn hover:fill-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 h-56">
        <div className="flex flex-col gap-2">
          {status === "authenticated" && session.user.role === "user" && (
            <Button
              className="bg-transparent hover:text-base hover:font-bold"
              onClick={handleClosePopover}
            >
              <Link href="/new/schedule">새로운 스케줄 작성하기</Link>
            </Button>
          )}
          {status === "authenticated" && session.user.role === "admin" && (
            <Button
              className="bg-transparent hover:text-base hover:font-bold"
              onClick={handleClosePopover}
            >
              <Link href="/new/article">새로운 Article 작성하기</Link>
            </Button>
          )}
          {status === "authenticated" && session.user.role === "user" && (
            <Button
              className="bg-transparent hover:text-base hover:font-bold"
              onClick={handleClosePopover}
            >
              <Link href="/user/schedules">모든 스케줄 보기</Link>
            </Button>
          )}
          {status === "unauthenticated" && (
            <Button
              className="bg-transparent hover:text-base hover:font-bold"
              onClick={handleClosePopover}
            >
              <Link href="/tutorial">Tutorial</Link>
            </Button>
          )}
          <Button
            className="bg-transparent hover:text-base hover:font-bold"
            onClick={handleClosePopover}
          >
            <Link href="/articles">Articles</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
