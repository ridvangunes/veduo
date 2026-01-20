"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PlayCircle,
  Star,
  Users,
  Clock,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const initialFavorites = [
  {
    id: 1,
    title: "Sıfırdan İleri Seviye Next.js 14 Eğitimi",
    instructor: "Can Boz",
    rating: 4.8,
    reviews: 1240,
    students: 8500,
    duration: "24sa 30dk",
    price: "₺449.99",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop&q=60",
    category: "Web Geliştirme",
    isBestSeller: true,
  },
  {
    id: 2,
    title: "Kullanıcı Deneyimi (UX) Tasarımı Temelleri",
    instructor: "Selin Yılmaz",
    rating: 4.9,
    reviews: 856,
    students: 3200,
    duration: "12sa 15dk",
    price: "₺299.99",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=800&auto=format&fit=crop&q=60",
    category: "Tasarım",
    isBestSeller: false,
  },
  {
    id: 3,
    title: "Dijital Pazarlama Uzmanlık Eğitimi 2024",
    instructor: "Ahmet Erten",
    rating: 4.7,
    reviews: 2100,
    students: 15400,
    duration: "45sa 00dk",
    price: "₺599.99",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Pazarlama",
    isBestSeller: true,
  },
];

const StudentFavoritesList = () => {
  const [favorites, setFavorites] = useState(initialFavorites);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {favorites.map((course) => (
        <Card
          key={course.id}
          className="group overflow-hidden border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 bg-white flex flex-col"
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white/90 backdrop-blur-md p-3 rounded-full scale-50 group-hover:scale-100 transition-all duration-300">
                <PlayCircle className="text-blue-600 h-8 w-8" />
              </div>
            </div>

            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className="bg-white/90 text-slate-900 border-none backdrop-blur-md font-bold text-[10px] uppercase">
                {course.category}
              </Badge>
              {course.isBestSeller && (
                <Badge className="bg-amber-500 text-white border-none font-bold text-[10px] uppercase">
                  EN ÇOK SATAN
                </Badge>
              )}
            </div>

            <button
              onClick={() => toggleFavorite(course.id)}
              className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
            >
              <Heart className="h-4 w-4 fill-current" />
            </button>
          </div>

          <CardContent className="p-5 space-y-4 flex-1">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-xs text-muted-foreground font-medium italic">
                {course.instructor}
              </p>
            </div>

            <div className="flex items-center gap-1.5 overflow-hidden">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3 w-3",
                      i < Math.floor(course.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200 fill-slate-200",
                    )}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-amber-600">
                {course.rating}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[10px] font-medium text-muted-foreground truncate">
                ({course.reviews} Değerlendirme)
              </span>
            </div>

            <div className="flex items-center gap-4 py-2 border-y border-slate-50">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                <Clock className="h-3.5 w-3.5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                <Users className="h-3.5 w-3.5" />
                <span>{course.students.toLocaleString()} Öğrenci</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-5 pt-0 flex items-center justify-between gap-4">
            <div className="text-xl font-black text-slate-900">
              {course.price}
            </div>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/10 font-bold gap-2 active:scale-95 transition-all"
            >
              <ShoppingCart className="h-4 w-4" />
              Sepete Ekle
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default StudentFavoritesList;
