import StudentsFilterBar from "@/components/dashboards/instructor/students/StudentsFilterBar";
import StudentsList from "@/components/dashboards/instructor/students/StudentsList";
import StudentsPageHeader from "@/components/dashboards/instructor/students/StudentsPageHeader";

const StudentsPage = () => {
  return (
    <div className="space-y-6">
      <StudentsPageHeader />
      <StudentsFilterBar />
      <StudentsList />
    </div>
  );
};

export default StudentsPage;
