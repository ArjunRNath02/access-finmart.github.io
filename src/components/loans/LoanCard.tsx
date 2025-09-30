/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface LoanCardProps {
  loan: any;
  index: number;
  onNavigate: (page: "home" | "emi-calculator" | "explore-loans" | "contact") => void;
}

export default function LoanCard({ loan, index }: LoanCardProps) {
  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
    };
    return colors[color] || colors.blue;
  };

  const colorClasses = getColorClasses(loan.color);
  const Icon = loan.icon; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader className={`${colorClasses.bg} ${colorClasses.border} border-b`}>
          <div className="flex items-center justify-between">
            <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
              <Icon className={`w-6 h-6 ${colorClasses.text}`} /> {/* ✅ works now */}
            </div>
            <Badge variant="secondary" className={`${colorClasses.text} bg-white`}>
              {loan.interestRate}
            </Badge>
          </div>
          <CardTitle className="text-xl text-gray-900 mt-4">{loan.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-gray-600 leading-relaxed">{loan.description}</p>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Max Amount:</span>
              <span className="font-semibold text-gray-900">{loan.maxAmount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Interest Rate:</span>
              <span className="font-semibold text-gray-900">{loan.interestRate}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
            <ul className="space-y-1">
              {loan.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
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
