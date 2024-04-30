import CardItem from "./card-item";

interface BookMarkProps {
  isMarked: boolean;
}

interface CardListProps {
  showBookMark: boolean;
  isMarked?: boolean;
}

function BookMark({ isMarked }: BookMarkProps) {
  return isMarked ? (
    <svg
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
  isMarked = false,
}: CardListProps) {
  return (
    //   차후 items를 받아와 map함수를 이용할 필요가 있다.
    <div className="grid grid-cols-3 gap-4 w-auto p-5">
      <article>
        {showBookMark ? <BookMark isMarked={true} /> : null}
        <CardItem
          id={"s1"}
          title={"제목1"}
          category={"유럽/프랑스"}
          date={"2024-04-30"}
          image={"/pandas.jpeg"}
        />
      </article>
      <article>
        {showBookMark ? <BookMark isMarked={isMarked} /> : null}
        <CardItem
          id={"s2"}
          title={"제목2"}
          category={"유럽/영국"}
          date={"2024-04-30"}
          image={"/pandas2.jpeg"}
        />
      </article>
    </div>
  );
}
