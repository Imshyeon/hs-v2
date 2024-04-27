// 전체 아티클 페이지
import Image from "next/image";
import Link from "next/link";
export default function AllArticles() {
  return (
    <div className="p-4 mt-2 flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold">ARTICLES</h1>
      <div id="articles">
        <select className="focus:outline-none font-semibold text-lg p-2">
          <option value="latest">최신순</option>
          <option value="oldest">생성순</option>
        </select>
        <section id="latest-content" className="grid grid-cols-3 gap-4 w-auto">
          <article>
            <div id="1" className="bg-scheduleContentBox/50 rounded-xl p-5">
              <div className="flex gap-3 justify-between">
                <span className="text-xs text-slate-900 font-thin">
                  유럽/영국
                </span>
                <span className="text-xs text-slate-900 font-thin">
                  2024-04-26
                </span>
              </div>
              <Image
                src={"/pandas.jpeg"}
                alt="cover-img"
                width={500}
                height={200}
              />
              <p className="text-md font-medium text-center mt-2">제목</p>
            </div>
          </article>
          <article>
            <div id="2" className="bg-scheduleContentBox/50 rounded-xl p-5">
              <div className="flex gap-3 justify-between">
                <span className="text-xs text-slate-900 font-thin">
                  유럽/영국
                </span>
                <span className="text-xs text-slate-900 font-thin">
                  2024-04-26
                </span>
              </div>
              <Image
                src={"/pandas.jpeg"}
                alt="cover-img"
                width={500}
                height={200}
              />
              <p className="text-md font-medium text-center mt-2">제목2</p>
            </div>
          </article>
          <article>
            <div id="3" className="bg-scheduleContentBox/50 rounded-xl p-5">
              <div className="flex gap-3 justify-between">
                <span className="text-xs text-slate-900 font-thin">
                  유럽/영국
                </span>
                <span className="text-xs text-slate-900 font-thin">
                  2024-04-26
                </span>
              </div>
              <Image
                src={"/pandas.jpeg"}
                alt="cover-img"
                width={500}
                height={200}
              />
              <p className="text-md font-medium text-center mt-2">제목3</p>
            </div>
          </article>
          <article>
            <div id="4" className="bg-scheduleContentBox/50 rounded-xl p-5">
              <div className="flex gap-3 justify-between">
                <span className="text-xs text-slate-900 font-thin">
                  유럽/영국
                </span>
                <span className="text-xs text-slate-900 font-thin">
                  2024-04-26
                </span>
              </div>
              <Image
                src={"/pandas.jpeg"}
                alt="cover-img"
                width={500}
                height={200}
              />
              <p className="text-md font-medium text-center mt-2">제목4</p>
            </div>
          </article>
        </section>
      </div>
      <nav className="mt-5 flex gap-2 justify-center items-center text-center text-zinc-500">
        <Link href={"#"} className="hover:text-black p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
          href={"#"}
          className="hover:text-black p-1 hover:underline hover:underline-offset-2"
        >
          1
        </Link>
        <Link
          href={"#"}
          className="hover:text-black p-1 hover:underline hover:underline-offset-2"
        >
          2
        </Link>
        <Link
          href={"#"}
          className="hover:text-black p-1 hover:underline hover:underline-offset-2"
        >
          3
        </Link>
        <Link href={"#"} className="hover:text-black p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
