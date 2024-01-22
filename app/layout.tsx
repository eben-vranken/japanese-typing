import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Japanese Practice",
  description: "Practice your japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-body h-screen text-white/85 flex flex-col items-center justify-between [&>*]:w-[95%] ${inter.className}`}>
        {/* Navbar */}
        <Navbar />

        {/* Page element */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
