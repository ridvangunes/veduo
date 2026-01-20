"use client";

import { Button } from "@/components/ui/button";
import { History, Compass } from "lucide-react";

interface StudentDashboardHeaderProps {
  userName: string;
}

const StudentDashboardHeader = ({ userName }: StudentDashboardHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Merhaba, {userName}! 👋
        </h1>
        <p className="text-muted-foreground mt-1 text-lg">
          Öğrenmeye kaldığın yerden devam etmeye ne dersin?
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="shadow-sm px-6 bg-white border-slate-200 hover:bg-slate-50 gap-2 transition-all active:scale-95"
        >
          <History className="h-4 w-4 text-slate-500" />
          Öğrenme Günlüğü
        </Button>
        <Button className="shadow-lg shadow-blue-600/20 bg-blue-600 hover:bg-blue-700 px-6 gap-2 transition-all active:scale-95 group">
          <Compass className="h-4 w-4 group-hover:rotate-12 transition-transform" />
          Yeni Kurs Keşfet
        </Button>
      </div>
    </div>
  );
};

export default StudentDashboardHeader;
