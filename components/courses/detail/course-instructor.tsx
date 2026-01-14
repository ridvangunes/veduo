import { User, Star, Award, Users } from "lucide-react";

export const CourseInstructor = () => {
  return (
    <div className="space-y-6 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold tracking-tight">Eğitmen</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border">
            <User className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-primary underline cursor-pointer">
              Dr. Arda Yılmaz
            </h4>
            <p className="text-sm text-muted-foreground font-medium">
              Senior Software Engineer & Tech Lead
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-bold">
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-current text-yellow-500" /> 4.9
            Eğitmen Puanı
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="h-4 w-4 text-blue-500" /> 25,482 Yorum
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-slate-500" /> 245,000+ Öğrenci
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          10 yılı aşkın süredir Silikon Vadisi ve Avrupa merkezli şirketlerde
          Full-stack geliştirici olarak çalışmaktadır. Karmaşık yapıları basite
          indirgeyerek anlatma konusundaki yeteneğiyle binlerce öğrencinin
          kariyerine yön vermiştir.
        </p>
      </div>
    </div>
  );
};
