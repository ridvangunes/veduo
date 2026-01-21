"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Github, Mail, Chrome } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function LoginPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">
          Hoş Geldiniz
        </h1>
        <p className="text-slate-500 font-medium">
          Hesabınıza giriş yaparak öğrenmeye hemen devam edin.
        </p>
      </div>

      {/* Social Logins */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="h-12 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900 font-bold gap-2"
        >
          <Chrome className="h-5 w-5 text-[#4285F4]" />
          Google
        </Button>
        <Button
          variant="outline"
          className="h-12 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900 font-bold gap-2"
        >
          <Github className="h-5 w-5" />
          GitHub
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-100" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-4 text-slate-400 font-black tracking-widest leading-none">
            Veya e-posta ile
          </span>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-900 ml-1">
            E-posta
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input
              type="email"
              placeholder="vadi@veduo.com"
              className="h-12 pl-10 border-slate-200 bg-slate-50/50 focus-visible:ring-blue-600/20 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between ml-1">
            <label className="text-sm font-bold text-slate-900">Şifre</label>
            <Link
              href="#"
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Şifremi Unuttum
            </Link>
          </div>
          <Input
            type="password"
            placeholder="••••••••"
            className="h-12 border-slate-200 bg-slate-50/50 focus-visible:ring-blue-600/20 rounded-xl"
          />
        </div>

        <div className="flex items-center space-x-2 ml-1">
          <Checkbox id="remember" className="rounded-md border-slate-300" />
          <label
            htmlFor="remember"
            className="text-sm font-medium text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Beni Hatırla
          </label>
        </div>

        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] mt-2">
          Giriş Yap
        </Button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-slate-500 font-medium">
        Hesabınız yok mu?{" "}
        <Link
          href={ROUTES.AUTH.REGISTER}
          className="text-blue-600 font-bold hover:underline"
        >
          Hemen Kaydolun
        </Link>
      </p>
    </div>
  );
}
