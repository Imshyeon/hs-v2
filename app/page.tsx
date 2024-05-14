// 홈 페이지
// 만약 생성한 프로젝트가 있으면 모든 schedules가 보이도록
// 만약 생성한 프로젝트가 없다면, 튜토리얼
"use client";

import AllSchedulesComponent from "@/components/layout/allSchedules";
import TutorialComponent from "@/components/layout/tutorial";
import { RootState } from "@/store/index";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@/components/ui/alert";
import { useEffect } from "react";
import { alertActions } from "@/store/alert";

export default function Home() {
  const { schedule } = useSelector((state: RootState) => state.schedule);
  const { status, message } = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "success" || status === "failure") {
      const timer = setTimeout(() => {
        dispatch(alertActions.setAlertState({ status: null, message: "" }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, dispatch]);

  // dispatch(
  //   alertActions.setAlertState({
  //     status: "pending",
  //     message: "메시지를 전송하는 중입니다.",
  //   })
  // );

  // dispatch(
  //   alertActions.setAlertState({
  //     status: "success",
  //     message: "메시지를 전송하는데 성공했습니다.",
  //   })
  // );

  // dispatch(
  //   alertActions.setAlertState({
  //     status: "failure",
  //     message: "에러가 발생했습니다. 다시 시도해주세요.",
  //   })
  // );

  console.log("home=>", schedule);

  return (
    <>
      {status !== null && <Alert status={status} message={message} />}
      {schedule && <AllSchedulesComponent />}
      {!schedule && <TutorialComponent />}
    </>
  );
}
