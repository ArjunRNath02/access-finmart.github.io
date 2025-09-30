import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900
        bg-gradient-to-b from-blue-500 via-white to-blue-100 min-h-screen`}
      >
        <Navbar />

        <main className="p-8">{children}</main>

        <FooterWrapper />
      </body>
    </html>
  );
}
