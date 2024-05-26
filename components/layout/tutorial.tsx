import Image from "next/image";
import tutorial1 from "@/public/tutorial/tutorial-new-schedule-link.gif";
import tutorial2_delete from "@/public/tutorial/tutorial-new-schedule-delete.gif";
import tutorial3_bookmark from "@/public/tutorial/tutorial-bookmark.gif";
import tutorial4_schedule_delete from "@/public/tutorial/tutorial-schedule-delete.gif";

export default function TutorialComponent() {
  return (
    <section id="schedule-info" className="p-6">
      <h1 className="font-extrabold text-3xl 2xl:text-5xl">TUTORIAL</h1>
      <div className="mt-4 ">
        <div className="p-5 border-b-2 flex flex-col gap-10">
          <div className="flex flex-row-reverse justify-around items-center gap-5 text-pretty">
            <Image
              src="/tutorial/tutorial-new-schedule.png"
              alt="새로운 스케줄 만들기"
              width={600}
              height={400}
              className="border rounded-2xl w-1/2 h-auto"
            />
            <div className="text-center p-2 flex flex-col gap-3">
              <h2 className="font-bold text-2xl max-xl:text-xl 2xl:text-3xl">
                새로운 스케줄 만들기
              </h2>
              <div className="px-3 max-md:text-lg max-xl:text-sm 2xl:text-lg flex flex-col gap-1">
                <p className="max-lg:hidden">
                  <Image
                    src="/tutorial/tutorial-btn.png"
                    alt="action-btn"
                    width={40}
                    height={40}
                    className="inline"
                  />
                  를 누르면 새로운 스케줄 작성과 작성된 모든 스케줄을 볼 수
                  있으며
                  <br />
                  관리자가 작성한 Articles를 볼 수 있습니다!
                </p>
                <p>
                  새로운 스케줄 작성하면 다음과 같은 폼으로 여행 스케줄을 작성할
                  수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around gap-5 text-pretty">
            <Image
              src={tutorial1}
              width={600}
              height={400}
              alt="다른 페이지 링크 포함하기"
              className="border rounded-2xl w-1/2 h-auto"
            />
            <div className="text-center p-2 flex flex-col gap-3">
              <h2 className="font-bold text-2xl max-xl:text-xl 2xl:text-3xl">
                🔗 다른 페이지 링크 포함하기
              </h2>
              <div className="px-3 max-md:text-lg max-xl:text-sm 2xl:text-lg flex flex-col gap-1">
                <p>
                  각 스케줄마다 링크를 다른 페이지의 링크를 포함할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-around gap-5 text-pretty">
            <Image
              src={tutorial2_delete}
              width={600}
              height={400}
              alt="스케줄 추가/취소하기"
              className="border rounded-2xl w-1/2 h-auto"
            />
            <div className="text-center p-2 flex flex-col gap-3">
              <h2 className="font-bold text-2xl max-xl:text-xl 2xl:text-3xl">
                스케줄 추가/취소하기
              </h2>
              <div className="px-3 max-md:text-lg max-xl:text-sm 2xl:text-lg flex flex-col gap-1">
                <p>
                  버튼을 통해 더 많은 스케줄을 추가 혹은 삭제할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-5 flex items-center justify-around gap-5 text-pretty">
            <Image
              src={tutorial3_bookmark}
              width={600}
              height={400}
              alt="스케줄 북마크"
              className="border rounded-2xl w-1/2 h-auto"
            />
            <div className="text-center p-2 flex flex-col gap-3">
              <h2 className="font-bold text-2xl max-xl:text-xl 2xl:text-3xl">
                📌 북마크 기능
              </h2>
              <div className="px-3 max-md:text-lg max-xl:text-sm 2xl:text-lg flex flex-col gap-1">
                <p>
                  북마크 기능을 이용하여 스케줄을 고정할 수 있고, 고정된
                  스케줄들은 사이드바에 표현이 됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-row-reverse items-center justify-around gap-5 text-pretty">
            <Image
              src={tutorial4_schedule_delete}
              width={600}
              height={400}
              alt="스케줄 삭제하기"
              className="border rounded-2xl w-1/2 h-auto"
            />
            <div className="text-center p-2 flex flex-col gap-3">
              <h2 className="font-bold text-2xl max-xl:text-xl 2xl:text-3xl">
                🗑️ 생성한 스케줄 삭제/편집
              </h2>
              <div className="px-3 max-md:text-lg max-xl:text-sm 2xl:text-lg flex flex-col gap-1">
                <p>자신이 작성한 스케줄을 삭제 및 수정할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
