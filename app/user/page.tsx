"use client";
import CardList from "@/components/ui/card-list";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/index";
import { useEffect } from "react";
import { profileActions } from "@/store/user";
import UserProfileComponent from "@/components/formik/userProfile";

// 유저 프로필 페이지
export default function UserProfilePage() {
  const { schedule } = useSelector((state: RootState) => state.schedule);
  const { name } = useSelector((state: RootState) => state.profile);
  const markedSchedules = schedule.filter((schedule) => schedule.isMarked);

  const dispatch = useDispatch();

  useEffect(() => {
    const getInfos = async () => {
      const infos = await getUserInfos();
      dispatch(profileActions.updateUserInfos(infos));
    };
    getInfos();
  }, [dispatch]);

  return (
    <div className="p-4 mt-2">
      <section>
        <h1 className="text-3xl font-bold pb-2 border-b-2">
          {name.toUpperCase()}
        </h1>
      </section>
      <section id="user-profile-infos" className="mt-5 ml-2">
        <h2 className="text-xl font-bold">USER INFORMATIONS</h2>
        <UserProfileComponent />
      </section>
      {/* schedules */}
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
  const userProfile = await response.json();
  return userProfile.at(-1);
}
