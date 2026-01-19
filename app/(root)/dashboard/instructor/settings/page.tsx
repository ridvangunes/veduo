"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsHeader from "@/components/dashboards/instructor/settings/SettingsHeader";
import ProfileSettings from "@/components/dashboards/instructor/settings/ProfileSettings";
import AccountSettings from "@/components/dashboards/instructor/settings/AccountSettings";
import NotificationSettings from "@/components/dashboards/instructor/settings/NotificationSettings";
import PaymentSettings from "@/components/dashboards/instructor/settings/PaymentSettings";
import { User, Shield, Bell, CreditCard } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <SettingsHeader />

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-white border border-border/60 p-1 h-12 shadow-sm rounded-xl inline-flex w-auto">
          <TabsTrigger
            value="profile"
            className="gap-2 px-6 h-10 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <User className="h-4 w-4" />
            Profil
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className="gap-2 px-6 h-10 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Shield className="h-4 w-4" />
            Hesap & Güvenlik
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="gap-2 px-6 h-10 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Bell className="h-4 w-4" />
            Bildirimler
          </TabsTrigger>
          <TabsTrigger
            value="payment"
            className="gap-2 px-6 h-10 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <CreditCard className="h-4 w-4" />
            Ödeme Yöntemleri
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="profile"
          className="animate-in fade-in slide-in-from-left-2 duration-300 outline-none"
        >
          <ProfileSettings />
        </TabsContent>

        <TabsContent
          value="account"
          className="animate-in fade-in slide-in-from-left-2 duration-300 outline-none"
        >
          <AccountSettings />
        </TabsContent>

        <TabsContent
          value="notifications"
          className="animate-in fade-in slide-in-from-left-2 duration-300 outline-none"
        >
          <NotificationSettings />
        </TabsContent>

        <TabsContent
          value="payment"
          className="animate-in fade-in slide-in-from-left-2 duration-300 outline-none"
        >
          <PaymentSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
