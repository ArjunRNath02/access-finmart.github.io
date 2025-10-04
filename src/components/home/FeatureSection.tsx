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
      "Certified professionals with years of banking experience guide you through every step.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Legal & Technical Support",
    description:
      "Complete documentation support ensuring legal and technical requirements are met.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description:
      "Fast-track your loan portfolio with our streamlined processes and expert team.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description:
      "Tailored solutions based on your unique loan requirements and goals.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description:
      "End-to-end service covering every aspect of your loan portfolio.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    description:
      "98% approval rate with our meticulously prepared portfolios.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous reviews to ensure your portfolio meets the highest standards.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description:
      "Always-on customer support for any queries during the process.",
    gradient: "from-pink-500 to-fuchsia-500",
  },
];


const stepVariants: Variants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } }, hover: { scale: 1.05 }, };


export function FeatureSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose AccessFinmart?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive loan portfolio preparation services 
            with expert guidance, ensuring your success with banks.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-tr ${f.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
              >
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
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
