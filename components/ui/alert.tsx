"use client";
import { RootState } from "@/store";
import { alertActions } from "@/store/alert";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

type Status = "success" | "pending" | "failure";

interface AlertProps {
  message: string;
  status: Status;
}

export function AlertComponent({ message, status }: AlertProps) {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const bgClasses = {
    success: "bg-emerald-300",
    pending: "bg-amber-300",
    failure: "bg-red-400",
  }[status];

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

export default function Alert() {
  const { status, message } = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "success" || status === "failure") {
      const timer = setTimeout(() => {
        dispatch(alertActions.setAlertState({ status: null, message: "" }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, dispatch]);

  return status ? <AlertComponent status={status} message={message} /> : null;
}
