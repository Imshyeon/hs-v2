// 홈 페이지
// 만약 생성한 프로젝트가 있으면 모든 schedules가 보이도록
// 만약 생성한 프로젝트가 없다면, 튜토리얼
"use client";

import AllSchedulesComponent from "@/components/layout/allSchedules";
import TutorialComponent from "@/components/layout/tutorial";
import { RootState } from "@/store/index";
import { useSelector } from "react-redux";
import Alert from "@/components/ui/alert";

export default function Home() {
  const { schedule } = useSelector((state: RootState) => state.schedule);
  console.log("home=>", schedule);

  return (
    <>
      <Alert status="success" message={""} />
      {schedule && <AllSchedulesComponent />}
      {!schedule && <TutorialComponent />}
    </>
  );
}
