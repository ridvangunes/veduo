"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  MessageSquare,
  Bell,
  Settings,
  Wallet,
  LogOut,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";

const sidebarSections = [
  {
    title: "Yönetim",
    items: [
      {
        title: "Genel Bakış",
        href: ROUTES.DASHBOARD.INSTRUCTOR.OVERVIEW,
        icon: LayoutDashboard,
      },
      {
        title: "Kurslarım",
        href: ROUTES.DASHBOARD.INSTRUCTOR.COURSES,
        icon: BookOpen,
      },
      {
        title: "Öğrenciler",
        href: ROUTES.DASHBOARD.INSTRUCTOR.STUDENTS,
        icon: Users,
      },
      {
        title: "Finans",
        href: ROUTES.DASHBOARD.INSTRUCTOR.FINANCE,
        icon: Wallet,
      },
    ],
  },
  {
    title: "İletişim & Analiz",
    items: [
      {
        title: "Analizler",
        href: ROUTES.DASHBOARD.INSTRUCTOR.ANALYTICS,
        icon: BarChart3,
      },
      {
        title: "Mesajlar",
        href: ROUTES.DASHBOARD.INSTRUCTOR.MESSAGES,
        icon: MessageSquare,
        badge: 3,
      },
      {
        title: "Bildirimler",
        href: ROUTES.DASHBOARD.INSTRUCTOR.NOTIFICATIONS,
        icon: Bell,
      },
    ],
  },
  {
    title: "Hesap",
    items: [
      {
        title: "Ayarlar",
        href: ROUTES.DASHBOARD.INSTRUCTOR.SETTINGS,
        icon: Settings,
      },
    ],
  },
];

const InstructorSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-xl border border-border/60 shadow-sm p-4 sticky top-24">
      {/* Pro Badge/Callout */}
      <div className="mb-6 p-4 rounded-lg bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="font-bold text-sm">Pro Eğitmen</span>
        </div>
        <p className="text-xs text-blue-100 opacity-90">
          Bu ay %12 daha fazla kazanç sağladınız. Harika gidiyor!
        </p>
      </div>

      <div className="space-y-6">
        {sidebarSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block group"
                  >
                    <div
                      className={cn(
                        "relative flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-blue-50 text-blue-700 shadow-sm shadow-blue-100/50"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                      )}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-blue-600 rounded-r-full" />
                      )}

                      <div className="flex items-center gap-3">
                        <item.icon
                          className={cn(
                            "h-4.5 w-4.5",
                            isActive
                              ? "text-blue-600"
                              : "text-slate-400 group-hover:text-slate-600",
                          )}
                        />
                        <span>{item.title}</span>
                      </div>

                      {"badge" in item && item.badge && (
                        <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700 text-[10px] shadow-none">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-dashed border-border/60 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
          <HelpCircle className="h-4.5 w-4.5 text-slate-400" />
          Destek Merkezi
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
          <LogOut className="h-4.5 w-4.5" />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default InstructorSidebar;
