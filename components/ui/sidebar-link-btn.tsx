import Link from "next/link";

export default function SidebarLinkBtn() {
  return (
    <div className="px-3 mt-0 mb-4 flex gap-5 justify-center">
      <Link href={"/"} id="home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-sidebar-btn hover:fill-zinc-600"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      </Link>
      <Link href={"/user"} id="user">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-sidebar-btn hover:fill-zinc-600"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <div id="dark-mode">
        {/* off - 현재 화이트모드 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          className="fill-sidebar-btn hover:fill-zinc-600 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5" />
        </svg>

        {/* on - 현재 다크모드 */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          className="fill-white hover:fill-gray-100 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
        </svg> */}
      </div>
    </div>
  );
}
