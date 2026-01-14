import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoreHorizontal, Pencil, Eye } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    titulo: "Sıfırdan İleri Seviye React.js Eğitimi",
    price: "₺450",
    status: "Yayında",
    students: 840,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=260&auto=format&fit=crop",
  },
  {
    titulo: "Next.js 14 ile Full Stack Uygulama Geliştirme",
    price: "₺550",
    status: "Yayında",
    students: 320,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1618477247222-ac59124c6da6?q=80&w=260&auto=format&fit=crop",
  },
  {
    titulo: "Python ile Veri Bilimi ve Makine Öğrenmesi",
    price: "₺600",
    status: "Taslak",
    students: 0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=260&auto=format&fit=crop",
  },
];

const RecentCourses = () => {
  return (
    <Card className="col-span-1 lg:col-span-2 border-border/50 shadow-sm h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Son Kurslarınız</CardTitle>
          <CardDescription>
            En son güncellenen kurslarınızın durumu.
          </CardDescription>
        </div>
        <Link href="/instructor/courses">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary/80"
          >
            Tümünü Gör
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map((course, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="relative h-16 w-24 overflow-hidden rounded-md border border-border/50">
                <img
                  src={course.image}
                  alt={course.titulo}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium leading-none line-clamp-1 group-hover:text-primary transition-colors">
                  {course.titulo}
                </p>
                <div className="flex items-center text-xs text-muted-foreground gap-2">
                  <Badge
                    variant={
                      course.status === "Yayında" ? "default" : "secondary"
                    }
                    className="h-5 px-1.5 rounded-sm font-normal"
                  >
                    {course.status}
                  </Badge>
                  <span>{course.price}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">
                    {course.students} öğrenci
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Pencil className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentCourses;
