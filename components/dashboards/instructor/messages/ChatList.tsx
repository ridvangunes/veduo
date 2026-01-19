"use client";

import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    lastMessage: "Hocam 3. dersteki ödevi nasıl yapmalıyım?",
    time: "14:20",
    unread: 2,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmet",
    online: true,
  },
  {
    id: 2,
    name: "Zeynep Kaya",
    lastMessage: "Teşekkürler, çok açıklayıcı bir eğitim olmuş.",
    time: "Dün",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zeynep",
    online: false,
  },
  {
    id: 3,
    name: "Mehmet Demir",
    lastMessage: "Sertifika ne zaman tanımlanır?",
    time: "2 gün önce",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mehmet",
    online: true,
  },
  {
    id: 4,
    name: "Ayşe Çelik",
    lastMessage: "React Hook'lar ile ilgili bir sorum olacaktı.",
    time: "3 gün önce",
    unread: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayse",
    online: false,
  },
];

interface ChatListProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function ChatList({ selectedId, onSelect }: ChatListProps) {
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
                <p className="text-xs text-muted-foreground truncate leading-relaxed">
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
