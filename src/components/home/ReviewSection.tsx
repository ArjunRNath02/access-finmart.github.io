"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export function ReviewSection() {
  const testimonials = [
    {
      name: "Muraleedharanharikrishnan Harikrishnan",
      site: "Google Maps",
      rating: 5,
      quote:
        "I recently worked with ACCESS FINMART [Loan Consultants] and they made the entire borrowing process so easy. The staff were very friendly, professional, and patient in explaining all the loan options available. I felt they really tailored the plan to my needs rather than pushing what’s convenient. Their communication was excellent — quick responses to my questions, clear paperwork, no hidden surprises. I’d highly recommend them to anyone looking for trusted loan advice.",
    },
    {
      name: "KRISHNAN",
      site: "Justdial",
      rating: 5,
      quote:
        "Access Finmart provides excellent services with quick and speedy response. The team is highly professional and knowledgeable, ensuring that all my requirements were met efficiently. I highly recommend their services for anyone looking for reliable solutions.",
    },
    {
      name: "vidya panicker",
      site: "Google Maps",
      rating: 5,
      quote: "Excellent service for property purchase loan.... Good team work 😍",
    },
    {
      name: "jankiv Krishna",
      site: "Google Maps",
      rating: 5,
      quote: "GOOD AT NRI LOAN SERVICE IN ALAPPUZHA... 👍🏻👆🏻 ACCESS FINMART",
    },
    {
      name: "sivasankar venu",
      site: "Google Maps",
      rating: 5,
      quote: "Best home loan service in alappuzha",
    },
    {
      name: "Mohamed Maheen",
      site: "Google Maps",
      rating: 4,
      quote: "good loan services",
    },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));

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
            What Our Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who successfully secured their loans with our expert guidance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">{renderStars(testimonial.rating)}</div>

                  {/* Quote */}
                  <div className="relative pl-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100" />
                    <p className="text-gray-700 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <span className="text-sm font-semibold text-gray-600">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.site}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4.9/5", label: "Average Rating", color: "from-blue-500 to-blue-400" },
            { value: "500+", label: "Happy Clients", color: "from-green-500 to-green-400" },
            { value: "98%", label: "Success Rate", color: "from-purple-500 to-purple-400" },
            { value: "₹50+ Cr", label: "Loans Facilitated", color: "from-orange-500 to-orange-400" },
          ].map((metric) => (
            <motion.div
              key={metric.label}
              className={`bg-gradient-to-tr ${metric.color} text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
