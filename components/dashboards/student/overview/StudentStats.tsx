"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Trophy, Clock, Star } from "lucide-react";

const stats = [
  {
    title: "Devam Eden Kurslar",
    value: "4",
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Tamamlanan Kurslar",
    value: "12",
    icon: Trophy,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Öğrenme Saati",
    value: "48.5",
    icon: Clock,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Kazanılan Rozetler",
    value: "8",
    icon: Star,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

const StudentStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="shadow-sm border-border/60 hover:shadow-md transition-all duration-300"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              {stat.value}
            </div>
            <p className="text-xs mt-1 flex items-center">
              <span className="text-emerald-600 font-medium">+%12.4</span>
              <span className="text-muted-foreground ml-1">
                geçen haftaya göre
              </span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StudentStats;
