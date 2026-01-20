"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, MoreVertical, Clock, BookOpen, Star } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Sıfırdan İleri Seviye React.js Rehberi",
    instructor: "Arda Güneş",
    progress: 65,
    lessonsCount: 48,
    completedLessons: 31,
    duration: "12sa 45dk",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    category: "Web Geliştirme",
  },
  {
    id: 2,
    title: "Modern Web Tasarımı ve Figma",
    instructor: "Zeynep Kaya",
    progress: 32,
    lessonsCount: 24,
    completedLessons: 8,
    duration: "8sa 20dk",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=60",
    category: "Tasarım",
  },
  {
    id: 3,
    title: "İleri Seviye Next.js ve App Router",
    instructor: "Mert Demir",
    progress: 100,
    lessonsCount: 36,
    completedLessons: 36,
    duration: "15sa 10dk",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop&q=60",
    category: "Web Geliştirme",
  },
  {
    id: 4,
    title: "Adobe Premiere Pro ile Video Düzenleme",
    instructor: "Can Tanrıyar",
    progress: 15,
    lessonsCount: 52,
    completedLessons: 8,
    duration: "22sa 30dk",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=60",
    category: "Video & Fotoğraf",
  },
  {
    id: 5,
    title: "Python ile Veri Bilimine Giriş",
    instructor: "Elif Şahin",
    progress: 0,
    lessonsCount: 64,
    completedLessons: 0,
    duration: "28sa 15dk",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    category: "Veri Bilimi",
  },
  {
    id: 6,
    title: "UI/UX Tasarım İlkeleri",
    instructor: "Zeynep Kaya",
    progress: 85,
    lessonsCount: 20,
    completedLessons: 17,
    duration: "6sa 45dk",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=800&auto=format&fit=crop&q=60",
    category: "Tasarım",
  },
];

const StudentCoursesList = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="group overflow-hidden border-border/60 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <PlayCircle className="text-white h-12 w-12 transform group-hover:scale-110 transition-transform" />
            </div>
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className="bg-white/90 text-slate-900 border-none backdrop-blur-md font-bold text-[10px] uppercase">
                {course.category}
              </Badge>
              {course.progress === 100 && (
                <Badge className="bg-emerald-500 text-white border-none font-bold text-[10px] uppercase">
                  TAMAMLANDI
                </Badge>
              )}
            </div>
          </div>

          <CardContent className="p-5 space-y-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 -mt-1 -mr-2 text-slate-400"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Favorilere Ekle</DropdownMenuItem>
                  <DropdownMenuItem>Paylaş</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Kursu Arşivle
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium italic">
              <span>{course.instructor}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                <span>{course.rating}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-600">İlerleme</span>
                <span className="text-blue-600">%{course.progress}</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                <BookOpen className="h-3.5 w-3.5" />
                <span>
                  {course.completedLessons}/{course.lessonsCount} Ders
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-tight justify-end">
                <Clock className="h-3.5 w-3.5" />
                <span>{course.duration}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StudentCoursesList;
