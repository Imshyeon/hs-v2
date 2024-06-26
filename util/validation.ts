import * as Yup from "yup";

export const ScheduleValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "제목이 너무 짧습니다.")
    .max(15, "제목이 너무 깁니다.")
    .required("스케줄의 제목을 입력해주세요."),
  category: Yup.string().required("카테고리를 입력해주세요."),
  place: Yup.string().required("여행 장소를 입력해주세요."),
  date: Yup.object().required("여행 일정을 입력해주세요."),
  created_date: Yup.string().default(() => new Date().toLocaleDateString()),
  contents: Yup.array(
    Yup.object({
      content_title: Yup.string().required("소제목을 입력해주세요."),
      content_place: Yup.string().required("장소를 입력해주세요."),
      content: Yup.array(
        Yup.object({
          detail: Yup.string().required("내용을 입력해주세요."),
          image: Yup.string(),
          reference: Yup.string(),
        })
      ).required("내용을 입력해주세요."),
    })
  ).required("여행 스케줄을 입력해주세요."),
  hashtags: Yup.string(),
});

export const ArticleValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "제목이 너무 짧습니다.")
    .max(15, "제목이 너무 깁니다.")
    .required("스케줄의 제목을 입력해주세요."),
  category: Yup.string().required("카테고리를 입력해주세요."),
  date: Yup.string().default(() => new Date().toLocaleDateString()),
  contents: Yup.array(
    Yup.object({
      content_title: Yup.string().required("소제목을 입력해주세요."),
      content_place: Yup.string().required("장소를 입력해주세요."),
      content: Yup.array(
        Yup.object({
          detail: Yup.string().required("내용을 입력해주세요."),
          image: Yup.string(),
          reference: Yup.string(),
        })
      ).required("내용을 입력해주세요."),
    })
  ).required("여행 스케줄을 입력해주세요."),
  hashtags: Yup.string(),
});

export const UserValidationSchema = Yup.object().shape({
  image: Yup.string(),
  name: Yup.string().required("이름을 입력해주세요."),
  email: Yup.string()
    .email("이메일을 올바르게 작성해주세요.")
    .required("이메일을 작성해주세요."),
  password: Yup.string().min(12, "12글자 이상으로 작성해주세요."),
  password_confirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "변경한 비밀번호와 일치하지 않습니다."
  ),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("이름을 입력해주세요."),
  email: Yup.string()
    .email("이메일을 올바르게 작성해주세요.")
    .required("이메일을 입력해주세요."),
  user_id: Yup.string()
    .min(5, "5글자 이상으로 작성해주세요")
    .max(12, "12글자 이하로 작성해주세요.")
    .required("아이디를 입력해주세요. (5-12글자)"),
  password: Yup.string()
    .min(12, "12글자 이상으로 작성해주세요.")
    .required("비밀번호를 작성해주세요."),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호와 일치하지 않습니다.")
    .required("비밀번호를 작성해주세요."),
  isChecked: Yup.boolean().required("약관 동의를 해주세요."),
});
