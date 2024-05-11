// 전체 아티클 페이지
// Next.js SSR - getAllArticles
"use client";
import CardList from "@/components/ui/card-list";
import Pagination from "@/components/ui/pagination";
import { RootState } from "@/store";
import { articlesActions } from "@/store/articles";
import { Articles } from "@/util/interfaces";
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AllArticles() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: RootState) => state.article);
  useEffect(() => {
    const fetchArticles = async () => {
      const articles: Articles = await getAllArticles();
      console.log(articles);
      dispatch(articlesActions.setAllArticles(articles));
      return articles;
    };
    fetchArticles();
  }, []);

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
        <CardList showBookMark={false} articles={articles} />
      </div>
      {/* 페이지 네이션 */}
      <Pagination />
    </div>
  );
}

export async function getAllArticles() {
  const response = await fetch("/api/articles");
  const articles = await response.json();
  return articles;
}
