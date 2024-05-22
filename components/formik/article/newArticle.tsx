import { Formik, Form, Field, FieldArray } from "formik";
import { Button } from "@nextui-org/button";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { format } from "date-fns";
import { NewArticles } from "@/util/interfaces";
import { ArticleValidationSchema } from "@/util/validation";
import { ChangeEvent } from "react";

const initialValues: NewArticles = {
  title: "",
  category: "",
  date: format(new Date(), "yyyy-MM-dd"),
  slug: "",
  contents: [
    {
      content_title: "",
      content_place: "",
      content: [
        {
          detail: "",
          image: "",
          reference: "",
        },
      ],
    },
  ],
  hashtags: "",
};

export default function NewArticleForm({
  postArticleHandler,
  handleFileUpload,
}: {
  postArticleHandler: (values: NewArticles) => void;
  handleFileUpload: (
    e: ChangeEvent<HTMLInputElement>,
    title: string,
    content_title: string
  ) => void;
}) {
  return (
    <div className="p-10">
      <Formik
        initialValues={initialValues}
        validationSchema={ArticleValidationSchema}
        onSubmit={(values) => postArticleHandler(values)}
      >
        {({ values, touched, errors }) => (
          <Form className="flex flex-col">
            <section className="flex flex-col gap-4 p-4 border-b-2">
              <div className="flex gap-2 w-full">
                <div className="flex flex-col w-2/3">
                  <Field
                    type="text"
                    name="title"
                    as={Input}
                    isRequired
                    placeholder="제목"
                    size="lg"
                    className="focus:outline-none w-full"
                  />
                  {touched.title && errors.title && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.title}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-1/3">
                  <Field
                    type="text"
                    name="category"
                    as={Input}
                    isRequired
                    placeholder="카테고리"
                    size="lg"
                    className="focus:outline-none w-full"
                  />
                  {touched.category && errors.category && (
                    <span className="text-sm text-red-500 mt-1">
                      {errors.category}
                    </span>
                  )}
                </div>
              </div>
            </section>
            <FieldArray name="contents">
              {({ push, remove }) => (
                <div className="p-4 flex flex-col gap-5">
                  {values.contents.map((content, idx) => {
                    const contents_title = `contents[${idx}].content_title`;
                    const content_place = `contents[${idx}].content_place`;

                    return (
                      <section
                        key={contents_title}
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

                        <div className="flex flex-col bg-scheduleContentBox p-4 rounded-xl gap-4 dark:bg-zinc-800">
                          <FieldArray name={`contents.${idx}.content`}>
                            {({ push, remove }) => (
                              <>
                                {content.content.map((value, index) => {
                                  const folderName = `contents[${idx}].content_title`;
                                  const content_detail = `contents[${idx}].content[${index}].detail`;
                                  const reference = `contents[${idx}].content[${index}].reference`;
                                  return (
                                    <div key={content_detail.slice(5)}>
                                      <input
                                        id="file"
                                        type="file"
                                        name={`contents[${idx}].content[${index}].image`}
                                        onChange={(e) =>
                                          handleFileUpload(
                                            e,
                                            values.title,
                                            content.content_title
                                          )
                                        }
                                        accept="image/*"
                                        className="border p-2 focus:outline-none rounded-xl w-full mb-2 file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 cursor-pointer"
                                      />
                                      <div className="bg-white border rounded-xl w-full p-2 flex flex-col dark:bg-transparent">
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
                                                className="w-5 h-5 fill-slate-400 hover:fill-black cursor-pointer dark:hover:fill-white"
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
                          disabled={values.contents.length === 1 ? true : false}
                          className="absolute right-2 bg-transparent group disabled:cursor-not-allowed"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 fill-slate-400/40 group-hover:fill-red-600"
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
                    className="w-full bg-white border border-dashed rounded-xl p-2 py-4 text-slate-400/40 hover:text-slate-500 hover:border-slate-500 flex items-center gap-2 justify-center dark:bg-transparent dark:hover:bg-slate-200"
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
              className="self-end px-5 py-2 bg-createScheduleBtn hover:bg-createScheduleBtn_hover rounded-xl dark:text-black"
            >
              완료
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
