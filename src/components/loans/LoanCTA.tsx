"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface LoanCTAProps {
  onNavigate: (page: "home" | "emi-calculator" | "explore-loans" | "contact") => void;
}

export default function LoanCTA({ onNavigate }: LoanCTAProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Not Sure Which Loan is Right for You?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Our loan experts will analyze your needs and recommend the best loan options with the highest approval chances
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-gray-100"
          onClick={() => onNavigate("contact")}
        >
          Get Expert Consultation
        </Button>
      </div>
    </div>
  );
}
