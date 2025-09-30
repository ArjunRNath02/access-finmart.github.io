"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/constants/images";
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
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
      "General Inquiries: sales@accessfinmart.com",
      "Operations: operations@accessfinmart.com",
      "Administration: admin@accessfinmart.com",
    ],
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "P.G BUILDING, APSARA JUNCTION",
      "A.C ROAD, CHERTHALA, PIN - 688521, Kerala, India",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Saturday: 9:00 AM - 6:00 PM",
      "Sunday: 10:00 AM - 4:00 PM",
    ],
  },
];

const teamInfo = [
  { name: "Shyam", mail: "shyam@accessfinmart.com", color: "bg-green-500" },
  { name: "Sajith", mail: "sajith@accessfinmart.com", color: "bg-blue-500" },
  { name: "Sangeetha", mail: "sangeetha@accessfinmart.com", color: "bg-yellow-500" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "918606494100";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello, my name is ${name}. ${message}`
  )}`;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to start your loan journey? Contact our expert team for personalized guidance and
            portfolio preparation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* WhatsApp Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Chat with us on WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reach out instantly on WhatsApp. Fill in your details, and we’ll get back to you
                  quickly.
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                  >
                    <Send className="w-5 h-5" /> Send via WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Our Team Section */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-900">Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {teamInfo.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md"
                    >
                      {/* User Icon in Colored Circle */}
                      <div
                        className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center mb-4 shadow`}
                      >
                        <User className="w-8 h-8 text-white" />
                      </div>
                      {/* Name */}
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      {/* Mail */}
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
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex space-x-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-lg border-0 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Users, text: "500+ Satisfied Clients" },
                  { icon: Shield, text: "98% Loan Approval Rate" },
                  { icon: Award, text: "Expert Certified Team" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-900">{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Image */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={images.contactImage}
                  alt="Modern office building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Visit Our Office</h4>
                  <p className="text-sm opacity-90">APSARA JUNCTION, CHERTHALA</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
