// 특정 아티클 페이지
// Next.js SSR - getArticleDatas
"use client";
import { NextPage } from "next";
import DetailPageInfo from "@/components/detail-page/page-info";
import EntireContentList from "@/components/detail-page/content/entire-content-list";
import DetailPageHashtag from "@/components/detail-page/page-hashtag";
import { useDisclosure } from "@nextui-org/react";
import ModalComponent from "@/components/modal/modal";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { alertActions } from "@/store/alert";
import DetailPageLoading from "@/components/detail-page/loading/detail-loading";
import { useEffect } from "react";

interface MyArticlaPageProps {
  params: { aSlug: string };
}
const ArticleDetailPage: NextPage<MyArticlaPageProps> = ({ params }) => {
  const slug = decodeURIComponent(params.aSlug);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["articles", slug],
    queryFn: () => getArticleDatas(slug),
  });

  useEffect(() => {
    if (isPending) {
      dispatch(
        alertActions.setAlertState({
          status: "pending",
          message: `${slug}를 불러오는 중입니다.`,
        })
      );
    }

    if (data) {
      dispatch(
        alertActions.setAlertState({
          status: "success",
          message: `${slug}를 불러오는데 성공했습니다.`,
        })
      );
    }

    if (isError) {
      dispatch(
        alertActions.setAlertState({
          status: "failure",
          message: `${slug}를 불러오는데 실패했습니다. ${error.message}`,
        })
      );
    }
  }, [data, isError, error, isPending, dispatch, slug]);

  if (isPending) {
    return <DetailPageLoading />;
  }

  function handleDeleteClick() {
    onOpen();
  }

  return (
    <div>
      {isOpen && (
        <ModalComponent
          title={data.title}
          isOpen={isOpen}
          onClose={onClose}
          onContinue={async () => {
            const response = await fetch(
              `http://localhost:3000/api/articles/${slug}`,
              {
                method: "DELETE",
              }
            );
            console.log("response=>", response);
            router.push("/articles");
          }}
        />
      )}
      <DetailPageInfo
        title={data.title}
        category={data.category}
        date={data.date}
        key={data._id}
        onDeleteClick={handleDeleteClick}
        onRePostClick={() => router.push(`/new/article/${slug}`)}
        onShareClick={() => console.log("share")}
      />
      <section id="schedule-content" className="p-10 mt-5 ml-4">
        <EntireContentList
          contents={data.contents}
          date={data.date}
          article={true}
        />
      </section>
      <DetailPageHashtag hashtag={data.hashtags} />
    </div>
  );
};

export default ArticleDetailPage;

export async function getArticleDatas(slug: string) {
  try {
    const response = await fetch(`/api/articles/${slug}`);
    const articleData = await response.json();
    return articleData;
  } catch (err: any) {
    throw Error(err);
  }
}
