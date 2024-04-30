import DetailPageContent from "./page-content";

const DUMMY_CONTENT =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam fugiat ab dolorum eligendi eum est nemo, recusandae sint deleniti eos cumque temporibus deserunt fuga corporis distinctio repudiandae laudantium culpa!";
const DUMMY_REFERENCE = ["https://naver.com", "https://google.com"];

interface DetailPageContentListProps {
  id: string;
  // items : object[] ?
}

export default function DetailPageContentList({
  id,
}: DetailPageContentListProps) {
  return (
    <div
      id={id}
      className="bg-scheduleContentBox p-7 mt-2 ml-2 mr-3 rounded-2xl"
    >
      {/* items를 리스트로 받아와 map을 이용해 표현. */}
      <DetailPageContent
        id="content-1"
        image="/pandas2.jpeg"
        content={DUMMY_CONTENT}
        reference={DUMMY_REFERENCE}
      />
      <DetailPageContent
        id="content-2"
        image="/pandas.jpeg"
        content={DUMMY_CONTENT}
      />
    </div>
  );
}
