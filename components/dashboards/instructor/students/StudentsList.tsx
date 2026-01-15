"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MoreVertical, Mail, UserX, MessageSquare } from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Mock data for students
const students = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@gmail.com",
    avatar: "AY",
    courseId: "react",
    courseName: "React.js Eğitimi",
    progress: 75,
    enrolledAt: "12 Oca 2024",
    lastActive: "2 saat önce",
  },
  {
    id: 2,
    name: "Zeynep Kaya",
    email: "zeynep.kaya@hotmail.com",
    avatar: "ZK",
    courseId: "nextjs",
    courseName: "Next.js Eğitimi",
    progress: 30,
    enrolledAt: "10 Oca 2024",
    lastActive: "1 gün önce",
  },
  {
    id: 3,
    name: "Mehmet Demir",
    email: "mehmet.d@outlook.com",
    avatar: "MD",
    courseId: "python",
    courseName: "Python Eğitimi",
    progress: 10,
    enrolledAt: "05 Oca 2024",
    lastActive: "3 gün önce",
  },
  {
    id: 4,
    name: "Ayşe Çelik",
    email: "ayse.celik@gmail.com",
    avatar: "AÇ",
    courseId: "react",
    courseName: "React.js Eğitimi",
    progress: 100,
    enrolledAt: "01 Ara 2023",
    lastActive: "1 ay önce",
  },
  {
    id: 5,
    name: "Can Baran",
    email: "can.baran@yandex.com",
    avatar: "CB",
    courseId: "nextjs",
    courseName: "Next.js Eğitimi",
    progress: 55,
    enrolledAt: "20 Ara 2023",
    lastActive: "5 saat önce",
  },
];

const StudentsList = () => {
  const searchParams = useSearchParams();
  const courseFilter = searchParams.get("course") || "all";

  const filteredStudents = students.filter((student) => {
    if (courseFilter === "all") return true;
    return student.courseId === courseFilter;
  });

  return (
    <div className="space-y-4">
      {filteredStudents.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          Bu filtreye uygun öğrenci bulunamadı.
        </div>
      ) : (
        filteredStudents.map((student) => (
          <Card
            key={student.id}
            className="p-4 flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-sm transition-shadow border-border/60"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 min-w-[200px] md:w-1/4">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage
                  src={`/avatars/${student.id}.png`}
                  alt={student.name}
                />
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {student.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm text-slate-900">
                  {student.name}
                </h3>
                <p className="text-xs text-slate-500">{student.email}</p>
              </div>
            </div>

            {/* Course Info */}
            <div className="flex-1 w-full md:w-auto">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-700">
                  {student.courseName}
                </span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 w-8 text-right">
                    %{student.progress}
                  </span>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="hidden lg:flex items-center gap-8 text-xs text-slate-500 w-1/4 justify-end">
              <div className="text-right">
                <p className="text-slate-400">Kayıt Tarihi</p>
                <p className="font-medium text-slate-700">
                  {student.enrolledAt}
                </p>
              </div>
              <div className="text-right">
                <p className="text-slate-400">Son Aktivite</p>
                <p className="font-medium text-slate-700">
                  {student.lastActive}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end w-full md:w-auto ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex text-muted-foreground hover:text-blue-600"
              >
                <MessageSquare className="h-4 w-4" />
              </Button>

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
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span>Mesaj Gönder</span>
                  </button>
                  <div className="h-px bg-slate-100 my-1" />
                  <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 transition-colors text-left">
                    <UserX className="h-4 w-4" />
                    <span>Dersten Çıkar</span>
                  </button>
                </PopoverContent>
              </Popover>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default StudentsList;
