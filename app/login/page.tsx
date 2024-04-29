// 로그인 페이지
"use client";
import { Field, Formik, Form } from "formik";
import Link from "next/link";

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
              <div className="flex flex-col gap-1 w-full items-center">
                <label htmlFor="id" className="w-2/3 text-left">
                  아이디
                  <span className="text-red-600">*</span>
                </label>
                <Field
                  name="user_id"
                  id="id"
                  placeholder="아이디"
                  className="border rounded-xl p-3 w-2/3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full items-center">
                <label htmlFor="password" className="w-2/3 text-left">
                  비밀번호
                  <span className="text-red-600">*</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  placeholder="비밀번호"
                  className="border rounded-xl w-2/3 p-3 focus:outline-none"
                />
              </div>
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
        <div className="flex flex-col gap-4 items-center">
          <div className="border w-2/3 text-center"></div>
          <Link href={"/signup"} className="w-2/3 text-center rounded-xl">
            회원가입하기
          </Link>
          <Link href={"/user/account"} className="w-2/3 text-center rounded-xl">
            아이디/비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}
