// detail schedule
"use server";
import { ScheduleModel, UserModel, connectDB } from "@/util/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import slugify from "slugify";
import { authOptions } from "../../auth/[...nextauth]/route";
import { Schedule } from "@/util/interfaces";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
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
    const slug = slugify(params.slug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const currentSchedule = await ScheduleModel.findOne({
      createdBy: user._id,
      slug: slug,
    });

    return NextResponse.json(currentSchedule, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(err, { status: 405 });
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

    const updatedSchedule = await ScheduleModel.findOneAndUpdate(
      {
        slug: slug,
      },
      updatedData
    );
    let scheduleData = user.schedules.find(
      (schedule: Schedule) => schedule.slug === slug
    );
    scheduleData = updatedData;
    await user.save();
    console.log(user.schedules);
    return NextResponse.json(updatedSchedule, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      "해당 스케줄을 수정하는데 실패했습니다. 다시 시도해주세요.",
      { status: 405 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
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
    const slug = slugify(params.slug, {
      replacement: "-", // 제거된 문자 대신 '-' 사용
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    const response = await ScheduleModel.deleteOne({
      slug: slug,
    });

    user.schedules.filter((schedule: Schedule) => schedule.slug === slug);

    return NextResponse.json(response, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(err, { status: 405 });
    // throw Error(err);
  }
}
