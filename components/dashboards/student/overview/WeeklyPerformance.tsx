"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import WeeklyPerformanceChart from "../WeeklyPerformanceChart";

const WeeklyPerformance = () => {
  return (
    <Card className="border-border/60 shadow-sm overflow-hidden">
      <CardHeader className="bg-slate-50/50">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-base font-bold text-slate-900">
            Bu Haftalık Performans
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <WeeklyPerformanceChart />
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="text-lg font-bold text-slate-900">12.4s</div>
              <p className="text-[10px] text-muted-foreground font-bold">
                Toplam Süre
              </p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center flex-1">
              <div className="text-lg font-bold text-emerald-600">+%15</div>
              <p className="text-[10px] text-muted-foreground font-bold">
                Gelişim
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyPerformance;
