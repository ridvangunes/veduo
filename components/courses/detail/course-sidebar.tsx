import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Play,
  Clock,
  PlayCircle,
  FileText,
  Smartphone,
  Award,
  Share2,
  Heart,
} from "lucide-react";

export const CourseSidebar = () => {
  return (
    <div className="sticky top-24 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <Card className="overflow-hidden shadow-2xl border-none">
        <div className="relative aspect-video group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
            alt="Kurs Tanıtım"
            className="w-full h-full object-cover group-hover:brightness-50 transition-all"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-slate-900 fill-current ml-1" />
            </div>
          </div>
          <span className="absolute bottom-4 w-full text-center text-white font-bold text-sm shadow-black drop-shadow-md">
            Önizlemeyi İzle
          </span>
        </div>

        <div className="p-6 space-y-6 bg-background">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black">₺299.99</span>
              <span className="text-sm text-muted-foreground line-through">
                ₺1.199,99
              </span>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                %75 İndirim
              </Badge>
            </div>
            <p className="text-xs text-destructive font-bold flex items-center gap-1">
              <Clock className="h-3 w-3" /> Bu fiyatta son 5 saat!
            </p>
          </div>

          <div className="grid gap-3">
            <Button size="lg" className="w-full font-bold text-base">
              Sepete Ekle
            </Button>
            <Button size="lg" variant="outline" className="w-full font-bold">
              Hemen Satın Al
            </Button>
            <p className="text-[10px] text-center text-muted-foreground font-medium">
              30-Gün Para İade Garantisi
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-sm font-bold tracking-tight">
              Bu kurs şunları içerir:
            </p>
            <div className="space-y-2.5">
              {[
                {
                  icon: <PlayCircle className="h-4 w-4" />,
                  text: "42.5 saatlik talep üzerine video",
                },
                {
                  icon: <FileText className="h-4 w-4" />,
                  text: "12 makale ve 25 indirilebilir kaynak",
                },
                {
                  icon: <Smartphone className="h-4 w-4" />,
                  text: "Mobil ve TV'den erişim",
                },
                {
                  icon: <Award className="h-4 w-4" />,
                  text: "Bitirme sertifikası",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-muted-foreground font-medium"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button variant="ghost" size="sm" className="gap-2 font-bold">
              <Share2 className="h-4 w-4" /> Paylaş
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 font-bold">
              <Heart className="h-4 w-4" /> İstek Listesi
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
