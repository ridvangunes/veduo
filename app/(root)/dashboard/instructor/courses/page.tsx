import CoursesFilterBar from "@/components/dashboards/instructor/courses/CoursesFilterBar";
import CoursesList from "@/components/dashboards/instructor/courses/CoursesList";
import CoursesPageHeader from "@/components/dashboards/instructor/courses/CoursesPageHeader";

const CoursesPage = () => {
  return (
    <div className="space-y-6">
      <CoursesPageHeader />
      <CoursesFilterBar />
      <CoursesList />
    </div>
  );
};

export default CoursesPage;
