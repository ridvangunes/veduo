import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Play, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CourseCurriculum = () => {
  const curriculum = [
    {
      title: "Giriş ve Temel Kavramlar",
      lessons: [
        { title: "React Nedir?", duration: "05:20", isPreview: true },
        {
          title: "Kurulum ve Ortam Hazırlığı",
          duration: "12:45",
          isPreview: true,
        },
        { title: "JSX Yapısını Anlamak", duration: "08:15", isPreview: false },
      ],
    },
    {
      title: "Bileşenler ve State Yönetimi",
      lessons: [
        {
          title: "Functional Components",
          duration: "15:10",
          isPreview: false,
        },
        {
          title: "useState Hook Kullanımı",
          duration: "22:30",
          isPreview: false,
        },
        {
          title: "Props ile Veri Aktarımı",
          duration: "18:20",
          isPreview: false,
        },
      ],
    },
    {
      title: "Modern Hooklar ve Context API",
      lessons: [
        {
          title: "useEffect Derinlemesine",
          duration: "25:40",
          isPreview: false,
        },
        {
          title: "Context API ile Global State",
          duration: "30:15",
          isPreview: false,
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Kurs içeriği</h2>
        <div className="text-sm text-muted-foreground font-medium hidden sm:block">
          12 Bölüm • 156 Ders • 42s 15dk toplam süre
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full border border-border rounded-xl overflow-hidden bg-background"
      >
        {curriculum.map((section, idx) => (
          <AccordionItem
            key={idx}
            value={`section-${idx}`}
            className="border-b last:border-b-0"
          >
            <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50 transition-colors">
              <span className="text-base font-semibold">{section.title}</span>
            </AccordionTrigger>
            <AccordionContent className="p-0">
              <div className="flex flex-col">
                {section.lessons.map((lesson, lessonIdx) => (
                  <div
                    key={lessonIdx}
                    className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {lesson.isPreview ? (
                        <PlayCircle className="h-4 w-4 text-blue-500" />
                      ) : (
                        <Play className="h-4 w-4 text-slate-400" />
                      )}
                      <span
                        className={`text-sm ${
                          lesson.isPreview
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {lesson.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {lesson.isPreview && (
                        <Badge
                          variant="secondary"
                          className="text-blue-600 bg-blue-50 hover:bg-blue-100"
                        >
                          Önizleme
                        </Badge>
                      )}
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button variant="outline" className="w-full">
        Tüm Bölümleri Gör
      </Button>
    </div>
  );
};
