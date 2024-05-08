"use client";

import { Formik, Form, Field, FieldArray } from "formik";
import { Button } from "@nextui-org/button";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  DateRangePicker,
  Textarea,
} from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { format } from "date-fns";
import slugify from "slugify";
import { useRouter } from "next/navigation";
import { NewSchedule, Schedule } from "@/util/interfaces";
import MyTextField from "@/components/formik/useTextField";
import { useEffect, useState } from "react";

export async function getCurrentScheduleData(slug: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/schedules/${slug}`);
    if (!response.ok) {
      throw Error(
        "해당 스케줄 데이터를 가져오는데 실패했습니다. 다시 시도해주세요."
      );
    }
    const scheduleData: Schedule[] = await response.json();
    return scheduleData[0];
  } catch (err: any) {
    throw Error(err);
  }
}

const initialValues: NewSchedule = {
  isMarked: false,
  title: "",
  category: "",
  place: "",
  date: {},
  created_date: new Date().toLocaleDateString(),
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

export default function NewSchedulePage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [imageURL, setImageURL] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [scheduleData, setScheduleData] = useState<Schedule | NewSchedule>(
    initialValues
  );
  const scheduleSlug = decodeURIComponent(params.slug);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentScheduleData(scheduleSlug);
      setScheduleData(data);
      setLoading(false);
    };
    fetchData();
  }, [scheduleSlug]);

  async function handleFileUpload(event: any, upper: number, current: number) {
    event.preventDefault();
    const file = event.target.files[0];
    const fileName = file.name;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3000/api/new/schedules", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        console.log({ message: "이미지 업로드 실패" });
      }

      setImageURL((prevImages) => {
        return [
          `https://zoekangdev-project-holiday-schedules-v2.s3.ap-northeast-2.amazonaws.com/${fileName}`,
          ...prevImages,
        ];
      });
    } catch (err) {
      console.log({ message: "이미지 업로드 실패" });
    }
  }

  return !loading ? (
    <div className="p-10">
      <Formik
        initialValues={scheduleData}
        onSubmit={async (values: NewSchedule) => {
          const slug = slugify(values.title, {
            replacement: "-", // 제거된 문자 대신 '-' 사용
            remove: /[*+~.()'"!:@]/g,
            locale: "ko",
            trim: true,
          });

          values.contents.map((content, index) => {
            content.content.map((c) => {
              c.image = imageURL[index];
            });
          });

          try {
            const response = (await fetch(`/api/schedules/${scheduleSlug}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...values, slug: scheduleSlug }),
            })) as RequestInit;
            console.log(response);
            router.push(`/user/schedules/${slug}`);
          } catch (err: any) {
            console.log(err);
            throw Error("새로운 스케줄을 생성하는데 실패했습니다.", err);
          }
        }}
      >
        {({ values, touched, errors, setFieldValue, setFieldTouched }) => (
          <Form className="flex flex-col">
            <section className="flex flex-col gap-4 p-4 border-b-2">
              <div className="flex gap-2 w-full">
                <MyTextField
                  size="lg"
                  name="title"
                  placeholder="제목"
                  className="focus:outline-none w-2/3"
                  as={Input}
                />
                <MyTextField
                  size="lg"
                  name="category"
                  placeholder="카테고리"
                  className="focus:outline-none w-1/3"
                  as={Input}
                />
              </div>
              <div className="flex gap-2 w-full">
                <MyTextField
                  size="lg"
                  name="place"
                  placeholder="장소"
                  className="focus:outline-none w-1/2"
                  as={Input}
                />
                <div className="flex gap-1 w-1/2">
                  <Field
                    as={DateRangePicker}
                    isRequired
                    selectionType="date"
                    size="sm"
                    radius="md"
                    label="여행 기간"
                    name={values.date}
                    className="focus:outline-none w-full"
                    onChange={(e: {
                      start: { year: number; month: number; day: number };
                      end: { year: number; month: number; day: number };
                    }) => {
                      const { start, end } = e;
                      const startDate = new Date(
                        start.year,
                        start.month - 1,
                        start.day
                      );
                      const endDate = new Date(
                        end.year,
                        end.month - 1,
                        end.day
                      );

                      const formattedStartDate = format(
                        startDate,
                        "yyyy-MM-dd"
                      );
                      const formattedEndDate = format(endDate, "yyyy-MM-dd");

                      setFieldValue("date", {
                        start: parseDate(formattedStartDate),
                        end: parseDate(formattedEndDate),
                      });

                      console.log(values.date);
                    }}
                  />
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
                          <MyTextField
                            name={contents_title}
                            placeholder="소제목"
                            className="focus:outline-none w-1/2"
                            as={Input}
                            size="default"
                          />
                          <MyTextField
                            name={content_place}
                            placeholder="여행 장소"
                            className="focus:outline-none w-fit"
                            as={Input}
                            size="default"
                          />
                        </div>
                        <div className="flex flex-col bg-scheduleContentBox p-4 rounded-xl gap-4">
                          <FieldArray name={`contents.${idx}.content`}>
                            {({ push, remove }) => (
                              <>
                                {content.content.map((value, index) => {
                                  const content_detail = `contents[${idx}].content[${index}].detail`;
                                  const reference = `contents[${idx}].content[${index}].reference`;
                                  const content_image = `contents[${idx}].content[${index}].image`;
                                  return (
                                    <div key={content_detail}>
                                      <input
                                        id="file"
                                        type="file"
                                        name={`contents[${idx}].content[${index}].image`}
                                        onChange={(e) =>
                                          handleFileUpload(e, idx, index)
                                        }
                                        accept="image/*"
                                        className="border p-2 focus:outline-none rounded-xl w-full"
                                      />
                                      <div className="bg-white border rounded-xl w-full p-2 flex flex-col">
                                        <Field
                                          as={Textarea}
                                          name={content_detail}
                                          isRequired
                                          placeholder="상세 스케줄 입력"
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
                        content_title: "",
                        content_place: "",
                        content: [
                          {
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
  ) : (
    <p>Loading...</p>
  );
}
