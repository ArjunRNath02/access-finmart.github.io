"use client";

import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

interface Props {
  barData: { year: string; principal: number; interest: number }[];
  formatCurrency: (amount: number) => string;
}

export default function BarChartSection({ barData, formatCurrency }: Props) {
  return (
    <Card className="transition-transform hover:scale-[1.01] hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <span>Yearly Breakdown</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barGap={6} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(value) => formatCurrency(value)}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value, name) => [
                  formatCurrency(value as number),
                  name,
                ]}
                contentStyle={{
                  borderRadius: "8px",
                  borderColor: "#E5E7EB",
                  backgroundColor: "white",
                }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                wrapperStyle={{ fontSize: "12px" }}
              />
              <Bar
                dataKey="principal"
                stackId="a"
                fill="#3B82F6"
                name="Principal"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="interest"
                stackId="a"
                fill="#EF4444"
                name="Interest"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
