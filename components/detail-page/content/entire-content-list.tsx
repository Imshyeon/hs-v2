import { ArticleContents, ScheduleContent } from "@/util/interfaces";
import ContentInfo from "./content-info";
import DetailPageContentList from "./page-content-list";

interface EntireContentListProps {
  contents: ScheduleContent[] | ArticleContents[];
  date: string[] | string;
  article?: boolean;
}

export default function EntireContentList({
  contents,
  date,
  article,
}: EntireContentListProps) {
  return (
    <>
      {contents.map((content, idx) => (
        <div key={content._id} className="border-b-2 pb-8 mb-10">
          <ContentInfo
            title={content.content_title}
            place={content.content_place ? content.content_place : undefined}
            date={article ? undefined : date[idx]}
          />
          <DetailPageContentList id={content._id} content={content.content} />
        </div>
      ))}
    </>
  );
}
