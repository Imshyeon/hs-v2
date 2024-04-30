// 특정 아티클 페이지
import { NextPage } from "next";
import DetailPageInfo from "@/components/detail-page/page-info";
import EntireContentList from "@/components/detail-page/content/entire-content-list";
import DetailPageHashtag from "@/components/detail-page/page-hashtag";

interface MyArticlaPageProps {
  params: { aSlug: string };
}

const DUMMY_HASHTAGS = ["Articles", "Articles-1"];
const ArticleDetailPage: NextPage<MyArticlaPageProps> = ({ params }) => {
  const articleTitle = decodeURI(params.aSlug)
    .replaceAll("-", " ")
    .toUpperCase();
  return (
    <div>
      <DetailPageInfo
        title={articleTitle}
        category="article"
        date="2023-4-30"
        key={articleTitle}
      />
      <section id="schedule-content" className="p-10 mt-5 ml-4">
        <EntireContentList />
      </section>
      <DetailPageHashtag hashtags={DUMMY_HASHTAGS} />
    </div>
  );
};

export default ArticleDetailPage;
