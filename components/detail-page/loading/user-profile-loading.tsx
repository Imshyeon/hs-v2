"use client";
import Link from "next/link";

// 유저 프로필 페이지
export default function UserProfileLoading() {
  return (
    <div className="animate-pulse p-4 mt-2">
      <section>
        <div className="h-12 w-2/5 rounded-2xl bg-default-200 pb-2 border-b-2"></div>
      </section>
      <section id="user-profile-infos" className="mt-5 ml-2">
        <h2 className="text-xl font-bold">USER INFORMATIONS</h2>
        <div className="h-48 mt-4 w-full rounded-2xl bg-default-200"></div>
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
        <div className="h-24 mt-4 w-full rounded-2xl bg-default-200"></div>
      </section>
    </div>
  );
}
