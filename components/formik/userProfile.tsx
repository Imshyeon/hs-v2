"use client";
import { RootState } from "@/store";
import { Field, Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { UserProfileInfos } from "@/util/interfaces";
import { ChangeEvent, useRef, useState } from "react";
import { profileActions } from "@/store/user";
import { UserValidationSchema } from "@/util/validation";
import SimpleValidationIcon from "../ui/simpleValidationIcon";
import { useRouter } from "next/navigation";
import { EyeSlashFilledIcon } from "../ui/icon/EyeSlashIcon";
import { EyeFilledIcon } from "../ui/icon/EyeFilledIcon";
import { Input } from "@nextui-org/react";

export default function UserProfileComponent(userData: {
  name: string;
  image?: string;
  email: string;
  password?: string;
  password_comfirm: string;
}) {
  const userImageRef = useRef<HTMLInputElement>(null);
  const { image } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isVisiblePW, setIsVisiblePW] = useState(false);
  const [isVisiblePWConfirm, setIsVisiblePWConfirm] = useState(false);

  const initialValues: UserProfileInfos = {
    image: userData.image || "",
    name: userData.name || "홍길동",
    email: userData.email || "example@example.com",
    password: "",
    password_confirm: "",
  };

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
    values.image = image || "";
    dispatch(profileActions.updateUserInfos({ ...values }));
    const response = await fetch("http://localhost:3000/api/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw Error("유저 데이터를 입력하는데 실패했습니다.");
    }
    const resData = await response.json();
    router.refresh();
  }

  return (
    <Formik
      enableReinitialize={true}
      validationSchema={UserValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => changeUserInfoHandler(values)}
    >
      {({ values, touched, errors }) => (
        <Form className="flex gap-5 max-xl:flex-col max-xl:items-center">
          <div id="profile-img-setting-xl" className="p-5 relative w-fit ">
            <div className="relative group w-fit h-fit mb-2 hover:cursor-pointer">
              <Image
                onClick={clickUserImageHandler}
                src={image || "/defaultImg.jpg"}
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
            <div className="flex flex-col w-full">
              <div className="flex gap-3 items-center">
                <Field
                  type="text"
                  name="name"
                  as={Input}
                  id="user-name"
                  placeholder="이름"
                />
                <SimpleValidationIcon
                  touched={touched.name}
                  errors={errors.name}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <div className="flex gap-3 items-center">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  as={Input}
                  placeholder="user@example.com"
                  isDisabled
                />
                <SimpleValidationIcon
                  touched={touched.name}
                  errors={errors.name}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="flex gap-3 justify-between w-full">
              <div className="flex gap-3 items-start w-full">
                <div className="flex flex-col w-1/2">
                  <Field
                    type={isVisiblePW ? "text" : "password"}
                    as={Input}
                    id="password"
                    name="password"
                    placeholder="비밀번호 변경하기"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() => setIsVisiblePW(!isVisiblePW)}
                      >
                        {isVisiblePW ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                  {touched.password && errors.password && (
                    <p className="text-xs text-red-500">{errors.password}</p>
                  )}
                </div>
                <div className="flex flex-col w-1/2">
                  <Field
                    type={isVisiblePWConfirm ? "text" : "password"}
                    as={Input}
                    id="password-confirm"
                    name="password_confirm"
                    placeholder="변경된 비밀번호"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={() =>
                          setIsVisiblePWConfirm(!isVisiblePWConfirm)
                        }
                      >
                        {isVisiblePWConfirm ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                  {touched.password_confirm && errors.password_confirm && (
                    <p className="text-xs text-red-500">
                      {errors.password_confirm}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="p-2 w-20 h-fit bg-userProfileSaveBtn/60 rounded-xl hover:bg-userProfileSaveBtn/90"
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
