"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Key, Mail, AlertTriangle } from "lucide-react";

const StudentAccountSettings = () => {
  return (
    <div className="space-y-6">
      <Card className="border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-slate-50 bg-white">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg">Email Adresi</CardTitle>
          </div>
          <CardDescription>
            Giriş yapmak ve önemli bildirimleri almak için kullandığınız adres.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              defaultValue="ridvan@veduo.com"
              className="h-11 border-slate-200 bg-slate-50/30 focus-visible:ring-blue-600/20"
            />
            <Button
              variant="outline"
              className="font-bold h-11 border-slate-200 px-6"
            >
              E-postayı Değiştir
            </Button>
          </div>
          <p className="text-xs text-muted-foreground ml-1">
            E-posta değişikliği sonrası yeni adresinize bir doğrulama bağlantısı
            gönderilecektir.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-slate-50 bg-white">
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg">Şifre</CardTitle>
          </div>
          <CardDescription>
            Güvenliğiniz için şifrenizi en az 8 karakterli ve karmaşık seçmenizi
            öneririz.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 ml-1">
                Mevcut Şifre
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="h-11 border-slate-200 bg-slate-50/30 focus-visible:ring-blue-600/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 ml-1">
                Yeni Şifre
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="h-11 border-slate-200 bg-slate-50/30 focus-visible:ring-blue-600/20"
              />
            </div>
          </div>
          <Button className="bg-slate-900 text-white hover:bg-slate-800 font-bold h-11 px-8 shadow-lg shadow-black/10">
            Şifreyi Güncelle
          </Button>
        </CardContent>
      </Card>

      <Card className="border-red-100 bg-red-50/20 shadow-none border-dashed">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <CardTitle className="text-red-700 text-lg">Hesabı Sil</CardTitle>
          </div>
          <CardDescription className="text-red-600/70">
            Hesabınızı sildiğinizde; kurs ilerlemeleriniz, kazanılan
            sertifikalarınız ve tüm verileriniz kalıcı olarak kaldırılacaktır.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <Button
            variant="ghost"
            className="text-red-700 hover:bg-red-600 hover:text-white border border-red-200 font-bold transition-all px-6 h-11"
          >
            Hesabımı Kalıcı Olarak Sil
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentAccountSettings;
