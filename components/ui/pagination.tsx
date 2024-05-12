import Link from "next/link";
export default function Pagination() {
  return (
    <nav className="mt-5 flex gap-2 justify-center items-center text-center text-zinc-500">
      <Link href={"#"} className="hover:text-black p-1 dark:hover:text-white">
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
        className="hover:text-black p-1 hover:underline hover:underline-offset-2 dark:hover:text-white"
      >
        1
      </Link>
      <Link
        href={"#"}
        className="hover:text-black p-1 hover:underline hover:underline-offset-2 dark:hover:text-white"
      >
        2
      </Link>
      <Link
        href={"#"}
        className="hover:text-black p-1 hover:underline hover:underline-offset-2 dark:hover:text-white"
      >
        3
      </Link>
      <Link href={"#"} className="hover:text-black p-1 dark:hover:text-white">
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
  );
}
