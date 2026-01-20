"use client";

import StudentDashboardHeader from "./overview/StudentDashboardHeader";
import StudentStats from "./overview/StudentStats";
import ContinueLearning from "./overview/ContinueLearning";
import WeeklyPerformance from "./overview/WeeklyPerformance";
import ProOffer from "./overview/ProOffer";

const StudentDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <StudentDashboardHeader userName="Arda" />

      {/* Stats Grid */}
      <StudentStats />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column: Active Courses */}
        <div className="lg:col-span-2 space-y-6">
          <ContinueLearning />
        </div>

        {/* Right Column: Weekly Activity & Recommendations */}
        <div className="space-y-8">
          <WeeklyPerformance />
          <ProOffer />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
