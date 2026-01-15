import AnalyticsHeader from "@/components/dashboards/instructor/analytics/AnalyticsHeader";
import AnalyticsStats from "@/components/dashboards/instructor/analytics/AnalyticsStats";
import RevenueChart from "@/components/dashboards/instructor/analytics/RevenueChart";
import TopCourses from "@/components/dashboards/instructor/analytics/TopCourses";

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <AnalyticsHeader />
      <AnalyticsStats />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <RevenueChart />
        <TopCourses />
      </div>
    </div>
  );
};

export default AnalyticsPage;
