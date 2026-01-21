import React from "react";
import { ArrowRight, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  total: number;
}

export const CartSummary = ({
  subtotal,
  discount,
  total,
}: CartSummaryProps) => {
  return (
    <div className="bg-slate-900 rounded-[32px] p-8 text-white sticky top-24 shadow-2xl shadow-slate-900/20 overflow-hidden group">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 h-64 w-64 bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-blue-600/30 transition-colors duration-500" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-indigo-600/20 blur-[80px] rounded-full group-hover:bg-indigo-600/30 transition-colors duration-500" />

      <h2 className="text-xl font-black mb-8 relative z-10">Sipariş Özeti</h2>

      <div className="space-y-6 relative z-10">
        <div className="flex justify-between items-center pb-4 border-b border-white/5">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            Ara Toplam
          </span>
          <span className="font-black text-lg text-slate-200">
            ₺{subtotal.toLocaleString("tr-TR")}
          </span>
        </div>

        <div className="flex justify-between items-center pb-4 border-b border-white/5">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            İndirim
          </span>
          <span className="font-black text-lg text-emerald-400">
            -₺{discount.toLocaleString("tr-TR")}
          </span>
        </div>

        <div className="py-4">
          <div className="flex items-center gap-2 mb-3">
            <Ticket className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-bold text-slate-300">Kupon Kodu</span>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Kupon girin"
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-2xl h-12 focus:border-blue-500/50 focus:ring-blue-500/20"
            />
            <Button className="h-12 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border-none">
              Uygula
            </Button>
          </div>
        </div>

        <div className="pt-4 flex justify-between items-end">
          <div>
            <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-1">
              Toplam Tutar
            </span>
            <span className="text-4xl font-black text-white tracking-tighter">
              ₺{total.toLocaleString("tr-TR")}
            </span>
          </div>
        </div>

        <Link href={ROUTES.CHECKOUT} className="block group/btn">
          <Button className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-2xl shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 gap-3 border-none">
            Ödemeye Geç
            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>

        <p className="text-[10px] text-slate-500 text-center font-bold uppercase tracking-widest leading-relaxed">
          30 Gün İçinde %100 İade Garantisi
        </p>
      </div>
    </div>
  );
};
