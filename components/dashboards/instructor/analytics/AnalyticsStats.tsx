import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Star, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Toplam Gelir",
    value: "₺124,500",
    change: "+%12.5",
    trend: "up",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Toplam Öğrenci",
    value: "2,543",
    change: "+%8.2",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Ortalama Puan",
    value: "4.8",
    change: "+0.2",
    trend: "up",
    icon: Star,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Dönüşüm Oranı",
    value: "%3.2",
    change: "-%0.4",
    trend: "down",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

const AnalyticsStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="shadow-sm border-border/60 hover:shadow-md transition-shadow"
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
              <span
                className={
                  stat.trend === "up"
                    ? "text-emerald-600 font-medium"
                    : "text-red-600 font-medium"
                }
              >
                {stat.change}
              </span>
              <span className="text-muted-foreground ml-1">geçen aya göre</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalyticsStats;
