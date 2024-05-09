// 전체 아티클 페이지
// Next.js SSR - getAllArticles
"use client";
import CardList from "@/components/ui/card-list";
import Pagination from "@/components/ui/pagination";
import { Select, SelectItem } from "@nextui-org/react";

export default function AllArticles() {
  return (
    <div className="p-4 mt-2 flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold">ARTICLES</h1>
      <div id="articles">
        <Select
          className="focus:outline-none font-semibold text-lg p-2 w-1/6"
          label="정렬"
          defaultSelectedKeys={["oldest"]}
          variant="underlined"
        >
          <SelectItem key="latest">최신순</SelectItem>
          <SelectItem key="oldest">생성순</SelectItem>
        </Select>
        <CardList showBookMark={false} articles={[]} />
      </div>
      {/* 페이지 네이션 */}
      <Pagination />
    </div>
  );
}
