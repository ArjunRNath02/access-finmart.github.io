"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LoanCTAProps {
  onNavigate: (page: "home" | "emi" | "loans" | "contact") => void;
}

export default function CTASection({ onNavigate }: LoanCTAProps) {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <CardContent className="p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Apply for Your Loan?</h3>
        <p className="text-blue-100 mb-6 text-lg">
          Let our experts help you prepare the perfect loan portfolio for banks
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
          variant="secondary" 
          size="lg" 
          className="bg-white text-blue-600 hover:bg-gray-100"
          onClick={() => onNavigate("contact")}>
            Get Expert Consultation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
