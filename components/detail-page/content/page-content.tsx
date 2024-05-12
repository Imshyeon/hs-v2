import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

interface DetailPageContentProps {
  id: string;
  image: string;
  content: string;
  reference?: string;
}
export default function DetailPageContent({
  id,
  image,
  content,
  reference,
}: DetailPageContentProps) {
  return (
    <div id={id} className="relative flex gap-5 items-center p-2 mb-1">
      <Image
        src={image}
        alt={image}
        width={300}
        height={100}
        className="rounded-tl-lg rounded-br-lg"
      />
      <p>{content}</p>
      {/* 참고 링크 -> bootstrap의 popover처럼 모달을 이용해서..! */}
      {reference ? (
        <span className="absolute right-0 bottom-0 font-light p-2 text-slate-500 flex gap-1 items-center hover:text-slate-800 cursor-pointer dark:hover:text-white">
          <Popover placement="top">
            <PopoverTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
                  clipRule="evenodd"
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent>
              <Link href={`https://${reference}`}>{reference}</Link>
            </PopoverContent>
          </Popover>
        </span>
      ) : null}
    </div>
  );
}
