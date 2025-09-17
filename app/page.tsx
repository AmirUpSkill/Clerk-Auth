import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <section className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              Seamless Authentication for Modern Apps
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              This is a hands-on project to master serverless authentication in
              Next.js. We are testing the power and simplicity of Clerk for a
              robust, secure, and fast user experience.
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started for Free →
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}