"use client";

import React, { useState } from "react";
import { ArrowLeft, CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { PaymentMethods } from "@/components/checkout/PaymentMethods";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { Button } from "@/components/ui/button";

const MOCK_ITEMS = [
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

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const total = MOCK_ITEMS.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb / Header */}
        <div className="mb-12">
          <Link
            href={ROUTES.CART}
            className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-sm transition-colors group mb-6"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Sepetime Geri Dön
          </Link>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
            Ödeme ve Onay
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Checkout Section */}
          <div className="lg:col-span-8 space-y-12">
            {/* Steps (Visual Only) */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <div className="h-2 bg-blue-600 rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                  Adım 1: Sepet
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-2 bg-blue-600 rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                  Adım 2: Ödeme
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-2 bg-slate-200 rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Adım 3: Tamamlandı
                </span>
              </div>
            </div>

            <PaymentMethods
              activeMethod={paymentMethod}
              onChange={setPaymentMethod}
            />

            {paymentMethod === "credit-card" ? (
              <CheckoutForm />
            ) : (
              <div className="bg-white rounded-[32px] p-12 border-2 border-dashed border-slate-200 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="h-8 w-8 text-slate-300" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Havale / EFT Bilgileri
                </h3>
                <p className="text-slate-500 font-bold max-w-sm mx-auto">
                  Siparişi tamamladıktan sonra banka hesap numaralarımız size
                  iletilecektir.
                </p>
              </div>
            )}

            <div className="p-8 bg-blue-600/5 rounded-[32px] border border-blue-600/10 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Gizlilik ve Koşullar
                </h4>
              </div>
              <p className="text-sm font-bold text-slate-600 leading-relaxed">
                "Ödemeyi Tamamla" butonuna basarak Mesafeli Satış Sözleşmesi ve
                Kullanıcı Sözleşmesini kabul etmiş sayılırsınız. Ödemeniz BDDK
                lisanslı ödeme kuruluşumuz aracılığıyla güvenle
                gerçekleştirilir.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <OrderSummary items={MOCK_ITEMS} total={total} />

            <Link href={ROUTES.SUCCESS} className="block w-full">
              <Button className="w-full h-20 bg-blue-600 hover:bg-blue-700 text-white font-black text-xl rounded-[24px] shadow-2xl shadow-blue-600/20 transition-all active:scale-[0.98] gap-3">
                <CreditCard className="h-6 w-6" />
                Ödemeyi Tamamla
              </Button>
            </Link>

            <div className="flex flex-col items-center gap-4 py-8 px-6 bg-slate-100/50 rounded-[32px] border border-slate-200/50">
              <div className="flex gap-4">
                <div className="w-12 h-8 bg-white rounded border border-slate-200 flex items-center justify-center grayscale opacity-50">
                  VISA
                </div>
                <div className="w-12 h-8 bg-white rounded border border-slate-200 flex items-center justify-center grayscale opacity-50">
                  MC
                </div>
                <div className="w-12 h-8 bg-white rounded border border-slate-200 flex items-center justify-center grayscale opacity-50">
                  TROY
                </div>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Sektör Standartlarında Güvenlik
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
