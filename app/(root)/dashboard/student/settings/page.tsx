"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentSettingsHeader from "@/components/dashboards/student/settings/StudentSettingsHeader";
import StudentProfileSettings from "@/components/dashboards/student/settings/StudentProfileSettings";
import StudentAccountSettings from "@/components/dashboards/student/settings/StudentAccountSettings";
import StudentNotificationSettings from "@/components/dashboards/student/settings/StudentNotificationSettings";
import StudentBillingSettings from "@/components/dashboards/student/settings/StudentBillingSettings";
import { User, Shield, Bell, CreditCard } from "lucide-react";

export default function StudentSettingsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <StudentSettingsHeader />

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="bg-white border border-border/60 p-1 h-12 shadow-sm rounded-xl inline-flex w-auto">
          <TabsTrigger
            value="profile"
            className="gap-2 px-6 h-10 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold"
          >
            <User className="h-4 w-4" />
            Profil
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className="gap-2 px-6 h-10 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold"
          >
            <Shield className="h-4 w-4" />
            Hesap & Güvenlik
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="gap-2 px-6 h-10 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold"
          >
            <Bell className="h-4 w-4" />
            Bildirimler
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="gap-2 px-6 h-10 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold"
          >
            <CreditCard className="h-4 w-4" />
            Ödemeler
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="profile"
          className="animate-in fade-in slide-in-from-left-2 duration-300 outline-none"
        >
          <StudentProfileSettings />
        </TabsContent>

        <TabsContent
          value="account"
          className="animate-in fade-in slide-in-from-left-2 duration-300 outline-none"
        >
          <StudentAccountSettings />
        </TabsContent>

        <TabsContent
          value="notifications"
          className="animate-in fade-in slide-in-from-left-2 duration-300 outline-none"
        >
          <StudentNotificationSettings />
        </TabsContent>

        <TabsContent
          value="billing"
          className="animate-in fade-in slide-in-from-left-2 duration-300 outline-none"
        >
          <StudentBillingSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
