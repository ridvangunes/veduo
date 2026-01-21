"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const MOCK_CART_ITEMS = [
  {
    id: "1",
    title: "Sıfırdan İleri Seviye Next.js 14 Web Geliştirme Eğitimi",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass: Modern Arayüz Tasarımı",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
  },
];

export const CartSidebar = ({ children }: { children: React.ReactNode }) => {
  const total = MOCK_CART_ITEMS.reduce((acc, item) => acc + item.price, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col border-l-slate-100 shadow-2xl">
        <SheetHeader className="p-6 border-b border-slate-50">
          <SheetTitle className="flex items-center gap-3 text-2xl font-black tracking-tighter">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 text-blue-600" />
            </div>
            Sepetim
            <span className="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-black">
              {MOCK_CART_ITEMS.length} Ürün
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
          {MOCK_CART_ITEMS.length > 0 ? (
            <div className="space-y-6">
              {MOCK_CART_ITEMS.map((item) => (
                <div key={item.id} className="group flex gap-4">
                  <div className="relative h-20 w-20 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-black text-slate-800 leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-black text-blue-600">
                        ₺{item.price.toLocaleString("tr-TR")}
                      </p>
                      <button className="text-slate-300 hover:text-red-500 transition-colors p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
              <ShoppingCart className="h-12 w-12 mb-4 text-slate-300" />
              <p className="font-bold text-slate-500">Sepetin henüz boş.</p>
            </div>
          )}
        </div>

        {MOCK_CART_ITEMS.length > 0 && (
          <div className="p-6 bg-slate-50/50 border-t border-slate-100 space-y-4">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Toplam Tutar
              </span>
              <span className="text-3xl font-black text-slate-900 tracking-tighter">
                ₺{total.toLocaleString("tr-TR")}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Link href={ROUTES.CHECKOUT}>
                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-600/20 transition-all gap-2 group/btn">
                  Ödemeye Geç
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={ROUTES.CART}>
                <Button
                  variant="ghost"
                  className="w-full h-12 text-slate-500 font-bold hover:text-blue-600 hover:bg-white rounded-xl"
                >
                  Sepeti Görüntüle
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
