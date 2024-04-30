import Image from "next/image";
import Link from "next/link";

interface CardItemProps {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
}
export default function CardItem({
  id,
  title,
  date,
  image,
  category,
}: CardItemProps) {
  return (
    <Link href={"/user/schedules/영국-여행"}>
      <div id={id} className="bg-scheduleContentBox/50 rounded-xl p-5 ">
        <div className="flex gap-3 justify-between">
          <span className="text-xs text-slate-900 font-thin">{category}</span>
          <span className="text-xs text-slate-900 font-thin">{date}</span>
        </div>
        <Image src={image} alt={image} width={500} height={200} />
        <p className="text-md font-medium text-center mt-2">{title}</p>
      </div>
    </Link>
  );
}
