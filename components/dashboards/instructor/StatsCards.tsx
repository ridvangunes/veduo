import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, DollarSign, Star, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Toplam Gelir",
    value: "₺12,450.00",
    change: "+12% geçen aydan",
    icon: DollarSign,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Toplam Öğrenci",
    value: "1,234",
    change: "+180 bu ay",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Aktif Kurslar",
    value: "12",
    change: "2 taslak",
    icon: BookOpen,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    title: "Ortalama Puan",
    value: "4.8",
    change: "124 değerlendirme",
    icon: Star,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
];

const StatsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">{stat.change}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
