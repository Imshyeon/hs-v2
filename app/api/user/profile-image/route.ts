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
    const data = await req.formData();
    console.log(data);
    // s3://zoekangdev-project-holiday-schedules-v2/user/
    const file = data.get("user-profile")!;

    if (file instanceof File) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const fileName = file.name;
      const fileType = file.type;
      try {
        const uploadResult = await s3.putObject({
          Bucket: "zoekangdev-project-holiday-schedules-v2",
          Key: `user/${fileName}`,
          ContentType: fileType,
          Body: fileBuffer,
        });
        return NextResponse.json({
          message: "파일 업로드 성공",
          uploadResult,
        });
      } catch (err) {
        return NextResponse.json({
          message: "파일 업로드 실패",
          err,
        });
      }
    }
  } catch (err: any) {
    throw Error(err);
  }
}
