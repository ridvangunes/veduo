"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const transactions = [
  {
    id: "TRX-9823",
    date: "15 Oca 2024",
    description: "Ödeme Çekimi - Banka Transferi",
    status: "completed",
    amount: "-₺12,000.00",
    type: "withdrawal",
  },
  {
    id: "TRX-9822",
    date: "14 Oca 2024",
    description: "Kurs Satışı: React.js Eğitimi (Ahmet Yılmaz)",
    status: "completed",
    amount: "+₺450.00",
    type: "sale",
  },
  {
    id: "TRX-9821",
    date: "14 Oca 2024",
    description: "Kurs Satışı: Next.js Eğitimi (Zeynep Kaya)",
    status: "completed",
    amount: "+₺550.00",
    type: "sale",
  },
  {
    id: "TRX-9820",
    date: "13 Oca 2024",
    description: "Kurs Satışı: Python Eğitimi (Mehmet Demir)",
    status: "pending",
    amount: "+₺600.00",
    type: "sale",
  },
  {
    id: "TRX-9819",
    date: "10 Oca 2024",
    description: "Kurs Satışı: React.js Eğitimi",
    status: "refunded",
    amount: "-₺450.00",
    type: "refund",
  },
];

const TransactionHistory = () => {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 space-y-0">
        <div>
          <CardTitle>İşlem Geçmişi</CardTitle>
          <CardDescription>
            Hesabınızdaki son finansal hareketler.
          </CardDescription>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="İşlem ara..." className="pl-9 bg-slate-50" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border/50 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-border/50">
              <tr>
                <th className="h-12 px-4 align-middle font-medium w-[100px]">
                  İşlem Kodu
                </th>
                <th className="h-12 px-4 align-middle font-medium">Tarih</th>
                <th className="h-12 px-4 align-middle font-medium min-w-[300px]">
                  Açıklama
                </th>
                <th className="h-12 px-4 align-middle font-medium">Durum</th>
                <th className="h-12 px-4 align-middle font-medium text-right">
                  Tutar
                </th>
                <th className="h-12 px-4 align-middle font-medium w-[50px]"></th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-border/50 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-4 align-middle font-medium text-xs text-muted-foreground">
                    {transaction.id}
                  </td>
                  <td className="p-4 align-middle">{transaction.date}</td>
                  <td className="p-4 align-middle font-medium text-slate-700">
                    {transaction.description}
                  </td>
                  <td className="p-4 align-middle">
                    <Badge
                      variant={
                        transaction.status === "completed"
                          ? "default"
                          : transaction.status === "pending"
                          ? "secondary"
                          : "destructive"
                      }
                      className={
                        transaction.status === "completed"
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-700 shadow-none font-normal"
                          : transaction.status === "pending"
                          ? "bg-amber-100 text-amber-700 hover:bg-amber-100 hover:text-amber-700 shadow-none font-normal"
                          : "bg-red-100 text-red-700 hover:bg-red-100 hover:text-red-700 shadow-none font-normal"
                      }
                    >
                      {transaction.status === "completed"
                        ? "Tamamlandı"
                        : transaction.status === "pending"
                        ? "Bekliyor"
                        : "İade Edildi"}
                    </Badge>
                  </td>
                  <td
                    className={`p-4 align-middle text-right font-bold ${
                      transaction.type === "withdrawal" ||
                      transaction.type === "refund"
                        ? "text-slate-900"
                        : "text-emerald-600"
                    }`}
                  >
                    {transaction.amount}
                  </td>
                  <td className="p-4 align-middle">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground opacity-0 hover:opacity-100 group-hover:opacity-50 transition-all"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
