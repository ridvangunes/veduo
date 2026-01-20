import StudentSidebar from "@/components/dashboards/student/StudentSidebar";

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar Menu */}
        <div className="lg:col-span-3">
          <StudentSidebar />
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-8">{children}</div>
      </div>
    </div>
  );
}
