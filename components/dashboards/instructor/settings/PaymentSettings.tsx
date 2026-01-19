"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Landmark, Wallet } from "lucide-react";

const PaymentSettings = () => {
  return (
    <div className="space-y-6">
      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Landmark className="h-5 w-5 text-blue-600" />
            <CardTitle>Banka Hesabı (IBAN)</CardTitle>
          </div>
          <CardDescription>
            Kazançlarınızın yatırılacağı banka hesabını tanımlayın.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">
                Hesap Sahibi
              </label>
              <Input placeholder="Ad Soyad" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">
                Banka Seçin
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Banka Seçiniz" />
                </SelectTrigger>
                <SelectContent position="popper" sideOffset={4}>
                  <SelectItem value="garanti">Garanti BBVA</SelectItem>
                  <SelectItem value="isbank">İş Bankası</SelectItem>
                  <SelectItem value="ziraat">Ziraat Bankası</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-900">
                IBAN
              </label>
              <Input placeholder="TR00 0000 0000 0000 0000 00" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-blue-600" />
            <CardTitle>Ödeme Tercihleri</CardTitle>
          </div>
          <CardDescription>
            Ödemelerin hesabınıza geçme zamanını belirleyin.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select defaultValue="monthly">
            <SelectTrigger className="max-w-sm">
              <SelectValue placeholder="Ödeme Sıklığı" />
            </SelectTrigger>
            <SelectContent position="popper" sideOffset={4}>
              <SelectItem value="weekly">Haftalık (Her Pazartesi)</SelectItem>
              <SelectItem value="monthly">Aylık (Her ayın 1'i)</SelectItem>
              <SelectItem value="threshold">
                Eşik Değere Ulaşınca (Min ₺500)
              </SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSettings;
