"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, BookOpen, Eye, X, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@/component/Contextlogin/AuthContext';
import Link from 'next/link';
import useCourseStore from '../../store/demoCoursesStore'; // Adjust path to your store
import { FaTimes } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';

const DemoCards = ({ courses = [], searchTerm = '' }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [viewModal, setViewModal] = useState(null);
  const { isLoggedIn } = useAuth();
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [notRegisteredModal, setNotRegisteredModal] = useState(null); // New state for not registered popup
  const [localLoading, setLocalLoading] = useState(false);
  const [localError, setLocalError] = useState(null);
  const { bookSeat } = useCourseStore();
  const router = useRouter();
  const searchParams = useSearchParams(); // To read query parameters

  // Check for courseId in URL to auto-open confirmation modal after registration
  useEffect(() => {
    const courseId = searchParams.get('courseId');
    if (isLoggedIn && courseId) {
      const course = courses.find((c) => c._id === courseId);
      if (course) {
        setConfirmationModal(course);
      }
    }
  }, [searchParams, isLoggedIn, courses]);

  const handleConfirmation = (course) => {
    if (!isLoggedIn) {
      // Show not registered popup and store course for redirect
      setNotRegisteredModal(course);
      setLocalError(null);
      return;
    }
    setConfirmationModal(course);
    setLocalError(null); // Reset error when opening modal
  };

  const confirmBooking = async () => {
    if (!confirmationModal) return;
    setLocalLoading(true);
    setLocalError(null);

    try {
      const updatedCourse = await bookSeat(confirmationModal._id);
      setLocalLoading(false);
      setConfirmationModal(null);
    } catch (error) {
      setLocalError(error.message || 'Failed to book seat');
      setLocalLoading(false);
    }
  };

  const cancelBooking = () => {
    setConfirmationModal(null);
    setLocalError(null);
    setLocalLoading(false);
  };

  const closeNotRegisteredModal = () => {
    setNotRegisteredModal(null);
  };

  // Debugging teacher data
  useEffect(() => {
    courses.forEach((course, index) => {
      if (course.teacher) {
        console.log(`Teacher data at course index ${index}:`, course.teacher);
      } else {
        console.warn(`No teacher data for course index ${index}:`, course);
      }
    });
  }, [courses]);

  const formatTeacherName = (teacherData) => {
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

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid Date';
      return date.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Invalid Date';
    }
  };

  const getImageUrl = (thumbnail) => {
    if (!thumbnail || typeof thumbnail !== 'string' || thumbnail.trim() === '') {
      return null;
    }
    if (thumbnail.startsWith('data:image/') || thumbnail.match(/^(http|https):\/\//)) {
      return thumbnail;
    }
    return null;
  };

  const highlightSearchTerm = (text, term) => {
    if (typeof text !== 'string' || !text) {
      console.warn('Invalid text input to highlightSearchTerm:', { text, term });
      return typeof text === 'string' ? text : '';
    }
    if (!term || typeof term !== 'string') {
      return text;
    }
    try {
      const regex = new RegExp(`(${term})`, 'gi');
      const parts = text.split(regex);
      return parts.map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <span key={index} className="bg-yellow-200">
            {part}
          </span>
        ) : (
          part
        )
      );
    } catch (error) {
      console.warn('Error in highlightSearchTerm:', error, { text, term });
      return text;
    }
  };

  if (!courses || courses.length === 0) {
    return (
      <div className="py-10 mt-40 text-center text-gray-600">
        No courses available
      </div>
    );
  }

  const filteredCourses = courses.filter((course) => {
    const searchLower = searchTerm.toLowerCase();
    const teacherName = formatTeacherName(course.teacher) || 'Unknown Teacher';
    const teacherNameLower = teacherName.toLowerCase();

    return (
      ((course.subject?.toLowerCase().includes(searchLower) || false) ||
        (course.description?.toLowerCase().includes(searchLower) || false) ||
        (course.category?.toLowerCase().includes(searchLower) || false) ||
        teacherNameLower.includes(searchLower)) &&
      course.isActive === true
    );
  });

  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const selectedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  const openViewModal = (course) => setViewModal(course);
  const closeViewModal = () => setViewModal(null);

  return (
    <div className="p-4 mt-6 max-w-7xl mx-auto">
      {filteredCourses.length === 0 ? (
        <div className="py-10 text-center text-gray-600">No active courses found</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {selectedCourses.map((course) => {
              const imageUrl = getImageUrl(course.courseThumbnail);

              return (
                <div
                  key={course._id}
                  className="relative p-4 py-6 transition-shadow duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl"
                >
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={course.subject || 'Course'}
                      className="object-cover w-full h-48 mb-4 rounded-md"
                      width={500}
                      height={300}
                      loading="lazy"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-48 mb-4 bg-gray-200 rounded-md">
                      <span className="text-gray-500">No Thumbnail</span>
                    </div>
                  )}

                  <p className="mb-3 text-sm text-gray-600 line-clamp-3">
                    {highlightSearchTerm(course.description || 'No description', searchTerm)}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-700">
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-2 text-blue-500" />
                      <span>
                        <strong>Category:</strong>{' '}
                        {highlightSearchTerm(course.category || 'N/A', searchTerm)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-blue-500" />
                      <span>
                        <strong>Teacher:</strong>{' '}
                        {highlightSearchTerm(formatTeacherName(course.teacher), searchTerm)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-blue-500" />
                      <span>
                        <strong> Duration:</strong> {course.duration || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-blue-500" />
                      <span>
                        <strong>Seats:</strong> {course.availableSeats ?? 'N/A'}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openViewModal(course)}
                      className="p-2 text-gray-600 hover:text-blue-600"
                      title="View Course"
                    >
                      <Eye size={18} />
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleConfirmation(course)}
                        className="px-6 cursor-pointer py-3 text-white rounded-md bg-gradient-to-r from-[#008ce4] to-[#00af9c] hover:from-[#0077c2] hover:to-[#009a8a] transition-colors"
                      >
                        Book Demo
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCourses.length > itemsPerPage && (
            <div className="flex justify-end gap-4 mt-7">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < Math.ceil(filteredCourses.length / itemsPerPage) - 1 ? prev + 1 : prev
                  )
                }
                className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                disabled={currentPage >= Math.ceil(filteredCourses.length / itemsPerPage) - 1}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {/* View Course Modal */}
      {viewModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto backdrop-blur-md bg-black/30"
          onClick={closeViewModal}
        >
          <div
            className="w-full max-w-4xl p-6 mx-4 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {viewModal.subject || 'Course Details'}
              </h2>
              <button
                onClick={closeViewModal}
                className="p-1 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                {viewModal.courseThumbnail ? (
                  <Image
                    src={getImageUrl(viewModal.courseThumbnail)}
                    alt={viewModal.subject || 'Course'}
                    className="object-cover w-full rounded-lg"
                    width={500}
                    height={300}
                    loading="lazy"
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-lg">
                    <span className="text-gray-500">No Thumbnail</span>
                  </div>
                )}
              </div>

              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Description</h3>
                  <p className="text-gray-600">
                    {highlightSearchTerm(viewModal.description || 'No description available', searchTerm)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-2 text-blue-500" />
                    <span>
                      <strong>Category:</strong> {viewModal.category || 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-blue-500" />
                    <span>
                      <strong>Teacher:</strong> {formatTeacherName(viewModal.teacher)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    <span>
                      <strong>Schedule:</strong> {formatDate(viewModal.scheduleAt)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-blue-500" />
                    <span>
                      <strong>Duration:</strong> {viewModal.duration || 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-blue-500" />
                    <span>
                      <strong>Available Seats:</strong> {viewModal.availableSeats ?? 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-blue-500" />
                    <span>
                      <strong>Booked Seats:</strong> {viewModal.bookedSeats ?? '0'}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      viewModal.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {viewModal.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>

            {viewModal.requirements?.length > 0 && (
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">Requirements</h3>
                <ul className="pl-5 space-y-1 text-gray-600 list-disc">
                  {viewModal.requirements.map((req, index) => (
                    <li key={index}>
                      {highlightSearchTerm(req || 'N/A', searchTerm)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {viewModal.syllabus?.length > 0 && (
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">Syllabus</h3>
                <ul className="pl-5 space-y-1 text-gray-600 list-disc">
                  {viewModal.syllabus.map((item, index) => (
                    <li key={index}>
                      {highlightSearchTerm(item || 'N/A', searchTerm)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Not Registered Modal */}
      {notRegisteredModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto backdrop-blur-md bg-black/30">
          <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg shadow-lg">
            <div className="mb-6 text-center">
              <X size={48} className="mx-auto text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Registration Required
              </h3>
              <p className="text-gray-600 mb-4">
                You need to register to book this demo class. Please register to continue.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">{notRegisteredModal.subject}</p>
                <p className="text-sm text-gray-600">
                  Teacher: {formatTeacherName(notRegisteredModal.teacher)}
                </p>
                {notRegisteredModal.scheduleAt && (
                  <p className="text-sm text-gray-600">
                    Schedule: {formatDate(notRegisteredModal.scheduleAt)}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={closeNotRegisteredModal}
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <Link
                href={`/studentRegistration?courseId=${notRegisteredModal._id}`}
                className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto backdrop-blur-md bg-black/30">
          <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg shadow-lg">
            <div className="mb-6 text-center">
              <Check size={48} className="mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Confirm Demo Booking
              </h3>
              <p className="text-gray-600 mb-4">
                Are you sure you want to book this demo class?
              </p>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">{confirmationModal.subject}</p>
                <p className="text-sm text-gray-600">
                  Teacher: {formatTeacherName(confirmationModal.teacher)}
                </p>
                {confirmationModal.scheduleAt && (
                  <p className="text-sm text-gray-600">
                    Schedule: {formatDate(confirmationModal.scheduleAt)}
                  </p>
                )}
              </div>
              {localError && (
                <p className="text-red-500 text-sm mt-2">{localError}</p>
              )}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={cancelBooking}
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                disabled={localLoading}
              >
                No, Cancel
              </button>
              <button
                onClick={confirmBooking}
                className={`px-6 py-2 text-white rounded-lg ${
                  localLoading
                    ? 'bg-green-300 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600'
                }`}
                disabled={localLoading}
              >
                {localLoading ? 'Booking...' : 'Yes, Book It'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoCards;