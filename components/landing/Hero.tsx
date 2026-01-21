import { ArrowRight, Star, Play } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
                Yeni Nesil Eğitim Platformu
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8">
              Geleceğin{" "}
              <span className="text-blue-600 italic">Yeteneklerini</span> Bugün
              Keşfedin.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Dünyanın en iyi eğitmenlerinden, sektör odaklı kurslar.
              Kariyerinizi bir üst seviyeye taşımak için ihtiyacınız olan her
              şey burada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ROUTES.COURSES}>
                <Button
                  variant={"default"}
                  className="px-10 py-6 text-lg group rounded-2xl bg-blue-600 hover:bg-blue-700 cursor-pointer"
                >
                  Eğitimlere Göz At
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="px-10 py-6 text-lg border border-slate-900 hover:ring rounded-2xl cursor-pointer"
              >
                Nasıl Çalışır?
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-100"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i + 10}`}
                      alt="User"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  10k+
                </div>
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-600">
                  4.9/5 Ortalama Puan
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[48px] rotate-3 scale-95 opacity-10 group-hover:rotate-6 transition-transform duration-500" />
            <div className="relative rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Learning Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0">
                    <Play className="text-blue-600 fill-current w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold">
                      Web Geliştirme Masterclass
                    </p>
                    <p className="text-white/70 text-sm">
                      Canlı yayına şimdi katılın
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
