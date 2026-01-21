import { Suspense } from "react";
import StudentsFilterBar from "@/components/dashboards/instructor/students/StudentsFilterBar";
import StudentsList from "@/components/dashboards/instructor/students/StudentsList";
import StudentsPageHeader from "@/components/dashboards/instructor/students/StudentsPageHeader";

const StudentsPage = () => {
  return (
    <div className="space-y-6">
      <StudentsPageHeader />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <StudentsFilterBar />
        <StudentsList />
      </Suspense>
    </div>
  );
};

export default StudentsPage;
