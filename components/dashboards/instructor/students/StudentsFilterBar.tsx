"use client";

import { Search, Filter, ArrowUpDown, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

const courses = [
  { value: "all", label: "Tüm Kurslar" },
  { value: "react", label: "React.js Eğitimi" },
  { value: "nextjs", label: "Next.js Eğitimi" },
  { value: "python", label: "Python Eğitimi" },
];

const StudentsFilterBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const currentCourse = searchParams.get("course") || "all";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleCourseChange = (value: string) => {
    router.push(pathname + "?" + createQueryString("course", value));
    setOpen(false);
  };

  const selectedCourseLabel = courses.find(
    (c) => c.value === currentCourse
  )?.label;

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-lg border border-border/50 shadow-sm">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Öğrenci ara..."
          className="pl-9 w-full bg-slate-50/50"
        />
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-start text-muted-foreground font-normal"
            >
              <div className="flex items-center gap-2 truncate">
                <Filter className="h-3.5 w-3.5 shrink-0" />
                <span className="text-foreground truncate">
                  {selectedCourseLabel || "Kurs Filtrele"}
                </span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="end">
            <div className="p-1">
              {courses.map((course) => (
                <button
                  key={course.value}
                  onClick={() => handleCourseChange(course.value)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 hover:text-slate-900 transition-colors",
                    currentCourse === course.value &&
                      "bg-slate-100 font-medium text-slate-900"
                  )}
                >
                  <span className="truncate">{course.label}</span>
                  {currentCourse === course.value && (
                    <Check className="h-4 w-4 text-slate-600 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="outline"
          size="icon"
          className="shrink-0 text-muted-foreground"
        >
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StudentsFilterBar;
