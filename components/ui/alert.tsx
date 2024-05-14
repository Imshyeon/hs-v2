import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Status = "success" | "pending" | "failure";

interface AlertProps {
  message: string;
  status: Status;
}

export default function Alert({ message, status }: AlertProps) {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  let bgClasses = "";
  if (status === "success") {
    bgClasses = "bg-emerald-300";
  } else if (status === "failure") {
    bgClasses = "bg-red-400";
  } else {
    bgClasses = "bg-amber-300";
  }

  return createPortal(
    <div
      className={`w-1/5 h-auto absolute top-2 right-2 border dark:border-black shadow-lg rounded-lg ${bgClasses}`}
    >
      <div>
        <>
          <p className="px-4 py-2 text-center dark:text-black">
            {message ||
              "Make beautiful websites regardless of your design experience."}
          </p>
        </>
      </div>
    </div>,
    document.getElementById("notifications") as HTMLDivElement
  );
}
