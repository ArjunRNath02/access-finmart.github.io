/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import LoanCard from "./LoanCard";

interface LoanGridProps {
  loans: any[];
  onNavigate: (page: "home" | "emi-calculator" | "explore-loans" | "contact") => void;
}

export default function LoanGrid({ loans, onNavigate }: LoanGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {loans.map((loan, index) => (
        <LoanCard key={loan.id} loan={loan} index={index} onNavigate={onNavigate} />
      ))}
    </div>
  );
}
