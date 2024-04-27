// 유저의 전체 스케줄 페이지
import Image from "next/image";
export default function AllSchedulesPage() {
  return (
    <div className="p-4 mt-2 flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold">SCHEDULES</h1>

      {/* 고정 */}
      <div id="bookmarked">
        <section
          id="bookmarked-content"
          className="grid grid-cols-3 gap-4 w-auto"
        >
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
        </section>
      </div>

      {/* 최신순 */}
      <div id="latest">
        <select className="focus:outline-none font-semibold text-lg p-2">
          <option value="latest">최신순</option>
          <option value="oldest">생성순</option>
        </select>
        <section id="latest-content" className="grid grid-cols-3 gap-4 w-auto">
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
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute ml-2 w-5 h-5 z-10 hover:fill-yellow-500 hover:stroke-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            <div id="3" className="bg-scheduleContentBox/50 rounded-xl p-5">
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
              <p className="text-md font-medium text-center mt-2">제목3</p>
            </div>
          </article>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute ml-2 w-5 h-5 z-10 hover:fill-yellow-500 hover:stroke-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            <div id="4" className="bg-scheduleContentBox/50 rounded-xl p-5">
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
              <p className="text-md font-medium text-center mt-2">제목4</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
