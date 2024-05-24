import DetailPageContent from "./page-content";

const DUMMY_CONTENT =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus magnam fugiat ab dolorum eligendi eum est nemo, recusandae sint deleniti eos cumque temporibus deserunt fuga corporis distinctio repudiandae laudantium culpa!";
const DUMMY_REFERENCE = ["https://naver.com", "https://google.com"];

interface DetailPageContentListProps {
  id: string;
  content: [{ _id: string; detail: string; image: string; reference: string }];
}

export default function DetailPageContentList({
  id,
  content,
}: DetailPageContentListProps) {
  return (
    <div
      id={id}
      className="bg-scheduleContentBox p-7 mt-2 ml-2 mr-3 rounded-2xl dark:bg-scheduleContentBox-dark"
    >
      {content.length > 0 &&
        content.map((content) => (
          <DetailPageContent
            key={content._id}
            id={content._id}
            image={content.image}
            content={content.detail}
            reference={content.reference}
          />
        ))}
    </div>
  );
}
