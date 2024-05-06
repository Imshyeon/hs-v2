import { ScheduleContent } from "@/util/interfaces";
import ContentInfo from "./content-info";
import DetailPageContentList from "./page-content-list";

interface EntireContentListProps {
  contents: ScheduleContent[];
  date: string[];
}

export default function EntireContentList({
  contents,
  date,
}: EntireContentListProps) {
  return (
    <>
      {contents.map((content, idx) => (
        <div key={content._id} className="border-b-2 pb-8 mb-10">
          <ContentInfo
            title={content.content_title}
            place={content.content_place}
            date={date[idx]}
          />
          <DetailPageContentList id={content._id} content={content.content} />
        </div>
      ))}
    </>
  );
}
