"use client";

import { Card, CardContent } from "@/components/ui/card";

interface ResultsCardsProps {
  emi: number;
  totalAmount: number;
  totalInterest: number;
  formatCurrency: (amount: number) => string;
}

export function ResultCards({
  emi,
  totalAmount,
  totalInterest,
  formatCurrency,
}: ResultsCardsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">
            {formatCurrency(emi)}
          </div>
          <div className="text-sm text-gray-600">Monthly EMI</div>
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="text-2xl font-bold text-green-600 mb-2">
            {formatCurrency(totalAmount)}
          </div>
          <div className="text-sm text-gray-600">Total Amount</div>
        </CardContent>
      </Card>

      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-6 text-center">
          <div className="text-2xl font-bold text-red-600 mb-2">
            {formatCurrency(totalInterest)}
          </div>
          <div className="text-sm text-gray-600">Total Interest</div>
        </CardContent>
      </Card>
    </div>
  );
}
