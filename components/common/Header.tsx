"use client";

import {
  Play,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  Menu,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";

import { SidebarContent } from "../dashboards/student/StudentSidebar";
import { InstructorSidebarContent } from "../dashboards/instructor/InstructorSidebar";

const UserMenu = () => (
  <Popover>
    <PopoverTrigger asChild>
      <div className="h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 cursor-pointer overflow-hidden border border-slate-200 hover:border-blue-200 transition-colors">
        <User className="h-5 w-5" />
      </div>
    </PopoverTrigger>
    <PopoverContent
      align="end"
      className="w-56 p-1 rounded-2xl border-slate-100 shadow-xl mt-2"
    >
      <div className="px-3 py-2 border-b border-slate-50 mb-1">
        <p className="text-sm font-bold text-slate-900 leading-none">
          Arda Güneş
        </p>
        <p className="text-[10px] text-slate-500 mt-1 font-medium italic">
          Öğrenci
        </p>
      </div>
      <div className="p-1 space-y-0.5">
        <Link href={ROUTES.DASHBOARD.STUDENT.OVERVIEW}>
          <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all text-left">
            <LayoutDashboard className="h-4 w-4" />
            <span>Panelim</span>
          </button>
        </Link>
        <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all text-left">
          <Settings className="h-4 w-4" />
          <span>Ayarlar</span>
        </button>
      </div>
      <div className="h-px bg-slate-50 my-1 mx-2" />
      <div className="p-1">
        <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50 transition-all text-left">
          <LogOut className="h-4 w-4" />
          <span>Çıkış Yap</span>
        </button>
      </div>
    </PopoverContent>
  </Popover>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDashboardMenuOpen, setIsDashboardMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Mock login state (Toggle to true for testing)
  const pathname = usePathname();

  const isInstructorDashboard = pathname?.startsWith(
    ROUTES.DASHBOARD.INSTRUCTOR.OVERVIEW,
  );
  const isStudentDashboard = pathname?.startsWith(
    ROUTES.DASHBOARD.STUDENT.OVERVIEW,
  );
  const isDashboard = isInstructorDashboard || isStudentDashboard;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menus on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDashboardMenuOpen(false);
  }, [pathname]);

  if (isDashboard) {
    return (
      <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border/40 h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger for Dashboard */}
            <Sheet
              open={isDashboardMenuOpen}
              onOpenChange={setIsDashboardMenuOpen}
            >
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 border-none w-72">
                <div className="p-6 h-full overflow-y-auto">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Play className="text-white fill-current w-4 h-4 ml-0.5" />
                    </div>
                    <span className="text-lg font-black tracking-tighter font-poppins">
                      veduo
                    </span>
                  </div>

                  {isStudentDashboard && <SidebarContent />}
                  {isInstructorDashboard && <InstructorSidebarContent />}
                </div>
              </SheetContent>
            </Sheet>

            <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Play className="text-white fill-current w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tighter font-poppins">
                veduo
              </span>
            </Link>
            <Badge
              variant="secondary"
              className="hidden md:flex text-muted-foreground bg-slate-100 font-medium px-3 py-1 text-xs"
            >
              {isInstructorDashboard ? "Eğitmen Paneli" : "Öğrenci Paneli"}
            </Badge>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
            <div className="relative w-full max-w-xs hidden lg:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Arama..."
                className="w-full bg-slate-50 border-slate-200 pl-9 focus-visible:ring-blue-600"
              />
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-muted-foreground"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-80 p-0">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <h4 className="font-semibold text-sm">Bildirimler</h4>
                  <span className="text-xs text-muted-foreground">3 yeni</span>
                </div>
                <div className="p-4 text-center text-sm text-slate-500">
                  Bildirimler yükleniyor...
                </div>
              </PopoverContent>
            </Popover>

            <UserMenu />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b py-3 shadow-sm"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-blue-600/30">
            <Play className="text-white fill-current w-5 h-5 ml-0.5" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tighter font-poppins">
            veduo
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <Link href={ROUTES.COURSES} className="hover:text-blue-600">
            Kurslar
          </Link>
          <a href="#" className="hover:text-blue-600">
            Eğitmenler
          </a>
          <a href="#" className="hover:text-blue-600">
            Kurumsal
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-600 relative group"
              >
                <ShoppingCart className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 border-2 border-white text-[10px] text-white flex items-center justify-center font-bold">
                  2
                </span>
              </Button>
              <UserMenu />
            </div>
          ) : (
            <>
              <Link href={ROUTES.AUTH.LOGIN}>
                <Button variant="ghost" className="font-bold">
                  Giriş Yap
                </Button>
              </Link>
              <Link href={ROUTES.AUTH.REGISTER}>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 font-bold">
                  Hemen Başla
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader className="text-left mb-8">
              <SheetTitle className="font-black text-2xl tracking-tighter flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Play className="text-white fill-current w-4 h-4 ml-0.5" />
                </div>
                veduo
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6">
              {isLoggedIn && (
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-none">
                      Arda Güneş
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      arda@veduo.com
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4">
                <Link
                  href={ROUTES.DASHBOARD.STUDENT.OVERVIEW}
                  className="text-lg font-bold text-blue-600 border-b pb-2 flex items-center justify-between"
                >
                  Panelim <LayoutDashboard className="h-5 w-5" />
                </Link>
                <Link
                  href={ROUTES.COURSES}
                  className="text-lg font-bold text-slate-900 border-b pb-2"
                >
                  Kurslar
                </Link>
                <a
                  href="#"
                  className="text-lg font-bold text-slate-900 border-b pb-2"
                >
                  Eğitmenler
                </a>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                {isLoggedIn ? (
                  <button className="w-full h-12 flex items-center justify-center gap-2 font-bold text-red-600 bg-red-50 rounded-xl">
                    <LogOut className="h-5 w-5" /> Çıkış Yap
                  </button>
                ) : (
                  <>
                    <Link href={ROUTES.AUTH.LOGIN}>
                      <Button
                        variant="outline"
                        className="w-full h-12 font-bold rounded-xl"
                      >
                        Giriş Yap
                      </Button>
                    </Link>
                    <Link href={ROUTES.AUTH.REGISTER}>
                      <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 font-bold rounded-xl">
                        Hemen Başla
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
