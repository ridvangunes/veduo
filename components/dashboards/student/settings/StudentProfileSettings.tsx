"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const StudentProfileSettings = () => {
  return (
    <Card className="border-border/60 shadow-sm overflow-hidden">
      <CardHeader className="border-b border-slate-50">
        <CardTitle>Profil Bilgileri</CardTitle>
        <CardDescription>
          Diğer kullanıcılar ve eğitmenler profilinizi bu bilgilerle görecek.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-slate-50">
          <div className="relative group cursor-pointer">
            <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ridvan" />
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
              <Camera className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 leading-none">
              Profil Fotoğrafı
            </h4>
            <p className="text-sm text-muted-foreground mr-4 max-w-sm">
              En az 400x400 piksel boyutunda JPG veya PNG (Maks 2MB).
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="font-bold border-slate-200"
              >
                Görsel Seç
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 hover:bg-red-50 font-bold"
              >
                Kaldır
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 pt-2">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 ml-1">
              Ad Soyad
            </label>
            <Input
              defaultValue="Rıdvan Güneş"
              className="h-11 border-slate-200 bg-slate-50/30 focus-visible:ring-blue-600/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 ml-1">
              Başlık
            </label>
            <Input
              defaultValue="Yazılım Geliştirici & Öğrenci"
              className="h-11 border-slate-200 bg-slate-50/30 focus-visible:ring-blue-600/20"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-bold text-slate-900 ml-1">
              Lokasyon
            </label>
            <Input
              defaultValue="İstanbul, Türkiye"
              className="h-11 border-slate-200 bg-slate-50/30 focus-visible:ring-blue-600/20"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-sm font-bold text-slate-900">
                Hakkımda
              </label>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Maks 500 Karakter
              </span>
            </div>
            <Textarea
              className="min-h-[150px] resize-none py-3 border-slate-200 bg-slate-50/30 focus-visible:ring-blue-600/20"
              defaultValue="Yeni teknolojiler öğrenmeyi ve bunları projelerime entegre etmeyi seviyorum. Şu an Next.js ve yapay zeka entegrasyonları üzerine yoğunlaştım."
            />
            <p className="text-xs text-muted-foreground ml-1">
              Biyografiniz, eğitmenlerin ve topluluktaki diğer öğrencilerin sizi
              tanımasını sağlar.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentProfileSettings;
