"use client";

import { animations } from "@/constants/animations";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/images";
import { ExperienceAnimation } from "./ExperienceAnimation";

const stats = [
  { value: "50+", label: "Partner Banks" },
  { value: "98%", label: "Approval Rate" },
  { value: "10,000+", label: "Happy Customers" },
];

// Reusable fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2 },
  }),
};

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Banner */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.banner}
          alt="Finance Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px]" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-24 -left-24 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-indigo-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-12 right-0 w-[22rem] h-[22rem] bg-gradient-to-tr from-indigo-500/30 to-blue-300/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 flex-1 px-6 md:px-12 lg:px-16 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="lg:w-[45%] space-y-6 text-center lg:text-left text-gray-900"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight 
            bg-gradient-to-l from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
            variants={fadeUp}
          >
            Your Gateway to{" "}
            <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              50+ Banks
            </span>{" "}
            & NBFCs
          </motion.h1>

          <motion.p
            className="text-gray-800 text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
            variants={fadeUp}
            custom={1}
          >
            Discover the{" "}
            <span className="font-semibold text-blue-700">
              best loan offers
            </span>{" "}
            through our trusted partners. Simplify your journey today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4"
            variants={fadeUp}
            custom={2}
          >
            <Link href="/contact">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 
              hover:from-blue-700 hover:to-indigo-800 text-white rounded-full font-semibold text-base md:text-lg 
              shadow-lg hover:shadow-xl hover:scale-105 transition">
                🚀 Apply Now
              </button>
            </Link>
            <Link href="/loans">
              <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-700 text-gray-900 
              rounded-full font-semibold text-base md:text-lg hover:bg-blue-50 hover:scale-105 transition">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          className="lg:w-[55%] flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-violet-500/40 via-blue-500/40 to-violet-400/70 blur-2xl rounded-full -z-10" />

            <Lottie
              animationData={animations.consulting}
              loop
              autoplay
              className="w-[95%] max-w-2xl drop-shadow-2xl"
            />

            {/* Floating Experience Animation */}
            <div className="absolute -top-12 -right-16 sm:-top-16 sm:-right-20 md:-top-20 md:-right-28 scale-75 sm:scale-90 md:scale-100">
              <ExperienceAnimation />
            </div>
          </div>

        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pb-16 -mt-6 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center 
            shadow-lg hover:shadow-xl hover:scale-105 transition border border-gray-200 bg-white/80"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <p className="font-extrabold text-4xl md:text-5xl text-blue-800">
              {stat.value}
            </p>
            <p className="font-medium text-lg text-gray-800 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
