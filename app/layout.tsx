import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clerk Auth MVP",
  description: "Testing Clerk authentication flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Wrap the entire application with ClerkProvider
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {/* Your ThemeProvider remains to handle dark/silver mode */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}