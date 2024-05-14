"use client";
import AllSchedulesComponent from "@/components/layout/allSchedules";
import { Schedule } from "@/util/interfaces";

// 유저의 전체 스케줄 페이지
// Next.js SSR - getAllSchedules
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#server-side-rendering-getserversideprops
// https://velog.io/@hwon3814/NextJS-v13-App-Router%EC%9D%98-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8DSSR-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0

export default function AllSchedulesPage() {
  return <AllSchedulesComponent />;
}
