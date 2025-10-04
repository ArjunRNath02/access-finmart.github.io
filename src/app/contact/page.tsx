"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  User,
  Send,
  Users,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { images } from "@/constants/images";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9946764100", "+91 8606494100"],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "sales@accessfinmart.com",
      "operations@accessfinmart.com",
      "admin@accessfinmart.com",
    ],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["","HQ: FIRST FLOOR, VYAPARA BHAVAN, Palarivattom Junction, Palarivattom", "Ernakulam, Kerala","BRANCH: P.G BUILDING, APSARA JUNCTION, Cherthala, Kerala"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon–Sat: 9 AM – 6 PM", "Sun: 10 AM – 4 PM"],
  },
];

const teamInfo = [
  { name: "Shyam", mail: "shyam@accessfinmart.com", color: "bg-green-500" },
  { name: "Sajith", mail: "sajith@accessfinmart.com", color: "bg-blue-500" },
  { name: "Sangeetha", mail: "sangeetha@accessfinmart.com", color: "bg-yellow-500" },
];


const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "918606494100";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello, my name is ${name}. ${message}`
  )}`;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Let’s Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to help you with personalized guidance and loan portfolio
            preparation. Reach out today and let’s start your journey.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-12">
            {/* WhatsApp Form */}
            <Card className="backdrop-blur-xl bg-white/70 shadow-xl border-0 rounded-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  Chat on WhatsApp
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none bg-white/80"
                  />
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none bg-white/80"
                  />
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white rounded-xl px-8"
                  >
                    <a href={whatsappLink} target="_blank">
                      <Send className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Section */}
            <motion.div {...fadeInUp(0.3)}>
              <Card className="shadow-xl border-none bg-white rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-900">
                    Our Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {teamInfo.map((member, index) => (
                      <motion.div
                        key={member.name}
                        {...fadeInUp(index * 0.1)}
                        className="flex flex-col items-center bg-blue-50 rounded-xl p-6 hover:shadow-lg transition"
                      >
                        <div
                          className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center mb-4 shadow-md`}
                        >
                          <User className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <a
                          href={`mailto:${member.mail}`}
                          className="text-blue-600 text-sm hover:underline mt-1"
                        >
                          {member.mail}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="space-y-10">
            {/* Contact Details */}
            <Card className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border-0">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Info
                </h2>
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {info.title}
                      </h4>
                      {info.details.map((d, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {d}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl border-0">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
                {[
                  { icon: Users, text: "500+ Satisfied Clients" },
                  { icon: Shield, text: "98% Loan Approval Rate" },
                  { icon: Award, text: "Certified Expert Team" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Visit Our Office */}
            <motion.div {...fadeInUp(0.4)}>
              <a
                href="https://www.google.com/maps?q=ACCESS+FINMART,+PG+Building+Apsara+Junction,+AC+Rd,+Chakkarakulam,+Cherthala,+Kerala+688524"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="shadow-2xl border-none rounded-2xl overflow-hidden group cursor-pointer transform transition hover:scale-[1.02]">
                  <div className="relative h-56 w-full">
                    <Image
                      src={images.smallBusinessLoan}
                      alt="Visit Access Finmart Office"
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-6 h-6 text-red-400" />
                        <h4 className="font-bold text-xl">Visit Our Office</h4>
                      </div>
                      <p className="text-sm opacity-90">
                        ACCESS FINMART, PG Building Apsara Junction, Cherthala
                      </p>
                      <span className="inline-block mt-3 px-4 py-2 text-sm font-medium bg-white/20 backdrop-blur-md rounded-lg border border-white/30 group-hover:bg-white/30 transition">
                        Open in Maps →
                      </span>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
