"use client";

import { motion, Variants } from 'framer-motion';
import React from 'react';

export function PartnerSection() {
  const partners = [
    { name: 'State Bank of India', logo: 'SBI' },
    { name: 'HDFC Bank', logo: 'HDFC' },
    { name: 'ICICI Bank', logo: 'ICICI' },
    { name: 'Axis Bank', logo: 'AXIS' },
    { name: 'Kotak Mahindra', logo: 'KOTAK' },
    { name: 'Punjab National Bank', logo: 'PNB' },
    { name: 'Bank of Baroda', logo: 'BOB' },
    { name: 'Yes Bank', logo: 'YES' },
  ];

  // Motion variants for staggered entrance
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }, 
    },
    hover: { scale: 1.05 },
  };

  return (
    <section className="py-16 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Banks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have established partnerships with major banks to ensure your loan portfolio meets their specific requirements
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={item}
              whileHover="hover"
              className="flex flex-col items-center space-y-3 cursor-pointer"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <span className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
                  {partner.logo}
                </span>
              </div>
              <span className="font-semibold text-center leading-tight">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
