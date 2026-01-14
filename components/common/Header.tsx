"use client";

import { Play, Search, Bell, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isInstructorDashboard = pathname?.startsWith("/dashboard/instructor");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isInstructorDashboard) {
    return (
      <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border/40 h-16">
        <div className="container mx-auto px-4 h-full flex items-center justify-between gap-4">
          {/* Left: Logo and Badge */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-sm shadow-blue-600/30">
                <Play className="text-white fill-current w-5 h-5 ml-0.5" />
              </div>
              <span className="text-xl font-black tracking-tighter font-poppins">
                veduo
              </span>
            </Link>
            <Badge
              variant="secondary"
              className="hidden sm:flex text-muted-foreground bg-slate-100 hover:bg-slate-100 font-medium px-3 py-1 text-xs"
            >
              Eğitmen Paneli
            </Badge>
          </div>

          {/* Right: Search, Notifications, Profile */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="relative w-full max-w-sm hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Dashboard'da ara..."
                className="w-full bg-slate-50 border-slate-200 pl-9 focus-visible:ring-blue-600"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="relative text-muted-foreground hover:text-foreground"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
            </Button>

            <div className="h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-200 transition-colors">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl py-5" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-6 grid grid-cols-3 items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-blue-600/30">
            <Play className="text-white fill-current w-5 h-5 ml-0.5" />
          </div>
          <span className="text-2xl font-black tracking-tighter font-poppins">
            veduo
          </span>
        </Link>

        <div className="flex items-center justify-center gap-8 text-sm font-bold text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Kurslar
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Eğitmenler
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Kurumsal
          </a>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Button
            variant="ghost"
            className="hidden sm:flex px-4 cursor-pointer"
          >
            Giriş Yap
          </Button>
          <Button className="rounded-full shadow-none hover:shadow-lg bg-blue-600 hover:bg-blue-700 cursor-pointer">
            Hemen Başla
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
