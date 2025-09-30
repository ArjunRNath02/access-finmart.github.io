"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideHandCoins, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/loans", label: "Explore Loans" },
    { href: "/emi", label: "EMI Calculator" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md ">
       <nav className="w-full flex items-center justify-between px-6 py-4">
        {/* Left: Logo + Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <LucideHandCoins
            size={34}
            className="text-blue-950 group-hover:scale-110 transition-transform"
          />
          <span className="font-extrabold text-2xl text-blue-950 group-hover:text-blue-100">
            Access Finmart
          </span>
        </Link>

        {/* Desktop Links + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 relative">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors relative ${
                    isActive ? "text-black font-semibold" : "text-gray-800 hover:text-blue-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-800"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md px-6 py-4 space-y-4"
          >
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block font-medium ${
                    isActive ? "text-blue-800" : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
