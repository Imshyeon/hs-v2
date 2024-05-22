"use client";
import SidebarLinkBtn from "../ui/sidebar-link-btn";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Schedule } from "@/util/interfaces";
import { useQuery } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session, status } = useSession();

  const { data } = useQuery({
    queryKey: ["schedules"],
    queryFn: getAllSchedulesData,
  });

  const schedule = data?.allSchedules;

  const markedSchedules = schedule?.filter((schedule) => schedule.isMarked);

  const schedulesExceptMarked = schedule
    ?.filter((schedule) => !schedule.isMarked)
    .slice(0, 4);
  return (
    <nav className="flex flex-col flex-grow-0 flex-shrink relative w-60 text-center p-8 bg-layout-sidebar-default z-10 dark:bg-zinc-900">
      <SidebarLinkBtn />
      <ul className="flex flex-col gap-5 mt-8">
        {markedSchedules &&
          markedSchedules?.map((schedule: Schedule) => (
            <Link key={schedule._id} href={`/user/schedules/${schedule.slug}`}>
              <li className="rounded-md p-2 hover:font-semibold cursor-pointer flex flex-col items-start divide-y">
                <span className="self-start text-xs">{schedule.category}</span>
                <p className="w-full self-center text-md p-2">
                  {schedule.title}
                </p>
              </li>
            </Link>
          ))}
        {!markedSchedules &&
          schedulesExceptMarked?.map((schedule: Schedule) => (
            <Link key={schedule._id} href={`/user/schedules/${schedule.slug}`}>
              <li className="rounded-md p-2 hover:font-semibold cursor-pointer flex flex-col items-start divide-y">
                <span className="self-start text-xs">{schedule.category}</span>
                <p className="w-full self-center text-md p-2">
                  {schedule.title}
                </p>
              </li>
            </Link>
          ))}
      </ul>

      <ul className="absolute inset-x-0 bottom-1 flex flex-col space-y-1">
        <Button className="bg-layout-sidebar hover:bg-white p-2 dark:hover:text-black">
          {status === "authenticated" ? (
            <span onClick={() => signOut()}>로그아웃</span>
          ) : (
            <Link href={"/login"}>로그인</Link>
          )}
        </Button>
        <Button className="bg-layout-sidebar hover:bg-white p-2 dark:hover:text-black">
          <Link href={"/signup"} className="hover:bg-white p-2 ">
            회원가입
          </Link>
        </Button>
      </ul>
    </nav>
  );
}

export async function getAllSchedulesData() {
  try {
    const response = await fetch("http://localhost:3000/api/schedules");

    if (!response.ok) {
      throw Error("스케줄 불러오는데 실패했습니다.");
    }
    const allSchedules: Schedule[] = await response.json();

    return { allSchedules };
  } catch (err: any) {
    throw Error("스케줄 불러오는데 실패했습니다.", err);
  }
}
