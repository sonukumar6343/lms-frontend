// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import axiosInstance from '@/utils/axios';

// const useStudentStore = create(
//   persist(
//     (set, get) => ({
//       currentStudent: null,
//       students: [],
//       token: null,
//       loading: false,
//       error: null,
//       successMessage: null,
//       otpEmail: null, // Store email for OTP verification

//       // Register new student
//       registerStudent: async (studentData) => {
//         set({ loading: true, error: null, successMessage: null });
//         try {
//           const response = await axiosInstance.post('/v1/student/register', studentData);
//           set({ loading: false, successMessage: response.data.message });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to register student';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Login student (validate credentials)
//       loginStudent: async ({ email, password }) => {
//         set({ loading: true, error: null, successMessage: null });
//         try {
//           const response = await axiosInstance.post('/v1/student/login', { email, password });
//           set({
//             loading: false,
//             otpEmail: email.trim(),
//             successMessage: 'Credentials validated. Please request OTP.',
//           });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.status === 404
//               ? 'No account found for this email. Please register first.'
//               : error.response?.status === 400
//               ? 'Invalid credentials. Please check your email and password.'
//               : error.response?.data?.error || error.message || 'An error occurred during login';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Send OTP
//       sendOtp: async ({ email, name }) => {
//         set({ loading: true, error: null, successMessage: null });
//         try {
//           const response = await axiosInstance.post('/v1/student/send-otp', { email, name });
//           set({
//             loading: false,
//             otpEmail: email.trim(),
//             successMessage: response.data.message || 'OTP sent successfully',
//           });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to send OTP';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Verify OTP
//       verifyOtp: async (otp) => {
//         set({ loading: true, error: null, successMessage: null });
//         const { otpEmail } = get();
//         if (!otpEmail) {
//           set({ loading: false, error: 'Email is missing. Please start the login process again.' });
//           throw new Error('Email is missing');
//         }
//         try {
//           const response = await axiosInstance.post('/v1/student/verify-otp', {
//             email: otpEmail,
//             otp: otp.trim(),
//           });
//           const { token, student } = response.data;
//           axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//           set({
//             loading: false,
//             successMessage: response.data.message || 'Login successful',
//             token,
//             currentStudent: student,
//             otpEmail: null,
//           });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.status === 404
//               ? 'No account found for this email. Please register first.'
//               : error.response?.status === 400 && error.response?.data?.error === 'OTP has expired'
//               ? 'OTP has expired. Please request a new one.'
//               : error.response?.status === 400
//               ? 'Invalid OTP. Please try again.'
//               : error.response?.data?.error || error.message || 'Failed to verify OTP';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Get all students
//       fetchAllStudents: async () => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.get('/v1/student');
//           set({ students: response.data.students, loading: false });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to fetch students';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Get single student by ID
//       fetchStudentById: async (id) => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.get(`/v1/student/${id}`);
//           set({ loading: false });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to fetch student';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Update student
//       updateStudent: async (id, updateData) => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.put(`/v1/student/${id}`, updateData);
//           const updatedStudent = response.data.student;
//           set((state) => ({
//             currentStudent: state.currentStudent?._id === id ? updatedStudent : state.currentStudent,
//             students: state.students.map((s) => (s._id === id ? updatedStudent : s)),
//             loading: false,
//             successMessage: response.data.message,
//           }));
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to update student';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Delete student
//       deleteStudent: async (id) => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.delete(`/v1/student/${id}`);
//           set((state) => ({
//             students: state.students.filter((s) => s._id !== id),
//             loading: false,
//             successMessage: response.data.message,
//             ...(state.currentStudent?._id === id && {
//               currentStudent: null,
//               token: null,
//             }),
//           }));
//           if (get().currentStudent?._id === id) {
//             delete axiosInstance.defaults.headers.common['Authorization'];
//           }
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to delete student';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Get all student names
//       fetchAllStudentNames: async () => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.get('/v1/student/names');
//           set({ loading: false });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to fetch student names';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Logout
//       logout: () => {
//         set({ currentStudent: null, token: null, otpEmail: null, error: null, successMessage: null });
//         delete axiosInstance.defaults.headers.common['Authorization'];
//       },

//       // Initialize auth state
//       initializeAuth: () => {
//         const { token } = get();
//         if (token) {
//           axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         }
//       },

//       // Reset OTP state
//       resetOtp: () => {
//         set({ otpEmail: null, error: null, successMessage: null });
//       },
//     }),
//     {
//       name: 'student-storage',
//       partialize: (state) => ({
//         token: state.token,
//         currentStudent: state.currentStudent,
//       }),
//     }
//   )
// );

// export default useStudentStore;


// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import axiosInstance from '@/utils/axios';

// const useStudentStore = create(
//   persist(
//     (set, get) => ({
//       currentStudent: null,
//       students: [],
//       token: null,
//       loading: false,
//       error: null,
//       successMessage: null,
//       otpEmail: null,

//       // Register new student
//       registerStudent: async (studentData) => {
//         set({ loading: true, error: null, successMessage: null });
//         try {
//           const response = await axiosInstance.post('/v1/student/register', studentData);
//           set({
//             loading: false,
//             successMessage: 'Registration successful! Please log in to continue.',
//           });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to register student';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Login student (validate credentials)
//       loginStudent: async ({ email, password }) => {
//         set({ loading: true, error: null, successMessage: null });
//         try {
//           const response = await axiosInstance.post('/v1/student/login', { email, password });
//           set({
//             loading: false,
//             otpEmail: email.trim(),
//             successMessage: 'Credentials validated. Please request OTP.',
//           });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.status === 404
//               ? 'No account found for this email. Please register first.'
//               : error.response?.status === 400
//               ? 'Invalid credentials. Please check your email and password.'
//               : error.response?.data?.error || error.message || 'An error occurred during login';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Send OTP
//       sendOtp: async ({ email, name }) => {
//         set({ loading: true, error: null, successMessage: null });
//         try {
//           const response = await axiosInstance.post('/v1/student/send-otp', { email, name });
//           set({
//             loading: false,
//             otpEmail: email.trim(),
//             successMessage: response.data.message || 'OTP sent successfully',
//           });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to send OTP';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Verify OTP
//       verifyOtp: async (otp) => {
//         set({ loading: true, error: null, successMessage: null });
//         const { otpEmail } = get();
//         if (!otpEmail) {
//           set({ loading: false, error: 'Email is missing. Please start the login process again.' });
//           throw new Error('Email is missing');
//         }
//         try {
//           console.log('Verifying OTP:', { email: otpEmail, otp: otp.trim() });
//           const response = await axiosInstance.post('/v1/student/verify-otp', {
//             email: otpEmail,
//             otp: otp.trim(),
//           });
//           const { token, student } = response.data;
//           axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//           set({
//             loading: false,
//             successMessage: response.data.message || 'Login successful',
//             token,
//             currentStudent: student,
//             otpEmail: null,
//           });
//           return response.data;
//         } catch (error) {
//           console.error('OTP verification error:', error.response?.data || error.message);
//           const errorMessage =
//             error.response?.status === 404
//               ? 'No account found for this email. Please register first.'
//               : error.response?.status === 400 && error.response?.data?.error === 'OTP has expired'
//               ? 'OTP has expired. Please request a new one.'
//               : error.response?.status === 400
//               ? 'Invalid OTP. Please try again.'
//               : error.response?.data?.error || error.message || 'Failed to verify OTP';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Get all students
//       fetchAllStudents: async () => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.get('/v1/student');
//           set({ students: response.data.students, loading: false });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to fetch students';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Get single student by ID
//       fetchStudentById: async (id) => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.get(`/v1/student/${id}`);
//           set({ loading: false });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to fetch student';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Update student
//       updateStudent: async (id, updateData) => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.put(`/v1/student/${id}`, updateData);
//           const updatedStudent = response.data.student;
//           set((state) => ({
//             currentStudent: state.currentStudent?._id === id ? updatedStudent : state.currentStudent,
//             students: state.students.map((s) => (s._id === id ? updatedStudent : s)),
//             loading: false,
//             successMessage: response.data.message,
//           }));
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to update student';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Delete student
//       deleteStudent: async (id) => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.delete(`/v1/student/${id}`);
//           set((state) => ({
//             students: state.students.filter((s) => s._id !== id),
//             loading: false,
//             successMessage: response.data.message,
//             ...(state.currentStudent?._id === id && {
//               currentStudent: null,
//               token: null,
//             }),
//           }));
//           if (get().currentStudent?._id === id) {
//             delete axiosInstance.defaults.headers.common['Authorization'];
//           }
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to delete student';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Get all student names
//       fetchAllStudentNames: async () => {
//         set({ loading: true, error: null });
//         try {
//           const response = await axiosInstance.get('/v1/student/names');
//           set({ loading: false });
//           return response.data;
//         } catch (error) {
//           const errorMessage =
//             error.response?.data?.error || error.message || 'Failed to fetch student names';
//           set({ loading: false, error: errorMessage });
//           throw new Error(errorMessage);
//         }
//       },

//       // Logout
//       logout: () => {
//         set({ currentStudent: null, token: null, otpEmail: null, error: null, successMessage: null });
//         delete axiosInstance.defaults.headers.common['Authorization'];
//       },

//       // Initialize auth state
//       initializeAuth: () => {
//         const { token } = get();
//         if (token) {
//           axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         }
//       },

//       // Reset OTP state
//       resetOtp: () => {
//         set({ otpEmail: null, error: null, successMessage: null });
//       },
//     }),
//     {
//       name: 'student-storage',
//       partialize: (state) => ({
//         token: state.token,
//         currentStudent: state.currentStudent,
//         successMessage: state.successMessage, // Persist successMessage for registration
//       }),
//     }
//   )
// );

// export default useStudentStore;





// store/studentStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';
import axiosInstance from '@/utils/axios';

const cookieStorage = {
  getItem: (name) => {
    const value = Cookies.get(name);
    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },
  setItem: (name, value) => {
    Cookies.set(name, JSON.stringify(value), {
      expires: 7,
      secure: true,
      sameSite: 'Strict',
    });
  },
  removeItem: (name) => {
    Cookies.remove(name);
  },
};

const useStudentStore = create(
  persist(
    (set, get) => ({
      currentStudent: null,
      token: null,
      loading: false,
      error: null,
      successMessage: null,
      otpEmail: null,

      loginStudent: async ({ email, password }) => {
        set({ loading: true, error: null, successMessage: null });
        try {
          const res = await axiosInstance.post('/auth/login', { email, password });
          set({ loading: false, otpEmail: email.trim(), successMessage: res.data.message });
          return res.data;
        } catch (err) {
          const msg = err.response?.data?.message || err.message;
          set({ loading: false, error: msg });
          throw new Error(msg);
        }
      },

      verifyOtp: async (otp) => {
        set({ loading: true, error: null, successMessage: null });
        const { otpEmail } = get();
        try {
          const res = await axiosInstance.post('/auth/verify-otp', { email: otpEmail, otp });
          const { token, user } = res.data;
          // console.log(res.data,"otp ressssssssssssssssss");
          
          Cookies.set('token', token, { expires: 7 });
          set({ loading: false, token, currentStudent: user, otpEmail: null, successMessage: res.data.message });
          return res.data;
        } catch (err) {
          const msg = err.response?.data?.message || err.message;
          set({ loading: false, error: msg });
          throw new Error(msg);
        }
      },

      logout: () => {
        set({ currentStudent: null, token: null, otpEmail: null, error: null, successMessage: null });
        Cookies.remove('token');
        cookieStorage.removeItem('student-storage');
      },
    }),
    {
      name: 'student-storage',
      storage: cookieStorage,
      partialize: (state) => ({ token: state.token, currentStudent: state.currentStudent }),
    }
  )
);

export default useStudentStore;
