import StudentCoursesFilter from "@/components/dashboards/student/courses/StudentCoursesFilter";
import StudentCoursesList from "@/components/dashboards/student/courses/StudentCoursesList";
import StudentCoursesHeader from "@/components/dashboards/student/courses/StudentCoursesHeader";

export default function StudentCoursesPage() {
  return (
    <div className="space-y-8">
      <StudentCoursesHeader />
      <StudentCoursesFilter />
      <StudentCoursesList />
    </div>
  );
}
