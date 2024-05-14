// 전체 아티클 페이지
// Next.js SSR - getAllArticles
"use client";
import ArticleLoading from "@/components/detail-page/loading/article-list-loading";
import CardList from "@/components/ui/card-list";
import Pagination from "@/components/ui/pagination";
import { RootState } from "@/store";
import { alertActions } from "@/store/alert";
import { articlesActions } from "@/store/articles";
import { Select, SelectItem } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AllArticles() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: RootState) => state.article);

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
  });

  useEffect(() => {
    if (isPending) {
      dispatch(
        alertActions.setAlertState({
          status: "pending",
          message: "모든 Articles를 불러오는 중입니다.",
        })
      );
    }

    if (data) {
      dispatch(articlesActions.setAllArticles(data));
      dispatch(
        alertActions.setAlertState({
          status: "success",
          message: "모든 Articles를 불러오는데 성공했습니다.",
        })
      );
    }

    if (isError) {
      dispatch(
        alertActions.setAlertState({
          status: "failure",
          message: error.message,
        })
      );
    }
  }, [data, isError, error, isPending, dispatch]);

  if (isPending) {
    return <ArticleLoading />;
  }

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
          <SelectItem key="oldest">생성순</SelectItem>
          <SelectItem key="latest">최신순</SelectItem>
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
