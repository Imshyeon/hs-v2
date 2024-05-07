import { S3 } from "@aws-sdk/client-s3";
const s3 = new S3({
  region: "ap-northeast-2",
});

import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const formData = await req.formData();
  const file = formData.get("file")!;

  if (file instanceof File) {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name;
    const fileType = file.type;
    try {
      const uploadResult = await s3.putObject({
        Bucket: "zoekangdev-project-holiday-schedules-v2",
        Key: fileName,
        ContentType: fileType,
        Body: fileBuffer,
      });
      return NextResponse.json({ message: "파일 업로드 성공", uploadResult });
    } catch (err) {
      return NextResponse.json({
        message: "파일 업로드 실패",
        err,
      });
    }
  }
}
