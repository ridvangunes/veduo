"use client";

import { Button } from "@/components/ui/button";

import { Download, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AnalyticsHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Analizler
        </h1>
        <p className="text-muted-foreground mt-1">
          Kurslarınızın performansını ve kazançlarınızı detaylı inceleyin.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Select defaultValue="30">
          <SelectTrigger className="w-[180px] bg-white">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <SelectValue placeholder="Tarih Aralığı" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Son 7 Gün</SelectItem>
            <SelectItem value="30">Son 30 Gün</SelectItem>
            <SelectItem value="90">Son 3 Ay</SelectItem>
            <SelectItem value="1000">Tüm Zamanlar</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2 bg-white">
          <Download className="h-4 w-4" />
          Dışa Aktar
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsHeader;
