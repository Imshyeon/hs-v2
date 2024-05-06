"use client";

interface DetailPageInfoProps {
  title: string;
  category: string;
  date: string;
  place?: string;
  onRePostClick: () => void;
  onDeleteClick: () => void;
  onShareClick: () => void;
}
export default function DetailPageInfo({
  title,
  category,
  date,
  place,
  onRePostClick,
  onDeleteClick,
  onShareClick,
}: DetailPageInfoProps) {
  const handleRePostClick = () => {
    onRePostClick(); // 이벤트 핸들러 호출
  };

  const handleDeleteClick = () => {
    onDeleteClick(); // 이벤트 핸들러 호출
  };

  const handleShareClick = () => {
    onShareClick(); // 이벤트 핸들러 호출
  };
  return (
    <section id="schedule-info" className="p-6">
      <div id="schedule-title-and-actions" className="flex justify-between">
        <h1 className="font-extrabold text-3xl">{title}</h1>
        <div id="schedule-action" className="flex gap-3 mr-5 text-slate-600">
          <button id="schedule-re-post" onClick={handleRePostClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 cursor-pointer"
            >
              <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
            </svg>
          </button>
          <button id="schedule-delete" onClick={handleDeleteClick}>
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
          </button>
          <button id="schedule-share" onClick={handleShareClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 cursor-pointer"
            >
              <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-3 flex gap-4">
        <div
          id="category"
          className="bg-scheduleInfo px-2 py-1 rounded-xl w-fit"
        >
          {category}
        </div>
        <div id="date" className="bg-scheduleInfo px-2 py-1 rounded-xl w-fit">
          {date}
        </div>
        {place ? (
          <div
            id="place"
            className="bg-scheduleInfo px-2 py-1 rounded-xl w-fit"
          >
            {place}
          </div>
        ) : null}
      </div>
    </section>
  );
}
