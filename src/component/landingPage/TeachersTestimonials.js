
"use client";

import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect } from "react";
import useTeacherStore from "../../store/teacherApplication"; // Adjust path as needed

const TeachersTestimonials = () => {
  const scrollContainerRef = useRef(null);
  const { teachers, loading, error, fetchAllApplications } = useTeacherStore();

  // Fetch teachers on component mount
  useEffect(() => {
    fetchAllApplications();
  }, [fetchAllApplications]);

  // Debug: Log teachers and their status
  useEffect(() => {
    console.log("Teachers from store:", teachers);
    console.log(
      "Teachers with status:",
      teachers.map((t) => ({
        id: t._id,
        name: `${t.name?.firstName} ${t.name?.lastName}`,
        status: t.status,
      }))
    );
  }, [teachers]);

  // Map and filter active teachers
  const activeTeachers = teachers
    .filter((teacher) => {
      const isActive =
        teacher.status === "Active" ||
        (Array.isArray(teacher.status) && teacher.status.includes("accept"));
      if (!isActive) {
        console.log(
          `Teacher ${teacher.name?.firstName} excluded, status: ${JSON.stringify(teacher.status)}`
        );
      }
      return isActive;
    })
    .map((teacher) => {
      const mappedTeacher = {
        id: teacher._id || `temp-${Math.random()}`, // Fallback ID
        name: `${teacher.name?.firstName || ""} ${teacher.name?.lastName || ""}`.trim() || "Unknown Teacher",
        subject: teacher.skill || "General Education",
        bio: teacher.description || "No description available.",
        image: teacher.photo || "https://via.placeholder.com/80",
      };
      console.log("Mapped teacher:", mappedTeacher); // Debug mapped data
      return mappedTeacher;
    });

  // Debug: Log active teachers
  console.log("Active teachers:", activeTeachers);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    //  <div className="w-full h-screen mt-20 bg-gradient-to-r from-slate-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
    // {/* Top White Glow */}
    // <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 to-transparent z-10 pointer-events-none" />

    // {/* Bottom White Glow */}
    // <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/40 to-transparent z-10 pointer-events-none" />

    // {/* Main Content Container */}
    // <div className="w-full max-w-7xl mx-auto z-20 shadow-2xl rounded-xl p-6 overflow-auto max-h-[90vh]">
    <div className="w-full h-[85vh] mt-20 bg-gradient-to-r from-slate-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
      {/* Centered White Glow Behind Content */}
      <div className="absolute w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="w-full max-w-8xl mx-auto z-20 shadow-2xl rounded-xl p-16 overflow-auto max-h-[90vh]  bg-opacity-90 backdrop-blur-md">
        <Head>
          <title>Teacher Testimonials</title>
          <meta
            name="description"
            content="Learn more about our amazing teachers through student testimonials"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="py-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-amber-50">
            Meet Our Teachers
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-amber-50">
            Discover what students say about our dedicated educators
          </p>
        </header>

        <main className="px-4 py-8">
          {/* Loading State */}
          {loading && (
            // <p className="text-center text-gray-600 text-lg">Loading teachers...</p>
            <div className="flex flex-col items-center justify-center py-10">
              <div className="w-12 h-12 border-4 border-blue-400 border-dashed rounded-full animate-spin border-t-transparent"></div>
              <p className="mt-4 text-gray-300 text-lg font-medium animate-pulse">Loading teachers...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <p className="text-center text-red-600 text-lg">
              Error: {error}. Please try again or contact support.
            </p>
          )}

          {/* Teachers Carousel */}
          {!loading && !error && (
            <>
              {activeTeachers.length === 0 ? (
                <p className="text-center text-gray-50 text-lg">
                  No active teachers found. Please check the API or teacher statuses.
                </p>
              ) : (
                <div className="relative">
                  <button
                    onClick={scrollLeft}
                    className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-[#A8F1FF] text-black p-2 rounded-full hover:bg-[#6FE6FC] focus:outline-none z-30 hidden sm:block"
                    aria-label="Scroll left"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-6 py-4 p-15 scroll-snap-x scrollbar-hide"
                    style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
                  >
                    {activeTeachers.map((teacher) => (
                      <div
                        key={teacher.id}
                        className="bg-[#C7C8CC] rounded-xl shadow-lg p-6 w-72 sm:w-80 flex-shrink-0 transform hover:scale-105 transition-transform duration-300 scroll-snap-align-start"
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src={teacher.image}
                            alt={`Profile picture of ${teacher.name}`}
                            className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-blue-100"
                            width={80}
                            height={80}
                          />
                          <div>
                            <h2 className="text-xl font-[600] text-[#352F44]">{teacher.name}</h2>
                            <p className="text-[#5C5470] font-medium text-base">{teacher.subject}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-base line-clamp-3">{teacher.bio}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={scrollRight}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#A8F1FF] text-black p-2 rounded-full hover:bg-[#6FE6FC] focus:outline-none z-30 hidden sm:block"
                    aria-label="Scroll right"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>

  );
};

export default TeachersTestimonials;
