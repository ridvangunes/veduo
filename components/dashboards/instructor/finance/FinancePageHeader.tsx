import { Button } from "@/components/ui/button";
import { Download, Wallet } from "lucide-react";

const FinancePageHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Finansal Genel Bakış
        </h1>
        <p className="text-muted-foreground mt-1">
          Kazançlarını, ödemelerini ve işlem geçmişini buradan takip et.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Rapor İndir
        </Button>
        <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
          <Wallet className="h-4 w-4" />
          Ödeme Talep Et
        </Button>
      </div>
    </div>
  );
};

export default FinancePageHeader;
