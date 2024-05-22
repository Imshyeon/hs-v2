"use client";

// 참고 : https://codesandbox.io/p/sandbox/formik-fieldarray-materialui-f7rkz?file=%2Fsrc%2Fform.js%3A79%2C28

import slugify from "slugify";
import { useRouter } from "next/navigation";
import { NewSchedule } from "@/util/interfaces";
import { useState, ChangeEvent, useEffect } from "react";
import NewScheduleForm from "@/components/formik/schedule/newSchedule";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { alertActions } from "@/store/alert";

export default function NewSchedulePage() {
  const router = useRouter();
  const [imageURL, setImageURL] = useState<string[]>([]);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      dispatch(
        alertActions.setAlertState({
          status: "failure",
          message: "로그인을 해야 스케줄을 작성할 수 있습니다.",
        })
      );
      router.replace("/");
      return;
    }
  }, [session, dispatch, router]);

  async function handleFileUpload(
    event: ChangeEvent<HTMLInputElement>,
    folderName: string
  ) {
    event.preventDefault();
    if (event.target.files) {
      const file = event.target.files[0];

      const fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(
          "http://localhost:3000/api/new/schedules",
          {
            method: "POST",
            body: formData,
          }
        );
        if (!response.ok) {
          console.log({ message: "이미지 업로드 실패" });
        }

        setImageURL((prevImages) => {
          return [
            `https://zoekangdev-project-holiday-schedules-v2.s3.ap-northeast-2.amazonaws.com/${fileName}`,
            ...prevImages,
          ];
        });
      } catch (err) {
        console.log({ message: "이미지 업로드 실패" });
      }
    }
  }

  async function handleSubmit(values: NewSchedule) {
    console.log(values);
    const slug = slugify(values.title, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      locale: "ko",
      trim: true,
    });

    values.contents.map((content, index) => {
      content.content.map((c) => {
        c.image = imageURL[index];
      });
    });

    try {
      const response = (await fetch("/api/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, slug: slug }),
      })) as RequestInit;
      console.log(response);
      router.push(`/user/schedules/${slug}`);
    } catch (err: any) {
      console.log(err);
      throw Error("새로운 스케줄을 생성하는데 실패했습니다.", err);
    }
  }

  return (
    <NewScheduleForm
      handleFileUpload={handleFileUpload}
      handleSubmit={handleSubmit}
    />
  );
}
