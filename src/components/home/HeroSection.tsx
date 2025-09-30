"use client";

import { animations } from "@/constants/animations";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      {/* Decorative blobs */}
      <div className="absolute top-10 -left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-bounce" />

      <div className="relative z-10 px-6 md:px-16 py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Content */}
        <motion.div
          className="lg:w-[45%] space-y-6 text-center lg:text-left"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-blue-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            We treat each customer as an individual
            <br />
            <span className="text-blue-700">not a number</span>
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover the{" "}
            <span className="font-semibold text-blue-700">best loan offers</span>{" "}
            through our trusted partners. Simplify your journey today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/contact">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition">
                🚀 Apply Now
              </button>
            </Link>
            <Link href="/loans">
              <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-700 text-blue-700 rounded-full font-semibold text-base md:text-lg hover:bg-blue-50 hover:scale-105 transition">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Lottie Animation */}
        <motion.div
          className="lg:w-[55%] flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="relative">
            <Lottie
              animationData={animations.consulting}
              loop
              autoplay
              className="w-[95%] max-w-2xl drop-shadow-xl"
            />
            {/* Floating glow effects */}
            <div className="absolute -z-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-40 top-8 left-8 animate-pulse" />
            <div className="absolute -z-10 w-72 h-72 bg-indigo-300 rounded-full blur-2xl opacity-30 bottom-4 right-4 animate-ping" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
