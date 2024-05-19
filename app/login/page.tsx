// 로그인 페이지
"use client";
import UserLinkBtn from "@/components/ui/user-btn";
import UserInput from "@/components/ui/userInput";
import { Formik, Form } from "formik";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { alertActions } from "@/store/alert";

interface LoginValues {
  user_id: string;
  password: string;
}

const initialValues: LoginValues = {
  user_id: "",
  password: "",
};

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="p-4 text-center font-extrabold text-4xl h-fit">로그인</h1>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values: LoginValues) => {
            const result = await signIn("credentials", {
              redirect: false,
              user_id: values.user_id,
              password: values.password,
            });

            if (result?.ok) {
              router.replace("/");
              dispatch(
                alertActions.setAlertState({
                  status: "success",
                  message: "로그인에 성공했습니다.",
                })
              );
            } else {
              console.log(result?.error);
              dispatch(
                alertActions.setAlertState({
                  status: "failure",
                  message: result?.error,
                })
              );
            }
          }}
        >
          <Form className="text-center p-3">
            <div className="flex flex-col gap-4 items-center mt-4">
              <UserInput
                id="id"
                name="user_id"
                label="아이디"
                placeholder="아이디를 입력하세요."
              />
              <UserInput
                id="password"
                name="password"
                label="비밀번호"
                placeholder="비밀번호를 입력하세요."
                type="password"
              />
            </div>
            <div className="justify-center mt-5">
              <Button
                type="submit"
                className="p-3 bg-signupBtn hover:bg-signupBtn_hover w-2/3 rounded-xl dark:text-black"
              >
                로그인하기
              </Button>
            </div>
          </Form>
        </Formik>
        <UserLinkBtn
          href1="/signup"
          title1="회원가입하기"
          href2="/user/account"
          title2="아이디/비밀번호 찾기"
        />
      </div>
    </div>
  );
}
