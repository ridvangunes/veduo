"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MoreVertical,
  Pencil,
  Eye,
  BarChart,
  Users,
  Star,
  Clock,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const courses = [
  {
    id: 1,
    title: "Sıfırdan İleri Seviye React.js Eğitimi",
    status: "published",
    price: "₺450",
    sales: 840,
    rating: 4.8,
    revenue: "₺378,000",
    lastUpdated: "2 gün önce",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=300&auto=format&fit=crop",
    category: "Yazılım",
  },
  {
    id: 2,
    title: "Next.js 14 ile Full Stack Uygulama Geliştirme",
    status: "published",
    price: "₺550",
    sales: 320,
    rating: 4.9,
    revenue: "₺176,000",
    lastUpdated: "1 hafta önce",
    image:
      "https://images.unsplash.com/photo-1618477247222-ac59124c6da6?q=80&w=300&auto=format&fit=crop",
    category: "Yazılım",
  },
  {
    id: 3,
    title: "Python ile Veri Bilimi ve Makine Öğrenmesi",
    status: "draft",
    price: "₺600",
    sales: 0,
    rating: 0,
    revenue: "₺0",
    lastUpdated: "3 saat önce",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=300&auto=format&fit=crop",
    category: "Veri Bilimi",
  },
  {
    id: 4,
    title: "UI/UX Tasarım Temelleri ve Figma",
    status: "archived",
    price: "₺350",
    sales: 120,
    rating: 4.5,
    revenue: "₺42,000",
    lastUpdated: "2 ay önce",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=300&auto=format&fit=crop",
    category: "Tasarım",
  },
];

const CoursesList = () => {
  const searchParams = useSearchParams();
  const statusFilter = searchParams.get("status") || "all";

  const filteredCourses = courses.filter((course) => {
    if (statusFilter === "all") return true;
    return course.status === statusFilter;
  });

  return (
    <div className="space-y-4">
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          Bu filtrelere uygun kurs bulunamadı.
        </div>
      ) : (
        filteredCourses.map((course) => (
          <Card
            key={course.id}
            className="p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow duration-300 border-border/60"
          >
            {/* Image */}
            <div className="relative w-full sm:w-48 h-32 sm:h-32 shrink-0 rounded-md overflow-hidden bg-slate-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 left-2 bg-white/90 text-slate-900 hover:bg-white/90 shadow-sm backdrop-blur-sm pointer-events-none">
                {course.category}
              </Badge>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg leading-tight text-slate-900 line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="shrink-0 flex items-center gap-2">
                    {" "}
                    {/* Actions */}
                    <div className="hidden sm:flex gap-1">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-slate-500 hover:text-slate-900"
                          >
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Menüyü aç</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-48 p-1">
                          <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-slate-100 hover:text-slate-900 transition-colors text-left">
                            <Pencil className="h-4 w-4 text-slate-500" />
                            <span>Düzenle</span>
                          </button>
                          <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-slate-100 hover:text-slate-900 transition-colors text-left">
                            <BarChart className="h-4 w-4 text-slate-500" />
                            <span>İstatistikler</span>
                          </button>
                          <div className="h-px bg-slate-100 my-1" />
                          <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-slate-100 hover:text-slate-900 transition-colors text-left">
                            <Eye className="h-4 w-4 text-slate-500" />
                            <span>Görüntüle</span>
                          </button>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-sm text-slate-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    Son güncellenme: {course.lastUpdated}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-dashed border-slate-100">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <span className="font-bold text-lg">{course.price}</span>
                  </div>

                  {course.status !== "draft" && (
                    <>
                      <div className="w-px h-4 bg-slate-200" />
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Users className="h-4 w-4 text-slate-400" />
                        <span>{course.sales} satış</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                        <span>{course.rating}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Badge
                    variant={
                      course.status === "published"
                        ? "default"
                        : course.status === "draft"
                        ? "secondary"
                        : "outline"
                    }
                    className={`capitalize font-medium ${
                      course.status === "published"
                        ? "bg-emerald-500 hover:bg-emerald-600"
                        : ""
                    }`}
                  >
                    {course.status === "published"
                      ? "Yayında"
                      : course.status === "draft"
                      ? "Taslak"
                      : "Arşivde"}
                  </Badge>
                  <Button variant="ghost" size="sm" className="h-8 text-sm">
                    Detaylar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default CoursesList;
