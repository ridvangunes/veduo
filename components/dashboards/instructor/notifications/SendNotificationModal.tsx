"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  Send,
  Users,
  Megaphone,
  ChevronRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SendNotificationModalProps {
  children?: React.ReactNode;
}

export function SendNotificationModal({
  children,
}: SendNotificationModalProps) {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setOpen(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all active:scale-95">
            <Megaphone className="h-4 w-4" />
            Bildirim Gönder
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[900px] p-0 gap-0 overflow-hidden bg-slate-50/50 block border-none shadow-2xl">
        <DialogTitle className="sr-only">Duyuru & Bildirim Gönder</DialogTitle>

        {/* Top Header */}
        <div className="bg-white border-b border-border/50 px-8 py-5">
          <div className="flex items-center gap-4 max-w-3xl mx-auto">
            <div className="w-12 h-12 bg-blue-100/50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Megaphone className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 leading-tight">
                Duyuru & Bildirim Oluştur
              </h2>
              <p className="text-sm text-slate-500 font-medium">
                Öğrencileriniz için anlık bir bilgilendirme mesajı hazırlayın.
              </p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 bg-slate-50">
          <div className="bg-white rounded-xl shadow-sm border border-border/50 p-8 h-full animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Öğrencilerinize Duyuru Yapın
                </h2>
                <p className="text-muted-foreground mt-1">
                  Önemli güncellemeleri veya yeni içerikleri anında tüm
                  kitlenize iletin.
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900 ml-1">
                      Hedef Öğrenci Grubu
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger className="h-12 w-full text-base px-4 bg-white border-slate-200">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-slate-400" />
                          <SelectValue placeholder="Grup Seçin" />
                        </div>
                      </SelectTrigger>
                      <SelectContent position="popper" sideOffset={4}>
                        <SelectItem value="all" className="py-3">
                          Tüm Öğrenciler (2,543)
                        </SelectItem>
                        <SelectItem value="active" className="py-3">
                          Son 7 Gün Aktif Olanlar
                        </SelectItem>
                        <SelectItem value="course-1" className="py-3">
                          React Eğitimi Öğrencileri
                        </SelectItem>
                        <SelectItem value="course-2" className="py-3">
                          Modern Tasarım Öğrencileri
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900 ml-1">
                      Bildirim Başlığı
                    </label>
                    <Input
                      placeholder="Örn: Yeni Bonus Ders Eklendi!"
                      className="border-slate-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900 ml-1">
                    Mesaj Detayı
                  </label>
                  <Textarea
                    placeholder="Öğrencilerinize iletmek istediğiniz mesaj..."
                    className="min-h-[180px] border-slate-200 resize-none py-4 text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white px-8 py-5 border-t border-border/50 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="h-11 px-6 border-slate-200 text-slate-600 hover:text-slate-900"
          >
            Vazgeç
          </Button>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-400 px-2 italic">
              ~2 dakika içinde ulaştırılır
            </span>
            <Button
              onClick={handleSend}
              disabled={isSending}
              className="h-11 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 font-bold"
            >
              {isSending ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Gönderiliyor...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Bildirimi Gönder
                </div>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
