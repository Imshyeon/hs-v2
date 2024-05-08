import SidebarLinkBtn from "../ui/sidebar-link-btn";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Schedule } from "@/util/interfaces";

export async function getAllSchedules() {
  try {
    const response = await fetch("http://localhost:3000/api/schedules", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      cache: "no-store", // 일종의 revalidate?
    });

    if (!response.ok) {
      throw Error("모든 스케줄을 불러오는데 실패했습니다.");
    }
    const allSchedules: Schedule[] = await response.json();

    allSchedules?.sort(
      (a, b) =>
        new Date(b.created_date).getTime() - new Date(a.created_date).getTime()
    );

    const latestTwoSchedules: Schedule[] = allSchedules.slice(0, 5);
    return latestTwoSchedules;
  } catch (err: any) {
    throw Error("모든 스케줄을 불러오는데 실패했습니다.", err);
  }
}

export default async function Sidebar() {
  const latestTwoSchedules = await getAllSchedules();

  return (
    <nav className="flex flex-col flex-grow-0 flex-shrink relative w-60 text-center p-8 bg-layout-sidebar-default z-10">
      <SidebarLinkBtn />
      <ul className="flex flex-col gap-5 mt-8">
        {latestTwoSchedules?.map((schedule: Schedule) => (
          <Link key={schedule._id} href={`/user/schedules/${schedule.slug}`}>
            <li className="rounded-md p-2 hover:font-semibold cursor-pointer flex flex-col items-start divide-y">
              <span className="self-start text-xs">{schedule.category}</span>
              <p className="w-full self-center text-md p-2">{schedule.title}</p>
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
