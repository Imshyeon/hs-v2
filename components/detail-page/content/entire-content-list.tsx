import ContentInfo from "./content-info";
import DetailPageContentList from "./page-content-list";

interface EntireContentListProps {
  // item: []
  id?: string;
}

export default function EntireContentList({
  id = "day1",
}: EntireContentListProps) {
  return (
    <>
      {/* 차후 items를 받아와 map함수를 이용해 출력*/}
      <div id={id} className="border-b-2 pb-8 mb-10">
        <ContentInfo
          title="1일차 : 🇬🇧 도착!"
          place="영국 공항"
          date="2024-04-30"
        />
        <DetailPageContentList id="day1-content" />
      </div>
      <div id="day2">
        <ContentInfo
          title="2일차 : 셜록홈즈 팝업스토어"
          place="영국 셜록홈즈 팝업스토어"
          date="2024-05-01"
        />
        <DetailPageContentList id="day2-content" />
      </div>
    </>
  );
}
