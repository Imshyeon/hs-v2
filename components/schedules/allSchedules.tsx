"use client";
import CardList from "@/components/ui/card-list";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function AllSchedulesComponent() {
  const { schedule } = useSelector((state: RootState) => state.schedule);
  console.log(schedule);
  const markedSchedules = schedule.filter((schedule) => schedule.isMarked);

  return (
    <div className="p-4 mt-2 flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold">SCHEDULES</h1>
      {/* 고정 */}
      {markedSchedules.length > 0 && (
        <div id="bookmarked" className="border-b-2 border-dotted">
          <h2 className="text-lg font-semibold">북마크</h2>
          <CardList showBookMark={true} schedules={markedSchedules} />
        </div>
      )}

      {/* 최신순 */}
      {schedule.length > 0 && (
        <div id="latest">
          <select className="focus:outline-none font-semibold text-lg p-2">
            <option value="latest">최신순</option>
            <option value="oldest">생성순</option>
          </select>
          <CardList showBookMark={true} schedules={schedule} />
        </div>
      )}
    </div>
  );
}
