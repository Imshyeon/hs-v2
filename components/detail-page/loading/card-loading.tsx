import { Card } from "@nextui-org/react";

export default function CardLoading() {
  return (
    <Card className="space-y-5 p-4" radius="lg">
      <div className="flex justify-between animate-pulse">
        <div className="h-1 w-1/5 rounded-lg bg-default-200"></div>
        <div className="h-1 w-1/5 rounded-lg bg-default-200"></div>
      </div>
      <div className="h-48 rounded-lg bg-default-300"></div>
      <div className="h-3 w-full rounded-lg bg-default-200"></div>
    </Card>
  );
}
