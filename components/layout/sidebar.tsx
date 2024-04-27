import SidebarLinkBtn from "../ui/sidebar-link-btn";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="flex flex-col flex-grow-0 flex-shrink relative w-60 text-center p-8 bg-layout-sidebar-default z-10">
      <SidebarLinkBtn />
      <ul className="flex flex-col gap-5 mt-8">
        <li className="rounded-md p-2 hover:font-semibold cursor-pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="rounded-md p-2 hover:font-semibold cursor-pointer">
          여행2
        </li>
      </ul>
      <ul className="absolute inset-x-0 bottom-1 flex flex-col space-y-1">
        <Link href={"/login"} className="hover:bg-white p-2">
          로그인/로그아웃
        </Link>
        <Link href={"/signup"} className="hover:bg-white p-2">
          회원가입
        </Link>
      </ul>
    </nav>
  );
}
