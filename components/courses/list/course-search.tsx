"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface CourseSearchProps {
    value: string
    onChange: (value: string) => void
}

export const CourseSearch = ({ value, onChange }: CourseSearchProps) => {
    return (
        <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
                type="text"
                placeholder="Kurs ara..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-2xl border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 text-base"
            />
        </div>
    )
}
