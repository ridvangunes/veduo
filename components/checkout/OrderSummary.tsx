import React from "react";
import Image from "next/image";

interface OrderSummaryProps {
  items: Array<{
    id: string;
    title: string;
    price: number;
    image: string;
  }>;
  total: number;
}

export const OrderSummary = ({ items, total }: OrderSummaryProps) => {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
      <h2 className="text-xl font-black text-slate-900 mb-8">Sipariş Özeti</h2>

      <div className="space-y-6 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-black text-slate-800 leading-tight mb-1 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-sm font-black text-blue-600">
                ₺{item.price.toLocaleString("tr-TR")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-6 border-t border-slate-50">
        <div className="flex justify-between items-center text-sm font-bold text-slate-400">
          <span>Ara Toplam</span>
          <span className="text-slate-600">
            ₺{total.toLocaleString("tr-TR")}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-bold text-slate-400">
          <span>Vergi (KDV %20)</span>
          <span className="text-slate-600">Dahil</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <span className="font-black text-slate-900">Toplam</span>
          <span className="text-2xl font-black text-blue-600 tracking-tight">
            ₺{total.toLocaleString("tr-TR")}
          </span>
        </div>
      </div>

      <div className="mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
        <p className="text-xs font-bold text-emerald-700 text-center leading-relaxed">
          🔒 Güvenli Ödeme Protokolü Aktif. Verileriniz 256-bit SSL ile
          şifrelenmektedir.
        </p>
      </div>
    </div>
  );
};
