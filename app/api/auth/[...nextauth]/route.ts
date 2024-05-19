import { verifyPassword } from "@/util/auth";
import { UserModel, connectDB } from "@/util/db-util";
import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

declare module "next-auth" {
  interface Session {
    user: {
      user_id: string;
    } & DefaultSession["user"];
  }

  interface User {
    user_id: string;
  }
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user_id: { label: "User ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          await connectDB();

          const user = await UserModel.findOne({
            user_id: credentials?.user_id,
          });

          if (!user) {
            throw new Error("유저를 찾을 수 없습니다.");
          }

          const isValid = await verifyPassword(
            credentials!.password,
            user.password
          );

          if (!isValid) {
            throw new Error("비밀번호가 잘못되었습니다.");
          }

          return (
            ({
              user_id: user.user_id,
              name: user.name,
              email: user.email,
            } as any) || null
          );
        } catch (error: any) {
          throw new Error(error.message || "로그인 실패");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
