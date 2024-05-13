import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="grid grid-cols-1 justify-items-center place-content-center h-full">
      <p className="text-sm font-medium text-slate-600">404</p>
      <h1 className="p-3 text-3xl font-bold text-error">
        페이지를 찾을 수 없습니다.
      </h1>
      <Link href={"/"}>홈으로 돌아가기</Link>
    </div>
  );
}
