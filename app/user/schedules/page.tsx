// 유저의 전체 스케줄 페이지
import CardList from "@/components/ui/card-list";
export default function AllSchedulesPage() {
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
