import { ArticleModel, UserModel, connectDB } from "@/util/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request, res: Response) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "로그인이 필요합니다." },
        { status: 401 }
      );
    }
    await connectDB();
    const user = await UserModel.findOne({ email: session.user.email });

    if (user.role !== "admin") {
      return NextResponse.json(
        { message: "Article을 작성할 권한이 없습니다." },
        { status: 403 }
      );
    }

    const articleData = await req.json();
    const newArticle = new ArticleModel({
      ...articleData,
      createdBy: user._id,
    });
    await newArticle.save();
    user.articles.push(newArticle);
    await user.save();
    return NextResponse.json(
      { message: "article 제작 성공", newArticle },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "article 제작 실패", err },
      { status: 405 }
    );
  }
}

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();
    const articleData = await ArticleModel.find({});
    return NextResponse.json(articleData);
  } catch (err) {
    return NextResponse.json(
      {
        message: "articles를 불러오는데 실패했습니다.",
        err,
      },
      { status: 405 }
    );
  }
}
