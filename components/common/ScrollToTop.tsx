"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      
      const scrollProgress = (scrolled / height) * 100;
      
      setProgress(scrollProgress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 w-12 h-12 rounded-full cursor-pointer transition-all duration-300 z-50 group flex items-center justify-center bg-white shadow-xl shadow-blue-900/10 border border-slate-100",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90 text-blue-100" viewBox="0 0 36 36">
         <path
            className="text-blue-50"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="100, 100"
          />
          <path
            className="text-blue-600 transition-all duration-100"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${progress}, 100`}
          />
      </svg>
      <ArrowUp className="h-5 w-5 text-blue-600 group-hover:-translate-y-1 transition-transform relative z-10" strokeWidth={3} />
    </button>
  );
};
