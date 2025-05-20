"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import CourseSidebar from "./courseSidebar";
import SectionAccordion from "./sectionAccordion";
import useCourseStore from "@/store/courseStore";
import useSessionStore from "@/store/sessionsStore";

export default function CourseDetails() {
  const params = useParams();
  const courseId = params.id; 

  // Course store
  const { selectedCourse, fetchCourseById, isLoading: courseLoading, error: courseError } = useCourseStore();
  
  // Session store
  const { sessions, fetchSessionsByCourse, isLoading: sessionsLoading, error: sessionsError } = useSessionStore();

  // Fetch course and sessions when component mounts
  useEffect(() => {
    if (courseId) {
      fetchCourseById(courseId);
      fetchSessionsByCourse(courseId);
    }
  }, [courseId, fetchCourseById, fetchSessionsByCourse]);

  // Handle loading and error states
  if (courseLoading || sessionsLoading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (courseError || sessionsError) {
    return (
      <div className="text-center p-8 text-red-600">
        Error: {courseError || sessionsError}
      </div>
    );
  }

  if (!selectedCourse) {
    return <div className="text-center p-8">Course not found</div>;
  }

  // Map sessions to the format expected by SectionAccordion
  const sessionSections = sessions.map((session) => ({
    title: session.title || "Untitled Session",
    lectures: [
      {
        title: session.description || "Session Content",
        time: session.duration ? `${session.duration} mins` : "N/A",
      },
    ],
  }));

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-8 p-4 lg:p-8 max-w-7xl mx-auto min-h-screen">
      <div className="w-full lg:w-3/5 mt-30">
        <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
          {selectedCourse.courseName || "Build Text to Image SaaS App in React JS"}
        </h1>
        <p className="text-gray-600 mb-2 text-center lg:text-left">
          {selectedCourse.details?.description ||
            "Master MERN Stack by building a Full Stack AI Text to Image SaaS App using React JS, MongoDB, Node.js, Express and Stripe Payment"}
        </p>
        <div className="mt-4 mb-8">
          <h2 className="text-xl font-semibold mb-2 text-center lg:text-left">
            Course Structure
          </h2>
          <p>
            {sessionSections.length} sections • {sessions.length} lectures •{" "}
            {selectedCourse.duration?.value || "27"}h{" "}
            {selectedCourse.duration?.unit === "month" ? "months" : "years"} total duration
          </p>
        </div>
        <div className="space-y-4">
          {sessionSections.length > 0 ? (
            sessionSections.map((section, index) => (
              <SectionAccordion
                key={index}
                title={section.title}
                lectures={section.lectures}
              />
            ))
          ) : (
            <p>No sessions available for this course.</p>
          )}
        </div>
      </div>
      <CourseSidebar />
    </div>
  );
}