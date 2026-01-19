"use client";

import {
  Send,
  Phone,
  Video,
  Info,
  MoreHorizontal,
  Paperclip,
  Smile,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";

const messages = [
  {
    id: 1,
    senderId: 1,
    text: "Selam hocam, nasılsınız?",
    time: "14:10",
    isOwn: false,
  },
  {
    id: 2,
    senderId: "me",
    text: "Selam Ahmet, iyiyim teşekkürler. Sen nasılsın?",
    time: "14:12",
    isOwn: true,
  },
  {
    id: 3,
    senderId: 1,
    text: "İyiyim ben de. 3. dersteki ödevle ilgili bir sorum olacaktı. 'useEffect' bağımlılık dizisini tam anlayamadım.",
    time: "14:15",
    isOwn: false,
  },
  {
    id: 4,
    senderId: "me",
    text: "Tabii, useEffect'teki bağımlılık dizisi o efektin ne zaman tekrar çalışacağını belirler. Eğer boş bırakırsan sadece bileşen ilk oluştuğunda çalışır.",
    time: "14:18",
    isOwn: true,
  },
  {
    id: 5,
    senderId: 1,
    text: "Hocam 3. dersteki ödevi nasıl yapmalıyım?",
    time: "14:20",
    isOwn: false,
  },
];

export default function ChatWindow({ selectedId }: { selectedId: number }) {
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
          Öğrencilerinizden gelen soruları yanıtlayarak onlara yardımcı olun ve
          etkileşiminizi artırın.
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
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmet`}
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-none">
              Ahmet Yılmaz
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

        {messages.map((msg) => (
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
