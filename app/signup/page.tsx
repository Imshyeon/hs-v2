// 회원가입 페이지
"use client";
import { Field, Formik, Form } from "formik";
import Link from "next/link";

interface SignupValues {
  email: string;
  name: string;
  user_id: string;
  password: string;
  password_confirm: string;
  isChecked: boolean;
}

const initialValues: SignupValues = {
  email: "",
  name: "",
  user_id: "",
  password: "",
  password_confirm: "",
  isChecked: false,
};

export default function SignupPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="p-4 text-center font-extrabold text-4xl h-fit">
        회원가입
      </h1>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: SignupValues) => console.log(values)}
        >
          <Form className="text-center p-3">
            <div className="flex flex-col gap-4 items-center mt-4">
              <div className="flex flex-col gap-1 w-full items-center">
                <label htmlFor="name" className="w-2/3 text-left">
                  이름
                  <span className="text-red-600">*</span>
                </label>
                <Field
                  name="name"
                  placeholder="이름"
                  id="name"
                  className="border rounded-xl p-3 w-2/3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full items-center">
                <label htmlFor="email" className="w-2/3 text-left">
                  이메일
                  <span className="text-red-600">*</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  placeholder="user@example.com"
                  className="border rounded-xl p-3 w-2/3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full items-center">
                <label htmlFor="id" className="w-2/3 text-left">
                  아이디
                  <span className="text-red-600">*</span>
                </label>
                <Field
                  name="id"
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
                <div className="w-2/3 flex gap-2">
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    className="border rounded-xl w-1/2 p-3 focus:outline-none"
                  />
                  <Field
                    name="password_confirm"
                    type="password"
                    placeholder="비밀번호 확인"
                    className="border rounded-xl w-1/2 p-3 focus:outline-none"
                  />
                </div>
              </div>

              <label htmlFor="check" className="">
                <Field
                  type="checkbox"
                  name="isChecked"
                  id="check"
                  className="mr-2 focus:outline-none"
                />
                약관 동의하기
                <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="justify-center mt-5">
              <button
                type="submit"
                className="p-3 bg-signupBtn hover:bg-signupBtn_hover w-2/3 rounded-xl"
              >
                가입하기
              </button>
            </div>
          </Form>
        </Formik>
        <div className="flex flex-col gap-4 items-center">
          <div className="border w-2/3 text-center"></div>
          <Link href={"login"} className="w-2/3 text-center rounded-xl">
            로그인하기
          </Link>
          <Link href={"account"} className="w-2/3 text-center rounded-xl">
            아이디/비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}
