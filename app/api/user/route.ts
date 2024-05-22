import { S3 } from "@aws-sdk/client-s3";
const s3 = new S3({
  region: "ap-northeast-2",
});
import { connectDB, UserModel } from "@/util/db-util";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { hashPassword } from "@/util/auth";

// user profile
export async function PATCH(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "권한이 없습니다." }, { status: 401 });
  }

  let data = await req.json();

  try {
    await connectDB();
    const user = await UserModel.findOne({ email: session.user.email });
    const allUser = await UserModel.find({});
    console.log(user, allUser);

    if (!user) {
      return NextResponse.json(
        { message: "유저를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    if (data.password.trim() !== "" && data.password_confirm.trim() !== "") {
      const newPassword = data.password;
      const newPasswordConfirm = data.password_confirm;
      const hashedPassword = await hashPassword(newPassword);
      const hashedPasswordConfirm = await hashPassword(newPasswordConfirm);
      data.password = hashedPassword;
      data.password_confirm = hashedPasswordConfirm;
    }

    console.log(data);
    const result = await UserModel.updateOne(
      { email: session.user.email },
      data
    );

    return NextResponse.json({ message: "프로필 업로드 성공", result, user });
  } catch (err: any) {
    throw Error(err);
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
    return NextResponse.json(user);
    // await connectDB();
    // const userProfile = await ProfileModel.find({});
    // console.log(userProfile);
    // console.log(userProfile.at(-1));
    // return NextResponse.json(userProfile);
  } catch (err) {
    return NextResponse.json({
      message: "유저의 데이터를 찾을 수 없습니다.",
      err,
    });
  }
}
