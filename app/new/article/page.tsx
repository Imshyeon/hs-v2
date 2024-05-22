"use client";

// 참고 : https://codesandbox.io/p/sandbox/formik-fieldarray-materialui-f7rkz?file=%2Fsrc%2Fform.js%3A79%2C28

import { ChangeEvent, useEffect, useState } from "react";
import slugify from "slugify";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { alertActions } from "@/store/alert";
import { NewArticles } from "@/util/interfaces";
import NewArticleForm from "@/components/formik/article/newArticle";

type ImageState = {
  [folderName: string]: string[];
};

export default function NewArticlePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState<ImageState>({});

  useEffect(() => {
    if (session?.user.role !== "admin") {
      dispatch(
        alertActions.setAlertState({
          status: "failure",
          message: "Article은 관리자만 작성할 수 있습니다.",
        })
      );
      router.replace("/");
      return;
    }
  }, [session, dispatch, router]);

  async function handleFileUpload(
    event: ChangeEvent<HTMLInputElement>,
    upperFolderName: string,
    folderName: string
  ) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", upperFolderName);
      formData.append("folder2", folderName);

      try {
        const response = await fetch("/api/new/articles", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          console.log({ message: "이미지 업로드 실패" });
        }

        setImageURL((prevImages: ImageState) => {
          if (!prevImages[folderName]) {
            prevImages[folderName] = [];
          }

          return {
            ...prevImages,
            [folderName]: [
              ...prevImages[folderName],
              `https://zoekangdev-project-holiday-schedules-v2.s3.ap-northeast-2.amazonaws.com/articles/${upperFolderName}/${folderName}/${fileName}`,
            ],
          };
        });
      } catch (err: any) {
        throw Error(err);
      }
    }
  }

  async function postArticleHandler(values: NewArticles) {
    console.log(values);
    const slug = slugify(values.title, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      locale: "ko",
      trim: true,
    });

    values.contents.map((content, index) => {
      content.content.map((c, idx) => {
        console.log("image=>", c);
        c.image = imageURL[content.content_title][index][idx];
      });
    });

    try {
      const response = (await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, slug: slug }),
      })) as RequestInit;
      console.log(response);
      router.push(`/articles/${slug}`);
    } catch (err: any) {
      console.log(err);
      throw Error("새로운 스케줄을 생성하는데 실패했습니다.", err);
    }
  }

  return (
    <NewArticleForm
      postArticleHandler={postArticleHandler}
      handleFileUpload={handleFileUpload}
    />
  );
}
