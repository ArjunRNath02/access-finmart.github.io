"use client"

import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  LucideInstagram,
  LucideFacebook,
} from 'lucide-react';
import { images } from '@/constants/images';
import Image from 'next/image';

type PageType = 'home' | 'emi-calculator' | 'explore-loans' | 'contact';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function FooterSection({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', page: 'home' as PageType },
    { label: 'Explore Loans', page: 'explore-loans' as PageType },
    { label: 'EMI Calculator', page: 'emi-calculator' as PageType },
    { label: 'Contact Us', page: 'contact' as PageType }
  ];

  const loanTypes = [
    'Home Loans',
    'Business Loans',
    'Personal Loans',
    'NRI Loans',
    'Property Loans',
    'Mortgage Loans'
  ];

  const services = [
    'Loan Portfolio Preparation',
    'Documentation Support',
    'Bank Liaison',
    'Credit Score Improvement',
    'Financial Consultation',
    'Legal Assistance'
  ];

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                AccessFinmart
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for loan portfolio preparation. We help individuals and businesses secure loans with our expert guidance and comprehensive documentation support.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 9946764100 <br/> +91 8606494100</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>sales@accessfinmart.com <br/> operations@accessfinmart.com <br/> admin@accessfinmart.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>P.G BUILDING, APSARA JUNCTION, <br />
                  A.C ROAD, CHERTHALA, <br />
                  PIN - 688521, Kerala
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Loan Types</h4>
            <ul className="space-y-3">
              {loanTypes.map((loan) => (
                <li key={loan}>
                  <button
                    onClick={() => onNavigate('explore-loans')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {loan}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 AccessFinmart. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/accessfinmart/"
                  className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
                >
                  <LucideFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/accessfinmart/"
                  className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
                >
                  <LucideInstagram size={20} />
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
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </a>
              </div>

              <div className="hidden md:flex space-x-6 text-sm text-gray-400">
                <button className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="hover:text-white transition-colors">
                  Terms of Service
                </button>
                <button className="hover:text-white transition-colors">
                  Disclaimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}