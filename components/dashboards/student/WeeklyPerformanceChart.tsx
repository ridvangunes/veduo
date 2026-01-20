"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { cn } from "@/lib/utils";

const data = [
  { name: "Pzt", hours: 1.5 },
  { name: "Sal", hours: 2.8 },
  { name: "Çar", hours: 2.0 },
  { name: "Per", hours: 3.5 },
  { name: "Cum", hours: 2.5 },
  { name: "Cmt", hours: 1.2 },
  { name: "Paz", hours: 3.0 },
];

const WeeklyPerformanceChart = () => {
  return (
    <div className="h-48 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f1f5f9"
          />
          <XAxis
            dataKey="name"
            stroke="#94a3b8"
            fontSize={10}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              fontSize: "12px",
              fontWeight: "600",
            }}
            cursor={{ stroke: "#2563eb", strokeWidth: 1 }}
            formatter={(value: any) => [`${value} Saat`, "Çalışma"]}
          />
          <Area
            type="monotone"
            dataKey="hours"
            stroke="#2563eb"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorHours)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyPerformanceChart;
