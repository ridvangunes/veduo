"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Share2, Eye, Calendar, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const certificates = [
  {
    id: 1,
    courseTitle: "İleri Seviye Next.js ve App Router",
    instructor: "Mert Demir",
    issueDate: "12 Ocak 2026",
    idNumber: "VED-98234-AX",
    image: "/certificate/certificate-1.jpg",
  },
  {
    id: 2,
    courseTitle: "Modern Web Tasarımı ve Figma",
    instructor: "Zeynep Kaya",
    issueDate: "05 Aralık 2025",
    idNumber: "VED-77123-BK",
    image: "/certificate/certificate-2.jpg",
  },
  {
    id: 3,
    courseTitle: "Adobe Premiere Pro ile Video Düzenleme",
    instructor: "Can Tanrıyar",
    issueDate: "20 Kasım 2025",
    idNumber: "VED-55443-CP",
    image: "/certificate/certificate-3.jpg",
  },
];

const StudentCertificatesList = () => {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[0] | null
  >(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            className="group overflow-hidden border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
          >
            <div className="aspect-[1.414/1] relative overflow-hidden bg-slate-100">
              <img
                src={cert.image}
                alt={cert.courseTitle}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />

              {/* Action Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                <Button
                  onClick={() => setSelectedCert(cert)}
                  className="bg-white text-slate-900 hover:bg-white/90 font-bold gap-2 transition-all active:scale-95 shadow-xl"
                >
                  <Eye className="h-4 w-4" />
                  Sertifikayı Görüntüle
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="absolute top-3 right-3">
                <Badge className="bg-white/90 text-blue-600 border-none backdrop-blur-md font-black shadow-sm">
                  {cert.idNumber}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 line-clamp-1 leading-tight text-lg group-hover:text-blue-600 transition-colors">
                  {cert.courseTitle}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium italic">
                  <User className="h-3.5 w-3.5" />
                  <span>{cert.instructor}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-tight">
                  <Calendar className="h-3.5 w-3.5 text-blue-500" />
                  <span>{cert.issueDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    DOĞRULANDI
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog
        open={!!selectedCert}
        onOpenChange={(open) => !open && setSelectedCert(null)}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden border-none bg-transparent shadow-none [&>button]:hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>
              Sertifika Önizleme: {selectedCert?.courseTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="relative group overflow-hidden rounded-lg">
            <Button
              onClick={() => setSelectedCert(null)}
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 z-50 rounded-none h-8 w-8 bg-black/20 hover:bg-red-600 text-white backdrop-blur-md transition-all border-l border-b border-white/10"
            >
              <X className="h-7 w-7" />
            </Button>
            {selectedCert && (
              <img
                src={selectedCert.image}
                alt={selectedCert.courseTitle}
                className="w-full h-auto"
              />
            )}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <Button
                size="sm"
                className="bg-white text-slate-900 hover:bg-white/90 font-bold gap-2"
              >
                <Download className="h-4 w-4" />
                İndir (PDF)
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold gap-2"
              >
                <Share2 className="h-4 w-4" />
                Paylaş
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StudentCertificatesList;
