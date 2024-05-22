// 홈 페이지
// 만약 생성한 프로젝트가 있으면 모든 schedules가 보이도록
// 만약 생성한 프로젝트가 없다면, 튜토리얼
"use client";

import AllSchedulesComponent from "@/components/layout/allSchedules";
import TutorialComponent from "@/components/layout/tutorial";
import { Schedule } from "@/util/interfaces";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["schedules"],
    queryFn: getAllSchedulesData,
  });

  return (
    <>
      {data && <AllSchedulesComponent />}
      {!data && <TutorialComponent />}
    </>
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
