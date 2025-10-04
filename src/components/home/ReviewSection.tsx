"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function ReviewSection() {
  const testimonials = [
    {
      name: "Muraleedharanharikrishnan Harikrishnan",
      site: "Google Maps",
      rating: 5,
      quote:
        "I recently worked with ACCESS FINMART and they made the entire borrowing process so easy. The staff were friendly, professional, and patient in explaining all the loan options. Clear communication, no hidden surprises. Highly recommend!",
    },
    {
      name: "KRISHNAN",
      site: "Justdial",
      rating: 5,
      quote:
        "Access Finmart provides excellent services with quick response. The team is highly professional and knowledgeable. I highly recommend their services.",
    },
    {
      name: "Vidya Panicker",
      site: "Google Maps",
      rating: 5,
      quote: "Excellent service for property purchase loan. Great teamwork 😍",
    },
    {
      name: "Jankiv Krishna",
      site: "Google Maps",
      rating: 5,
      quote: "Good at NRI loan service in Alappuzha 👍🏻",
    },
    {
      name: "Sivasankar Venu",
      site: "Google Maps",
      rating: 5,
      quote: "Best home loan service in Alappuzha.",
    },
    {
      name: "Mohamed Maheen",
      site: "Google Maps",
      rating: 4,
      quote: "Good loan services overall.",
    },
  ];

  const metrics = [
    { value: "4.9/5", label: "Average Rating", color: "from-blue-500 to-indigo-500" },
    { value: "500+", label: "Happy Clients", color: "from-green-500 to-emerald-500" },
    { value: "98%", label: "Success Rate", color: "from-purple-500 to-pink-500" },
    { value: "₹50+ Cr", label: "Loans Facilitated", color: "from-orange-500 to-amber-500" },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <section className="py-16">
      {/* Decorative background quote */}
      <Quote className="absolute top-20 left-10 w-32 h-32 text-gray-100 opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from satisfied clients who trusted us with their financial journey.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">{renderStars(t.rating)}</div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed italic mb-6">
                “{t.quote}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.site}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 text-center text-white bg-gradient-to-tr ${m.color} shadow-lg hover:shadow-xl`}
            >
              <div className="text-3xl font-extrabold mb-2">{m.value}</div>
              <div className="text-sm tracking-wide">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
