"use client";

import { Search, Filter, Check, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { value: "all", label: "Tüm Kategoriler" },
  { value: "web-dev", label: "Web Geliştirme" },
  { value: "design", label: "Tasarım" },
  { value: "video", label: "Video & Fotoğraf" },
  { value: "data", label: "Veri Bilimi" },
];

const StudentCertificatesFilter = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryLabel = categories.find(
    (c) => c.value === selectedCategory,
  )?.label;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="relative w-full sm:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Sertifikalarımda ara..."
          className="pl-10 bg-white border-slate-200 shadow-sm focus:ring-blue-500/20"
        />
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full sm:w-48 justify-start bg-white border-slate-200 shadow-sm gap-2"
            >
              <Filter className="h-4 w-4 text-slate-400" />
              <span className="truncate">{categoryLabel}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-1" align="end" sideOffset={8}>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  setSelectedCategory(category.value);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-2 py-2 text-sm transition-colors",
                  selectedCategory === category.value
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "hover:bg-slate-50 text-slate-600 hover:text-slate-900",
                )}
              >
                {category.label}
                {selectedCategory === category.value && (
                  <Check className="h-4 w-4" />
                )}
              </button>
            ))}
          </PopoverContent>
        </Popover>

        <Button
          variant="outline"
          size="icon"
          className="bg-white border-slate-200 shadow-sm shrink-0"
        >
          <ArrowUpDown className="h-4 w-4 text-slate-400" />
        </Button>
      </div>
    </div>
  );
};

export default StudentCertificatesFilter;
