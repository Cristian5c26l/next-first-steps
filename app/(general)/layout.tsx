import { Navbar } from "@/components";


export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24 border border-solid border-red-600">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}