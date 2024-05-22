"use server";

import { connectDB, ScheduleModel, UserModel } from "@/util/db-util";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest, res: NextResponse) {
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

    const scheduleData = await req.json();
    const newSchedule = new ScheduleModel({
      ...scheduleData,
      createdBy: user._id,
    });
    await newSchedule.save();
    user.schedules.push(newSchedule);
    await user.save();

    return NextResponse.json(scheduleData, { status: 201 });
  } catch (error) {
    return NextResponse.json("스케줄을 생성하는데 실패했습니다.", {
      status: 405,
    });
    // throw Error("스케줄을 생성하는데 실패했습니다.");
  }
}

export async function GET(req: Request, res: Response) {
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
    const allSchedules = await ScheduleModel.find({ createdBy: user._id });
    return NextResponse.json(allSchedules, { status: 200 });
  } catch (err) {
    return NextResponse.json("모든 스케줄을 불러오는데 실패했습니다.", {
      status: 405,
    });
    // throw Error("모든 스케줄을 불러오는데 실패했습니다.");
  }
}
