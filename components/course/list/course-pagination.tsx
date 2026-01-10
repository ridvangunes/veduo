"use client"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export const CoursePagination = () => {
    return (
        <div className="mt-16">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" className="rounded-xl" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive className="rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:text-white border-blue-600">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" className="rounded-xl">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" className="rounded-xl">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" className="rounded-xl">12</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" className="rounded-xl" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
