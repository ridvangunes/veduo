"use client";

import { Bell, Check, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const notifications = [
  {
    id: 1,
    title: "Yeni Kurs Kaydı",
    description:
      "Ahmet Yılmaz 'React ile Modern Web Geliştirme' kursuna kayıt oldu.",
    time: "2 dakika önce",
    type: "enrollment",
    read: false,
  },
  {
    id: 2,
    title: "Yeni Yorum",
    description:
      "Zeynep Kaya kursuna 5 yıldızlı bir yorum bıraktı: 'Harika bir anlatım!'",
    time: "1 saat önce",
    type: "review",
    read: false,
  },
  {
    id: 3,
    title: "Ödeme Onaylandı",
    description: "Geçen ayki kazancınız (₺4,250.0) banka hesabınıza aktarıldı.",
    time: "5 saat önce",
    type: "payment",
    read: true,
  },
  {
    id: 4,
    title: "Sistem Güncellemesi",
    description: "Yeni eğitmen araçları artık kullanımda. Hemen göz atın!",
    time: "1 gün önce",
    type: "system",
    read: true,
  },
  {
    id: 5,
    title: "Yeni Soru",
    description: "Mehmet Demir 'useEffect' konusuyla ilgili bir soru sordu.",
    time: "2 gün önce",
    type: "question",
    read: true,
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "enrollment":
      return "bg-blue-100 text-blue-600";
    case "review":
      return "bg-amber-100 text-amber-600";
    case "payment":
      return "bg-emerald-100 text-emerald-600";
    case "system":
      return "bg-purple-100 text-purple-600";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Bildirimler
          </h1>
          <p className="text-muted-foreground mt-1">
            Tüm aktiviteleri ve güncellemeleri buradan takip edebilirsiniz.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Check className="h-4 w-4" />
            Tümünü Okundu İşaretle
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-100"
          >
            <Trash2 className="h-4 w-4" />
            Tümünü Sil
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border/60 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border/60 flex items-center justify-between gap-4">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Bildirimlerde ara..."
              className="pl-9 bg-slate-50 border-none"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="text-xs h-8">
              Hepsi
            </Button>
            <Button variant="ghost" size="sm" className="text-xs h-8">
              Okunmamış
            </Button>
          </div>
        </div>

        <div className="divide-y divide-border/60">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 hover:bg-slate-50 transition-colors flex gap-4 cursor-pointer ${!notif.read ? "bg-blue-50/30" : ""}`}
            >
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${getTypeColor(notif.type)}`}
              >
                <Bell className="h-5 w-5" />
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className={`text-sm font-semibold ${!notif.read ? "text-slate-900 font-bold" : "text-slate-700"}`}
                  >
                    {notif.title}
                  </h4>
                  <span className="text-[11px] text-muted-foreground font-medium">
                    {notif.time}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {notif.description}
                </p>
                {!notif.read && (
                  <Badge
                    variant="secondary"
                    className="mt-2 text-[10px] bg-blue-100 text-blue-700 hover:bg-blue-100"
                  >
                    Yeni
                  </Badge>
                )}
              </div>

              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="p-4 bg-slate-50/50 border-t border-border/60 text-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-500 font-semibold hover:bg-white border"
          >
            Daha Fazla Göster
          </Button>
        </div>
      </div>
    </div>
  );
}
