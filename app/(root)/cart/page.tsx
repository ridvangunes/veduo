import React from "react";
import { ShoppingCart, ArrowLeft, GraduationCap } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";

const MOCK_CART_ITEMS = [
  {
    id: "1",
    title: "Sıfırdan İleri Seviye Next.js 14 Web Geliştirme Eğitimi",
    instructor: "Can Boz",
    price: 499,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 1240,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "UI/UX Design Masterclass: Modern Arayüz Tasarımı",
    instructor: "Mert Karatas",
    price: 349,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 856,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function CartPage() {
  const subtotal = MOCK_CART_ITEMS.reduce(
    (acc, item) => acc + (item.originalPrice || item.price),
    0,
  );
  const total = MOCK_CART_ITEMS.reduce((acc, item) => acc + item.price, 0);
  const discount = subtotal - total;

  if (MOCK_CART_ITEMS.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-8">
          <ShoppingCart className="h-10 w-10 text-slate-300" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
          Sepetin Şu An Boş
        </h1>
        <p className="text-slate-500 font-bold mb-8 max-w-md mx-auto">
          Öğrenmek istediğin binlerce kurs seni bekliyor. Hemen keşfetmeye başla
          ve kariyerini bir üst seviyeye taşı.
        </p>
        <Link href={ROUTES.COURSES}>
          <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow-lg shadow-blue-600/20 transition-all">
            Kurslara Göz At
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link
                href={ROUTES.COURSES}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-sm transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Alışverişe Devam Et
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                Sepetim
              </h1>
              <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-black mt-2">
                {MOCK_CART_ITEMS.length} Kurs
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm md:max-w-xs">
            <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
              <GraduationCap className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-wider">
                Müşteri Memnuniyeti
              </p>
              <p className="text-sm font-bold text-slate-700 leading-tight">
                Güvenli ödeme ve 30 gün iade garantisi.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {MOCK_CART_ITEMS.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}

            <div className="mt-12 p-8 bg-blue-50/50 rounded-[32px] border border-blue-100/50 border-dashed">
              <h4 className="text-lg font-black text-blue-900 mb-2">
                Başka Kurslara da Bakmak İster misin?
              </h4>
              <p className="text-blue-700/70 font-bold mb-6 text-sm">
                Sepetindeki kurslarla benzer, senin için seçtiğimiz popüler
                eğitimler.
              </p>
              <Link href={ROUTES.COURSES}>
                <Button
                  variant="ghost"
                  className="font-black text-blue-600 hover:bg-blue-100/50 rounded-xl px-0"
                >
                  Tüm Kursları Görüntüle{" "}
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
