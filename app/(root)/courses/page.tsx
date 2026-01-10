"use client"

import { useState } from "react"
import { CourseCard } from "@/components/course/list/course-card"
import { CourseFilters } from "@/components/course/list/course-filters"
import { CourseToolbar } from "@/components/course/list/course-toolbar"
import { CourseSearch } from "@/components/course/list/course-search"
import { CoursePagination } from "@/components/course/list/course-pagination"

const CoursesPage = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [viewType, setViewType] = useState<'grid' | 'list'>('grid')
    const [searchQuery, setSearchQuery] = useState('')
    const [priceRange, setPriceRange] = useState([0, 1000])
    const [sortBy, setSortBy] = useState('popular')

    return (
        <section className="py-12 min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Kursları Keşfet</h1>
                    <p className="text-slate-500 text-lg">Binlerce kurs arasından size uygun olanı bulun</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <CourseFilters
                        isOpen={isFilterOpen}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                    />

                    {/* Main Content Area */}
                    <div className="grow">

                        {/* Toolbar */}
                        <CourseToolbar
                            viewType={viewType}
                            setViewType={setViewType}
                            isFilterOpen={isFilterOpen}
                            setIsFilterOpen={setIsFilterOpen}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        {/* Search Input */}
                        <CourseSearch
                            value={searchQuery}
                            onChange={setSearchQuery}
                        />

                        {/* Course Grid/List */}
                        <div className={`grid gap-6 ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                            {[...Array(9)].map((_, i) => (
                                <CourseCard key={i} viewType={viewType} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <CoursePagination />
                    </div>

                </div >
            </div >
        </section>
    )
}

export default CoursesPage