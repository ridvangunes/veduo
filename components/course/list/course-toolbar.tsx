"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { LayoutGrid, List, SlidersHorizontal, ChevronDown, Check } from "lucide-react"

interface CourseToolbarProps {
    viewType: 'grid' | 'list'
    setViewType: (type: 'grid' | 'list') => void
    isFilterOpen: boolean
    setIsFilterOpen: (isOpen: boolean) => void
    sortBy: string
    setSortBy: (sort: string) => void
}

export const CourseToolbar = ({
    viewType,
    setViewType,
    isFilterOpen,
    setIsFilterOpen,
    sortBy,
    setSortBy
}: CourseToolbarProps) => {
    const [sortOpen, setSortOpen] = useState(false)

    return (
        <div className="bg-white border border-slate-100 rounded-3xl p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <Button
                    variant="secondary"
                    className={`p-2.5 rounded-xl cursor-pointer ${viewType === 'grid' ? 'bg-blue-50 border-blue-100 text-blue-600' : ''}`}
                    onClick={() => setViewType('grid')}
                >
                    <LayoutGrid className="w-5 h-5" />
                </Button>
                <Button
                    variant="secondary"
                    className={`p-2.5 rounded-xl cursor-pointer ${viewType === 'list' ? 'bg-blue-50 border-blue-100 text-blue-600' : ''}`}
                    onClick={() => setViewType('list')}
                >
                    <List className="w-5 h-5" />
                </Button>
                <div className="h-8 w-px bg-slate-100 mx-2" />
                <button
                    className="lg:hidden flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-100 px-4 py-2.5 rounded-xl cursor-pointer"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                    <SlidersHorizontal className="w-4 h-4" /> Filtrele
                </button>
                <p className="text-sm font-bold text-slate-400 ml-2 hidden sm:block">1,284 sonuç</p>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-400 whitespace-nowrap">Sırala:</span>
                <Popover open={sortOpen} onOpenChange={setSortOpen}>
                    <PopoverTrigger asChild>
                        <button className="flex items-center justify-between w-52 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-white hover:border-blue-200 transition-all cursor-pointer">
                            {sortBy === 'popular' && 'En Çok Tercih Edilen'}
                            {sortBy === 'newest' && 'En Yeni'}
                            {sortBy === 'price-asc' && 'Fiyat: Artan'}
                            {sortBy === 'price-desc' && 'Fiyat: Azalan'}
                            {sortBy === 'rating' && 'Puan: En Yüksek'}
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-52 p-2 rounded-2xl border-slate-100 shadow-xl" align="end">
                        {[
                            { value: 'popular', label: 'En Çok Tercih Edilen' },
                            { value: 'newest', label: 'En Yeni' },
                            { value: 'price-asc', label: 'Fiyat: Artan' },
                            { value: 'price-desc', label: 'Fiyat: Azalan' },
                            { value: 'rating', label: 'Puan: En Yüksek' },
                        ].map((option) => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    setSortBy(option.value)
                                    setSortOpen(false)
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-between ${sortBy === option.value
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                {option.label}
                                {sortBy === option.value && <Check className="w-4 h-4" />}
                            </button>
                        ))}
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
