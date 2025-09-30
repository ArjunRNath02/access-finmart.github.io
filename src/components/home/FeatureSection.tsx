"use client";

import React from 'react';
import { 
  Users, 
  Shield, 
  Clock, 
  HeartHandshake, 
  FileCheck, 
  TrendingUp,
  Award,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Users, title: 'Expert Guidance', description: 'Certified financial professionals with years of banking experience guide you through every step.', color: 'blue' },
  { icon: Shield, title: 'Legal & Technical Support', description: 'Complete documentation support ensuring all legal and technical requirements are met.', color: 'green' },
  { icon: Clock, title: 'Quick Processing', description: 'Fast-track your loan portfolio preparation with our streamlined processes and expert team.', color: 'purple' },
  { icon: HeartHandshake, title: 'Personalized Service', description: 'Tailored solutions based on your specific loan requirements and financial goals.', color: 'orange' },
  { icon: FileCheck, title: 'Complete Documentation', description: 'End-to-end documentation service covering all aspects of loan portfolio preparation.', color: 'red' },
  { icon: TrendingUp, title: 'High Success Rate', description: '98% approval rate with our meticulously prepared loan portfolios and bank relationships.', color: 'teal' },
  { icon: Award, title: 'Quality Assurance', description: 'Multiple quality checks and reviews to ensure your portfolio meets the highest standards.', color: 'indigo' },
  { icon: Phone, title: '24/7 Support', description: 'Round-the-clock customer support to address any queries during the preparation process.', color: 'pink' }
];

export function FeatureSection() {

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      teal: 'bg-teal-100 text-teal-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      pink: 'bg-pink-100 text-pink-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LoanPortfolio Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive loan portfolio preparation services with expert guidance, ensuring your success with banks
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Simple 4-Step Process
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get your loan portfolio ready in just 4 easy steps
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Free initial consultation to understand your requirements' },
              { step: '02', title: 'Documentation', description: 'Gather and prepare all necessary documents and paperwork' },
              { step: '03', title: 'Portfolio Creation', description: 'Create comprehensive loan portfolio tailored to banks' },
              { step: '04', title: 'Bank Submission', description: 'Submit portfolio to partnered banks for approval' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 120 }}
                className="text-center bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
