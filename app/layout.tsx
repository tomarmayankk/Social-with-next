import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socials",
  description: "Share your experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
          <html lang="en">
      <body className={`${inter.className} bg-[#e5ecfb] min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-1 w-full">
          <main className="max-w-6xl mx-auto">
          {children}
          <Toaster position="top-right" />
          </main>
        </div>
        </body>
    </html>
    </ClerkProvider>
  );
}
