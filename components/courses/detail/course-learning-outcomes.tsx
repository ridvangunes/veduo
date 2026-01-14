import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const CourseLearningOutcomes = () => {
  return (
    <Card className="p-6 md:p-8 bg-background shadow-md border-border">
      <h2 className="text-2xl font-bold mb-6 tracking-tight">
        Neler öğreneceksiniz?
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          "React temellerini ve modern Hook yapılarını",
          "Next.js 14 App Router mimarisini",
          "Tailwind CSS ile profesyonel UI tasarımı",
          "TypeScript ile güvenli kod yazımını",
          "Redux Toolkit ve Zustand ile State yönetimi",
          "Gerçek dünya projeleriyle portfolyo oluşturma",
        ].map((item, i) => (
          <div key={i} className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};
