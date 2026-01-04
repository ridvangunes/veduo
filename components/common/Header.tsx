"use client"

import { Play, Search } from "lucide-react"
import { Button } from "../ui/button"
import { useState, useEffect } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 grid grid-cols-3 items-center">
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-blue-600/30">
                        <Play className="text-white fill-current w-5 h-5 ml-0.5" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter font-poppins">veduo</span>
                </div>


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
                    <Button variant="ghost" className="hidden sm:flex px-4 cursor-pointer">
                        Giriş Yap
                    </Button>
                    <Button className="rounded-full shadow-none hover:shadow-lg bg-blue-600 hover:bg-blue-700 cursor-pointer">
                        Hemen Başla
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Header