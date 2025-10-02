"use client";

import React from "react";
import {
  Users,
  Shield,
  Clock,
  HeartHandshake,
  FileCheck,
  TrendingUp,
  Award,
  Phone,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Certified financial professionals with years of banking experience guide you through every step.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Legal & Technical Support",
    description:
      "Complete documentation support ensuring all legal and technical requirements are met.",
    color: "green",
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description:
      "Fast-track your loan portfolio preparation with our streamlined processes and expert team.",
    color: "purple",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description:
      "Tailored solutions based on your specific loan requirements and financial goals.",
    color: "orange",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description:
      "End-to-end documentation service covering all aspects of loan portfolio preparation.",
    color: "red",
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    description:
      "98% approval rate with our meticulously prepared loan portfolios and bank relationships.",
    color: "teal",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Multiple quality checks and reviews to ensure your portfolio meets the highest standards.",
    color: "indigo",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to address any queries during the preparation process.",
    color: "pink",
  },
];

export function FeatureSection() {
  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "bg-gradient-to-tr from-blue-100 to-blue-50 text-blue-600",
      green: "bg-gradient-to-tr from-green-100 to-green-50 text-green-600",
      purple: "bg-gradient-to-tr from-purple-100 to-purple-50 text-purple-600",
      orange: "bg-gradient-to-tr from-orange-100 to-orange-50 text-orange-600",
      red: "bg-gradient-to-tr from-red-100 to-red-50 text-red-600",
      teal: "bg-gradient-to-tr from-teal-100 to-teal-50 text-teal-600",
      indigo: "bg-gradient-to-tr from-indigo-100 to-indigo-50 text-indigo-600",
      pink: "bg-gradient-to-tr from-pink-100 to-pink-50 text-pink-600",
    };
    return colors[color] || colors.blue;
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
    hover: { scale: 1.05, y: -5 },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
    hover: { scale: 1.05 },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose AccessFinmart?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive loan portfolio preparation services with expert guidance, ensuring your success with banks.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border hover:shadow-lg cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(
                  feature.color
                )}`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 4-Step Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Simple 4-Step Process
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get your loan portfolio ready in just 4 easy steps
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free initial consultation to understand your requirements" },
              { step: "02", title: "Documentation", description: "Gather and prepare all necessary documents and paperwork" },
              { step: "03", title: "Portfolio Creation", description: "Create comprehensive loan portfolio tailored to banks" },
              { step: "04", title: "Bank Submission", description: "Submit portfolio to partnered banks for approval" },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
                className="text-center bg-white p-6 rounded-xl shadow-md border hover:shadow-lg cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-400 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
