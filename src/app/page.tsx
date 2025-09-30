"use client"

import { FeatureSection } from "@/components/home/FeatureSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { ReviewSection } from "@/components/home/ReviewSection";
import { motion } from "framer-motion";


export default function HomePage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 md:px-20 pb-20">
        {[
          { value: "50+", label: "Partner Banks" },
          { value: "98%", label: "Approval Rate" },
          { value: "500+", label: "Successful Cases" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-extrabold text-5xl text-blue-900">{stat.value}</p>
            <p className="font-semibold text-xl text-gray-800 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

         {/* Banking Partners Section */}
      <section id="partners">
        <PartnerSection />
      </section>

      {/* Why Choose Section */}
      <section id="about" >
        <FeatureSection />
      </section>

      {/* Customers Section */}
      <section id="reviews" >
       <ReviewSection />
      </section>

    </div>
  );
}
