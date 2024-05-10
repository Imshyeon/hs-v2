"use client";
import CardList from "@/components/ui/card-list";
import { Select, SelectItem } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import { useState, useEffect } from "react";
import { Schedule } from "@/util/interfaces";

export default function AllSchedulesComponent() {
  const [order, setOrder] = useState("oldest");
  const [sortedSchedules, setSortedSchedules] = useState<Schedule[]>([]);

  const { schedule } = useSelector((state: RootState) => state.schedule);
  const markedSchedules = schedule.filter((schedule) => schedule.isMarked);

  useEffect(() => {
    const sorted = [...schedule].sort((a, b) => {
      const dateA = new Date(a.created_date);
      const dateB = new Date(b.created_date);
      if (order === "oldest") {
        return dateA.valueOf() - dateB.valueOf();
      } else {
        return dateB.valueOf() - dateA.valueOf();
      }
    });
    setSortedSchedules(sorted);
  }, [schedule, order]);

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
          <Select
            className="focus:outline-none font-semibold text-lg p-2 w-1/6"
            label="정렬"
            defaultSelectedKeys={[order]}
            variant="underlined"
          >
            <SelectItem key="latest" onClick={() => setOrder("latest")}>
              최신순
            </SelectItem>
            <SelectItem key="oldest" onClick={() => setOrder("oldest")}>
              생성순
            </SelectItem>
          </Select>
          <CardList
            showBookMark={true}
            schedules={sortedSchedules}
            order={order}
          />
        </div>
      )}
    </div>
  );
}
