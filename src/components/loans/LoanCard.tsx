/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface LoanCardProps {
  loan: any;
  index: number;
  onNavigate: (page: "home" | "emi-calculator" | "explore-loans" | "contact") => void;
}

export default function LoanCard({ loan, index }: LoanCardProps) {
  const Icon = loan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-0 shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
        
        {/* Banner Image */}
        <div className="relative h-48 w-full">
          <Image
            src={loan.banner}
            alt={loan.title}
            fill
            className="object-cover rounded-t-2xl"
          />
          <div className="absolute top-3 left-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow">
            <Icon className="w-6 h-6 text-blue-700" />
          </div>
        </div>

        {/* Card Header */}
        <CardHeader className="pt-4 pb-2 px-6 border-b">
          <CardTitle className="text-lg md:text-xl font-bold text-gray-900">
            {loan.title}
          </CardTitle>
        </CardHeader>

        {/* Card Content */}
        <CardContent className="px-6 py-4 space-y-4">
          <p className="text-gray-600 leading-relaxed">{loan.description}</p>

          {/* Loan Details */}
          <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-4">
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
              <span className="text-sm text-gray-500">Max Amount:</span>
              <span className="font-semibold text-gray-900">{loan.maxAmount}</span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
              <span className="text-sm text-gray-500">Interest Rate:</span>
              <span className="font-semibold text-gray-900">{loan.interestRate}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
            <ul className="space-y-1">
              {loan.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
