
"use client";

import useCourseStore from "@/store/courseStore";
import { Clock } from "lucide-react";
import Image from "next/image";

export default function CourseSidebar() {
  const { selectedCourse } = useCourseStore();

  // Fallback values if course data is missing
  const thumbnail = selectedCourse?.details?.thumbnail || "/default-course-image.jpg";
  const price = selectedCourse?.price ? `₹${selectedCourse.price.toFixed(2)}` : "₹10.99";
  const originalPrice = selectedCourse?.price
    ? `₹${(selectedCourse.price * 2).toFixed(2)}` // Assume 50% discount for original price
    : "₹21.99";
  const discount = "50% off"; // Static fallback; adjust if discount is in API data
  const durationText = selectedCourse?.duration
    ? `${selectedCourse.duration.value} ${selectedCourse.duration.unit}${selectedCourse.duration.value > 1 ? "s" : ""} left at this price!`
    : "5 days left at this price!";

  return (
    <div className="lg:w-1/3 mt-30">
      <div className="border rounded-lg p-4 shadow-lg bg-blue-50">
        <Image
          src={thumbnail}
          alt="course image"
          width={200}
          height={200}
          className=""
        />
        <div className="flex items-center gap-2">
          <Clock size={20} className="text-red" />
          <p className="text-sm text-red-600 mb-1">{durationText}</p>
        </div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-blue-600">{price}</span>
          <span className="text-sm line-through ml-2 text-gray-500">{originalPrice}</span>
          <span className="ml-2 text-green-600 text-sm">{discount}</span>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
          Enroll Now
        </button>

        <div className="mt-4 text-sm space-y-1 text-gray-700">
          <p>✔ Lifetime access</p>
          <p>✔ Step-by-step guidance</p>
          <p>✔ Downloadable resources</p>
          <p>✔ Quizzes and certificate</p>
        </div>
      </div>
    </div>
  );
}