import Image from "next/image";
import Link from "next/link";

// 유저 프로필 페이지
export default function UserProfilePage() {
  return (
    <div className="p-4 mt-2">
      <section>
        <h1 className="text-3xl font-bold pb-2 border-b-2">USERNAME</h1>
      </section>
      <section id="user-profile-infos" className="mt-5 ml-2">
        <h2 className="text-xl font-bold">USER INFORMATIONS</h2>
        <form className="flex gap-5 max-xl:flex-col max-xl:items-center">
          <div id="profile-img-setting-xl" className="p-5 relative w-fit ">
            <div className="relative group w-fit h-fit mb-2">
              <Image
                src={"/pandas2.jpeg"}
                alt="user-profile-img"
                width={400}
                height={400}
                className="z-10 rounded-xl group-hover:blur-sm max-xl:w-80 max-xl:h-auto"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="absolute w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>
            {/* 차후에 위의 Image와 연결해서 이미지 반영까지 */}
            <input
              type="file"
              name="profile-img"
              id="profile-img"
              accept="image/png, image/jpeg"
              hidden
            />
          </div>
          <div
            id="profile-user-settings"
            className="flex flex-col gap-7 p-4 w-full mr-5"
          >
            <div className="flex gap-3 items-center">
              <input
                type="text"
                id="user-name"
                className="border rounded-md p-2 focus:outline-none w-full"
                placeholder="이름"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex gap-3 items-center">
              <input
                type="email"
                id="email"
                className="border rounded-md p-2 focus:outline-none w-full"
                placeholder="user@example.com"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex gap-3 justify-between w-full">
              <div className="flex gap-3 items-center w-full">
                <input
                  type="password"
                  id="password"
                  className="border rounded-md p-2 focus:outline-none w-1/2"
                  placeholder="비밀번호 변경하기"
                />
                <input
                  type="password"
                  id="password-confirm"
                  className="border rounded-md p-2 focus:outline-none w-1/2"
                  placeholder="변경된 비밀번호"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="p-2 w-20 bg-userProfileSaveBtn/60 rounded-xl hover:bg-userProfileSaveBtn/90"
              >
                저장
              </button>
            </div>
          </div>
        </form>
      </section>
      {/* schedules */}
      <section id="user-profile-schedules" className="mt-5 ml-2">
        <div className="flex gap-3 items-center">
          <h2 className="text-xl font-bold">SCHEDULES</h2>
          <Link href={"/user/schedules"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-profileGoToBtn stroke-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 w-auto p-5">
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="absolute ml-2 w-5 h-5 z-10 fill-yellow-500 hover:fill-none hover:stroke-[1.3px] hover:stroke-black"
            >
              <path
                fillRule="evenodd"
                d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
                clipRule="evenodd"
              />
            </svg>
            <div id="1" className="bg-scheduleContentBox/50 rounded-xl p-5">
              <div className="flex gap-3 justify-between">
                <span className="text-xs text-slate-900 font-thin">
                  유럽/영국
                </span>
                <span className="text-xs text-slate-900 font-thin">
                  2024-04-26
                </span>
              </div>
              <Image
                src={"/pandas.jpeg"}
                alt="cover-img"
                width={500}
                height={200}
              />
              <p className="text-md font-medium text-center mt-2">제목</p>
            </div>
          </article>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="absolute ml-2 w-5 h-5 z-10 fill-yellow-500 hover:fill-none hover:stroke-[1.3px] hover:stroke-black"
            >
              <path
                fillRule="evenodd"
                d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
                clipRule="evenodd"
              />
            </svg>
            <div id="2" className="bg-scheduleContentBox/50 rounded-xl p-5">
              <div className="flex gap-3 justify-between">
                <span className="text-xs text-slate-900 font-thin">
                  유럽/영국
                </span>
                <span className="text-xs text-slate-900 font-thin">
                  2024-04-26
                </span>
              </div>
              <Image
                src={"/pandas.jpeg"}
                alt="cover-img"
                width={500}
                height={200}
              />
              <p className="text-md font-medium text-center mt-2">제목2</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
