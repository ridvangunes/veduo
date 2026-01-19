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
import { Shield, Key, Mail } from "lucide-react";

const AccountSettings = () => {
  return (
    <div className="space-y-6">
      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-600" />
            <CardTitle>Email Adresi</CardTitle>
          </div>
          <CardDescription>
            Giriş yapmak ve bildirim almak için kullandığınız adres.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input defaultValue="arda@veduo.com" />
            <Button variant="outline">E-postayı Değiştir</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            E-posta değişikliği sonrası yeni adresinize onay kodu
            gönderilecektir.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-blue-600" />
            <CardTitle>Şifre</CardTitle>
          </div>
          <CardDescription>
            Hesap güvenliğiniz için şifrenizi düzenli aralıklarla güncelleyin.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">
                Mevcut Şifre
              </label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">
                Yeni Şifre
              </label>
              <Input type="password" placeholder="••••••••" />
            </div>
          </div>
          <Button className="bg-slate-900 text-white hover:bg-slate-800">
            Şifreyi Güncelle
          </Button>
        </CardContent>
      </Card>

      <Card className="border-red-100 bg-red-50/30 shadow-none">
        <CardHeader>
          <CardTitle className="text-red-700">Hesabı Sil</CardTitle>
          <CardDescription className="text-red-600/70">
            Hesabınızı sildiğinizde tüm kurslarınız, öğrencileriniz ve
            kazançlarınız kalıcı olarak silinir.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="ghost"
            className="text-red-700 hover:bg-red-100 hover:text-red-800 border border-red-200"
          >
            Hesabımı Kalıcı Olarak Sil
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;
