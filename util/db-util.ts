// 참고
// 1. https://dev.to/iambstha/http-get-post-request-in-nextjs-stable-app-router-557m
// 2. https://mindevlog.tistory.com/240
// 3. 공식문서 : https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// 4. mongoose 공식문서 : https://mongoosejs.com/docs/models.html
import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  isMarked: Boolean,
  slug: String,
  title: String,
  category: String,
  place: String,
  date: Object,
  created_date: String,
  contents: [
    {
      id: Number,
      content_title: String,
      content_place: String,
      content: [
        {
          content_id: Number,
          detail: String,
          image: String,
          reference: String,
        },
      ],
    },
  ],
  hashtags: String,
});

const articleSchema = new mongoose.Schema({
  title: String,
  slug: String,
  category: String,
  date: String,
  contents: [
    {
      id: Number,
      content_title: String,
      content_place: String,
      content: [
        {
          content_id: Number,
          detail: String,
          image: Object,
          reference: String,
        },
      ],
    },
  ],
  hashtags: String,
});

const profileSchema = new mongoose.Schema({
  name: String,
  image: String,
  email: String,
  password: String,
  password_confirm: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  user_id: String,
  password: String,
  password_confirm: String,
  isChecked: Boolean,
});

export const ScheduleModel =
  mongoose.models?.ScheduleModel ||
  mongoose.model("ScheduleModel", scheduleSchema);
export const ArticleModel =
  mongoose.models?.ArticleModel ||
  mongoose.model("ArticleModel", articleSchema);
export const ProfileModel =
  mongoose.models?.ProfileModel ||
  mongoose.model("ProfileModel", profileSchema);
export const UserModel =
  mongoose.models?.UserModel || mongoose.model("UserModel", userSchema);

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/holiday_schedule");
    const profileCount = await ProfileModel.countDocuments();
    if (profileCount === 0) {
      console.log("Initializing profile model...");
      const initialProfile = new ProfileModel({
        name: "홍길동",
        email: "example@example.com",
        image: "",
        password: "",
        password_confirm: "",
      });
      await initialProfile.save();
      console.log("Profile model initialized.", initialProfile);
    }
  } catch (err) {
    throw Error("데이터베이스 연결 실패");
  }
}
