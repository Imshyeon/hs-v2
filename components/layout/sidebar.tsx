"use client";
import SidebarLinkBtn from "../ui/sidebar-link-btn";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Schedule } from "@/util/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Sidebar() {
  const { schedule } = useSelector((state: RootState) => state.schedule);

  const markedSchedules = schedule.filter((schedule) => schedule.isMarked);

  const schedulesExceptMarked = schedule
    .filter((schedule) => !schedule.isMarked)
    .slice(0, 4);
  return (
    <nav className="flex flex-col flex-grow-0 flex-shrink relative w-60 text-center p-8 bg-layout-sidebar-default z-10">
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
        <Button className="bg-layout-sidebar hover:bg-white p-2">
          <Link href={"/login"}>로그인/로그아웃</Link>
        </Button>
        <Button className="bg-layout-sidebar hover:bg-white p-2">
          <Link href={"/signup"} className="hover:bg-white p-2">
            회원가입
          </Link>
        </Button>
      </ul>
    </nav>
  );
}
