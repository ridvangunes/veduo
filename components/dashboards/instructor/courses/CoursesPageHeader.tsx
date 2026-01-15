import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateCourseModal } from "../create-course/CreateCourseModal";

const CoursesPageHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Kurslarım
        </h1>
        <p className="text-muted-foreground mt-1">
          Oluşturduğun kursları buradan yönetebilir ve düzenleyebilirsin.
        </p>
      </div>
      <CreateCourseModal>
        <Button className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
          <PlusCircle className="h-4 w-4" />
          Yeni Kurs Oluştur
        </Button>
      </CreateCourseModal>
    </div>
  );
};

export default CoursesPageHeader;
