"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  PlusCircle,
  Type,
  Layout,
  Image as ImageIcon,
  DollarSign,
  Check,
  ChevronRight,
  ChevronLeft,
  Upload,
  Video,
  FileText,
  GripVertical,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface CreateCourseModalProps {
  children?: React.ReactNode;
}

const steps = [
  { id: 1, title: "TEMEL BILGILER", icon: Type },
  { id: 2, title: "MÜFREDAT", icon: Layout },
  { id: 3, title: "MEDYA", icon: ImageIcon },
  { id: 4, title: "FIYATLANDIRMA", icon: DollarSign },
];

export function CreateCourseModal({ children }: CreateCourseModalProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const router = useRouter();

  // --- Form States ---
  const [basicInfo, setBasicInfo] = useState({
    title: "",
    category: "",
    level: "",
    description: "",
  });

  const [pricing, setPricing] = useState({
    type: "paid" as "paid" | "free",
    price: "",
    discountedPrice: "",
  });

  // --- Handlers ---
  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      // Publish/Finish logic
      handleFinish();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinish = () => {
    setOpen(false);
    // Reset and redirect
    setTimeout(() => {
      setStep(1);
      router.push("/dashboard/instructor/courses/1/edit");
    }, 300);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        if (!val) setTimeout(() => setStep(1), 300);
      }}
    >
      <DialogTrigger asChild>
        {children || (
          <Button className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            <PlusCircle className="h-4 w-4" />
            Yeni Kurs Oluştur
          </Button>
        )}
      </DialogTrigger>

      {/* Increased max-width for the elaborate design */}
      <DialogContent className="sm:max-w-[1100px] p-0 gap-0 overflow-hidden bg-slate-50/50 block">
        <DialogTitle className="sr-only">Yeni Kurs Oluştur</DialogTitle>
        {/* Top Progress Bar */}
        <div className="bg-white border-b border-border/50 px-8 py-6">
          <div className="flex items-start justify-between max-w-4xl mx-auto">
            {steps.map((s, i) => {
              const isActive = step === s.id;
              const isCompleted = step > s.id;

              return (
                <div key={s.id} className="contents">
                  {/* Step Item */}
                  <div className="flex flex-col items-center gap-2 z-10">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                          : isCompleted
                          ? "border-blue-600 bg-white text-blue-600"
                          : "border-slate-200 bg-white text-slate-300"
                      )}
                    >
                      {isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <s.icon className="h-5 w-5" />
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-[10px] font-bold tracking-wider uppercase transition-colors duration-300",
                        isActive ? "text-blue-600" : "text-slate-400"
                      )}
                    >
                      {s.title}
                    </span>
                  </div>

                  {/* Connecting Line (Separator) */}
                  {i < steps.length - 1 && (
                    <div
                      className={cn(
                        "flex-1 h-0.5 mt-5 mx-4 transition-all duration-500",
                        step > i + 1 ? "bg-blue-600" : "bg-slate-200"
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 min-h-[400px] bg-slate-50">
          <div className="bg-white rounded-xl shadow-sm border border-border/50 p-8 h-full animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* STEP 1: TEMEL BOILER */}
            {step === 1 && (
              <div className="space-y-8 max-w-3xl mx-auto">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Kursunuzu Tanımlayın
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Harika bir başlık ve açıklama, kursun başarısında %60 rol
                    oynar.
                  </p>
                </div>
                <div className="h-px bg-slate-100" />

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">
                      Kurs Başlığı
                    </label>
                    <Input
                      placeholder="Örn: Sıfırdan İleri Seviye Next.js Rehberi"
                      className="h-12 text-base"
                      value={basicInfo.title}
                      onChange={(e) =>
                        setBasicInfo({ ...basicInfo, title: e.target.value })
                      }
                    />
                    <p className="text-xs text-muted-foreground">
                      Maksimum 60 karakter önerilir.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">
                        Kategori
                      </label>
                      <Select
                        value={basicInfo.category}
                        onValueChange={(v) =>
                          setBasicInfo({ ...basicInfo, category: v })
                        }
                      >
                        <SelectTrigger className="h-12 w-full text-base px-3">
                          <SelectValue placeholder="Seçiniz..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="software">
                            Yazılım Geliştirme
                          </SelectItem>
                          <SelectItem value="design">Tasarım</SelectItem>
                          <SelectItem value="marketing">Pazarlama</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">
                        Zorluk Seviyesi
                      </label>
                      <Select
                        value={basicInfo.level}
                        onValueChange={(v) =>
                          setBasicInfo({ ...basicInfo, level: v })
                        }
                      >
                        <SelectTrigger className="h-12 w-full text-base px-3">
                          <SelectValue placeholder="Seçiniz..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Başlangıç</SelectItem>
                          <SelectItem value="intermediate">
                            Orta Seviye
                          </SelectItem>
                          <SelectItem value="advanced">İleri Seviye</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">
                      Kurs Açıklaması
                    </label>
                    <Textarea
                      placeholder="Öğrenciler bu kursta tam olarak ne öğrenecek?"
                      className="min-h-[150px] resize-none text-base"
                      value={basicInfo.description}
                      onChange={(e) =>
                        setBasicInfo({
                          ...basicInfo,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: MÜFREDAT */}
            {step === 2 && (
              <div className="space-y-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Bölümler ve Dersler
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      Müfredatınızı oluşturun ve içerikleri düzenleyin.
                    </p>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Yeni Bölüm
                  </Button>
                </div>
                <div className="h-px bg-slate-100" />

                <div className="space-y-4">
                  {/* Mock Section 1 */}
                  <div className="border border-border/60 rounded-lg overflow-hidden bg-slate-50/30">
                    <div className="bg-slate-50/50 p-4 border-b border-border/50 flex items-center gap-3">
                      <GripVertical className="h-5 w-5 text-slate-400 cursor-move" />
                      <h3 className="font-semibold text-slate-900">
                        Bölüm 1: Giriş ve Temeller
                      </h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="bg-white border border-border/50 rounded-md p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Video className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-slate-700">
                            1. Kuruluma Giriş
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          04:20
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full border border-dashed border-slate-300 text-slate-500 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50"
                      >
                        <Plus className="h-3 w-3 mr-2" />
                        Ders Ekle
                      </Button>
                    </div>
                  </div>

                  {/* Mock Section 2 */}
                  <div className="border border-border/60 rounded-lg overflow-hidden bg-slate-50/30">
                    <div className="bg-slate-50/50 p-4 border-b border-border/50 flex items-center gap-3">
                      <GripVertical className="h-5 w-5 text-slate-400 cursor-move" />
                      <h3 className="font-semibold text-slate-900">
                        Bölüm 2: React Component Yapısı
                      </h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full border border-dashed border-slate-300 text-slate-500 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50"
                      >
                        <Plus className="h-3 w-3 mr-2" />
                        Ders Ekle
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: MEDYA */}
            {step === 3 && (
              <div className="space-y-8 max-w-4xl mx-auto">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Görsel ve Önizleme
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Kursunuzu temsil eden görselleri ve tanıtım videosunu
                    yükleyin.
                  </p>
                </div>
                <div className="h-px bg-slate-100" />

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Cover Image */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <ImageIcon className="h-4 w-4" />
                      <h3>Kurs Kapak Görseli</h3>
                    </div>
                    <div className="aspect-video rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer flex flex-col items-center justify-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Upload className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-slate-900">
                          Görsel Seçin
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          750x422px .jpg, .jpeg veya .png önerilir.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Promo Video */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Video className="h-4 w-4" />
                      <h3>Tanıtım Videosu</h3>
                    </div>
                    <div className="aspect-video rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer flex flex-col items-center justify-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-slate-900">
                          Video Yükleyin
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Öğrencilerin kurs hakkında bilgi alması için kısa bir
                          klip.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                  <div className="mt-0.5 text-amber-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="text-sm text-amber-800">
                    <span className="font-semibold">Önemli:</span> Görselin
                    telif haklarına sahip olduğunuzdan veya ticari kullanıma
                    uygun olduğundan emin olun. Standartlara uygun olmayan
                    görseller kurs onay sürecini uzatabilir.
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: FIYATLANDIRMA */}
            {step === 4 && (
              <div className="space-y-8 max-w-3xl mx-auto">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Son Adım: Fiyatlandırma
                  </h2>
                  <p className="text-muted-foreground">
                    Kursunuzun değerini belirleyin.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => setPricing({ ...pricing, type: "paid" })}
                    className={cn(
                      "p-6 rounded-xl border-2 cursor-pointer transition-all",
                      pricing.type === "paid"
                        ? "border-blue-600 bg-blue-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <h3
                      className={cn(
                        "font-bold text-lg",
                        pricing.type === "paid"
                          ? "text-blue-700"
                          : "text-slate-900"
                      )}
                    >
                      Ücretli
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Kazanç elde etmek için.
                    </p>
                  </div>
                  <div
                    onClick={() => setPricing({ ...pricing, type: "free" })}
                    className={cn(
                      "p-6 rounded-xl border-2 cursor-pointer transition-all",
                      pricing.type === "free"
                        ? "border-blue-600 bg-blue-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <h3
                      className={cn(
                        "font-bold text-lg",
                        pricing.type === "free"
                          ? "text-blue-700"
                          : "text-slate-900"
                      )}
                    >
                      Ücretsiz
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tanıtım amaçlı kurslar.
                    </p>
                  </div>
                </div>

                {pricing.type === "paid" && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-top-2">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">
                          Liste Fiyatı (₺)
                        </label>
                        <Input
                          type="number"
                          placeholder="499"
                          className="h-12 text-lg"
                          value={pricing.price}
                          onChange={(e) =>
                            setPricing({ ...pricing, price: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">
                          İndirimli Fiyat (₺)
                        </label>
                        <Input
                          type="number"
                          placeholder="199"
                          className="h-12 text-lg"
                          value={pricing.discountedPrice}
                          onChange={(e) =>
                            setPricing({
                              ...pricing,
                              discountedPrice: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-border/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          Net Kazanç Tahmini (%70 pay)
                        </span>
                        <span className="text-lg font-bold text-emerald-600">
                          ₺
                          {pricing.discountedPrice
                            ? (Number(pricing.discountedPrice) * 0.7).toFixed(2)
                            : "0.00"}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[70%]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white px-8 py-5 border-t border-border/50 flex items-center justify-between">
          {step > 1 ? (
            <Button
              variant="outline"
              onClick={handleBack}
              className="h-11 px-6 border-slate-200 text-slate-600 hover:text-slate-900"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Geri Dön
            </Button>
          ) : (
            <div /> /* Spacer */
          )}

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500 cursor-pointer hover:text-slate-900 px-4">
              Taslak Olarak Kaydet
            </span>
            <Button
              onClick={handleNext}
              className="h-11 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
            >
              {step === steps.length ? "Yayınla" : "İlerle"}
              {step !== steps.length && (
                <ChevronRight className="w-4 h-4 ml-2" />
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
