"use client";

import { Send, Phone, Video, Info, Paperclip, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";

const messagesData = [
  {
    id: 1,
    text: "Merhaba Mert Hocam, Next.js kursundaki son bölümle ilgili bir sorum olacaktı.",
    time: "10:15",
    isOwn: true,
  },
  {
    id: 2,
    text: "Selam Arda, tabii ki sorabilirsin. Hangi kısımla ilgili takıldın?",
    time: "10:20",
    isOwn: false,
  },
  {
    id: 3,
    text: "Server Components ve Client Components farkını tam oturtamadım. Hangi durumlarda 'use client' kullanmalıyız?",
    time: "10:25",
    isOwn: true,
  },
  {
    id: 4,
    text: "Güzel soru. Etkileşim (onClick, useState, useEffect gibi) gerektiren yerlerde 'use client' şart. Sadece veriyi görselleştirmek istiyorsan Server Component yeterli.",
    time: "10:28",
    isOwn: false,
  },
  {
    id: 5,
    text: "Sorun değil, bir sonraki derste bu konuyu detaylandıracağız.",
    time: "10:30",
    isOwn: false,
  },
];

export default function StudentChatWindow({
  selectedId,
}: {
  selectedId: number | null;
}) {
  const [inputValue, setInputValue] = useState("");

  if (!selectedId) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-slate-50 text-center p-8">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6">
          <Send className="w-10 h-10 -rotate-45" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          Mesajlaşmaya Başlayın
        </h3>
        <p className="text-muted-foreground mt-2 max-w-sm">
          Eğitmenlerinize sorular sorarak onlardan yardım alabilir ve
          gelişiminizi hızlandırabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border shadow-sm font-poppins">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Mert`}
            />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-none">
              Mert Demir
            </h4>
            <p className="text-[10px] text-emerald-500 font-semibold mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Çevrimiçi
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-500 hover:text-blue-600 hover:bg-blue-50"
          >
            <Phone className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-500 hover:text-blue-600 hover:bg-blue-50"
          >
            <Video className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-500 hover:text-blue-600 hover:bg-blue-50"
          >
            <Info className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/30">
        <div className="flex justify-center">
          <span className="px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-500 rounded-full uppercase tracking-wider">
            Bugün
          </span>
        </div>

        {messagesData.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex flex-col max-w-[80%]",
              msg.isOwn ? "ml-auto items-end" : "items-start",
            )}
          >
            <div
              className={cn(
                "px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                msg.isOwn
                  ? "bg-blue-600 text-white rounded-tr-none"
                  : "bg-white border border-border/60 text-slate-800 rounded-tl-none",
              )}
            >
              {msg.text}
            </div>
            <span className="text-[10px] text-muted-foreground mt-1.5 font-medium">
              {msg.time}
            </span>
          </div>
        ))}
      </div>

      {/* Footer / Input */}
      <div className="p-4 bg-white border-t border-border">
        <div className="flex items-center gap-2 bg-slate-50 rounded-2xl p-1 px-2 border border-border/50 focus-within:ring-2 focus-within:ring-blue-600/20 focus-within:border-blue-600/50 transition-all">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-slate-600 hover:bg-transparent"
          >
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-slate-600 hover:bg-transparent"
          >
            <Smile className="h-5 w-5" />
          </Button>
          <Button
            className={cn(
              "h-9 w-9 p-0 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform active:scale-95",
              inputValue.length === 0 && "opacity-50",
            )}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
