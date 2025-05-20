"use client";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DemoCards from "./DemoCards";
import useDemoCourseStore from "../../store/demoCoursesStore";
export default function Demo() {
  const [loadingAction, setLoadingAction] = useState(false);
  const { courses, fetchCourses, isLoading, error } = useDemoCourseStore();

  useEffect(() => {
    console.log("Component mounted - fetching courses");
    fetchCourses();
  }, [fetchCourses]);

  useEffect(() => {
    console.log("Courses state updated:", {
      courses,
      isLoading,
      error,
    });
  }, [courses, isLoading, error]);

  return (
    <div className="container mx-auto p-7 mt-30">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#008CE4]">
        🎓 Book Demo Classes
      </h1>

      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
          <p className="font-bold">Error loading courses:</p>
          <p>{error}</p>
          <button
            onClick={fetchCourses}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      )}

      {isLoading || loadingAction ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 mt-6 max-w-7xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-4 bg-white shadow-md rounded-3xl animate-pulse"
            >
              <div className="h-48 mb-4 bg-gray-200 rounded-md"></div>
              <div className="h-6 mb-2 bg-gray-200 rounded"></div>
              <div className="h-4 mb-2 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : courses.length > 0 ? (
        <DemoCards courses={courses} />
      ) : (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-gray-600">
            No demo classes available at the moment
          </h2>
          <p className="text-gray-500 mt-2">
            Please check back later or contact support
          </p>
          <button
            onClick={fetchCourses}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Refresh List
          </button>
        </div>
      )}
    </div>
  );
}
