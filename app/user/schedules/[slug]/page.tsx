// 유저의 특정 스케줄 페이지
"use client";
import DetailPageInfo from "@/components/detail-page/page-info";
import { NextPage } from "next";
import EntireContentList from "@/components/detail-page/content/entire-content-list";
import DetailPageHashtag from "@/components/detail-page/page-hashtag";
import { Schedule } from "@/util/interfaces";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface MyPageProps {
  params: { slug: string };
}

export async function getDetailSchedule(slug: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/schedules/${slug}`);
    if (!response.ok) {
      throw Error(
        "해당 스케줄 데이터를 가져오는데 실패했습니다. 다시 시도해주세요."
      );
    }
    console.log("slug=>", slug, response);
    const scheduleData: Schedule[] = await response.json();
    return scheduleData[0];
  } catch (err: any) {
    throw Error(err);
  }
}

// export async function deleteDetailSchedule(slug: string) {
//   console.log("slug=>", slug);
//   const response = await fetch(`http://localhost:3000/api/schedules/${slug}`, {
//     method: "DELETE",
//   });
//   return response;
// }

const ScheduleDetailPage: NextPage<MyPageProps> = ({ params }) => {
  const router = useRouter();
  const scheduleSlug = decodeURIComponent(params.slug);

  const [scheduleData, setScheduleData] = useState<Schedule | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetailSchedule(scheduleSlug);
        setScheduleData(data);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      }
    };
    fetchData();
  }, [scheduleSlug]);
  console.log(scheduleData);

  if (!scheduleData) {
    return <div>Loading...</div>;
  }

  const startDate = `${scheduleData.date.start.year}-${scheduleData.date.start.month}-${scheduleData.date.start.day}`;
  const endDate = `${scheduleData.date.end.year}-${scheduleData.date.end.month}-${scheduleData.date.end.day}`;

  function handleRePostClick() {
    console.log(`repost ${scheduleData!.slug}`);
  }
  async function handleDeleteClick() {
    console.log(scheduleSlug);
    const response = await fetch(
      `http://localhost:3000/api/schedules/${scheduleSlug}`,
      {
        method: "DELETE",
      }
    );
    console.log("response=>", response);
    router.push("/user/schedules");
  }
  function handleShareClick() {
    console.log(`share ${scheduleData!.slug}`);
  }

  return (
    <div>
      <DetailPageInfo
        title={scheduleData.title.toUpperCase()}
        category={scheduleData.category}
        date={`${startDate} ~ ${endDate}`}
        key={scheduleData._id}
        place={scheduleData.place}
        onRePostClick={handleRePostClick}
        onDeleteClick={handleDeleteClick}
        onShareClick={handleShareClick}
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
