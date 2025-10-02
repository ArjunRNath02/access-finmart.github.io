"use client";

import { useState, useMemo } from "react";
import PieChartSection from "@/components/emi/PieChartSection";
import BarChartSection from "@/components/emi/BarChartSection";
import LoanTips from "@/components/emi/LoanTips";
import CTASection from "@/components/emi/CTASection";
import CalculatorInputs from "@/components/emi/CalculatorInputs";
import { ResultCards } from "@/components/emi/ResultCard";
import { useRouter } from "next/navigation";

// ✅ Currency Formatter
const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

// ✅ EMI Calculation Helper
const calculateEMI = (loanAmount: number, interestRate: number, tenure: number) => {
  const principal = loanAmount;
  const rate = interestRate / 12 / 100;
  const time = tenure * 12;

  if (rate === 0) {
    const calculatedEmi = principal / time;
    return {
      emi: calculatedEmi,
      totalInterest: 0,
      totalAmount: principal,
    };
  } else {
    const calculatedEmi =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);
    const calculatedTotalAmount = calculatedEmi * time;
    const calculatedTotalInterest = calculatedTotalAmount - principal;

    return {
      emi: calculatedEmi,
      totalInterest: calculatedTotalInterest,
      totalAmount: calculatedTotalAmount,
    };
  }
};

export default function EMICalculatorPage() {
  const router = useRouter();

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(10);

  // ✅ Memoized EMI results
  const { emi, totalInterest, totalAmount } = useMemo(
    () => calculateEMI(loanAmount, interestRate, tenure),
    [loanAmount, interestRate, tenure]
  );

  // ✅ Chart Data
  const pieData = useMemo(
    () => [
      { name: "Principal", value: loanAmount, color: "#3B82F6" },
      { name: "Interest", value: totalInterest, color: "#EF4444" },
    ],
    [loanAmount, totalInterest]
  );

  const barData = useMemo(() => {
    return Array.from({ length: Math.min(tenure, 10) }, (_, index) => {
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
  }, [loanAmount, interestRate, tenure, emi]);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            EMI Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan your loan better! Get instant insights into EMI, interest payable, and repayment breakdowns.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Sticky Calculator Inputs */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CalculatorInputs
                loanAmount={loanAmount}
                setLoanAmount={setLoanAmount}
                interestRate={interestRate}
                setInterestRate={setInterestRate}
                tenure={tenure}
                setTenure={setTenure}
                calculateEMI={() => {}}
              />
            </div>
          </div>

          {/* Right: Results & Charts */}
          <div className="lg:col-span-2 space-y-10">
            {/* Result Cards */}
            <ResultCards
              emi={emi}
              totalAmount={totalAmount}
              totalInterest={totalInterest}
              formatCurrency={formatCurrency}
            />

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-8">
              <PieChartSection pieData={pieData} formatCurrency={formatCurrency} />
              <BarChartSection barData={barData} formatCurrency={formatCurrency} />
            </div>

            {/* Loan Tips */}
            <LoanTips />

            {/* CTA */}
            <CTASection
              onNavigate={(page) => router.push(`/${page === "emi" ? "emi" : page}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
