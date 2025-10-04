"use client";

import React, { memo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { images } from "@/constants/images";
import Image from "next/image";

type PageType = "home" | "emi-calculator" | "explore-loans" | "contact";

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const quickLinks = [
  { label: "Home", page: "home" as PageType },
  { label: "Explore Loans", page: "explore-loans" as PageType },
  { label: "EMI Calculator", page: "emi-calculator" as PageType },
  { label: "Contact Us", page: "contact" as PageType },
];

const loanTypes = [
  "Home Loans",
  "Business Loans",
  "Personal Loans",
  "NRI Loans",
  "Property Loans",
  "Mortgage Loans",
];

const services = [
  "Loan Portfolio Preparation",
  "Documentation Support",
  "Bank Liaison",
  "Credit Score Improvement",
  "Financial Consultation",
  "Legal Assistance",
];

function FooterComponent({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-600/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-extrabold text-white">
            Access<span className="text-blue-400">Finmart</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner for loan portfolio preparation. 
            We help individuals and businesses secure loans with expert 
            guidance and complete documentation support.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 shrink-0" />
              <span>+91 9946764100 <br /> +91 8606494100</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 shrink-0" />
              <span>
                sales@accessfinmart.com <br />
                operations@accessfinmart.com <br />
                admin@accessfinmart.com
              </span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
              <span>
                P.G BUILDING, APSARA JUNCTION,<br />
                A.C ROAD, CHERTHALA,<br />
                PIN - 688521, Kerala
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => onNavigate(link.page)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Loan Types */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Loan Types</h4>
          <ul className="space-y-3">
            {loanTypes.map((loan) => (
              <li key={loan}>
                <button
                  onClick={() => onNavigate("explore-loans")}
                  className="hover:text-blue-400 transition-colors"
                >
                  {loan}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service}>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-blue-400 transition-colors"
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} AccessFinmart. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/accessfinmart/"
              className="p-2 bg-white/10 rounded-full hover:bg-blue-500 hover:text-white transition transform hover:scale-110"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/accessfinmart/"
              className="p-2 bg-white/10 rounded-full hover:bg-pink-500 hover:text-white transition transform hover:scale-110"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://jsdl.in/DT-12YA6AY6Y2A"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-white rounded-full hover:scale-110 transition"
            >
              <Image
                src={images.justDial}
                alt="Justdial Logo"
                width={28}
                height={28}
                className="rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const FooterSection = memo(FooterComponent);
