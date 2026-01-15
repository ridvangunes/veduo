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

const statuses = [
  { value: "all", label: "Tümü" },
  { value: "published", label: "Yayında" },
  { value: "draft", label: "Taslak" },
  { value: "archived", label: "Arşivlenmiş" },
];

const CoursesFilterBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const currentStatus = searchParams.get("status") || "all";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleStatusChange = (value: string) => {
    router.push(pathname + "?" + createQueryString("status", value));
    setOpen(false);
  };

  const selectedStatusLabel = statuses.find(
    (s) => s.value === currentStatus
  )?.label;

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-lg border border-border/50 shadow-sm">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Kurslarda ara..."
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
              className="w-[160px] justify-start text-muted-foreground font-normal"
            >
              <div className="flex items-center gap-2">
                <Filter className="h-3.5 w-3.5" />
                <span className="text-foreground">
                  {selectedStatusLabel || "Durum"}
                </span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[160px] p-0" align="end">
            <div className="p-1">
              {statuses.map((status) => (
                <button
                  key={status.value}
                  onClick={() => handleStatusChange(status.value)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 hover:text-slate-900 transition-colors",
                    currentStatus === status.value &&
                      "bg-slate-100 font-medium text-slate-900"
                  )}
                >
                  {status.label}
                  {currentStatus === status.value && (
                    <Check className="h-4 w-4 text-slate-600" />
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

export default CoursesFilterBar;
