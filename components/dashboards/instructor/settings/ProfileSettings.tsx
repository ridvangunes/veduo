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

const ProfileSettings = () => {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle>Profil Bilgileri</CardTitle>
        <CardDescription>
          Öğrenciler profilinizi bu bilgilerle görecek.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative group">
            <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arda" />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
            <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900">Profil Fotoğrafı</h4>
            <p className="text-sm text-muted-foreground mr-4">
              En az 400x400 piksel boyutunda JPG veya PNG (Maks 2MB).
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Görsel Seç
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Kaldır
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-900">
              Ad Soyad
            </label>
            <Input defaultValue="Arda Güneş" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-900">
              Meslek / Unvan
            </label>
            <Input defaultValue="Senior Fullstack Developer & Instructor" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-slate-900">
              Web Sitesi
            </label>
            <Input defaultValue="https://ardagunes.com" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-slate-900">
              Biyografi
            </label>
            <Textarea
              className="min-h-[150px] resize-none py-3"
              defaultValue="Merhaba, 10 yılı aşkın süredir yazılım sektöründeyim. React, Next.js ve Node.js konularında uzmanım. Bilgilerimi paylaşmaktan mutluluk duyuyorum."
            />
            <p className="text-xs text-muted-foreground">
              Kısa bir özgeçmiş öğrencilerinizin sizi tanımasına yardımcı olur.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
