// detail schedule
"use server";
import { ScheduleModel, connectDB } from "@/util/db-util";
import { NextResponse } from "next/server";

import slugify from "slugify";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    connectDB();
    const slug = slugify(params.slug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const currentSchedule = await ScheduleModel.find({ slug: slug });

    return NextResponse.json(currentSchedule);
  } catch (err: any) {
    throw Error(err);
  }
}

export async function PUT(req: Request, res: Response) {
  try {
    connectDB();
    const updatedData = await req.json();
    console.log(updatedData);
    const slug = slugify(updatedData.slug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const updatedSchedule = await ScheduleModel.findOneAndUpdate(
      {
        slug: slug,
      },
      updatedData
    );
    return NextResponse.json(updatedSchedule);
  } catch (err) {
    throw Error("해당 스케줄을 수정하는데 실패했습니다. 다시 시도해주세요.");
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    connectDB();
    const slug = slugify(params.slug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const response = await ScheduleModel.deleteOne({ slug: slug });

    return NextResponse.json(response);
  } catch (err: any) {
    throw Error(err);
  }
}
