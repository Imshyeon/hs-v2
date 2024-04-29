export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-center h-full p-10">
      {children}
    </section>
  );
}
