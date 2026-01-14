"use client"

import { ChevronDown, Star } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

// Custom checkbox with label component
const FilterCheckbox = ({ label, count }: { label: string; count: string }) => (
    <label className="flex items-center gap-3 py-2 cursor-pointer group">
        <Checkbox className="border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors grow">{label}</span>
        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{count}</span>
    </label>
)

interface CourseFiltersProps {
    isOpen: boolean;
    priceRange: number[];
    setPriceRange: (value: number[]) => void;
}

export const CourseFilters = ({ isOpen, priceRange, setPriceRange }: CourseFiltersProps) => {
    return (
        <aside className={`lg:w-72 shrink-0 ${isOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                <div className="max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 space-y-6 custom-scrollbar">

                    {/* Filter Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                        <h3 className="font-bold text-lg text-slate-900">Filtreler</h3>
                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">
                            Temizle
                        </button>
                    </div>

                    {/* Filter Group: Category */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 mb-4 flex items-center justify-between">
                            Kategoriler
                        </h4>
                        <div className="space-y-1 max-h-[200px] overflow-y-auto custom-scrollbar pr-1">
                            <FilterCheckbox label="Web Geliştirme" count="452" />
                            <FilterCheckbox label="Mobil Uygulamalar" count="210" />
                            <FilterCheckbox label="Veri Bilimi" count="128" />
                            <FilterCheckbox label="Siber Güvenlik" count="84" />
                            <FilterCheckbox label="Oyun Geliştirme" count="62" />
                            <FilterCheckbox label="DevOps" count="45" />
                            <FilterCheckbox label="Cloud Computing" count="38" />
                            <FilterCheckbox label="Yapay Zeka" count="96" />
                            <FilterCheckbox label="Makine Öğrenmesi" count="72" />
                            <FilterCheckbox label="Blockchain" count="24" />
                            <FilterCheckbox label="UI/UX Tasarım" count="156" />
                            <FilterCheckbox label="Proje Yönetimi" count="88" />
                            <FilterCheckbox label="Dijital Pazarlama" count="115" />
                            <FilterCheckbox label="İngilizce" count="430" />
                            <FilterCheckbox label="Finans" count="65" />
                        </div>
                    </div>

                    {/* Filter Group: Level */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 mb-4 flex items-center justify-between">
                            Zorluk Seviyesi
                        </h4>
                        <div className="space-y-1">
                            <FilterCheckbox label="Başlangıç" count="340" />
                            <FilterCheckbox label="Orta Seviye" count="512" />
                            <FilterCheckbox label="İleri Seviye" count="120" />
                            <FilterCheckbox label="Uzman" count="45" />
                        </div>
                    </div>

                    {/* Filter Group: Rating */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 mb-4">Puanlama</h4>
                        <div className="space-y-2">
                            {[4, 3, 2].map(star => (
                                <label key={star} className="flex items-center gap-3 cursor-pointer group">
                                    <Checkbox className="border-slate-300" />
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3.5 h-3.5 ${i < star ? 'fill-current' : 'text-slate-200'}`} />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">& üzeri</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Filter Group: Price */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 mb-4">Fiyat Aralığı</h4>
                        <div className="space-y-4">
                            <Slider
                                value={priceRange}
                                onValueChange={setPriceRange}
                                max={1000}
                                min={0}
                                step={10}
                                className="w-full"
                            />
                            <div className="flex items-center justify-between text-sm">
                                <div className="px-3 py-2">
                                    <span className="text-slate-400 text-xs">Min</span>
                                    <p className="font-bold text-slate-900">₺{priceRange[0]}</p>
                                </div>
                                <div className="h-px w-4" />
                                <div className="px-3 py-2 text-right">
                                    <span className="text-slate-400 text-xs">Max</span>
                                    <p className="font-bold text-slate-900">₺{priceRange[1]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
