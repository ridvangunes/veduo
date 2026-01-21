import React from "react";
import Image from "next/image";
import { Trash2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
}

export const CartItem = ({
  title,
  instructor,
  price,
  originalPrice,
  rating,
  reviewsCount,
  image,
}: CartItemProps) => {
  return (
    <div className="group flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-3xl border border-slate-100 items-start sm:items-center hover:border-blue-100 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300">
      <div className="relative w-full sm:w-40 aspect-video rounded-2xl overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors truncate">
            {title}
          </h3>
          <p className="text-sm font-bold text-slate-400">
            Eğitmen:{" "}
            <span className="text-slate-600 underline decoration-slate-200 underline-offset-4 cursor-pointer hover:text-blue-600 hover:decoration-blue-200 transition-all">
              {instructor}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            <span className="text-xs font-black text-amber-700">{rating}</span>
          </div>
          <span className="text-xs font-bold text-slate-400">
            ({reviewsCount} değerlendirme)
          </span>
        </div>
      </div>

      <div className="flex sm:flex-col items-end gap-4 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-50 justify-between sm:justify-center">
        <div className="text-right">
          <p className="text-2xl font-black text-blue-600 tracking-tight">
            ₺{price.toLocaleString("tr-TR")}
          </p>
          {originalPrice && (
            <p className="text-sm font-bold text-slate-300 line-through">
              ₺{originalPrice.toLocaleString("tr-TR")}
            </p>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 rounded-2xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
