// 특정 아티클 페이지
// Next.js SSR - getArticleDatas
"use client";
import { NextPage } from "next";
import DetailPageInfo from "@/components/detail-page/page-info";
import EntireContentList from "@/components/detail-page/content/entire-content-list";
import DetailPageHashtag from "@/components/detail-page/page-hashtag";
import { useEffect, useState } from "react";
import { Articles } from "@/util/interfaces";
import { useDisclosure } from "@nextui-org/react";
import ModalComponent from "@/components/modal/modal";
import { useRouter } from "next/navigation";

interface MyArticlaPageProps {
  params: { aSlug: string };
}

const DUMMY_HASHTAGS = ["Articles", "Articles-1"];
const ArticleDetailPage: NextPage<MyArticlaPageProps> = ({ params }) => {
  const slug = decodeURIComponent(params.aSlug);
  const [articleDatas, setArticleDatas] = useState<Articles | null>(null);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticleDatas(slug);
      setArticleDatas(articles);
    };
    fetchArticles();
  }, []);

  if (!articleDatas) {
    return <div>Loading...</div>;
  }

  function handleDeleteClick() {
    onOpen();
  }

  console.log(articleDatas);

  return (
    <div>
      {isOpen && (
        <ModalComponent
          title={articleDatas.title}
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
        title={articleDatas.title}
        category={articleDatas.category}
        date={articleDatas.date}
        key={articleDatas._id}
        onDeleteClick={handleDeleteClick}
        onRePostClick={() => router.push(`/new/article/${slug}`)}
        onShareClick={() => console.log("share")}
      />
      <section id="schedule-content" className="p-10 mt-5 ml-4">
        <EntireContentList
          contents={articleDatas.contents}
          date={articleDatas.date}
          article={true}
        />
      </section>
      <DetailPageHashtag hashtag={articleDatas.hashtags} />
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
