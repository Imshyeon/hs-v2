"use client";
import CardList from "@/components/ui/card-list";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { profileActions } from "@/store/user";
import UserProfileComponent from "@/components/formik/userProfile";
import { useQuery } from "@tanstack/react-query";
import { alertActions } from "@/store/alert";
import UserProfileLoading from "@/components/detail-page/loading/user-profile-loading";
import { Schedule } from "@/util/interfaces";
import { useRouter } from "next/navigation";

// 유저 프로필 페이지
export default function UserProfilePage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfos,
  });

  const { data: scheduleData } = useQuery({
    queryKey: ["schedules"],
    queryFn: getAllSchedulesData,
  });

  useEffect(() => {
    if (isPending) {
      dispatch(
        alertActions.setAlertState({
          status: "pending",
          message: "유저 데이터를 가져오고 있습니다.",
        })
      );
    }
    if (data) {
      dispatch(profileActions.updateUserInfos(data));
      dispatch(
        alertActions.setAlertState({
          status: "success",
          message: "유저 데이터를 가져오는데 성공했습니다.",
        })
      );
    }
  }, [data, isPending, dispatch]);

  if (isPending) {
    return <UserProfileLoading />;
  }

  if (isError) {
    console.log(error);
    dispatch(
      alertActions.setAlertState({
        status: "failure",
        message: error.message || "유저 데이터를 가져오는데 실패했습니다.",
      })
    );
    router.replace("/login");
    return;
  }

  const markedSchedules = scheduleData?.allSchedules.filter(
    (schedule) => schedule.isMarked
  );

  return (
    <div className="p-4 mt-2">
      <section>
        <h1 className="text-3xl font-bold pb-2 border-b-2">
          {data && data.name ? data.name.toUpperCase() : "홍길동"}
        </h1>
      </section>
      <section id="user-profile-infos" className="mt-5 ml-2">
        <h2 className="text-xl font-bold">USER INFORMATIONS</h2>
        <UserProfileComponent
          name={data.name}
          email={data.email}
          image={data.image}
          password={data.password}
          password_comfirm={data.password_comfirm}
        />
      </section>
      <section id="user-profile-schedules" className="mt-5 ml-2">
        <div className="flex gap-3 items-center">
          <h2 className="text-xl font-bold">SCHEDULES</h2>
          <Link href={"/user/schedules"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-profileGoToBtn "
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <CardList
          showBookMark={true}
          isMarked={false}
          schedules={markedSchedules}
        />
      </section>
    </div>
  );
}

export async function getUserInfos() {
  const response = await fetch("/api/user");
  const resData = await response.json();
  if (response.status === 401) {
    console.log(resData.error);
    throw Error(resData.error);
  }
  return resData;
  // return resData.at(-1);
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
