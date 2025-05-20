// // import { create } from 'zustand';
// // import axiosInstance from '../utils/axios';
// // import { toast } from "react-toastify";
// // const useDemoCourseStore = create((set) => ({
// //   courses: [],
// //   currentCourse: null,
// //   isLoading: false, 
// //   error: null,
// //   confirmationModal: null, 
// //   localLoading: false,
// //   localError: null,

// //   fetchCourses: async () => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       const response = await axiosInstance.get("/v1/demos/");
      
// //       // More flexible response handling
// //       const coursesData = response.data.demoCourses || response.data.demos || response.data;
      
// //       if (!coursesData) {
// //         throw new Error("No courses data found in response");
// //       }
      
// //       if (!Array.isArray(coursesData)) {
// //         throw new Error("Invalid courses data format");
// //       }
// //       set({ courses: coursesData, isLoading: false });
      
// //     } catch (error) {
// //       console.error("Full error object:", error);
      
// //       let message = "Failed to fetch courses";
// //       if (error.response) {
        
// //         message = error.response.data?.message || 
// //                  error.response.data?.error || 
// //                  error.response.statusText ||
// //                  `Server responded with ${error.response.status}`;
// //       } else if (error.request) {
// //         message = "No response from server - check your network connection";
// //       } else {
// //         message = `Request error: ${error.message}`;
// //       }
      
// //       set({ error: message, isLoading: false });
// //       toast.error(message);
// //     }
// //   },
// //   // Fetch a single demo course by ID
// //   fetchCourseById: async (id) => {
// //     set({ loading: true, error: null, currentCourse: null });
// //     try {
// //       const response = await axiosInstance.get(`/v1/demos/${id}`);
// //       set({ currentCourse: response.data, loading: false });
// //     } catch (error) {
// //       const errorMsg = error.response?.data?.error || error.message || 'Failed to fetch course';
// //       set({ error: errorMsg, loading: false });
// //     }
// //   },


// //   // Open confirmation modal with course details
// //   openConfirmationModal: (course) => {
// //     set({
// //       confirmationModal: {
// //         id: course._id,
// //         subject: course.subject,
// //         teacher: course.teacher,
// //         scheduleAt: course.scheduleAt,
// //       },
// //       localError: null,
// //     });
// //   },

// //   // Close confirmation modal
// //   cancelBooking: () => {
// //     set({
// //       confirmationModal: null,
// //       localLoading: false,
// //       localError: null,
// //     });
// //   },
// //   // Book a seat for a demo course (requires backend route)
// //   bookSeat: async (id) => {
// //     set({ loading: true, error: null });
// //     try {
// //       const response = await axiosInstance.post(`/v1/demos/${id}/book`);
// //       console.log("Booking response:", response.data);
  
// //       // Update the course state to reflect the booked seat
// //       set((state) => ({
// //         courses: state.courses.map((course) =>
// //           course._id === id
// //             ? {
// //                 ...course,
// //                 availableSeats: course.availableSeats - 1,
// //                 bookedSeats: course.bookedSeats + 1,
// //               }
// //             : course
// //         ),
// //         // Update currentCourse if it matches the booked course
// //         currentCourse:
// //           state.currentCourse && state.currentCourse._id === id
// //             ? {
// //                 ...state.currentCourse,
// //                 availableSeats: state.currentCourse.availableSeats - 1,
// //                 bookedSeats: state.currentCourse.bookedSeats + 1,
// //               }
// //             : state.currentCourse,
// //         loading: false,
// //       }));
// //     } catch (error) {
// //       const errorMsg =
// //         error.response?.data?.error || error.message || "Failed to book seat";
// //       set({ loading: false, error: errorMsg });
// //       throw new Error(errorMsg);
// //     }
// //   },


// //   // Clear current course
// //   clearCurrentCourse: () => set({ currentCourse: null }),

// //   // Clear error
// //   clearError: () => set({ error: null }),
// // }));

// // export default useDemoCourseStore;


// import { create } from 'zustand';
// import axiosInstance from '../utils/axios';
// import { toast } from "react-toastify";

// const useDemoCourseStore = create((set) => ({
//   courses: [],
//   currentCourse: null,
//   isLoading: false,
//   error: null,
//   confirmationModal: null,
//   localLoading: false,
//   localError: null,

//   fetchCourses: async () => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axiosInstance.get("/v1/demos/");
//       const coursesData = response.data.demoCourses || response.data.demos || response.data;
      
//       if (!coursesData) {
//         throw new Error("No courses data found in response");
//       }
      
//       if (!Array.isArray(coursesData)) {
//         throw new Error("Invalid courses data format");
//       }
//       set({ courses: coursesData, isLoading: false });
//     } catch (error) {
//       console.error("Full error object:", error);
//       let message = "Failed to fetch courses";
//       if (error.response) {
//         message = error.response.data?.message || 
//                  error.response.data?.error || 
//                  error.response.statusText ||
//                  `Server responded with ${error.response.status}`;
//       } else if (error.request) {
//         message = "No response from server - check your network connection";
//       } else {
//         message = `Request error: ${error.message}`;
//       }
//       set({ error: message, isLoading: false });
//       toast.error(message);
//     }
//   },

//   fetchCourseById: async (id) => {
//     set({ isLoading: true, error: null, currentCourse: null });
//     try {
//       const response = await axiosInstance.get(`/v1/demos/${id}`);
//       set({ currentCourse: response.data, isLoading: false });
//     } catch (error) {
//       const errorMsg = error.response?.data?.error || error.message || 'Failed to fetch course';
//       set({ error: errorMsg, isLoading: false });
//       toast.error(errorMsg);
//     }
//   },

//   openConfirmationModal: (course) => {
//     set({
//       confirmationModal: {
//         id: course._id,
//         subject: course.subject,
//         teacher: course.teacher,
//         scheduleAt: course.scheduleAt,
//       },
//       localError: null,
//     });
//   },

//   cancelBooking: () => {
//     set({
//       confirmationModal: null,
//       localLoading: false,
//       localError: null,
//     });
//   },

//   bookSeat: async (id) => {
//     set({ localLoading: true, localError: null });
//     try {
//       // Optional: Check for token before making the request
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Please log in to book a demo class.');
//       }

//       const response = await axios.post(
//         `/v1/demos/${id}/book`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       // const response = await axiosInstance.post(`/v1/demos/${id}/book`);
//       set((state) => ({
//         courses: state.courses.map((course) =>
//           course._id === id
//             ? {
//                 ...course,
//                 availableSeats: (course.availableSeats || 0) - 1,
//                 bookedSeats: (course.bookedSeats || 0) + 1,
//               }
//             : course
//         ),
//         currentCourse:
//           state.currentCourse && state.currentCourse._id === id
//             ? {
//                 ...state.currentCourse,
//                 availableSeats: (state.currentCourse.availableSeats || 0) - 1,
//                 bookedSeats: (state.currentCourse.bookedSeats || 0) + 1,
//               }
//             : state.currentCourse,
//         localLoading: false,
//         confirmationModal: null,
//       }));
//       toast.success('Successfully booked the demo class!');
//       return response.data;
//     } catch (error) {
//       const errorMsg =
//         error.response?.data?.error || error.message || 'Failed to book seat';
//       set({ localLoading: false, localError: errorMsg });
//       toast.error(errorMsg);
//       throw new Error(errorMsg);
//     }
//   },
 
//   clearCurrentCourse: () => set({ currentCourse: null }),

//   clearError: () => set({ error: null, localError: null }),
// }));

// export default useDemoCourseStore;


import { create } from 'zustand';
import axiosInstance from '../utils/axios';
import { toast } from "react-toastify";

const useDemoCourseStore = create((set) => ({
  courses: [],
  currentCourse: null,
  isLoading: false,
  error: null,
  confirmationModal: null,
  localLoading: false,
  localError: null,

  fetchCourses: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/v1/demos/getAllDemoCourse");
      const coursesData = response.data.demoCourses || response.data.demos || response.data;
      
      if (!coursesData) {
        throw new Error("No courses data found in response");
      }
      
      if (!Array.isArray(coursesData)) {
        throw new Error("Invalid courses data format");
      }
      set({ courses: coursesData, isLoading: false });
    } catch (error) {
      console.error("Full error object:", error);
      let message = "Failed to fetch courses";
      if (error.response) {
        message = error.response.data?.message || 
                 error.response.data?.error || 
                 error.response.statusText ||
                 `Server responded with ${error.response.status}`;
      } else if (error.request) {
        message = "No response from server - check your network connection";
      } else {
        message = `Request error: ${error.message}`;
      }
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },

  fetchCourseById: async (id) => {
    set({ isLoading: true, error: null, currentCourse: null });
    try {
      const response = await axiosInstance.get(`/v1/demos/${id}`);
      set({ currentCourse: response.data, isLoading: false });
    } catch (error) {
      const errorMsg = error.response?.data?.error || error.message || 'Failed to fetch course';
      set({ error: errorMsg, isLoading: false });
      toast.error(errorMsg);
    }
  },

  openConfirmationModal: (course) => {
    set({
      confirmationModal: {
        id: course._id,
        subject: course.subject,
        teacher: course.teacher,
        scheduleAt: course.scheduleAt,
      },
      localError: null,
    });
  },

  cancelBooking: () => {
    set({
      confirmationModal: null,
      localLoading: false,
      localError: null,
    });
  },

  // bookSeat: async (id) => {
  //   set({ localLoading: true, localError: null });
  //   try {
  //     const token = localStorage.getItem('token');
  //     console.log('bookSeat - Sending request for course:', id, 'Token:', token);
  //     if (!token) {
  //       throw new Error('Please log in to book a demo class.');
  //     }

  //     const response = await axiosInstance.post(`/v1/demos/${id}/book`);
  //     console.log('bookSeat - Booking response:', response.data);

  //     set((state) => ({
  //       courses: state.courses.map((course) =>
  //         course._id === id
  //           ? {
  //               ...course,
  //               availableSeats: (course.availableSeats || 0) - 1,
  //               bookedSeats: (course.bookedSeats || 0) + 1,
  //             }
  //           : course
  //       ),
  //       currentCourse:
  //         state.currentCourse && state.currentCourse._id === id
  //           ? {
  //               ...state.currentCourse,
  //               availableSeats: (state.currentCourse.availableSeats || 0) - 1,
  //               bookedSeats: (state.currentCourse.bookedSeats || 0) + 1,
  //             }
  //           : state.currentCourse,
  //       localLoading: false,
  //       confirmationModal: null,
  //     }));
  //     toast.success('Successfully booked the demo class!');
  //     return response.data;
  //   } catch (error) {
  //     console.error('bookSeat - Error:', error);
  //     const errorMsg =
  //       error.response?.data?.error || 
  //       error.response?.data?.message || 
  //       error.message || 
  //       'Failed to book seat';
  //     set({ localLoading: false, localError: errorMsg });
  //     toast.error(errorMsg);
  //     throw new Error(errorMsg);
  //   }
  // },
// In useDemoCourseStore.js (bookSeat function)
bookSeat: async (id) => {
  set({ localLoading: true, localError: null });
  try {
    const token = localStorage.getItem('token');
    console.log('bookSeat - Sending request for course:', id, 'Token:', token);
    if (!token) {
      throw new Error('Please log in to book a demo class.');
    }

    const response = await axiosInstance.post(`/v1/demos/${id}/book`);
    console.log('bookSeat - Booking response:', response.data);

    set((state) => ({
      courses: state.courses.map((course) =>
        course._id === id
          ? {
              ...course,
              availableSeats: (course.availableSeats || 0) - 1,
              bookedSeats: (course.bookedSeats || 0) + 1,
            }
          : course
      ),
      currentCourse:
        state.currentCourse && state.currentCourse._id === id
          ? {
              ...state.currentCourse,
              availableSeats: (state.currentCourse.availableSeats || 0) - 1,
              bookedSeats: (state.currentCourse.bookedSeats || 0) + 1,
            }
          : state.currentCourse,
      localLoading: false,
      confirmationModal: null,
    }));
    toast.success('Successfully booked the demo class!');
    return response.data;
  } catch (error) {
    console.error('bookSeat - Error:', error);
    let errorMsg = 'Failed to book seat';
    if (error.response?.status === 401) {
      errorMsg = 'Invalid or expired token. Please log in again.';
    } else {
      errorMsg = error.response?.data?.error || 
                error.response?.data?.message || 
                error.message || 
                'Failed to book seat';
    }
    set({ localLoading: false, localError: errorMsg });
    toast.error(errorMsg);
    throw new Error(errorMsg);
  }
},
  clearCurrentCourse: () => set({ currentCourse: null }),

  clearError: () => set({ error: null, localError: null }),
}));

export default useDemoCourseStore;