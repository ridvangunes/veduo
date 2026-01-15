import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const topCourses = [
  {
    name: "Sıfırdan İleri Seviye React.js",
    sales: 1250,
    revenue: "₺245,000",
    rating: 4.8,
    image: "/placeholder-course-1.jpg",
  },
  {
    name: "Modern Web Tasarım Temelleri",
    sales: 850,
    revenue: "₺125,400",
    rating: 4.6,
    image: "/placeholder-course-2.jpg",
  },
  {
    name: "Python ile Veri Analizi",
    sales: 640,
    revenue: "₺98,200",
    rating: 4.9,
    image: "/placeholder-course-3.jpg",
  },
  {
    name: "Dijital Pazarlama Uzmanlığı",
    sales: 420,
    revenue: "₺65,800",
    rating: 4.5,
    image: "/placeholder-course-4.jpg",
  },
  {
    name: "Adobe Illustrator Masterclass",
    sales: 310,
    revenue: "₺42,000",
    rating: 4.7,
    image: "/placeholder-course-5.jpg",
  },
];

const TopCourses = () => {
  return (
    <Card className="col-span-3 shadow-sm border-border/60">
      <CardHeader>
        <CardTitle>En Çok Satan Kurslar</CardTitle>
        <CardDescription>
          Bu ay en yüksek performans gösteren içerikleriniz.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {topCourses.map((course, index) => (
            <div key={index} className="flex items-center">
              <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-400 mr-4">
                {/* Placeholder for image, using Initials or index if no image */}
                {index + 1}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none text-slate-900 line-clamp-1">
                  {course.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {course.sales} Satış
                </p>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-slate-900">
                  {course.revenue}
                </div>
                <div className="text-xs text-emerald-600 font-medium flex items-center justify-end gap-0.5">
                  <span className="text-[10px]">⭐</span> {course.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCourses;
