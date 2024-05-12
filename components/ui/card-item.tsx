import Image from "next/image";
import Link from "next/link";

interface CardItemProps {
  id: string;
  title: string;
  date: string | string[];
  image: string;
  category: string;
  article?: boolean;
}
export default function CardItem({
  id,
  title,
  date,
  image,
  category,
  article,
}: CardItemProps) {
  const slug = title.replace(" ", "-");
  return (
    <Link href={article ? `/articles/${slug}` : `/user/schedules/${slug}`}>
      <div id={id} className="bg-scheduleContentBox/50 rounded-xl p-3 h-full">
        <div className="flex gap-3 justify-between p-3 h-1/6">
          <span className="text-xs text-slate-900 font-thin dark:text-zinc-100">
            {category}
          </span>
          <span className="text-xs text-slate-900 font-thin dark:text-zinc-100">
            {date}
          </span>
        </div>
        <div className="flex flex-col relative h-5/6">
          <Image
            src={image ? image : "/pandas.jpeg"}
            alt={image ? image : "default img"}
            width={500}
            height={200}
            className="rounded-xl justify-center items-center object-cover h-4/5"
          />
          <p className="text-md font-medium text-center mt-2">{title}</p>
        </div>
      </div>
    </Link>
  );
}
