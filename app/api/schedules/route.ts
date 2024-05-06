"use server";

import { connectDB, ScheduleModel } from "@/util/db-util";
import { NextRequest, NextResponse } from "next/server";

// AWS S3를 이용해서 File 업로드/패칭하기..zoekangdev-project-holiday-schedules라는 이름으로 버킷생성
// https://velog.io/@kzoen0040/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Foodies-%EC%95%B1-3#-%EC%97%85%EB%A1%9C%EB%93%9C%EB%90%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0aws-s3

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
    connectDB();
    const allSchedules = await ScheduleModel.find({});
    return NextResponse.json(allSchedules);
  } catch (err) {
    throw Error("모든 스케줄을 불러오는데 실패했습니다.");
  }
}
