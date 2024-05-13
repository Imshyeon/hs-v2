export default function DetailPageLoading() {
  return (
    <div className="animate-pulse h-screen space-y-10">
      <section className="space-y-2">
        <div className="h-12 w-2/5 rounded-2xl bg-default-200"></div>
        <div className="flex space-x-1">
          <div className="h-7 w-1/5 rounded-2xl bg-default-200"></div>
          <div className="h-7 w-1/5 rounded-2xl bg-default-200"></div>
          <div className="h-7 w-1/5 rounded-2xl bg-default-200"></div>
        </div>
      </section>
      <section className="space-y-2">
        <div className="h-8 w-2/5 rounded-2xl bg-default-200"></div>
        <div className="h-48 w-full rounded-lg bg-default-200"></div>
      </section>
      <section className="space-y-2">
        <div className="h-8 w-2/5 rounded-2xl bg-default-200"></div>
        <div className="h-48 w-full rounded-lg bg-default-200"></div>
      </section>
      <section className="flex justify-end">
        <div className="h-7 w-1/5 rounded-2xl bg-default-200"></div>
      </section>
    </div>
  );
}
