"use client";

import { Calculator } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@radix-ui/react-slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Props {
  loanAmount: number;
  setLoanAmount: (value: number) => void;
  interestRate: number;
  setInterestRate: (value: number) => void;
  tenure: number;
  setTenure: (value: number) => void;
  calculateEMI: () => void;
}

export default function CalculatorInputs({
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  tenure,
  setTenure,
  calculateEMI,
}: Props) {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="w-5 h-5 text-blue-600" />
          <span>Loan Details</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Loan Amount */}
        <div className="space-y-3">
          <Label>Loan Amount</Label>
          <Input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="text-lg"
          />
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            max={10000000}
            min={100000}
            step={50000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹1L</span>
            <span>₹1Cr</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div className="space-y-3">
          <Label>Interest Rate (% per annum)</Label>
          <Input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="text-lg"
          />
          <Slider
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            max={20}
            min={6}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>6%</span>
            <span>20%</span>
          </div>
        </div>

        {/* Loan Tenure */}
        <div className="space-y-3">
          <Label>Loan Tenure (Years)</Label>
          <Input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="text-lg"
          />
          <Slider
            value={[tenure]}
            onValueChange={(value) => setTenure(value[0])}
            max={30}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>

        <Button onClick={calculateEMI} className="w-full bg-blue-600 hover:bg-blue-700">
          Recalculate EMI
        </Button>
      </CardContent>
    </Card>
  );
}
