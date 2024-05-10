import { S3 } from "@aws-sdk/client-s3";
const s3 = new S3({
  region: "ap-northeast-2",
});
import { connectDB, ProfileModel } from "@/util/db-util";
import { NextResponse } from "next/server";

// user profile
export async function POST(req: Request, res: Response) {
  try {
    connectDB();
    const data = await req.json();
    const userProfile = new ProfileModel(data);
    await userProfile.save();
    console.log(userProfile);
    return NextResponse.json({ message: "프로필 업로드 성공", data });
  } catch (err: any) {
    throw Error(err);
  }
}

export async function GET(req: Request, res: Response) {
  try {
    connectDB();
    const userProfile = await ProfileModel.find({});
    return NextResponse.json(userProfile);
  } catch (err) {
    return NextResponse.json({
      message: "유저의 데이터를 찾을 수 없습니다.",
      err,
    });
  }
}
