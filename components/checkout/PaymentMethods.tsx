import React from "react";
import { CreditCard, Landmark, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const PAYMENT_METHODS = [
  { id: "credit-card", label: "Kredi / Banka Kartı", icon: CreditCard },
  { id: "bank-transfer", label: "Havale / EFT", icon: Landmark },
  { id: "wallet", label: "Veduo Cüzdan", icon: Wallet },
];

export const PaymentMethods = ({
  activeMethod,
  onChange,
}: {
  activeMethod: string;
  onChange: (id: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-black text-slate-900 mb-2">
        Ödeme Yöntemi Seçin
      </h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {PAYMENT_METHODS.map((method) => {
          const Icon = method.icon;
          const isActive = activeMethod === method.id;

          return (
            <button
              key={method.id}
              onClick={() => onChange(method.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-3 p-6 rounded-[24px] border-2 transition-all duration-300 group",
                isActive
                  ? "bg-blue-50 border-blue-600 shadow-lg shadow-blue-600/5 scale-[1.02]"
                  : "bg-white border-slate-100 hover:border-blue-200 hover:bg-slate-50",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
                  isActive
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30"
                    : "bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600",
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span
                className={cn(
                  "text-xs font-black uppercase tracking-widest",
                  isActive ? "text-blue-600" : "text-slate-500",
                )}
              >
                {method.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
