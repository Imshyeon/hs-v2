import Link from "next/link";
export default function Footer() {
  return (
    <footer className="h-32 bg-gradient-to-l from-[#E3E9E8] to-[#EDF2F1] flex flex-row-reverse">
      <div className="flex flex-col gap-3 py-4 px-8 justify-center">
        <Link href={"/tutorial"} className="hover:underline">
          Tutorial
        </Link>
        <Link href={"/articles"} className="hover:underline">
          Articles
        </Link>
      </div>
    </footer>
  );
}
