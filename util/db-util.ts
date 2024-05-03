// 참고
// 1. https://dev.to/iambstha/http-get-post-request-in-nextjs-stable-app-router-557m
// 2. https://mindevlog.tistory.com/240
// 3. 공식문서 : https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// 4. mongoose 공식문서 : https://mongoosejs.com/docs/models.html
import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  isMarked: Boolean,
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
          image: Object,
          reference: String,
        },
      ],
    },
  ],
  hashtags: String,
});

const articleSchema = new mongoose.Schema({
  title: String,
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

export const ScheduleModel =
  mongoose.models?.ScheduleModel ||
  mongoose.model("ScheduleModel", scheduleSchema);
export const ArticleModel =
  mongoose.models?.ArticleModel ||
  mongoose.model("ArticleModel", articleSchema);