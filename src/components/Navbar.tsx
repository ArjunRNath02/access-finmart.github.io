"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { images } from "@/constants/images";

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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <nav className="w-full flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={images.logo}
            className="size-12 group-hover:scale-110 transition-transform"
            alt="Logo"
          />
          <span className="font-extrabold text-2xl bg-gradient-to-r from-blue-700 via-violet-900 to-blue-700 bg-clip-text text-transparent group-hover:opacity-80">
            Access Finmart
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 relative">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-md font-medium transition-colors ${
                  isActive
                    ? "bg-blue-800 text-gray-200"
                    : "text-gray-800 hover:text-blue-700"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 rounded-md bg-blue-800"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
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

      {/* Mobile Drawer */}
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
              className="fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col p-6"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-8 border-b pb-4">
                <span className="text-lg font-bold text-blue-900">Menu</span>
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
                        className={`relative block px-4 py-2 rounded-md text-lg font-medium ${
                          isActive
                            ? "bg-blue-800 text-gray-200"
                            : "text-gray-800 hover:text-blue-700 hover:bg-blue-100"
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
