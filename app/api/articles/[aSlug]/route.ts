import { ArticleModel, connectDB } from "@/util/db-util";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(
  req: Request,
  { params }: { params: { aSlug: string } }
) {
  try {
    connectDB();
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
    connectDB();
    const slug = slugify(params.aSlug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const response = await ArticleModel.deleteOne({ slug: slug });

    return NextResponse.json(response);
  } catch (err: any) {
    throw Error(err);
  }
}

export async function PUT(req: Request, res: Response) {
  try {
    connectDB();
    const updatedData = await req.json();
    const slug = slugify(updatedData.slug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const updatedArticle = await ArticleModel.findOneAndUpdate(
      { slug: slug },
      updatedData
    );
    return NextResponse.json(updatedArticle);
  } catch (err: any) {
    throw Error(err);
  }
}
