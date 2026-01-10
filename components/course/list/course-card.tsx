"use client"

import { Clock, Users, Star, Heart, BookOpen, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CourseCardProps {
    viewType: 'grid' | 'list'
}

export const CourseCard = ({ viewType }: CourseCardProps) => {
    if (viewType === 'list') {
        return (
            <Card className="border-slate-100 rounded-3xl p-4 flex gap-6 hover:shadow-lg hover:border-slate-200 transition-all group shadow-none">
                <div className="relative w-72 h-44 shrink-0 rounded-2xl overflow-hidden bg-slate-100">
                    <Image src="/course-placeholder.jpg" alt="Kurs" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Bestseller</div>
                </div>
                <div className="grow py-2 flex flex-col">
                    <div className="mb-auto">
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">React ile Modern Web Uygulamaları Geliştirme</h3>
                        <p className="text-sm text-slate-500 mb-4 line-clamp-2">Next.js, TypeScript ve Tailwind CSS kullanarak profesyonel seviyede web uygulamaları oluşturun.</p>
                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 24 saat</span>
                            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 42 Ders</span>
                            <span className="flex items-center gap-1"><BarChart className="w-3.5 h-3.5" /> Orta Seviye</span>
                            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 12,450</span>
                            <span className="flex items-center gap-1 text-yellow-500"><Star className="w-3.5 h-3.5 fill-current" /> 4.8</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-black text-slate-900">₺299</span>
                            <span className="text-sm font-bold text-slate-400 line-through">₺599</span>
                        </div>
                        <Button size="sm" className="rounded-xl">Kursa Git</Button>
                    </div>
                </div>
            </Card>
        )
    }

    return (
        <Card className="border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all group shadow-none">
            <div className="relative h-44 bg-linear-to-br from-slate-100 to-slate-50">
                <Image src="/course-placeholder.jpg" alt="Kurs" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 left-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/30">Bestseller</div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-sm cursor-pointer">
                    <Heart className="w-4 h-4 text-slate-400 hover:text-rose-500 transition-colors" />
                </button>
            </div>
            <CardContent className="p-5 pb-0">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">React ile Modern Web Uygulamalı Geliştirme</h3>
                <p className="text-xs text-slate-500 font-medium mb-3">Ahmet Yılmaz</p>
                <div className="flex items-center flex-wrap gap-3 text-xs font-semibold text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 24s</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 42 Ders</span>
                    <span className="flex items-center gap-1 text-amber-500 ml-auto"><Star className="w-3.5 h-3.5 fill-current" /> 4.8</span>
                </div>
            </CardContent>
            <CardFooter className="p-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-blue-600">₺299</span>
                    <span className="text-sm font-bold text-slate-400 line-through">₺599</span>
                </div>
            </CardFooter>
        </Card>
    )
}
