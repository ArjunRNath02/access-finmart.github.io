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
  { value: "500+", label: "Successful Cases" },
];

export const HeroSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-between overflow-hidden">
      {/* Background Banner */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.banner}
          alt="Finance Hero Background"
          fill
          priority
          className="object-cover"
        />
     
        {/* <div className="absolute bottom-0 left-0 w-full h-[100px] backdrop-blur bg-gradient-to-b from-transparent via-white/50 to-white " /> */}
      </div>

      {/* Decorative Modern Flares */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-400/20 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-10 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-indigo-500/30 to-blue-300/20 rounded-full blur-[140px] -z-0" />
      <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full blur-[100px] -z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-6 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="absolute h-[1000px] inset-0 backdrop-blur-[5px] rounded-3xl -z-10" />
        {/* Left Content */}
        <motion.div
          className="lg:w-[45%] space-y-6 text-center lg:text-left text-gray-900"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-l from-white via-blue-700 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
           Your Gateway to <span className="bg-gradient-to-br from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              50+ Banks
            </span> & NBFCs
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover the{" "}
            <span className="font-semibold text-blue-500">
              best loan offers
            </span>{" "}
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
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition">
                🚀 Apply Now
              </button>
            </Link>
            <Link href="/loans">
              <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-600 text-blue-700 rounded-full font-semibold text-base md:text-lg hover:bg-blue-50 hover:scale-105 transition">
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
            <div className="absolute inset-0 w-full h-full bg-gradient-radial from-blue-200/40 to-transparent blur-3xl rounded-full -z-10" />
            <Lottie
              animationData={animations.consulting}
              loop
              autoplay
              className="w-[95%] max-w-2xl drop-shadow-2xl"
            />
            {/* Floating Experience Animation */}
            <div className="absolute -top-20 -right-30">
              <ExperienceAnimation />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-16 pb-16 -mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className=" backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition border border-gray-100"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-extrabold text-5xl text-blue-700">
              {stat.value}
            </p>
            <p className="font-medium text-lg text-gray-600 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
