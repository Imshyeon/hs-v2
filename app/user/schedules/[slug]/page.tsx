// 유저의 특정 스케줄 페이지
import DetailPageInfo from "@/components/detail-page/page-info";
import { NextPage } from "next";
import EntireContentList from "@/components/detail-page/content/entire-content-list";
import DetailPageHashtag from "@/components/detail-page/page-hashtag";

interface MyPageProps {
  params: { slug: string };
}

const DUMMY_HASHTAGS = ["영국", "셜록홈즈"];

const ScheduleDetailPage: NextPage<MyPageProps> = ({ params }) => {
  const scheduleTitle = decodeURI(params.slug)
    .replaceAll("-", " ")
    .toUpperCase();
  return (
    <div>
      <DetailPageInfo
        title={scheduleTitle}
        category="유럽/영국"
        date="2023-4-30"
        key={scheduleTitle}
        place="🇬🇧 영국"
      />
      <section id="schedule-content" className="p-10 mt-5 ml-4">
        <EntireContentList />
      </section>
      <DetailPageHashtag hashtags={DUMMY_HASHTAGS} />
    </div>
  );
};

export default ScheduleDetailPage;
