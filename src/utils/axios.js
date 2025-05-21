// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: "http://localhost:5000/api",

//     headers:{
//         "Content-Type": "application/json",
//         accept: "application/json"
//     }
// })

// export default axiosInstance;

// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:5000/api', // Matches backend port
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//       console.log('Request headers:', config.headers); // Log headers
//     } else {
//       console.warn('No token found for request:', config.url);
//     }
//     console.log('Request URL:', config.url); // Log full URL
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error('Response error:', error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;



import axios from 'axios';
import Cookies from 'js-cookie';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: 'https://musicbackend-7mb1.onrender.com/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token from cookies
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear cookies and local storage (if applicable)
      Cookies.remove('token');
      Cookies.remove('student-storage');
      // localStorage.removeItem('student-storage'); // Optional

      // Redirect to login page
      if (typeof window !== 'undefined') {
        window.location.href = '/student-login';
      }
    }

    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
