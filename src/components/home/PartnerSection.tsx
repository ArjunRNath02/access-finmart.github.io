"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

export function PartnerSection() {
  const partners = [
    { name: "State Bank of India", logo: "SBI" },
    { name: "HDFC Bank", logo: "HDFC" },
    { name: "ICICI Bank", logo: "ICICI" },
    { name: "Axis Bank", logo: "AXIS" },
    { name: "Kotak Mahindra", logo: "KOTAK" },
    { name: "Punjab National Bank", logo: "PNB" },
    { name: "Bank of Baroda", logo: "BOB" },
    { name: "Yes Bank", logo: "YES" },
  ];

  // Motion variants
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by India’s Leading Banks
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Our partnerships with top banks ensure that you always get
            transparent, reliable, and competitive loan solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-12 place-items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={item}
              whileHover="hover"
              className="flex flex-col items-center space-y-3 group"
            >
              {/* Logo Badge */}
              <div className="w-24 h-24 flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 group-hover:border-blue-500 transition">
                <span className="text-lg font-bold text-gray-500 group-hover:text-blue-600 transition-colors">
                  {partner.logo}
                </span>
              </div>

              {/* Bank Name */}
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
