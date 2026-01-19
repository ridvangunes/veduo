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
  Briefcase,
  Star,
  UserPlus,
} from "lucide-react";

const NotificationSettings = () => {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle>Bildirim Tercihleri</CardTitle>
        <CardDescription>
          Hangi durumlarda bildirim almak istediğinizi seçin.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-0 divide-y divide-slate-100">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Yeni Kayıtlar</h4>
              <p className="text-sm text-muted-foreground mr-6">
                Bir öğrenci kursunuza kayıt olduğunda anlık bildirim gönder.
              </p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">
                Kurs Değerlendirmeleri
              </h4>
              <p className="text-sm text-muted-foreground mr-6">
                Kurslarınıza yeni bir puan veya yorum yapıldığında haber ver.
              </p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Yeni Mesajlar</h4>
              <p className="text-sm text-muted-foreground mr-6">
                Öğrencilerden yeni bir mesaj geldiğinde bildirim gönder.
              </p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">
                Sistem & Pazarlama
              </h4>
              <p className="text-sm text-muted-foreground mr-6">
                Platform güncellemeleri ve kampanya duyurularını gönder.
              </p>
            </div>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
