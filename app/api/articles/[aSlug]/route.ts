import { ArticleModel, UserModel, connectDB } from "@/util/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(
  req: Request,
  { params }: { params: { aSlug: string } }
) {
  try {
    await connectDB();
    const slug = slugify(params.aSlug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const currentArticle = await ArticleModel.findOne({ slug: slug });
    return NextResponse.json(currentArticle);
  } catch (err: any) {
    throw Error(err);
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { aSlug: string } }
) {
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
    const slug = slugify(params.aSlug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const response = await ArticleModel.deleteOne({
      createdBy: user._id,
      slug: slug,
    });

    return NextResponse.json(response);
  } catch (err: any) {
    throw Error(err);
  }
}

export async function PUT(req: Request, res: Response) {
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
    const updatedData = await req.json();
    const slug = slugify(updatedData.slug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const updatedArticle = await ArticleModel.findOneAndUpdate(
      { slug: slug, createdBy: user._id },
      updatedData
    );
    return NextResponse.json(updatedArticle);
  } catch (err: any) {
    throw Error(err);
  }
}
