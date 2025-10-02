"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LoanCTAProps {
  onNavigate: (page: "home" | "emi" | "loans" | "contact") => void;
}

export default function CTASection({ onNavigate }: LoanCTAProps) {
  return (
    <Card className="relative overflow-hidden rounded-2xl border-none bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg">
      <CardContent className="p-10 text-center space-y-6">
        {/* Title */}
        <h3 className="text-3xl font-bold tracking-tight">
          Ready to Apply for Your Loan?
        </h3>

        {/* Subtitle */}
        <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
          Let our experts help you build the perfect loan portfolio and increase your approval chances.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
            onClick={() => onNavigate("contact")}
          >
            Get Expert Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
            onClick={() => onNavigate("loans")}
          >
            Explore Loan Options
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
