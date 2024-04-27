// 특정 아티클 페이지
import { NextPage } from "next";
import Image from "next/image";

interface MyArticlaPageProps {
  params: { aSlug: string };
}
const ArticleDetailPage: NextPage<MyArticlaPageProps> = ({ params }) => {
  const scheduleTitle = decodeURI(params.aSlug)
    .replaceAll("-", " ")
    .toUpperCase();
  return (
    <div>
      <section id="schedule-info" className="p-6">
        <div id="schedule-title-and-actions" className="flex justify-between">
          <h1 className="font-extrabold text-3xl">{scheduleTitle}</h1>
          <div id="schedule-action" className="flex gap-3 mr-5 text-slate-600">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer"
              >
                <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer"
              >
                <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-3 flex gap-4">
          <div
            id="category"
            className="bg-scheduleInfo px-2 py-1 rounded-xl w-fit"
          >
            category
          </div>
          <div id="date" className="bg-scheduleInfo px-2 py-1 rounded-xl w-fit">
            24.04.25
          </div>
        </div>
      </section>
      <section id="schedule-content" className="p-10 mt-5 ml-4">
        <div id="day1" className="border-b-2 pb-8 mb-10">
          <div id="day1-info">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl">1일차 : 🇬🇧 도착!</h1>
              <div className="flex justify-end">
                <span className="font-light p-2 text-slate-500 flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  장소
                </span>
                {/* 참고 링크 -> bootstrap의 popover처럼 모달을 이용해서..! */}
                <span className="font-light p-2 text-slate-500 flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  참고
                </span>
              </div>
            </div>
          </div>
          <div
            id="day1-content"
            className="bg-scheduleContentBox p-7 mt-2 ml-2 mr-3 rounded-2xl"
          >
            <div id="content-1" className="flex gap-5 items-center p-2 mb-1">
              <Image
                src="/pandas.jpeg"
                alt="example-img"
                width={300}
                height={100}
                className="rounded-tl-lg rounded-br-lg"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum reprehenderit doloribus quisquam aspernatur magnam error
                dignissimos id quos aperiam ullam perferendis in optio,
                excepturi architecto officiis itaque ex expedita rem?
              </p>
            </div>
            <div id="content-2" className="flex gap-5 items-center p-2 mb-1">
              <Image
                src="/pandas2.jpeg"
                alt="example-img"
                width={300}
                height={100}
                className="rounded-tl-lg rounded-br-lg"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum reprehenderit doloribus quisquam aspernatur magnam error
                dignissimos id quos aperiam ullam perferendis in optio,
                excepturi architecto officiis itaque ex expedita rem?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="schedule-footer"
        className="flex justify-end right-10 mr-12 gap-4"
      >
        <div
          id="hashtag"
          className="flex justify-end items-center text-slate-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M7.487 2.89a.75.75 0 1 0-1.474-.28l-.455 2.388H3.61a.75.75 0 0 0 0 1.5h1.663l-.571 2.998H2.75a.75.75 0 0 0 0 1.5h1.666l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h2.973l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h1.947a.75.75 0 0 0 0-1.5h-1.661l.57-2.998h1.95a.75.75 0 0 0 0-1.5h-1.664l.402-2.108a.75.75 0 0 0-1.474-.28l-.455 2.388H7.085l.402-2.108ZM6.8 6.498l-.571 2.998h2.973l.57-2.998H6.8Z"
              clipRule="evenodd"
            />
          </svg>
          Articles
        </div>
        <div
          id="hashtag"
          className="flex justify-end items-center text-slate-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M7.487 2.89a.75.75 0 1 0-1.474-.28l-.455 2.388H3.61a.75.75 0 0 0 0 1.5h1.663l-.571 2.998H2.75a.75.75 0 0 0 0 1.5h1.666l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h2.973l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h1.947a.75.75 0 0 0 0-1.5h-1.661l.57-2.998h1.95a.75.75 0 0 0 0-1.5h-1.664l.402-2.108a.75.75 0 0 0-1.474-.28l-.455 2.388H7.085l.402-2.108ZM6.8 6.498l-.571 2.998h2.973l.57-2.998H6.8Z"
              clipRule="evenodd"
            />
          </svg>
          Article-1
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;
