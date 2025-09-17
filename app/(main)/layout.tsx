import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="text-2xl font-bold">
            Dashboard
          </Link>
          <UserButton />
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}