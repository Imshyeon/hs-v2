import { ArticleModel, connectDB } from "@/util/db-util";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    connectDB();
    const articleData = await req.json();
    const newArticle = new ArticleModel(articleData);
    await newArticle.save();
    return NextResponse.json({ message: "article 제작 성공", newArticle });
  } catch (err) {
    return NextResponse.json({ message: "article 제작 실패", err });
  }
}

export async function GET(req: Request, res: Response) {
  try {
    connectDB();
    const articleData = await ArticleModel.find({});
    return NextResponse.json(articleData);
  } catch (err) {
    return NextResponse.json({
      message: "articles를 불러오는데 실패했습니다.",
      err,
      code: 500,
    });
  }
}
