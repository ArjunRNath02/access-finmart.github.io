/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import PieChartSection from "@/components/emi/PieChartSection";
import BarChartSection from "@/components/emi/BarChartSection";
import LoanTips from "@/components/emi/LoanTips";
import CTASection from "@/components/emi/CTASection";
import CalculatorInputs from "@/components/emi/CalculatorInputs";
import { ResultCards } from "@/components/emi/ResultCard";
import { useRouter } from "next/navigation";

export default function EMICalculatorPage() {
  const router = useRouter();
  
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(10);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = tenure * 12;

    if (rate === 0) {
      const calculatedEmi = principal / time;
      setEmi(calculatedEmi);
      setTotalInterest(0);
      setTotalAmount(principal);
    } else {
      const calculatedEmi =
        (principal * rate * Math.pow(1 + rate, time)) /
        (Math.pow(1 + rate, time) - 1);
      const calculatedTotalAmount = calculatedEmi * time;
      const calculatedTotalInterest = calculatedTotalAmount - principal;

      setEmi(calculatedEmi);
      setTotalInterest(calculatedTotalInterest);
      setTotalAmount(calculatedTotalAmount);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const pieData = [
    { name: "Principal", value: loanAmount, color: "#3B82F6" },
    { name: "Interest", value: totalInterest, color: "#EF4444" },
  ];

  const barData = Array.from({ length: Math.min(tenure, 10) }, (_, index) => {
    const year = index + 1;
    const remainingPrincipal = loanAmount - (loanAmount / tenure) * year;
    const interestForYear = remainingPrincipal * (interestRate / 100);
    const principalForYear = emi * 12 - interestForYear;

    return {
      year: `Year ${year}`,
      principal: Math.max(principalForYear, 0),
      interest: Math.max(interestForYear, 0),
    };
  });

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            EMI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your Equated Monthly Installment (EMI) and plan your loan
            portfolio with our advanced calculator
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Calculator Inputs */}
          <div className="lg:col-span-1">
            <CalculatorInputs
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
              tenure={tenure}
              setTenure={setTenure}
              calculateEMI={calculateEMI}
            />
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-8">
            <ResultCards
              emi={emi}
              totalAmount={totalAmount}
              totalInterest={totalInterest}
              formatCurrency={formatCurrency}
            />

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-8">
              <PieChartSection
                pieData={pieData}
                formatCurrency={formatCurrency}
              />
              <BarChartSection
                barData={barData}
                formatCurrency={formatCurrency}
              />
            </div>

            <LoanTips />
            <CTASection onNavigate={(page) => router.push(`/${page === "emi" ? "emi" : page}`)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
