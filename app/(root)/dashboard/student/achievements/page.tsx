"use client";

import { Trophy, Sparkles, Timer, ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function StudentAchievementsPage() {
  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-12">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full scale-150 animate-pulse" />

        <div className="relative">
          {/* Main Icon Card */}
          <div className="w-32 h-32 bg-white rounded-[2rem] shadow-2xl shadow-blue-600/10 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-all duration-500 group border border-slate-100">
            <Trophy className="w-16 h-16 text-blue-600 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
          </div>

          {/* Floating Badges */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-2xl shadow-lg flex items-center justify-center text-white animate-bounce">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-slate-900 rounded-2xl shadow-lg flex items-center justify-center text-white">
            <Timer className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="max-w-md space-y-4">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 mb-2">
          <Construction className="w-3.5 h-3.5" />
          Geliştirme Aşamasında
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">
          Başarılar & Rozetler <br />
          <span className="text-blue-600">Çok Yakında</span>
        </h1>

        {/* Description */}
        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
          Öğrenme yolculuğuna biraz renk katıyoruz! Çok yakında tamamladığın her
          ders, kazandığın her sınav için eşsiz rozetler ve puanlar
          kazanabileceksin.
        </p>
      </div>

      {/* Progress & Action */}
      <div className="mt-10 w-full max-w-xs space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter">
            <span>Hazırlık Durumu</span>
            <span>%85</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
            <div className="h-full bg-blue-600 rounded-full w-[85%] shadow-sm shadow-blue-600/20 transition-all duration-1000" />
          </div>
        </div>

        <Link href={ROUTES.DASHBOARD.STUDENT.OVERVIEW} className="block">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 gap-2 shadow-xl shadow-blue-600/20 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" />
            Dashboard'a Dön
          </Button>
        </Link>
      </div>

      {/* Background Icons */}
      <div className="mt-16 flex items-center gap-8 justify-center opacity-20 grayscale scale-75 select-none pointer-events-none">
        <Trophy className="w-8 h-8" />
        <div className="h-8 w-px bg-slate-200" />
        <Sparkles className="w-8 h-8" />
        <div className="h-8 w-px bg-slate-200" />
        <Timer className="w-8 h-8" />
      </div>
    </div>
  );
}
