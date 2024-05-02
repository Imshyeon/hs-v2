// 유저의 전체 스케줄 페이지
// Next.js SSR - getAllSchedules
// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#server-side-rendering-getserversideprops
// https://velog.io/@hwon3814/NextJS-v13-App-Router%EC%9D%98-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8DSSR-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0
import { getAllSchedules } from "@/util/schedules";

import CardList from "@/components/ui/card-list";
export default async function AllSchedulesPage() {
  // const schedules = await getAllSchedulesData();

  // console.log(schedules);
  return (
    <div className="p-4 mt-2 flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold">SCHEDULES</h1>

      {/* 고정 */}
      <div id="bookmarked" className="border-b-2 border-dotted">
        <h2 className="text-lg font-semibold">북마크</h2>
        <CardList showBookMark={true} isMarked={true} />
      </div>

      {/* 최신순 */}
      <div id="latest">
        <select className="focus:outline-none font-semibold text-lg p-2">
          <option value="latest">최신순</option>
          <option value="oldest">생성순</option>
        </select>
        <CardList showBookMark={true} />
      </div>
    </div>
  );
}

// export async function getAllSchedulesData() {
//   const schedules = await getAllSchedules();

//   return schedules;
// }
