import React from "react";
import {
  Check,
  Sparkles,
  LayoutDashboard,
  PlayCircle,
  Share2,
  Download,
} from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Success Icon & Animation Placeholder */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-emerald-500 rounded-[32px] flex items-center justify-center shadow-2xl shadow-emerald-500/20 rotate-12 transition-transform hover:rotate-0 duration-500">
              <Check className="h-12 w-12 text-white stroke-[3px]" />
            </div>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-amber-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Harika! Öğrenmeye Hazırsın.
          </h1>
          <p className="text-lg font-bold text-slate-500 max-w-md mx-auto leading-relaxed">
            Ödemen başarıyla tamamlandı. Artık kurslarına erişebilir ve
            kariyerini şekillendirmeye başlayabilirsin.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <Link href={ROUTES.DASHBOARD.STUDENT.COURSES} className="group">
            <div className="bg-slate-900 p-8 rounded-[32px] h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-900/20">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <PlayCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                Hemen Başla
              </h3>
              <p className="text-slate-400 font-bold text-sm">
                Satın aldığın kursları görüntüle ve ilk dersine başla.
              </p>
            </div>
          </Link>

          <Link href={ROUTES.DASHBOARD.STUDENT.OVERVIEW} className="group">
            <div className="bg-white p-8 rounded-[32px] h-full border border-slate-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-200/50">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <LayoutDashboard className="h-6 w-6 text-slate-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Paneli İncele
              </h3>
              <p className="text-slate-500 font-bold text-sm">
                Öğrenci panelinden ilerlemeni ve başarılarını takip et.
              </p>
            </div>
          </Link>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="rounded-2xl font-black text-slate-400 hover:text-blue-600 hover:bg-blue-50 h-12 px-6 gap-2"
            >
              <Download className="h-4 w-4" />
              Faturayı İndir
            </Button>
            <div className="w-px h-12 bg-slate-100" />
            <Button
              variant="ghost"
              className="rounded-2xl font-black text-slate-400 hover:text-blue-600 hover:bg-blue-50 h-12 px-6 gap-2"
            >
              <Share2 className="h-4 w-4" />
              Paylaş
            </Button>
          </div>

          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
            Sipariş No: #VD-20240121
          </p>
        </div>
      </div>
    </div>
  );
}
