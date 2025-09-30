"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LoanTips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Planning Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-lg">EMI Planning Guidelines</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Keep your EMI under 40% of your monthly income</li>
              <li>• Consider making prepayments to reduce interest burden</li>
              <li>• Choose the right tenure to balance EMI and total interest</li>
              <li>• Compare rates from multiple banks before deciding</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Portfolio Preparation</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Maintain a good credit score (750+)</li>
              <li>• Keep debt-to-income ratio below 50%</li>
              <li>• Ensure proper documentation is ready</li>
              <li>• Consider loan insurance for protection</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
