"use client";

import { useState } from "react";
import ChatList from "@/components/dashboards/instructor/messages/ChatList";
import ChatWindow from "@/components/dashboards/instructor/messages/ChatWindow";

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div className="h-[calc(100vh-140px)] flex overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="w-80 shrink-0">
        <ChatList selectedId={selectedId} onSelect={setSelectedId} />
      </div>
      <div className="flex-1">
        <ChatWindow selectedId={selectedId} />
      </div>
    </div>
  );
}
