"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const activeCourses = [
  {
    id: 1,
    title: "Sıfırdan İleri Seviye React.js Rehberi",
    instructor: "Arda Güneş",
    progress: 65,
    lastAccessed: "2 saat önce",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Modern Web Tasarımı ve Figma",
    instructor: "Zeynep Kaya",
    progress: 32,
    lastAccessed: "Dün",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=60",
  },
];

const ContinueLearning = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Öğrenmeye Devam Et</h2>
        <Link
          href="/dashboard/student/courses"
          className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
        >
          Tüm Kurslarım <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6">
        {activeCourses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden border-border/60 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-56 h-32 md:h-auto relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="text-white h-12 w-12" />
                </div>
              </div>
              <div className="flex-1 p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 italic">
                      Eğitmen: {course.instructor}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none font-bold"
                  >
                    %{course.progress}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
                    <span>Son İzleme: {course.lastAccessed}</span>
                    <span>Sıradaki: Bölüm 4</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContinueLearning;
