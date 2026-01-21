"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Bell,
  Mail,
  MessageSquare,
  Sparkles,
  Trophy,
  BookOpen,
} from "lucide-react";

const StudentNotificationSettings = () => {
  return (
    <Card className="border-border/60 shadow-sm overflow-hidden">
      <CardHeader className="border-b border-slate-50">
        <CardTitle>Bildirim Tercihleri</CardTitle>
        <CardDescription>
          Hangi durumlarda anlık veya e-posta yoluyla bilgilendirilmek
          istediğinizi seçin.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-0 divide-y divide-slate-100 p-0 px-6">
        <div className="flex items-center justify-between py-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Kurs Güncellemeleri</h4>
              <p className="text-sm text-muted-foreground mr-6 max-w-md">
                Takip ettiğiniz kurslara yeni ders eklendiğinde haber ver.
              </p>
            </div>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
        </div>

        <div className="flex items-center justify-between py-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">
                Başarılar & Sertifikalar
              </h4>
              <p className="text-sm text-muted-foreground mr-6 max-w-md">
                Yeni bir rozet kazandığınızda veya sertifikanız hazır olduğunda
                bilgilendir.
              </p>
            </div>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
        </div>

        <div className="flex items-center justify-between py-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Mesajlar & Yanıtlar</h4>
              <p className="text-sm text-muted-foreground mr-6 max-w-md">
                Eğitmeninizden mesaj veya sorunuza yanıt geldiğinde anında haber
                ver.
              </p>
            </div>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
        </div>

        <div className="flex items-center justify-between py-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Haftalık Raporlar</h4>
              <p className="text-sm text-muted-foreground mr-6 max-w-md">
                Haftalık öğrenme performansınız ve önerilen içeriklerin özetini
                gönder.
              </p>
            </div>
          </div>
          <Switch className="data-[state=checked]:bg-blue-600" />
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentNotificationSettings;
