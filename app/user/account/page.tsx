// 아이디/비밀번호 페이지
"use client";
import { Field, Formik, Form } from "formik";
import Link from "next/link";

interface AccountValues {
  email?: string;
  id?: string;
}

const initialValues: AccountValues = {
  email: "",
  id: "",
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
                <div className="flex flex-col gap-1 w-full items-center">
                  <label htmlFor="email" className="w-2/3 text-left">
                    이메일
                    <span className="text-red-600">*</span>
                  </label>
                  <Field
                    name="email"
                    id="email"
                    placeholder="user@example.com"
                    className="border rounded-xl p-3 w-2/3 focus:outline-none"
                  />
                </div>
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
      <div className="flex flex-col gap-4 items-center mt-4">
        <div className="border w-2/3 text-center"></div>
        <Link href={"/login"} className="w-2/3 text-center rounded-xl">
          로그인하기
        </Link>
        <Link href={"/signup"} className="w-2/3 text-center rounded-xl">
          회원가입하기
        </Link>
      </div>
    </div>
  );
}
