import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Wallet, ArrowUpRight, Clock } from "lucide-react";

const stats = [
  {
    title: "Toplam Kazanç",
    value: "₺124,500.00",
    description: "Platform üzerindeki tüm zamanların geliri",
    icon: DollarSign,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Kullanılabilir Bakiye",
    value: "₺8,240.00",
    description: "Çekim için hazır bakiye",
    icon: Wallet,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Son Ödeme",
    value: "₺12,000.00",
    description: "15 Oca 2024 tarihinde ödendi",
    icon: ArrowUpRight,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Bekleyen",
    value: "₺450.00",
    description: "Onay sürecindeki işlemler",
    icon: Clock,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const FinanceStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="border-border/60 shadow-sm hover:shadow-md transition-all"
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
            <div className="text-2xl font-bold text-slate-900">
              {stat.value}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FinanceStats;
