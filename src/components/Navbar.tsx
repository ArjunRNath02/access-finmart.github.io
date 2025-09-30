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
                className={`relative px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive
                    ? "text-blue-100 bg-blue-900"
                    : "text-gray-800 hover:text-blue-600 hover:bg-blue-300"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-600 rounded"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-xl z-50 flex flex-col p-6"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold text-blue-900">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-blue-900"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col gap-6">
                {links.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
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
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
