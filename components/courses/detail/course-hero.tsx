import { Badge } from "@/components/ui/badge";
import { Star, User, Calendar, Globe } from "lucide-react";

export const CourseHero = () => {
  return (
    <section className="bg-slate-900 text-slate-50 pt-12 pb-24 lg:pt-20 lg:pb-40">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-500 hover:bg-blue-600 border-none">
              Yazılım
            </Badge>
            <Badge
              variant="outline"
              className="text-slate-300 border-slate-700"
            >
              React
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Modern Web Geliştirme Masterclass: React ve Next.js 14+
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Sıfırdan ileri seviyeye kadar modern React ekosistemini, gerçek
            projeler ve en iyi pratiklerle profesyonellerden öğrenin.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-1.5 text-yellow-400">
              <span className="font-bold text-lg">4.8</span>
              <div className="flex">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="text-slate-400 underline">
                (12,482 değerlendirme)
              </span>
            </div>
            <div className="text-slate-300">145,203 öğrenci</div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> Oluşturan:{" "}
              <span className="text-blue-400 underline font-bold cursor-pointer">
                Dr. Arda Yılmaz
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> Son güncelleme: 12/2023
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4" /> Türkçe, İngilizce Alt Yazılı
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
