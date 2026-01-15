import DashboardHeader from "@/components/dashboards/instructor/DashboardHeader";
import RecentCourses from "@/components/dashboards/instructor/RecentCourses";
import RecentEnrollments from "@/components/dashboards/instructor/RecentEnrollments";
import StatsCards from "@/components/dashboards/instructor/StatsCards";

const InstructorDashboardPage = () => {
  return (
    <div className="space-y-8">
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
  );
};

export default InstructorDashboardPage;
