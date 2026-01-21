"use client";

import {
  Zap,
  Award,
  Globe,
  ShieldCheck,
  Play,
  Users,
  LucideIcon,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/button";

interface CategoryCardProps {
  title: string;
  count: string;
  icon: LucideIcon;
  gradient: string;
}

const CategoryCard = ({
  title,
  count,
  icon: Icon,
  gradient,
}: CategoryCardProps) => (
  <div className="group cursor-pointer relative p-4 sm:p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
    {/* Icon Container */}
    <div
      className={`w-14 h-14 rounded-2xl ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
    >
      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
    </div>

    {/* Content */}
    <h4 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
      {title}
    </h4>
    <p className="text-sm font-medium text-slate-400">{count} Kurs</p>

    {/* Arrow Icon */}
    <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-slate-900">
      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
    </div>
  </div>
);

const PopularCategories = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Popüler Kategoriler
            </h2>
            <p className="text-slate-500 text-lg">
              En çok ilgi gören alanlarda uzmanlaşmaya hemen başlayın.
            </p>
          </div>
          <Button
            variant="secondary"
            className="rounded-full border border-slate-600 cursor-pointer"
          >
            Tüm Kategoriler
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <CategoryCard
            title="Yazılım"
            count="450+"
            icon={Zap}
            gradient="bg-gradient-to-br from-blue-500 to-blue-700"
          />
          <CategoryCard
            title="Tasarım"
            count="280+"
            icon={Award}
            gradient="bg-gradient-to-br from-pink-500 to-rose-600"
          />
          <CategoryCard
            title="Pazarlama"
            count="190+"
            icon={Globe}
            gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
          />
          <CategoryCard
            title="İşletme"
            count="320+"
            icon={ShieldCheck}
            gradient="bg-gradient-to-br from-orange-500 to-amber-600"
          />
          <CategoryCard
            title="Müzik"
            count="150+"
            icon={Play}
            gradient="bg-gradient-to-br from-indigo-500 to-violet-600"
          />
          <CategoryCard
            title="Kişisel Gelişim"
            count="210+"
            icon={Users}
            gradient="bg-gradient-to-br from-purple-500 to-fuchsia-600"
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
