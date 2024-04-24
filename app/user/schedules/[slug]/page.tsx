// 유저의 특정 스케줄 페이지
import { NextPage } from "next";

interface MyPageProps {
  params: { slug: string };
}

const ScheduleDetailPage: NextPage<MyPageProps> = ({ params }) => {
  console.log(params.slug);
  // slug를 활용한 컴포넌트 내용
  return (
    <div>
      <h1>Slug: {params.slug}</h1>
    </div>
  );
};

export default ScheduleDetailPage;
