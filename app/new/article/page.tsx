"use client";

// 참고 : https://codesandbox.io/p/sandbox/formik-fieldarray-materialui-f7rkz?file=%2Fsrc%2Fform.js%3A79%2C28

import { Formik, Form, Field, FieldArray } from "formik";
import { Button } from "@nextui-org/button";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";
import { format } from "date-fns";

interface NewSchedule {
  title: string;
  category: string;
  date: string;

  contents: [
    {
      id: number;
      content_title: string;
      content_place?: string;
      content: [
        {
          content_id: number;
          detail: string;
          image: File;
          reference: string;
        }
      ];
    }
  ];
  hashtags?: string;
}

const initialValues: NewSchedule = {
  title: "",
  category: "",
  date: format(new Date(), "yyyy-MM-dd"),
  contents: [
    {
      id: Math.random(),
      content_title: "",
      content_place: "",
      content: [
        {
          content_id: Math.random(),
          detail: "",
          image: new File([], "", {}),
          reference: "",
        },
      ],
    },
  ],
  hashtags: "",
};
export default function NewArticlePage() {
  return (
    <div className="p-10">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, touched, errors }) => (
          <Form className="flex flex-col">
            <section className="flex flex-col gap-4 p-4 border-b-2">
              <div className="flex gap-2 w-full">
                <Field
                  type="text"
                  name="title"
                  as={Input}
                  isRequired
                  placeholder="제목"
                  size="lg"
                  className="focus:outline-none w-2/3"
                />
                <Field
                  type="text"
                  name="category"
                  as={Input}
                  isRequired
                  placeholder="카테고리"
                  size="lg"
                  className="focus:outline-none w-1/3"
                />
              </div>
            </section>
            <FieldArray name="contents">
              {({ push, remove }) => (
                <div className="p-4 flex flex-col gap-5">
                  {values.contents.map((content, idx) => {
                    const contents_title = `contents[${idx}].content_title`;
                    const content_place = `contents[${idx}].content_place`;
                    const contents_id = `contents[${idx}].id`;

                    return (
                      <section
                        key={contents_id}
                        className="flex flex-col gap-4 mt-5 relative"
                      >
                        <div className="flex justify-start gap-2">
                          <Field
                            type="text"
                            as={Input}
                            isRequired
                            name={contents_title}
                            placeholder="소제목"
                            className="focus:outline-none w-1/2"
                          />
                          <Field
                            type="text"
                            as={Input}
                            name={content_place}
                            variant="underlined"
                            placeholder="장소"
                            className="focus:outline-none w-fit"
                          />
                        </div>

                        <div className="flex flex-col bg-scheduleContentBox p-4 rounded-xl gap-4">
                          <FieldArray name={`contents.${idx}.content`}>
                            {({ push, remove }) => (
                              <>
                                {content.content.map((value, index) => {
                                  const content_id = `contents[${idx}].content[${index}].content_id`;
                                  const content_detail = `contents[${idx}].content[${index}].detail`;
                                  const reference = `contents[${idx}].content[${index}].reference`;
                                  return (
                                    <div key={content_id}>
                                      {/* <Field
                                        type="file"
                                        name={`contents[${idx}].content[${index}].image`}
                                        onChange={(
                                          event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                          // 파일이 선택되었을 때
                                          if (
                                            event.currentTarget.files &&
                                            event.currentTarget.files.length > 0
                                          ) {
                                            // 파일 객체 추출
                                            const file: File =
                                              event.currentTarget.files[0];
                                            // Formik 값에 파일 객체 설정
                                            // setFieldValue(
                                            //   `contents[${idx}].content[${index}].image`,
                                            //   file
                                            // );
                                            console.log(
                                              `contents[${idx}].content[${index}].image`,
                                              file
                                            );
                                          }
                                        }}
                                        className="border p-2 focus:outline-none rounded-xl w-full"
                                      /> */}
                                      <div className="bg-white border rounded-xl w-full p-2 flex flex-col">
                                        <Field
                                          as={Textarea}
                                          name={content_detail}
                                          isRequired
                                          placeholder="상세 내용 입력"
                                          rows="3"
                                          variant="underlined"
                                          className="focus:outline-none w-full resize-none bg-transparent p-2"
                                        />
                                        <div className="flex gap-2 items-center">
                                          <Popover placement="top" showArrow>
                                            <PopoverTrigger>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 fill-slate-400 hover:fill-black cursor-pointer"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                                                  clipRule="evenodd"
                                                />
                                              </svg>
                                            </PopoverTrigger>
                                            <PopoverContent className="p-2">
                                              <Field
                                                as={Input}
                                                name={reference}
                                                id="reference"
                                                placeholder="참고 웹사이트"
                                                className="bg-transparent"
                                              />
                                            </PopoverContent>
                                          </Popover>

                                          <button
                                            type="button"
                                            onClick={() => remove(index)}
                                            className="inline"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              fill="currentColor"
                                              className="w-5 h-5 fill-slate-400/65 hover:fill-red-600"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                                <Button
                                  type="button"
                                  onClick={() =>
                                    push({
                                      content_id: Math.random(),
                                      detail: "",
                                      image: null,
                                      reference: "",
                                    })
                                  }
                                  className="self-center focus:outline-none mt-3 bg-transparent p-0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 fill-profileGoToBtn hover:fill-plusSchedule"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </Button>
                              </>
                            )}
                          </FieldArray>
                        </div>
                        <Button
                          type="button"
                          onClick={() => remove(idx)}
                          className="absolute right-2 bg-transparent"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 fill-slate-400/40 hover:fill-red-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      </section>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() =>
                      push({
                        id: Math.random(),
                        content_title: "",
                        content_place: "",
                        content: [
                          {
                            content_id: Math.random(),
                            detail: "",
                            image: null,
                            reference: "",
                          },
                        ],
                      })
                    }
                    className="w-full bg-white border border-dashed rounded-xl p-2 py-4 text-slate-400/40 hover:text-slate-500 hover:border-slate-500 flex items-center gap-2 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM12.75 12a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V18a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V12Z"
                        clipRule="evenodd"
                      />
                      <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                    </svg>
                    스케줄 추가하기
                  </button>
                </div>
              )}
            </FieldArray>
            <div className="flex gap-1 justify-end p-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
                />
              </svg>

              <Field
                name="hashtags"
                as={Input}
                placeholder="해시태그"
                className="w-fit"
                size="sm"
                variant="underlined"
              />
            </div>
            <Button
              type="submit"
              className="self-end px-5 py-2 bg-createScheduleBtn hover:bg-createScheduleBtn_hover rounded-xl"
            >
              완료
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
