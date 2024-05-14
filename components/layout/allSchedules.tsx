"use client";
import CardList from "@/components/ui/card-list";
import { Select, SelectItem } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Schedule } from "@/util/interfaces";
import { useQuery } from "@tanstack/react-query";
import { alertActions } from "@/store/alert";
import { scheduleActions } from "@/store/schedules";

export default function AllSchedulesComponent() {
  const [order, setOrder] = useState("oldest");
  const [sortedSchedules, setSortedSchedules] = useState<Schedule[]>([]);
  const dispatch = useDispatch();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["schedules"],
    queryFn: getAllSchedulesData,
  });

  useEffect(() => {
    if (isPending) {
      dispatch(
        alertActions.setAlertState({
          status: "pending",
          message: "스케줄 데이터를 불러오고 있습니다.",
        })
      );
    }
    if (data) {
      dispatch(
        alertActions.setAlertState({
          status: "success",
          message: "스케줄 데이터를 불러오는데 성공했습니다.",
        })
      );
      dispatch(scheduleActions.setAllSchedules(data));
    }
    if (isError) {
      dispatch(
        alertActions.setAlertState({
          status: "failure",
          message: "스케줄 데이터를 불러오는데 실패했습니다.",
        })
      );
    }
  }, [isError, isPending, error, data, dispatch]);

  const markedSchedules = data?.allSchedules.filter(
    (schedule) => schedule.isMarked
  );

  useEffect(() => {
    if (data) {
      const sorted = [...data.allSchedules].sort((a, b) => {
        const dateA = new Date(a.created_date);
        const dateB = new Date(b.created_date);
        if (order === "oldest") {
          return dateA.valueOf() - dateB.valueOf();
        } else {
          return dateB.valueOf() - dateA.valueOf();
        }
      });
      setSortedSchedules(sorted);
    }
  }, [data, order]);

  return (
    <div className="p-4 mt-2 flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold">SCHEDULES</h1>
      {/* 고정 */}
      {markedSchedules && markedSchedules.length > 0 && (
        <div id="bookmarked" className="border-b-2 border-dotted">
          <h2 className="text-lg font-semibold">북마크</h2>
          <CardList showBookMark={true} schedules={markedSchedules} />
        </div>
      )}

      {/* 최신순 */}
      <div id="latest">
        <Select
          className="focus:outline-none font-semibold text-lg p-2 w-1/6"
          label="정렬"
          defaultSelectedKeys={[order]}
          variant="underlined"
        >
          <SelectItem key="oldest" onClick={() => setOrder("oldest")}>
            생성순
          </SelectItem>
          <SelectItem key="latest" onClick={() => setOrder("latest")}>
            최신순
          </SelectItem>
        </Select>
        {sortedSchedules && (
          <CardList
            showBookMark={true}
            schedules={sortedSchedules}
            order={order}
          />
        )}
      </div>
    </div>
  );
}

export async function getAllSchedulesData() {
  try {
    const response = await fetch("http://localhost:3000/api/schedules");

    if (!response.ok) {
      throw Error("스케줄 불러오는데 실패했습니다.");
    }
    const allSchedules: Schedule[] = await response.json();

    return { allSchedules };
  } catch (err: any) {
    throw Error("스케줄 불러오는데 실패했습니다.", err);
  }
}
