"use client";
import { RootState } from "@/store";
import { Field, Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { UserProfileInfos } from "@/util/interfaces";
import { ChangeEvent, useRef } from "react";
import { profileActions } from "@/store/user";

export default function UserProfileComponent() {
  const userImageRef = useRef<HTMLInputElement>(null);
  const { image, name, email } = useSelector(
    (state: RootState) => state.profile
  );
  console.log(image, name, email);
  const dispatch = useDispatch();

  const initialValues: UserProfileInfos = {
    image: image || "",
    name: name || "홍길동",
    email: email || "test@gmail.com",
    password: "",
    password_confirm: "",
  };
  console.log(initialValues);

  function clickUserImageHandler() {
    if (userImageRef.current) {
      userImageRef.current.click();
    }
  }

  async function changeImageHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileName = file.name;
      const formData = new FormData();
      formData.append("user-profile", file);

      const response = await fetch(
        "http://localhost:3000/api/user/profile-image",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw Error("이미지 업로드 실패");
      }
      const imageURL = `https://zoekangdev-project-holiday-schedules-v2.s3.ap-northeast-2.amazonaws.com/user/${fileName}`;
      dispatch(profileActions.updateUserImage(imageURL));
    }
  }

  async function changeUserInfoHandler(values: UserProfileInfos) {
    values.image = image;
    dispatch(profileActions.updateUserInfos({ ...values }));
    const response = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      throw Error("유저 데이터를 입력하는데 실패했습니다.");
    }
    const resData = await response.json();
    console.log("resData=>", resData);
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={(values) => changeUserInfoHandler(values)}
    >
      {({ values, touched, errors }) => (
        <Form className="flex gap-5 max-xl:flex-col max-xl:items-center">
          <div id="profile-img-setting-xl" className="p-5 relative w-fit ">
            <div className="relative group w-fit h-fit mb-2 hover:cursor-pointer">
              <Image
                onClick={clickUserImageHandler}
                src={image || "/pandas2.jpeg"}
                alt="user-profile-img"
                width={400}
                height={400}
                className="z-10 rounded-xl group-hover:blur-sm max-xl:w-80 max-xl:h-auto"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="absolute w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>
            <input
              type="file"
              name="image"
              id="profile-img"
              accept="image/*"
              ref={userImageRef}
              onChange={changeImageHandler}
              hidden
            />
          </div>
          <div
            id="profile-user-settings"
            className="flex flex-col gap-7 p-4 w-full mr-5"
          >
            <div className="flex gap-3 items-center">
              <Field
                type="text"
                name="name"
                id="user-name"
                className="border rounded-md p-2 focus:outline-none w-full"
                placeholder="이름"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex gap-3 items-center">
              <Field
                type="email"
                id="email"
                name="email"
                className="border rounded-md p-2 focus:outline-none w-full"
                placeholder="user@example.com"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex gap-3 justify-between w-full">
              <div className="flex gap-3 items-center w-full">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="border rounded-md p-2 focus:outline-none w-1/2"
                  placeholder="비밀번호 변경하기"
                />
                <Field
                  type="password"
                  id="password-confirm"
                  name="password_confirm"
                  className="border rounded-md p-2 focus:outline-none w-1/2"
                  placeholder="변경된 비밀번호"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="p-2 w-20 bg-userProfileSaveBtn/60 rounded-xl hover:bg-userProfileSaveBtn/90"
              >
                저장
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
