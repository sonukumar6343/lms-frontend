
"use client";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DisplayCards from "./DisplayCards";
import useCourseStore from "../../store/courseStore";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const { courses, fetchCourses, isLoading, error } = useCourseStore();
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const categories = ["All Courses", "Paid Courses", "Free Courses", "Online Courses", "Offline Courses"];

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Filter courses based on the active category
  const filteredCourses = courses.filter((course) => {
    const price = course.price; // Assuming course.price is in RP/min
    const mode = course.mode; // Assuming course.mode is either "online" or "offline"
    if (activeCategory === "All Courses") {
      return true; // Show all courses
    } else if (activeCategory === "Free Courses") {
      return price === 0.01; // Free courses have a price of 0.01 RP/min
    } else if (activeCategory === "Paid Courses") {
      return price > 0.01; // Paid courses have a price greater than 0.01 RP/min
    } else if (activeCategory === "Online Courses") {
      return mode === "online"; // Filter courses with mode "online"
    } else if (activeCategory === "Offline Courses") {
      return mode === "offline"; // Filter courses with mode "offline"
    }
    return true; // Fallback to show all courses
  });

  return (
    <div className="container mx-auto p-7">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div className="hidden flex w-auto h-8 gap-3 pl-30 mt-30 rounded-xl md:flex">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`w-auto p-2 px-4 py-5 bg-gray-200 w-14 flex items-center text-sm rounded-lg transition duration-300 ${
              activeCategory === category
                ? "bg-white text-blue-500 font-semibold shadow-xl border-2 border-gray-200"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Error Display */}
      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
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
      ) : (
        <DisplayCards courses={filteredCourses} searchTerm={searchTerm} />
      )}
    </div>
  );
}