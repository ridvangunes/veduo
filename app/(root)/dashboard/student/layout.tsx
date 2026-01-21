import StudentSidebar from "@/components/dashboards/student/StudentSidebar";

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Menu - Hidden on mobile, shown on lg */}
        <aside className="hidden lg:block w-72 shrink-0">
          <StudentSidebar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 space-y-8">{children}</main>
      </div>
    </div>
  );
}
