export default function DetailPageHashtag({ hashtag }: { hashtag: string }) {
  return (
    <section
      id="schedule-footer"
      className="flex justify-end right-10 mr-12 gap-4"
    >
      <div
        id="hashtag"
        className="flex justify-end items-center text-slate-400"
        key={hashtag}
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
        {hashtag}
      </div>
    </section>
  );
}
