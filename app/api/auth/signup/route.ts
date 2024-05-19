import { hashPassword } from "@/util/auth";
import { UserModel, connectDB } from "@/util/db-util";
import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  let userData = await req.json();

  // validation
  if (
    !userData.name &&
    !userData.email &&
    !userData.email.include("@") &&
    !userData.user_id &&
    userData.user_id.trim().length < 5 &&
    userData.user_id.trim().length > 12 &&
    !userData.password &&
    !userData.password_confirm &&
    userData.password.trim().length < 12 &&
    userData.password.trim() !== userData.password_confirm.trim() &&
    !userData.isChecked
  ) {
    return NextResponse.json({ message: "회원가입 실패. 다시 시도해주세요." });
  }

  // 이미 존재하는지 보기
  const existingUser = await UserModel.findOne({ email: userData.email });
  if (existingUser) {
    return NextResponse.json({ message: "이미 가입한 이메일입니다." });
  }

  const hashedPassword = await hashPassword(userData.password);
  userData.password = hashedPassword;
  userData.password_confirm = hashedPassword;

  try {
    await connectDB();

    const newUser = new UserModel(userData);
    await newUser.save();
    return NextResponse.json({ message: "회원가입 성공" });
  } catch (error) {
    return NextResponse.json({ message: "회원가입 실패" });
  }
}
