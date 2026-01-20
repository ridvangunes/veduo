"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";

const ProOffer = () => {
  return (
    <Card className="bg-linear-to-br from-slate-900 to-slate-800 text-white border-none shadow-xl overflow-hidden relative">
      <CardContent className="p-6 relative z-10">
        <Badge className="bg-blue-600 text-[10px] mb-4 border-none font-black uppercase">
          ÖZEL TEKLİF
        </Badge>
        <h3 className="text-xl font-bold mb-2">Pro Üyeliğe Geç!</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Tüm kurslara sınırsız erişim sağla, sertifikalarını anında al ve
          topluluğa katıl.
        </p>
        <Button className="w-full bg-white text-slate-900 hover:bg-white/90 font-bold border-none gap-2 transition-all active:scale-95">
          <Rocket className="h-4 w-4 text-blue-600" />
          Hemen Başla
        </Button>
      </CardContent>
      {/* Abstract Background for the promo card */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -left-12 -top-12 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl" />
    </Card>
  );
};

export default ProOffer;
