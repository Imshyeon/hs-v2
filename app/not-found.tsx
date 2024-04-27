import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className="grid grid-cols-1 justify-items-center place-content-center h-full">
      <p className="text-sm font-medium text-slate-600">404</p>
      <h1 className="p-3 text-3xl font-bold text-error">
        페이지를 찾을 수 없습니다!
      </h1>
      <Link
        href={"/"}
        id="home"
        className="flex items-center mt-4 p-2 hover:bg-slate-200/20 rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-sidebar-btn hover:fill-zinc-600"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        로 되돌아가기
      </Link>
    </div>
  );
}
