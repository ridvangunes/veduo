"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: 1,
    name: "Mert Demir",
    lastMessage: "Sorun değil, bir sonraki derste bu konuyu detaylandıracağız.",
    time: "10:30",
    unread: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mert",
    online: true,
  },
  {
    id: 2,
    name: "Zeynep Kaya",
    lastMessage: "Çalışmaların çok başarılı, tebrik ederim!",
    time: "Dün",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zeynep",
    online: false,
  },
  {
    id: 3,
    name: "Can Tanrıyar",
    lastMessage: "Tabii, proje dosyalarını kontrol edip döneceğim.",
    time: "2 gün önce",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Can",
    online: true,
  },
];

interface ChatListProps {
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export default function StudentChatList({
  selectedId,
  onSelect,
}: ChatListProps) {
  return (
    <div className="flex flex-col h-full border-r border-border bg-white">
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Mesajlar</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Mesajlarda ara..."
            className="pl-9 bg-slate-50 border-none focus-visible:ring-blue-600"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={cn(
              "flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-50 transition-colors border-l-4",
              selectedId === chat.id
                ? "bg-blue-50/50 border-blue-600"
                : "border-transparent",
            )}
          >
            <div className="relative">
              <Avatar className="h-12 w-12 border-2 border-white shadow-sm font-poppins">
                <AvatarImage src={chat.avatar} />
                <AvatarFallback>{chat.name[0]}</AvatarFallback>
              </Avatar>
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-sm text-slate-900 truncate">
                  {chat.name}
                </h4>
                <span className="text-[10px] text-muted-foreground font-medium">
                  {chat.time}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p
                  className={cn(
                    "text-xs truncate leading-relaxed",
                    chat.unread > 0
                      ? "text-slate-900 font-semibold"
                      : "text-muted-foreground",
                  )}
                >
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className="flex items-center justify-center min-w-[18px] h-[18px] bg-blue-600 text-white text-[10px] font-bold rounded-full px-1">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
