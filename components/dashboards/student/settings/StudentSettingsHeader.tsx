"use client";

import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

const StudentSettingsHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Ayarlar
        </h1>
        <p className="text-muted-foreground mt-1">
          Profil bilgilerinizi, hesap ayarlarınızı ve tercihlerinizi buradan
          yönetebilirsiniz.
        </p>
      </div>
      <Button className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 font-bold h-11 px-6">
        <Save className="h-4 w-4" />
        Değişiklikleri Kaydet
      </Button>
    </div>
  );
};

export default StudentSettingsHeader;
