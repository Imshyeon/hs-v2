// 아이디/비밀번호 페이지
"use client";
import UserLinkBtn from "@/components/ui/user-btn";
import UserInput from "@/components/ui/userInput";
import { Formik, Form } from "formik";

interface AccountValues {
  email?: string;
  user_id?: string;
}

const initialValues: AccountValues = {
  email: "",
  user_id: "",
};

export default function FindAccountPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="p-4 text-center font-extrabold text-4xl h-fit">
        아이디/비밀번호 찾기
      </h1>
      <div className="flex gap-1 justify-center w-full">
        <div className="w-full border-r-2 p-3">
          <Formik
            initialValues={initialValues}
            onSubmit={(values: AccountValues) => console.log(values)}
          >
            <Form className="text-center p-3">
              <div className="flex flex-col gap-4 items-center mt-4">
                <UserInput
                  name="email"
                  id="email"
                  type="email"
                  label="이메일"
                  placeholder="이메일을 입력하세요."
                />
              </div>
              <div className="justify-center mt-5">
                <button
                  type="submit"
                  className="p-3 bg-signupBtn hover:bg-signupBtn_hover w-2/3 rounded-xl"
                >
                  아이디 찾기
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="w-full">
          <Formik
            initialValues={initialValues}
            onSubmit={(values: AccountValues) => console.log(values)}
          >
            <Form className="text-center p-3">
              <div className="flex flex-col gap-4 items-center mt-4">
                <UserInput
                  name="user_id"
                  id="id"
                  label="아이디"
                  placeholder="아이디를 입력하세요."
                />
              </div>
              <div className="justify-center mt-5">
                <button
                  type="submit"
                  className="p-3 bg-signupBtn hover:bg-signupBtn_hover w-2/3 rounded-xl"
                >
                  비밀번호 찾기
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <UserLinkBtn
        href1="/login"
        title1="로그인하기"
        href2="/signup"
        title2="회원가입하기"
      />
    </div>
  );
}
