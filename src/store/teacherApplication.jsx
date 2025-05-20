// import { create } from "zustand";
// import axiosInstance from "@/utils/axios";

// const useTeacherStore = create((set, get) => ({
//   teachers: [], // Stores all teacher applications
//   loading: false, // Tracks loading state
//   error: null, // Stores error messages
//   currentTeacher: null, // Stores single teacher application

//   // Submit a new teacher application
//   newTeacherApplication: async (teacherData, resumeFile, videoFile) => {
//     set({ loading: true, error: null });

//     try {
//       // Create FormData object to handle file uploads and JSON data
//       const formData = new FormData();

//       // Append text fields (non-file data)
//       formData.append("name[firstName]", teacherData.name.firstName);
//       formData.append("name[lastName]", teacherData.name.lastName);
//       formData.append("address[addressLine]", teacherData.address.addressLine);
//       formData.append("address[city]", teacherData.address.city);
//       formData.append("address[state]", teacherData.address.state);
//       formData.append("address[country]", teacherData.address.country);
//       formData.append("mobileNumber", teacherData.mobileNumber);
//       formData.append("email", teacherData.email);
//       formData.append("description", teacherData.description);
//       formData.append("experience", teacherData.experience);
//       if (teacherData.teachingMode) {
//         formData.append("teachingMode", teacherData.teachingMode);
//       }
//       if (teacherData.skill) {
//         formData.append("skill", teacherData.skill);
//       }
//       // Append languages as an array
//       teacherData.languages.forEach((lang, index) => {
//         formData.append(`languages[${index}]`, lang);
//       });

//       // Append base64 photo (if provided)
//       if (teacherData.photo) {
//         formData.append("photo", teacherData.photo); // Base64 string
//       }

//       // Append resume file (if provided)
//       if (resumeFile) {
//         formData.append("resume", resumeFile); // File object
//       }

//       // Append video file (if provided)
//       if (videoFile) {
//         formData.append("videoConsent", videoFile); // File object
//       }

//       // Send POST request with FormData
//       const response = await axiosInstance.post(
//         "/v1/teacher-applications/",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       set({ loading: false });
//       return response.data; // Returns { success: true, teacher }
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || error.message,
//         loading: false,
//       });
//       throw error;
//     }
//   },

//   // Fetch all teacher applications
//   fetchAllApplications: async () => {
//     set({ loading: true, error: null });
//     try {
//       const response = await axiosInstance.get("/v1/teacher-applications/");
//       set({
//         teachers: response.data.applications,
//         loading: false,
//       });
//       return response.data; // Returns { success: true, count, applications }
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || error.message,
//         loading: false,
//       });
//       throw error;
//     }
//   },

//   // Get single application by ID
//   fetchApplicationById: async (id) => {
//     set({ loading: true, error: null });
//     try {
//       const response = await axiosInstance.get(
//         `/v1/teacher-applications/${id}`
//       );
//       set({
//         currentTeacher: response.data.application,
//         loading: false,
//       });
//       return response.data; // Returns { success: true, application }
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || error.message,
//         loading: false,
//       });
//       throw error;
//     }
//   },
// //status
//  changeTeacherStatus: async (teacherId, status) => {
//     set({ loading: true, error: null });
//     try {
//       console.log(`Changing status for teacher ${teacherId} to ${status}`);
//       const allowedStatuses = ['Active', 'Resigned', 'Terminated'];
//       if (!allowedStatuses.includes(status)) {
//         throw new Error(`Invalid status. Allowed values: ${allowedStatuses.join(', ')}`);
//       }

//       const response = await axiosInstance.patch(`/v1/teacher/status/${teacherId}`, { status });
//       console.log('changeTeacherStatus response:', response.data);
//       set((state) => ({
//         teachers: state.teachers.map((teacher) =>
//           teacher._id === teacherId ? { ...teacher, status: response.data.teacher.status } : teacher
//         ),
//         currentTeacher:
//           state.currentTeacher?._id === teacherId
//             ? { ...state.currentTeacher, status: response.data.teacher.status }
//             : state.currentTeacher,
//         loading: false,
//       }));
//       toast.success(`Teacher status updated to '${response.data.teacher.status}'`);
//       return response.data;
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Error changing teacher status';
//       set({ error: errorMessage, loading: false });
//       console.error('changeTeacherStatus error:', error);
//       toast.error(errorMessage);
//       throw error;
//     }
//   },
//   // Delete an application (when rejected)
//   deleteApplication: async (id) => {
//     set({ loading: true, error: null });
//     try {
//       const response = await axiosInstance.delete(
//         `/v1/teacher-applications/${id}`
//       );
//       set((state) => ({
//         teachers: state.teachers.filter((teacher) => teacher._id !== id),
//         currentTeacher:
//           state.currentTeacher?._id === id ? null : state.currentTeacher,
//         loading: false,
//       }));
//       return response.data; // Returns { success: true, message }
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || error.message,
//         loading: false,
//       });
//       throw error;
//     }
//   },

//   // Clear current teacher (for when leaving detail view)
//   clearCurrentTeacher: () => {
//     set({ currentTeacher: null });
//   },

//   // Clear errors
//   clearError: () => {
//     set({ error: null });
//   },
// }));

// export default useTeacherStore;





import { create } from "zustand";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/axios";

const useTeacherStore = create((set, get) => ({
  teachers: [],            // All teacher applications
  loading: false,          // Global loading flag
  error: null,             // Error message
  currentTeacher: null,    // Single application detail

  // ===== New Application =====
  newTeacherApplication: async (teacherData, resumeFile, videoFile) => {
    set({ loading: true, error: null });
    try {
      const formData = new FormData();

      // Text fields
      formData.append("name[firstName]", teacherData.name.firstName);
      formData.append("name[lastName]",  teacherData.name.lastName);
      formData.append("address[addressLine]", teacherData.address.addressLine);
      formData.append("address[city]",        teacherData.address.city);
      formData.append("address[state]",       teacherData.address.state);
      formData.append("address[country]",     teacherData.address.country);
      formData.append("mobileNumber",         teacherData.mobileNumber);
      formData.append("email",                teacherData.email);
      formData.append("description",          teacherData.description);
      formData.append("experience",           teacherData.experience);
      if (teacherData.teachingMode) {
        formData.append("teachingMode", teacherData.teachingMode);
      }
      if (teacherData.skill) {
        formData.append("skill", teacherData.skill);
      }

      // Languages array
      teacherData.languages.forEach((lang, idx) => {
        formData.append(`languages[${idx}]`, lang);
      });

      // Base64 photo
      if (teacherData.photo) {
        formData.append("photo", teacherData.photo);
      }

      // Files
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }
      if (videoFile) {
        formData.append("videoConsent", videoFile);
      }

      const { data } = await axiosInstance.post(
        "/v1/teacher-applications",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      set({ loading: false });
      return data; // { success: true, teacher }
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      throw err;
    }
  },

  // ===== Fetch All =====
  fetchAllApplications: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axiosInstance.get(
        "/v1/teacher-applications/getAllApplications"
      );
      set({ teachers: data.applications, loading: false });
      return data; // { success: true, count, applications }
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      throw err;
    }
  },

  // ===== Fetch One =====
  fetchApplicationById: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axiosInstance.get(
        `/v1/teacher-applications/${id}`
      );
      set({ currentTeacher: data.application, loading: false });
      return data; // { success: true, application }
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      throw err;
    }
  },

  // ===== Change Status =====
  changeTeacherStatus: async (teacherId, status) => {
    set({ loading: true, error: null });
    try {
      const allowed = ["Active", "Resigned", "Terminated"];
      if (!allowed.includes(status)) {
        throw new Error(
          `Invalid status. Allowed values: ${allowed.join(", ")}`
        );
      }

      const { data } = await axiosInstance.patch(
        `/v1/teacher/status/${teacherId}`,
        { status }
      );

      set((state) => ({
        teachers: state.teachers.map((t) =>
          t._id === teacherId ? { ...t, status: data.teacher.status } : t
        ),
        currentTeacher:
          state.currentTeacher?._id === teacherId
            ? { ...state.currentTeacher, status: data.teacher.status }
            : state.currentTeacher,
        loading: false,
      }));

      toast.success(`Teacher status updated to '${data.teacher.status}'`);
      return data;
    } catch (err) {
      const msg = err.response?.data?.message || "Error changing status";
      set({ error: msg, loading: false });
      console.error(err);
      toast.error(msg);
      throw err;
    }
  },

  // ===== Delete =====
  deleteApplication: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axiosInstance.delete(
        `/v1/teacher-applications/${id}`
      );
      set((state) => ({
        teachers: state.teachers.filter((t) => t._id !== id),
        currentTeacher:
          state.currentTeacher?._id === id ? null : state.currentTeacher,
        loading: false,
      }));
      return data; // { success: true, message }
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      throw err;
    }
  },

  // ===== Utilities =====
  clearCurrentTeacher: () => set({ currentTeacher: null }),
  clearError: () => set({ error: null }),
}));

export default useTeacherStore;