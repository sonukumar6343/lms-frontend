import { create } from "zustand";
import axiosInstance from "../utils/axios";
import { toast } from "react-toastify";

const useCourseStore = create((set) => ({
  courses: [],
  selectedCourse: null,
  isLoading: false,
  error: null,

  // Fetch all courses
  fetchCourses: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/v1/course/getAllCourses");
      set({ courses: response.data.courses, isLoading: false });
      return response.data.courses;
    } catch (error) {
      const message = error.response?.data?.error || "Failed to fetch courses";
      set({ error: message, isLoading: false });
      toast.error(message);
      throw error;
    }
  },

  // Fetch single course
  fetchCourseById: async (id) => {
    set({ isLoading: true, error: null, selectedCourse: null });
    try {
      const response = await axiosInstance.get(`/v1/course/${id}`);
      set({ selectedCourse: response.data, isLoading: false });
      return response.data;
    } catch (error) {
      const message = error.response?.data?.error || "Failed to fetch course";
      set({ error: message, isLoading: false });
      toast.error(message);
      throw error;
    }
  },


  // Clear selected course
  clearSelectedCourse: () => set({ selectedCourse: null }),

  // Clear error
  clearError: () => set({ error: null }),
}));

export default useCourseStore;