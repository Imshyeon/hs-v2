// 회원가입 페이지
"use client";
import UserLinkBtn from "@/components/ui/user-btn";
import UserInput from "@/components/ui/userInput";
import { Field, Formik, Form } from "formik";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/react";
import { SignUpSchema } from "@/util/validation";
import { useRouter } from "next/navigation";

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

async function createUserHandler(values: SignupValues) {
  const response = await fetch(" http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  // if (!response.ok) {
  //   throw new Error(data.message || "회원가입 실패");
  // }
  console.log(response);

  return response;
}

export default function SignupPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="p-4 text-center font-extrabold text-4xl h-fit">
        회원가입
      </h1>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={(values: SignupValues) => {
            createUserHandler(values).then((response) => {
              if (response.ok) {
                router.push("/");
              }
            });
          }}
        >
          <Form className="text-center p-3">
            <div className="flex flex-col gap-4 items-center mt-4">
              <div className="w-full h-fit">
                <UserInput
                  id="name"
                  name="name"
                  placeholder="이름"
                  label="이름"
                />
              </div>
              <div className="w-full h-auto">
                <UserInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  label="이메일"
                />
              </div>
              <div className="w-full h-auto">
                <UserInput
                  id="id"
                  name="user_id"
                  placeholder="아이디"
                  label="아이디"
                />
              </div>
              <div className="w-2/3 h-auto flex gap-2">
                <UserInput
                  id="password"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  label="비밀번호"
                  rows={true}
                />
                <UserInput
                  id="password_confirm"
                  type="password"
                  name="password_confirm"
                  placeholder="비밀번호 확인"
                  label="비밀번호 확인"
                  rows={true}
                />
              </div>
              <div className="w-full h-auto">
                <Field
                  type="checkbox"
                  name="isChecked"
                  as={Checkbox}
                  isRequired
                  id="check"
                  classNames="focus:outline-none"
                >
                  약관 동의하기
                  <span className="text-red-600">*</span>
                </Field>
              </div>
            </div>
            <div className="justify-center mt-5">
              <Button
                type="submit"
                className="p-3 bg-signupBtn hover:bg-signupBtn_hover w-2/3 rounded-xl dark:text-black"
              >
                가입하기
              </Button>
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
