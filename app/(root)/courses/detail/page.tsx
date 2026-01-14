"use client";

import { CourseHero } from "@/components/courses/detail/course-hero";
import { CourseSidebar } from "@/components/courses/detail/course-sidebar";
import { CourseLearningOutcomes } from "@/components/courses/detail/course-learning-outcomes";
import { CourseCurriculum } from "@/components/courses/detail/course-curriculum";
import { CourseDescription } from "@/components/courses/detail/course-description";
import { CourseInstructor } from "@/components/courses/detail/course-instructor";

const CourseDetailPage = () => {
  return (
    <>
      <CourseHero />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 -mt-12 lg:-mt-32 relative z-10 pb-20">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            <CourseLearningOutcomes />
            <CourseCurriculum />
            <CourseDescription />
            <CourseInstructor />
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <CourseSidebar />
          </aside>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;
