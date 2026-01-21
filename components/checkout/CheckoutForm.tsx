import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock } from "lucide-react";

export const CheckoutForm = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/20 space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black text-slate-900 leading-none">
          Kart Bilgileri
        </h3>
        <Lock className="h-5 w-5 text-emerald-500" />
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="cardName"
            className="text-xs font-black uppercase tracking-widest text-slate-500"
          >
            Kart Üzerindeki İsim
          </Label>
          <Input
            id="cardName"
            placeholder="AD SOYAD"
            className="h-14 rounded-2xl bg-slate-50 border-slate-100 font-bold focus:bg-white transition-all text-lg"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="cardNumber"
            className="text-xs font-black uppercase tracking-widest text-slate-500"
          >
            Kart Numarası
          </Label>
          <div className="relative">
            <Input
              id="cardNumber"
              placeholder="0000 0000 0000 0000"
              className="h-14 rounded-2xl bg-slate-50 border-slate-100 font-bold focus:bg-white transition-all text-lg tracking-widest"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
              <div className="w-8 h-5 bg-slate-200 rounded" />
              <div className="w-8 h-5 bg-slate-200 rounded" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="expiry"
              className="text-xs font-black uppercase tracking-widest text-slate-500"
            >
              Son Kullanma
            </Label>
            <Input
              id="expiry"
              placeholder="AA / YY"
              className="h-14 rounded-2xl bg-slate-50 border-slate-100 font-bold focus:bg-white transition-all text-lg text-center"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="cvv"
              className="text-xs font-black uppercase tracking-widest text-slate-500"
            >
              CVV
            </Label>
            <Input
              id="cvv"
              placeholder="***"
              maxLength={3}
              className="h-14 rounded-2xl bg-slate-50 border-slate-100 font-bold focus:bg-white transition-all text-lg text-center"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
        <Checkbox id="saveCard" className="mt-1 transition-all" />
        <label
          htmlFor="saveCard"
          className="text-sm font-bold text-slate-600 leading-snug cursor-pointer select-none"
        >
          Kartımı sonraki alışverişlerim için güvenli bir şekilde kaydet.
        </label>
      </div>
    </div>
  );
};
