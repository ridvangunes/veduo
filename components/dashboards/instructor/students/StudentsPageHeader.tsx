import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const StudentsPageHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Öğrenciler
        </h1>
        <p className="text-muted-foreground mt-1">
          Kurslarına kayıtlı öğrencilerin listesi ve ilerleme durumları.
        </p>
      </div>
      <Button variant="outline" className="gap-2">
        <Mail className="h-4 w-4" />
        Tümüne Mesaj Gönder
      </Button>
    </div>
  );
};

export default StudentsPageHeader;
