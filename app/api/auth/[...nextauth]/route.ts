import { verifyPassword } from "@/util/auth";
import { UserModel, connectDB } from "@/util/db-util";
import { DefaultSession, User } from "next-auth";
import NextAuth from "next-auth/next";
import { Awaitable } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      user_id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    user_id: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user_id: string;
    role: string;
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
      async authorize(credentials): Promise<User | null> {
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
          console.log("user=>", user);

          return user;
        } catch (error: any) {
          throw new Error(error.message || "로그인 실패");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        session.user.user_id = token.user_id;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user_id = user.user_id;
        token.role = user.role;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
