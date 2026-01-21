"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  History,
  Plus,
  MoreVertical,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const StudentBillingSettings = () => {
  return (
    <div className="space-y-6">
      {/* Saved Cards */}
      <Card className="border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-slate-50 bg-white flex flex-row items-center justify-between space-y-0">
          <div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-lg">Kayıtlı Kartlarım</CardTitle>
            </div>
            <CardDescription>
              Hızlı ödeme yapmak için kullandığınız kredi veya banka kartları.
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-2 font-bold h-9">
            <Plus className="h-4 w-4" />
            Kart Ekle
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="group relative p-4 rounded-xl border border-blue-100 bg-blue-50/20 flex flex-col justify-between h-40 transition-all hover:shadow-md hover:border-blue-200">
              <div className="flex items-start justify-between">
                <div className="h-8 w-12 bg-white rounded-md border border-slate-100 flex items-center justify-center font-black italic text-blue-900 text-[10px]">
                  VISA
                </div>
                <Badge className="bg-blue-600 text-white border-none text-[9px] font-black uppercase">
                  Varsayılan
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black text-slate-900 tracking-widest">
                  •••• •••• •••• 4242
                </p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <span>Rıdvan Güneş</span>
                  <span>12 / 26</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              >
                <MoreVertical className="h-4 w-4 text-slate-400" />
              </Button>
            </div>

            <div className="group relative p-4 rounded-xl border border-slate-100 bg-white flex flex-col justify-between h-40 transition-all hover:shadow-md hover:border-slate-200">
              <div className="flex items-start justify-between">
                <div className="h-8 w-12 bg-white rounded-md border border-slate-100 flex items-center justify-center font-black italic text-slate-900 text-[10px]">
                  MC
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black text-slate-900 tracking-widest">
                  •••• •••• •••• 8888
                </p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <span>Rıdvan Güneş</span>
                  <span>05 / 25</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              >
                <MoreVertical className="h-4 w-4 text-slate-400" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Order History */}
      <Card className="border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-slate-50 bg-white">
          <div className="flex items-center gap-2">
            <History className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg">Ödeme Geçmişi</CardTitle>
          </div>
          <CardDescription>
            Son yaptığınız satın alımları ve fatura detaylarını görüntüleyin.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">İşlem no</th>
                  <th className="px-6 py-4">Kurs / Ürün</th>
                  <th className="px-6 py-4">Tarih</th>
                  <th className="px-6 py-4 text-right">Tutar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 font-bold text-slate-700">
                    #VD-90432
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">
                    Next.js 14 Masterclass
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-medium">
                    12 Ocak 2024
                  </td>
                  <td className="px-6 py-4 text-right font-black text-slate-900">
                    ₺449.99
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 font-bold text-slate-700">
                    #VD-89211
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">
                    UI/UX Design Bundle
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-medium">
                    05 Ocak 2024
                  </td>
                  <td className="px-6 py-4 text-right font-black text-slate-900">
                    ₺299.99
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/30 text-center border-t border-slate-100">
            <Button
              variant="ghost"
              size="sm"
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
            >
              Daha Fazla Göster
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100">
        <ShieldCheck className="h-5 w-5 shrink-0" />
        <span className="text-xs font-bold leading-relaxed">
          Ödeme bilgileriniz SSL sertifikası ile korunmaktadır. Kart
          bilgileriniz sunucularımızda saklanmaz, direkt olarak banka
          altyapısına iletilir.
        </span>
      </div>
    </div>
  );
};

export default StudentBillingSettings;
