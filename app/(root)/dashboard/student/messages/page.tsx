"use client";

import { useState } from "react";
import StudentChatList from "@/components/dashboards/student/messages/StudentChatList";
import StudentChatWindow from "@/components/dashboards/student/messages/StudentChatWindow";

export default function StudentMessagesPage() {
  const [selectedId, setSelectedId] = useState<number | null>(1);

  return (
    <div className="h-[calc(100vh-140px)] flex overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="w-80 shrink-0">
        <StudentChatList selectedId={selectedId} onSelect={setSelectedId} />
      </div>
      <div className="flex-1">
        <StudentChatWindow selectedId={selectedId} />
      </div>
    </div>
  );
}
