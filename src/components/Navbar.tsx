"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideHandCoins, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/loans", label: "Explore Loans" },
    { href: "/emi", label: "EMI Calculator" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex relative overflow-hidden">
      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: mobileOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed md:static top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-50 flex flex-col p-6"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-bold text-blue-900">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-gray-600 hover:text-blue-900 md:hidden"
          >
            <X size={28} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-lg font-medium ${
                  isActive
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Main Content (Navbar + Page) */}
      <motion.div
        animate={{ x: mobileOpen ? "70%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex-1 min-h-screen bg-gray-50"
      >
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-md">
          <nav className="w-full flex items-center justify-between px-6 py-4">
            {/* Left: Logo + Name */}
            <Link href="/" className="flex items-center gap-2 group">
              <LucideHandCoins
                size={34}
                className="text-blue-900 group-hover:scale-110 transition-transform"
              />
              <span className="font-extrabold text-2xl bg-gradient-to-r from-violet-900 via-violet-600 to-blue-900 bg-clip-text text-transparent group-hover:opacity-80">
                Access Finmart
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md font-medium transition-colors ${
                      isActive
                        ? "text-blue-100 bg-blue-900"
                        : "text-gray-800 hover:text-blue-600 hover:bg-blue-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-900"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </motion.div>
    </div>
  );
};

export default Navbar;
