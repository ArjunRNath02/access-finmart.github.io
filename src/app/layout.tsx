import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/lib/FooterWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Access Finmart",
  description: "A new generation loan access method",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="antialiased text-gray-900 bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#e4e1e1] min-h-screen flex flex-col"
      >
        <Navbar />

        <main className="flex-1">{children}</main>

        <FooterWrapper />
      </body>
    </html>
  );
}
