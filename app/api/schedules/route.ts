"use server";

import { connectDB, ScheduleModel } from "@/util/db-util";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    connectDB();
    const scheduleData = await req.json();
    const newSchedule = new ScheduleModel(scheduleData);
    await newSchedule.save();
    console.log(newSchedule);

    return NextResponse.json(scheduleData);
  } catch (error) {
    throw Error("스케줄을 생성하는데 실패했습니다.");
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
    connectDB();
    const allSchedules = await ScheduleModel.find({});
    return NextResponse.json(allSchedules);
  } catch (err) {
    throw Error("모든 스케줄을 불러오는데 실패했습니다.");
  }
}
