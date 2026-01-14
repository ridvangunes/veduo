import DashboardHeader from "@/components/dashboards/instructor/DashboardHeader";
import InstructorSidebar from "@/components/dashboards/instructor/InstructorSidebar";
import RecentCourses from "@/components/dashboards/instructor/RecentCourses";
import RecentEnrollments from "@/components/dashboards/instructor/RecentEnrollments";
import StatsCards from "@/components/dashboards/instructor/StatsCards";

const InstructorDashboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar Menu */}
        <div className="lg:col-span-3">
          <InstructorSidebar />
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-8">
          {/* Header Section */}
          <DashboardHeader />

          {/* Stats Section */}
          <StatsCards />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recent Courses (Takes 2 columns on medium screens) */}
            <RecentCourses />

            {/* Recent Enrollments (Takes 1 column on medium screens) */}
            <RecentEnrollments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardPage;
