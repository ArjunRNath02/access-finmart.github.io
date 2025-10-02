"use client";

import { Calculator } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as Slider from "@radix-ui/react-slider";

interface Props {
  loanAmount: number;
  setLoanAmount: (value: number) => void;
  interestRate: number;
  setInterestRate: (value: number) => void;
  tenure: number;
  setTenure: (value: number) => void;
  calculateEMI: () => void;
}

// ✅ Reusable Input + Slider component
function InputSlider({
  label,
  value,
  setValue,
  min,
  max,
  step,
  unit,
  marks,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step: number;
  unit?: string;
  marks?: [string, string];
}) {
  return (
    <div className="space-y-3">
      <Label>{label}</Label>

      {/* Input box with unit */}
      <div className="relative">
        <Input
          type="number"
          value={value}
          onChange={(e) =>
            setValue(
              Math.max(min, Math.min(Number(e.target.value) || min, max))
            )
          }
          className="text-lg pr-12"
        />
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            {unit}
          </span>
        )}
      </div>

      {/* Slider */}
      <Slider.Root
        value={[value]}
        onValueChange={(val) => setValue(val[0])}
        min={min}
        max={max}
        step={step}
        className="relative flex items-center w-full h-4"
      >
        <Slider.Track className="bg-gray-200 relative flex-1 rounded-full h-1">
          <Slider.Range className="absolute h-full bg-blue-600 rounded-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-4 h-4 bg-blue-600 rounded-full shadow hover:bg-blue-700 focus:outline-none" />
      </Slider.Root>

      {/* Min / Max labels */}
      {marks && (
        <div className="flex justify-between text-sm text-gray-500">
          <span>{marks[0]}</span>
          <span>{marks[1]}</span>
        </div>
      )}
    </div>
  );
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
    <Card className="border-0 shadow-lg rounded-2xl px-4">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-xl">
          <Calculator className="w-5 h-5 text-blue-600" />
          <span>Loan Details</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Loan Amount */}
        <InputSlider
          label="Loan Amount"
          value={loanAmount}
          setValue={setLoanAmount}
          min={100000}
          max={10000000}
          step={50000}
          unit="₹"
          marks={["₹1L", "₹1Cr"]}
        />

        {/* Interest Rate */}
        <InputSlider
          label="Interest Rate"
          value={interestRate}
          setValue={setInterestRate}
          min={6}
          max={20}
          step={0.1}
          unit="%"
          marks={["6%", "20%"]}
        />

        {/* Tenure */}
        <InputSlider
          label="Loan Tenure"
          value={tenure}
          setValue={setTenure}
          min={1}
          max={30}
          step={1}
          unit="yrs"
          marks={["1 Year", "30 Years"]}
        />

        {/* Button */}
        <Button
          onClick={calculateEMI}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-lg py-6"
        >
          Recalculate EMI
        </Button>
      </CardContent>
    </Card>
  );
}
