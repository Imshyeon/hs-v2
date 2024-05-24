"use client";
import DetailPageInfo from "@/components/detail-page/page-info";
import { NextPage } from "next";
import EntireContentList from "@/components/detail-page/content/entire-content-list";
import DetailPageHashtag from "@/components/detail-page/page-hashtag";
import { Schedule } from "@/util/interfaces";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import ModalComponent from "@/components/modal/modal";
import DetailPageLoading from "@/components/detail-page/loading/detail-loading";
import { useDispatch } from "react-redux";
import { alertActions } from "@/store/alert";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface MyPageProps {
  params: { slug: string };
}

export async function getDetailSchedule(slug: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/schedules/${slug}`);
    if (!response.ok) {
      throw Error(
        "해당 스케줄 데이터를 가져오는데 실패했습니다. 다시 시도해주세요."
      );
    }
    const scheduleData: Schedule = await response.json();
    return scheduleData;
  } catch (err: any) {
    throw Error(err);
  }
}

const ScheduleDetailPage: NextPage<MyPageProps> = ({ params }) => {
  const router = useRouter();
  const scheduleSlug = decodeURIComponent(params.slug);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["schedules", scheduleSlug],
    queryFn: () => getDetailSchedule(scheduleSlug),
  });

  useEffect(() => {
    if (isPending) {
      dispatch(
        alertActions.setAlertState({
          status: "pending",
          message: `${scheduleSlug}를 불러오는 중입니다.`,
        })
      );
    }

    if (data) {
      dispatch(
        alertActions.setAlertState({
          status: "success",
          message: `${scheduleSlug}를 불러오는데 성공했습니다.`,
        })
      );
    }

    if (isError) {
      dispatch(
        alertActions.setAlertState({
          status: "failure",
          message: `${scheduleSlug}를 불러오는데 실패했습니다. ${error.message}`,
        })
      );
    }
  }, [data, isError, error, isPending, dispatch, scheduleSlug]);

  if (isPending) {
    return <DetailPageLoading />;
  }

  const startDate = `${data?.date.start.year}-${data?.date.start.month}-${data?.date.start.day}`;
  const endDate = `${data?.date.end.year}-${data?.date.end.month}-${data?.date.end.day}`;

  async function handleRePostClick() {
    router.push(`/new/schedule/${scheduleSlug}`); // 해당 url로 리다이렉션 -> 데이터를 불러와서 수정할수 있도록...
  }
  function handleDeleteClick() {
    onOpen();
  }
  function handleShareClick() {
    console.log(`share http://localhost:3000${pathname}`);
  }

  return (
    <div>
      {isOpen && (
        <ModalComponent
          title={data!.title}
          isOpen={isOpen}
          onClose={onClose}
          onContinue={() => {
            fetch(`http://localhost:3000/api/schedules/${scheduleSlug}`, {
              method: "DELETE",
            }).then((response) => {
              if (!response.ok) {
                dispatch(
                  alertActions.setAlertState({
                    status: "failure",
                    message: `${data!.title}을 삭제하는데 실패했습니다.`,
                  })
                );
              }
              dispatch(
                alertActions.setAlertState({
                  status: "success",
                  message: `${data!.title}을 삭제했습니다.`,
                })
              );
            });

            router.push("/user/schedules");
            return;
          }}
        />
      )}
      <DetailPageInfo
        title={data!.title.toUpperCase()}
        category={data!.category}
        date={`${startDate} ~ ${endDate}`}
        key={data!._id}
        place={data!.place}
        pathname={pathname}
        onRePostClick={handleRePostClick}
        onDeleteClick={handleDeleteClick}
        onShareClick={handleShareClick}
      />
      <section id="schedule-content" className="p-10 mt-5 ml-4">
        <EntireContentList
          contents={data!.contents}
          date={[startDate, endDate]}
        />
      </section>
      <DetailPageHashtag hashtag={data!.hashtags} />
    </div>
  );
};

export default ScheduleDetailPage;
