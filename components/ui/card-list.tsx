"use client";
import CardItem from "./card-item";
import { Articles, Schedule } from "@/util/interfaces";
import { useDispatch } from "react-redux";
import { scheduleActions } from "@/store/schedules";

interface BookMarkProps {
  isMarked: boolean;
  slug: string;
}

interface CardListProps {
  showBookMark: boolean;
  isMarked?: boolean;
  schedules?: Schedule[];
  articles?: Articles[];
  order?: string;
}

function BookMark({ isMarked, slug }: BookMarkProps) {
  const dispatch = useDispatch();
  function clickBookMarkIcon() {
    dispatch(scheduleActions.addMarkedSchedule(slug));
  }

  return isMarked ? (
    <svg
      onClick={clickBookMarkIcon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="absolute ml-2 w-5 h-5 z-10 fill-yellow-500 hover:fill-none hover:stroke-[1.3px] hover:stroke-black cursor-pointer"
    >
      <path
        fillRule="evenodd"
        d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      onClick={clickBookMarkIcon}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="absolute ml-2 w-5 h-5 z-10 hover:fill-yellow-500 hover:stroke-none cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
  );
}

export default function CardList({
  showBookMark,
  schedules = [],
  articles = [],
}: CardListProps) {
  return (
    <div className="grid grid-cols-3 gap-4 w-auto p-5 h-full">
      {schedules.length > 0 &&
        schedules.map((schedule) => {
          return (
            <article key={schedule._id}>
              {showBookMark ? (
                <BookMark isMarked={schedule.isMarked} slug={schedule.slug} />
              ) : null}
              <CardItem
                id={schedule._id}
                title={schedule.title}
                category={schedule.category}
                date={schedule.created_date}
                image={
                  schedule.contents[0].content[0].image || "/defaultImg.jpg"
                }
              />
            </article>
          );
        })}
      {articles.length > 0 &&
        articles.map((article) => {
          return (
            <article key={article._id}>
              <CardItem
                id={article._id!}
                title={article.title}
                category={article.category}
                date={article.date}
                image={article.contents[0].content[0].image || "/pandas2.jpeg"}
                article={true}
              />
            </article>
          );
        })}
    </div>
  );
}
