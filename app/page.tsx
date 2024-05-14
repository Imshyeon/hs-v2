// 홈 페이지
// 만약 생성한 프로젝트가 있으면 모든 schedules가 보이도록
// 만약 생성한 프로젝트가 없다면, 튜토리얼
"use client";

import AllSchedulesComponent from "@/components/layout/allSchedules";
import TutorialComponent from "@/components/layout/tutorial";
import { alertActions } from "@/store/alert";
import { RootState } from "@/store/index";
import { scheduleActions } from "@/store/schedules";
import { Schedule } from "@/util/interfaces";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const { schedule } = useSelector((state: RootState) => state.schedule);
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["schedules"],
    queryFn: getAllSchedulesData,
  });

  useEffect(() => {
    if (isPending) {
      dispatch(
        alertActions.setAlertState({
          status: "pending",
          message: "스케줄을 불러오고 있습니다.",
        })
      );
    }

    if (data) {
      console.log("data=>", data);
      dispatch(scheduleActions.setAllSchedules(data));
      dispatch(
        alertActions.setAlertState({
          status: "success",
          message: "모든 스케줄을 불러왔습니다.",
        })
      );
    }

    if (isError) {
      dispatch(
        alertActions.setAlertState({
          status: "failure",
          message: error.message,
        })
      );
    }
  }, [data, isError, error, isPending, dispatch]);

  return (
    <>
      {schedule && <AllSchedulesComponent />}
      {!schedule && <TutorialComponent />}
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
