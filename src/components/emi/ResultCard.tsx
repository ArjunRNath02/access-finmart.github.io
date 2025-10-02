"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, IndianRupee, TrendingUp } from "lucide-react";

interface ResultsCardsProps {
  emi: number;
  totalAmount: number;
  totalInterest: number;
  formatCurrency: (amount: number) => string;
}

const resultItems = (formatCurrency: (amount: number) => string, emi: number, totalAmount: number, totalInterest: number) => [
  {
    title: "Monthly EMI",
    value: formatCurrency(emi),
    icon: CreditCard,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
  },
  {
    title: "Total Amount",
    value: formatCurrency(totalAmount),
    icon: IndianRupee,
    color: "text-green-600",
    bg: "bg-green-50 border-green-200",
  },
  {
    title: "Total Interest",
    value: formatCurrency(totalInterest),
    icon: TrendingUp,
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
  },
];

export function ResultCards({
  emi,
  totalAmount,
  totalInterest,
  formatCurrency,
}: ResultsCardsProps) {
  const items = resultItems(formatCurrency, emi, totalAmount, totalInterest);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card
          key={index}
          className={`${item.bg} transition-transform hover:scale-105 hover:shadow-md`}
        >
          <CardContent className="p-6 text-center">
            <div className={`flex items-center justify-center mb-3`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div className={`text-2xl font-bold ${item.color} mb-2`}>
              {item.value}
            </div>
            <div className="text-sm text-gray-600">{item.title}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
