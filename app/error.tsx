"use client";
import { Button } from "@nextui-org/button";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="grid grid-cols-1 justify-items-center place-content-center h-full">
      <p className="text-sm font-medium text-slate-600">{error.name}</p>
      <h1 className="p-3 text-3xl font-bold text-error">{error.message}</h1>
      <Button onClick={() => reset()}>재시도</Button>
    </div>
  );
}
