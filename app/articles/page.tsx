// 전체 아티클 페이지
// Next.js SSR - getAllArticles
import CardList from "@/components/ui/card-list";
import Pagination from "@/components/ui/pagination";

export default function AllArticles() {
  return (
    <div className="p-4 mt-2 flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold">ARTICLES</h1>
      <div id="articles">
        <select className="focus:outline-none font-semibold text-lg p-2">
          <option value="latest">최신순</option>
          <option value="oldest">생성순</option>
        </select>
        <CardList showBookMark={false} />
      </div>
      {/* 페이지 네이션 */}
      <Pagination />
    </div>
  );
}
