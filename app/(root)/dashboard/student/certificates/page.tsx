import StudentCertificatesHeader from "@/components/dashboards/student/certificates/StudentCertificatesHeader";
import StudentCertificatesFilter from "@/components/dashboards/student/certificates/StudentCertificatesFilter";
import StudentCertificatesList from "@/components/dashboards/student/certificates/StudentCertificatesList";

export default function StudentCertificatesPage() {
  return (
    <div className="space-y-8">
      <StudentCertificatesHeader />
      <StudentCertificatesFilter />
      <StudentCertificatesList />
    </div>
  );
}
