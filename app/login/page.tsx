// 로그인 페이지
"use client";
import UserLinkBtn from "@/components/ui/user-btn";
import UserInput from "@/components/ui/userInput";
import { Formik, Form } from "formik";

interface LoginValues {
  user_id: string;
  password: string;
}

const initialValues: LoginValues = {
  user_id: "",
  password: "",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="p-4 text-center font-extrabold text-4xl h-fit">로그인</h1>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: LoginValues) => console.log(values)}
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
              <button
                type="submit"
                className="p-3 bg-signupBtn hover:bg-signupBtn_hover w-2/3 rounded-xl"
              >
                로그인하기
              </button>
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
