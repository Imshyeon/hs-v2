"use client";
// 유저의 전체 스케줄 페이지
// Next.js SSR - getAllSchedules
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#server-side-rendering-getserversideprops
// https://velog.io/@hwon3814/NextJS-v13-App-Router%EC%9D%98-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8DSSR-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0
import { Schedule } from "@/util/interfaces";
import AllSchedulesComponent from "@/components/schedules/allSchedules";
import { useDispatch } from "react-redux";
import { scheduleActions } from "@/store";
import { useEffect } from "react";

export default function AllSchedulesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllSchedulesData().then((response) => {
      dispatch(scheduleActions.setAllSchedules(response));
    });
  }, [dispatch]);

  return <AllSchedulesComponent />;
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
