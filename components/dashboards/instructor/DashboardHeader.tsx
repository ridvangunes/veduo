import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Hoş geldin, Arda
          </span>{" "}
          <span>👋</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          İşte bugün kurslarında olup bitenler.
        </p>
      </div>
      <Link href="/instructor/create-course">
        <Button
          size="lg"
          className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
        >
          <PlusCircle className="h-5 w-5" />
          Yeni Kurs Oluştur
        </Button>
      </Link>
    </div>
  );
};

export default DashboardHeader;
