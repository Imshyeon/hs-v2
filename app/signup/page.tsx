// 회원가입 페이지
"use client";
import UserLinkBtn from "@/components/ui/user-btn";
import UserInput from "@/components/ui/userInput";
import { Field, Formik, Form } from "formik";

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
              <UserInput
                id="name"
                name="name"
                placeholder="이름"
                label="이름"
              />
              <UserInput
                id="email"
                name="email"
                type="email"
                placeholder="user@example.com"
                label="이메일"
              />
              <UserInput
                id="id"
                name="user_id"
                placeholder="아이디"
                label="아이디"
              />
              <UserInput
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호"
                label="비밀번호"
                rows={true}
              />
              <label htmlFor="check">
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
        <UserLinkBtn
          href1="/login"
          title1="로그인하기"
          href2="/user/account"
          title2="아이디/비밀번호 찾기"
        />
      </div>
    </div>
  );
}
