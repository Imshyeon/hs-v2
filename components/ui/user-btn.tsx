import Link from "next/link";
import { Button } from "@nextui-org/button";

interface UserLinkBtnProps {
  href1: string;
  title1: string;
  href2: string;
  title2: string;
}
export default function UserLinkBtn({
  href1,
  title1,
  href2,
  title2,
}: UserLinkBtnProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="border w-2/3 text-center"></div>
      <Link href={href1} className="text-sm text-center rounded-xl">
        {title1}
      </Link>
      <Link href={href2} className="text-sm text-center rounded-xl">
        {title2}
      </Link>
    </div>
  );
}
