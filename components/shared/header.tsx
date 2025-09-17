import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Header(){
    return(
        <header className = "py-4 px-4 sm:px-6 lg:px-8 border-b">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    AuthFlow
                </Link>
                <div className="flex items-center gap-x-4">
                    <ThemeToggle/>
                    <Link href="/sign-in">
                        <Button variant="ghost">
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button>
                            Get Started 
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}