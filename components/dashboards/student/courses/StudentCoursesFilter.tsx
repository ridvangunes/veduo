"use client";

import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentCoursesFilter = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
      <div className="w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-slate-100/80 border border-slate-200/50 p-1">
            <TabsTrigger
              value="all"
              className="px-6 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Tümü
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="px-6 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Devam Edenler
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="px-6 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Tamamlananlar
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Kurslarımda ara..."
            className="pl-10 bg-white border-slate-200 shadow-sm focus:ring-blue-500/20"
          />
        </div>

        <Select defaultValue="latest">
          <SelectTrigger className="w-full sm:w-44 bg-white border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-400" />
              <SelectValue placeholder="Sıralama" />
            </div>
          </SelectTrigger>
          <SelectContent position="popper" sideOffset={4}>
            <SelectItem value="latest">En Son İzlenen</SelectItem>
            <SelectItem value="newest">En Yeni Kayıt</SelectItem>
            <SelectItem value="oldest">En Eski Kayıt</SelectItem>
            <SelectItem value="alphabetical">A-Z Sıralama</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default StudentCoursesFilter;
