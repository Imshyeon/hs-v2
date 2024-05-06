// 유저의 특정 스케줄 페이지
// Next.js SSR - getScheduleDatas
import DetailPageInfo from "@/components/detail-page/page-info";
import { NextPage } from "next";
import EntireContentList from "@/components/detail-page/content/entire-content-list";
import DetailPageHashtag from "@/components/detail-page/page-hashtag";
import { Schedule } from "@/util/interfaces";

interface MyPageProps {
  params: { slug: string };
}

export async function getDetailSchedule(slug: string) {
  try {
    // 영어로 된 slug는 되지만 한글이 되지 않는 문제 발생
    const response = await fetch(`http://localhost:3000/api/schedules/${slug}`);
    console.log(response);
    if (!response.ok) {
      throw Error(
        "해당 스케줄 데이터를 가져오는데 실패했습니다. 다시 시도해주세요."
      );
    }
    const scheduleData: Schedule[] = await response.json();
    return scheduleData[0];
  } catch (err: any) {
    throw Error(err);
  }
}

const ScheduleDetailPage: NextPage<MyPageProps> = async ({ params }) => {
  console.log("params.slug=>", decodeURIComponent(params.slug));
  const scheduleData = await getDetailSchedule(decodeURIComponent(params.slug));

  const startDate = `${scheduleData.date.start.year}-${scheduleData.date.start.month}-${scheduleData.date.start.day}`;
  const endDate = `${scheduleData.date.end.year}-${scheduleData.date.end.month}-${scheduleData.date.end.day}`;
  console.log(scheduleData.date, scheduleData);

  return (
    <div>
      <DetailPageInfo
        title={scheduleData.title.toUpperCase()}
        category={scheduleData.category}
        date={`${startDate} ~ ${endDate}`}
        key={scheduleData._id}
        place={scheduleData.place}
      />
      <section id="schedule-content" className="p-10 mt-5 ml-4">
        <EntireContentList
          contents={scheduleData.contents}
          date={[startDate, endDate]}
        />
      </section>
      <DetailPageHashtag hashtag={scheduleData.hashtags} />
    </div>
  );
};

export default ScheduleDetailPage;
