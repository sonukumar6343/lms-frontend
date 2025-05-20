// // "use client";
// // import { useState } from "react";
// // import {
// //   FaCode,
// //   FaBook,
// //   FaChalkboardTeacher,
// //   FaDatabase,
// // } from "react-icons/fa";
// // import useCourseStore from "../../store/courseStore";
// // import { Clock, Monitor } from "lucide-react";
// // import Link from "next/link";
// // import { useAuth } from "@/component/Contextlogin/AuthContext";
// // const getCourseIcon = (courseName) => {
  
// //   const name = courseName?.toLowerCase() || "";
// //   if (
// //     name.includes("javascript") ||
// //     name.includes("coding") ||
// //     name.includes("programming")
// //   ) {
// //     return <FaCode className="inline-block mr-2 text-blue-600" />;
// //   } else if (name.includes("literature") || name.includes("writing")) {
// //     return <FaBook className="inline-block mr-2 text-green-600" />;
// //   } else if (name.includes("teaching") || name.includes("education")) {
// //     return (
// //       <FaChalkboardTeacher className="inline-block mr-2 text-purple-600" />
// //     );
// //   } else if (name.includes("data") || name.includes("database")) {
// //     return <FaDatabase className="inline-block mr-2 text-red-600" />;
// //   }
// //   return <FaBook className="inline-block mr-2 text-gray-600" />;
// // };
// // const {isLoggedIn} = useAuth();

// // export default function DisplayCards({
// //   courses = [],
// //   searchTerm = "",
// //   activeCategory = "All Courses",
// // }) {
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const { teachers = [] } = useCourseStore();

// //   // Safely get teacher name with multiple fallbacks
// //   const getTeacherName = (teacherData) => {
// //     try {
// //       if (!teacherData?.user?.name) return "No Teacher Assigned";

// //       const { firstName = "", lastName = "" } = teacherData.user.name;
// //       const fullName = `${firstName} ${lastName}`.trim();
// //       console.log(fullName);
// //       return fullName || "Unknown Teacher";
// //     } catch (error) {
// //       console.error("Error getting teacher name:", error);
// //       return "Unknown Teacher";
// //     }
// //   };
// //   // Handle cases where courses might be null/undefined
// //   const safeCourses = Array.isArray(courses) ? courses : [];

// //   // Filter courses by search term, active category, and public status
// //   const filteredCourses = safeCourses.filter((course) => {
// //     try {
// //       const name = course?.courseName?.toLowerCase() || "";
// //       const term = searchTerm?.toLowerCase() || "";
// //       const status = course?.status?.toLowerCase() || "";
// //       console.log(`Course: ${name}, Status: ${status}`); // Debug log

// //       const matchesSearch = name.includes(term);
// //       const matchesCategory =
// //         activeCategory === "All Courses" ||
// //         status === activeCategory.toLowerCase() ||
// //         (activeCategory.toLowerCase() === "draft" && status === "drafts") ||
// //         (activeCategory.toLowerCase() === "drafts" && status === "draft");
// //       const isPublic = status === "public"; // Only show public courses

// //       return matchesSearch && matchesCategory && isPublic;
// //     } catch {
// //       return false;
// //     }
// //   });

// //   // Pagination
// //   const itemsPerPage = 6;
// //   const pageCount = Math.ceil(filteredCourses.length / itemsPerPage);
// //   const startIndex = currentPage * itemsPerPage;
// //   const selectedCourses = filteredCourses.slice(
// //     startIndex,
// //     startIndex + itemsPerPage
// //   );

// //   // Empty state
// //   if (filteredCourses.length === 0) {
// //     return (
// //       <div className="p-4 mt-6">
// //         <div className="py-10 text-center">
// //           {activeCategory === "All"
// //             ? "No public courses found"
// //             : `No public ${activeCategory} courses found`}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="p-4 mt-4 max-w-7xl mx-auto">
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-4">
// //         {selectedCourses.map((course) => {
// //           const courseId = course._id || course.id;
// //           const thumbnail =
// //             course.details?.thumbnail || "/placeholder-image.jpg";
// //           const description =
// //             course.details?.description?.substring(0, 100) ||
// //             "No description available";

// //           return (
// //             <div
// //               className="relative p-4 py-6 bg-white shadow-md rounded-3xl max-w-sm mx-auto flex flex-col h-[450px]" // Fixed height and flex column
// //               key={courseId}
// //             >
// //               <img
// //                 src={thumbnail}
// //                 alt={course.courseName || "Course Thumbnail"}
// //                 className="object-cover w-full h-48 mb-4 rounded-md"
// //                 onError={(e) => {
// //                   e.target.src = "/placeholder-image.jpg";
// //                 }}
// //               />

// //               <div className="flex items-center justify-between mb-2">
// //                 <h3 className="flex items-center text-lg font-semibold text-gray-800 truncate">
// //                   {getCourseIcon(course.courseName)}
// //                   {course.courseName || "Untitled Course"}
// //                 </h3>
// //               </div>

// //               <p className="mt-2 text-md text-gray-600 flex-grow overflow-hidden text-ellipsis">
// //                 {description}...
// //               </p>
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center">
// //                   <Clock size={16} className="mr-2 text-blue-600" />
// //                   <span>
// //                     {course.duration?.value || ""} {course.duration?.unit || ""}
// //                   </span>
// //                 </div>
// //                 <div className="flex items-center gap-2 mt-2 text-gray-500 text-md">
// //                   <Monitor />
// //                   Mode:{" "}
// //                   <p
// //                     className={`text-sm ${
// //                       course.mode === "online"
// //                         ? "text-green-400"
// //                         : "text-red-400"
// //                     }`}
// //                   >
// //                     {course.mode || "N/A"}
// //                   </p>
// //                 </div>
// //               </div>
               
// //                {
// //                 isLoggedIn && ()
// //                }
// //               <div className="flex items-center justify-between mt-4">
// //                 <span className="font-bold text-2xl text-[#008ce4]">
// //                   ₹ {course.price || "N/A"}
// //                 </span>
// //                 <Link href={`/course/${course.id}`}>
// //                 <button 
                
// //                 className="px-6 cursor-pointer py-3 text-white rounded-md bg-gradient-to-r from-[#008ce4] to-[#00af9e] hover:from-[#0077c2] hover:to-[#009a8a] transition-colors">
// //                   Enroll Now
// //                 </button>
// //                 </Link>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {pageCount > 1 && (
// //         <div className="flex justify-end gap-4 mt-7">
// //           <button
// //             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
// //             disabled={currentPage === 0}
// //             className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
// //           >
// //             Previous
// //           </button>
// //           <button
// //             onClick={() =>
// //               setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))
// //             }
// //             disabled={currentPage >= pageCount - 1}
// //             className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
// //           >
// //             Next
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";
// import { useState } from "react";
// import {
//   FaCode,
//   FaBook,
//   FaChalkboardTeacher,
//   FaDatabase,
// } from "react-icons/fa";
// import useCourseStore from "../../store/courseStore";
// import { Clock, Monitor } from "lucide-react";
// import Link from "next/link";
// import { useAuth } from "@/component/Contextlogin/AuthContext";
// import { useRouter } from "next/navigation";

// const getCourseIcon = (courseName) => {
//   const name = courseName?.toLowerCase() || "";
//   if (
//     name.includes("javascript") ||
//     name.includes("coding") ||
//     name.includes("programming")
//   ) {
//     return <FaCode className="inline-block mr-2 text-blue-600" />;
//   } else if (name.includes("literature") || name.includes("writing")) {
//     return <FaBook className="inline-block mr-2 text-green-600" />;
//   } else if (name.includes("teaching") || name.includes("education")) {
//     return (
//       <FaChalkboardTeacher className="inline-block mr-2 text-purple-600" />
//     );
//   } else if (name.includes("data") || name.includes("database")) {
//     return <FaDatabase className="inline-block mr-2 text-red-600" />;
//   }
//   return <FaBook className="inline-block mr-2 text-gray-600" />;
// };

// export default function DisplayCards({
//   courses = [],
//   searchTerm = "",
//   activeCategory = "All Courses",
// }) {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const { teachers = [] } = useCourseStore();
//   const { isLoggedIn } = useAuth();
//   const router = useRouter();

//   // Safely get teacher name with multiple fallbacks
//   const getTeacherName = (teacherData) => {
//     try {
//       if (!teacherData?.user?.name) return "No Teacher Assigned";
//       const { firstName = "", lastName = "" } = teacherData.user.name;
//       const fullName = `${firstName} ${lastName}`.trim();
//       console.log(fullName);
//       return fullName || "Unknown Teacher";
//     } catch (error) {
//       console.error("Error getting teacher name:", error);
//       return "Unknown Teacher";
//     }
//   };

//   // Handle cases where courses might be null/undefined
//   const safeCourses = Array.isArray(courses) ? courses : [];

//   // Filter courses by search term, active category, and public status
//   const filteredCourses = safeCourses.filter((course) => {
//     try {
//       const name = course?.courseName?.toLowerCase() || "";
//       const term = searchTerm?.toLowerCase() || "";
//       const mode = course?.mode?.toLowerCase() || "";
//       console.log(`Course: ${name}, Mode: ${mode}`); // Debug log

//       const matchesSearch = name.includes(term);
//       const matchesCategory =
//         activeCategory === "All Courses" ||
//         (activeCategory === "Free Courses" && course.price === 0.01) ||
//         (activeCategory === "Paid Courses" && course.price > 0.01) ||
//         (activeCategory === "Online Courses" && mode === "online") ||
//         (activeCategory === "Offline Courses" && mode === "offline");
//       const isPublic = course.status?.toLowerCase() === "public";

//       return matchesSearch && matchesCategory && isPublic;
//     } catch {
//       return false;
//     }
//   });

//   // Pagination
//   const itemsPerPage = 6;
//   const pageCount = Math.ceil(filteredCourses.length / itemsPerPage);
//   const startIndex = currentPage * itemsPerPage;
//   const selectedCourses = filteredCourses.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   // Handle enroll button click
//   const handleEnrollClick = (courseId) => {
//     if (!isLoggedIn) {
//       setShowPopup(true);
//     } else {
//       router.push(`/course/${courseId}`);
//     }
//   };

//   // Empty state
//   if (filteredCourses.length === 0) {
//     return (
//       <div className="p-4 mt-6">
//         <div className="py-10 text-center">
//           {activeCategory === "All Courses"
//             ? "No public courses found"
//             : `No public ${activeCategory} courses found`}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 mt-4 max-w-7xl mx-auto">
//       {/* Popup Modal */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/30 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Registration Required
//             </h2>
//             <p className="text-gray-600 mb-6">
//               You need to register and log in to enroll in this course.
//             </p>
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => router.push("/studentRegistration")}
//                 className="px-4 py-2 bg-gradient-to-r from-[#008ce4] to-[#00af9e] text-white rounded-md hover:from-[#0077c2] hover:to-[#009a8a]"
//               >
//                 Register Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-4">
//         {selectedCourses.map((course) => {
//           const courseId = course._id || course.id;
//           const thumbnail =
//             course.details?.thumbnail || "/placeholder-image.jpg";
//           const description =
//             course.details?.description?.substring(0, 100) ||
//             "No description available";

//           return (
//             <div
//               className="relative p-4 py-6 bg-white shadow-md rounded-3xl max-w-sm mx-auto flex flex-col h-[450px]"
//               key={courseId}
//             >
//               <img
//                 src={thumbnail}
//                 alt={course.courseName || "Course Thumbnail"}
//                 className="object-cover w-full h-48 mb-4 rounded-md"
//                 onError={(e) => {
//                   e.target.src = "/placeholder-image.jpg";
//                 }}
//               />

//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="flex items-center text-lg font-semibold text-gray-800 truncate">
//                   {getCourseIcon(course.courseName)}
//                   {course.courseName || "Untitled Course"}
//                 </h3>
//               </div>

//               <p className="mt-2 text-md text-gray-600 flex-grow overflow-hidden text-ellipsis">
//                 {description}...
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <Clock size={16} className="mr-2 text-blue-600" />
//                   <span>
//                     {course.duration?.value || ""} {course.duration?.unit || ""}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 mt-2 text-gray-500 text-md">
//                   <Monitor />
//                   Mode:{" "}
//                   <p
//                     className={`text-sm ${
//                       course.mode === "online"
//                         ? "text-green-400"
//                         : "text-red-400"
//                     }`}
//                   >
//                     {course.mode || "N/A"}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between mt-4">
//                 <span className="font-bold text-2xl text-[#008ce4]">
//                   ₹ {course.price || "N/A"}
//                 </span>
//                 <button
//                   onClick={() => handleEnrollClick(courseId)}
//                   className="px-6 cursor-pointer py-3 text-white rounded-md bg-gradient-to-r from-[#008ce4] to-[#00af9e] hover:from-[#0077c2] hover:to-[#009a8a] transition-colors"
//                 >
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {pageCount > 1 && (
//         <div className="flex justify-end gap-4 mt-7">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
//             disabled={currentPage === 0}
//             className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))
//             }
//             disabled={currentPage >= pageCount - 1}
//             className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import {
  FaCode,
  FaBook,
  FaChalkboardTeacher,
  FaDatabase,
} from "react-icons/fa";
import useCourseStore from "../../store/courseStore";
import { Clock, Monitor } from "lucide-react";
import { useAuth } from "@/component/Contextlogin/AuthContext";
import { useRouter } from "next/navigation";

const getCourseIcon = (courseName) => {
  const name = courseName?.toLowerCase() || "";
  if (
    name.includes("javascript") ||
    name.includes("coding") ||
    name.includes("programming")
  ) {
    return <FaCode className="inline-block mr-2 text-blue-600" />;
  } else if (name.includes("literature") || name.includes("writing")) {
    return <FaBook className="inline-block mr-2 text-green-600" />;
  } else if (name.includes("teaching") || name.includes("education")) {
    return (
      <FaChalkboardTeacher className="inline-block mr-2 text-purple-600" />
    );
  } else if (name.includes("data") || name.includes("database")) {
    return <FaDatabase className="inline-block mr-2 text-red-600" />;
  }
  return <FaBook className="inline-block mr-2 text-gray-600" />;
};

export default function DisplayCards({
  courses = [],
  searchTerm = "",
  activeCategory = "All Courses",
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { teachers = [] } = useCourseStore();
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  // Safely get teacher name with multiple fallbacks
  const getTeacherName = (teacherData) => {
    try {
      if (!teacherData?.user?.name) return "No Teacher Assigned";
      const { firstName = "", lastName = "" } = teacherData.user.name;
      const fullName = `${firstName} ${lastName}`.trim();
      console.log(fullName);
      return fullName || "Unknown Teacher";
    } catch (error) {
      console.error("Error getting teacher name:", error);
      return "Unknown Teacher";
    }
  };

  // Handle cases where courses might be null/undefined
  const safeCourses = Array.isArray(courses) ? courses : [];

  // Filter courses by search term, active category, and public status
  const filteredCourses = safeCourses.filter((course) => {
    try {
      const name = course?.courseName?.toLowerCase() || "";
      const term = searchTerm?.toLowerCase() || "";
      const mode = course?.mode?.toLowerCase() || "";
      console.log(`Course: ${name}, Mode: ${mode}`); // Debug log

      const matchesSearch = name.includes(term);
      const matchesCategory =
        activeCategory === "All Courses" ||
        (activeCategory === "Free Courses" && course.price === 0.01) ||
        (activeCategory === "Paid Courses" && course.price > 0.01) ||
        (activeCategory === "Online Courses" && mode === "online") ||
        (activeCategory === "Offline Courses" && mode === "offline");
      const isPublic = course.status?.toLowerCase() === "public";

      return matchesSearch && matchesCategory && isPublic;
    } catch {
      return false;
    }
  });

  // Pagination
  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const selectedCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle enroll button click
  const handleEnrollClick = (courseId) => {
    if (!isLoggedIn) {
      setShowPopup(true);
    } else {
      router.push(`/course/${courseId}`);
    }
  };

  // Empty state
  if (filteredCourses.length === 0) {
    return (
      <div className="p-4 mt-6">
        <div className="py-10 text-center">
          {activeCategory === "All Courses"
            ? "No public courses found"
            : `No public ${activeCategory} courses found`}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 mt-4 max-w-7xl mx-auto">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Registration Required
            </h2>
            <p className="text-gray-600 mb-6">
              You need to register and log in to enroll in this course.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => router.push("/studentRegistration")}
                className="px-4 py-2 bg-gradient-to-r from-[#008ce4] to-[#00af9e] text-white rounded-md hover:from-[#0077c2] hover:to-[#009a8a]"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-4">
        {selectedCourses.map((course) => {
          const courseId = course._id || course.id;
          const thumbnail =
            course.details?.thumbnail || "/placeholder-image.jpg";
          const description =
            course.details?.description?.substring(0, 100) ||
            "No description available";

          return (
            <div
              className="relative p-4 py-6 bg-white shadow-md rounded-3xl w-full max-w-sm mx-auto flex flex-col min-h-[450px]"
              key={courseId}
            >
              <img
                src={thumbnail}
                alt={course.courseName || "Course Thumbnail"}
                className="object-cover w-full h-48 mb-4 rounded-md"
                onError={(e) => {
                  e.target.src = "/placeholder-image.jpg";
                }}
              />

              <div className="flex items-center justify-between mb-2">
                <h3 className="flex items-center text-lg font-semibold text-gray-800 truncate">
                  {getCourseIcon(course.courseName)}
                  {course.courseName || "Untitled Course"}
                </h3>
              </div>

              <p className="mt-2 text-md text-gray-600 flex-grow line-clamp-3">
                {description}...
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-blue-600" />
                  <span>
                    {course.duration?.value || ""} {course.duration?.unit || ""}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-md">
                  <Monitor />
                  Mode:{" "}
                  <p
                    className={`text-sm ${
                      course.mode === "online"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {course.mode || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-2xl text-[#008ce4]">
                  ₹ {course.price || "N/A"}
                </span>
                <button
                  onClick={() => handleEnrollClick(courseId)}
                  className="px-6 py-3 text-white rounded-md bg-gradient-to-r from-[#008ce4] to-[#00af9e] hover:from-[#0077c2] hover:to-[#009a8a] transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {pageCount > 1 && (
        <div className="flex justify-end gap-4 mt-7">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))
            }
            disabled={currentPage >= pageCount - 1}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}