import { create } from "zustand";
import axiosInstance from "../utils/axios";
import { toast } from "react-toastify";

const useSessionStore = create((set) => ({
  sessions: [],
  isLoading: false,
  error: null,

  fetchSessionsByCourse: async (courseId) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.get(`/v1/course/courses/${courseId}/sessions`);
      set({ sessions: res.data.sessions, isLoading: false });
    } catch (err) {
      const message = err.response?.data?.error || "Failed to fetch sessions";
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },


  createSession: async (courseId, sessionData) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.post(`/v1/course/courses/${courseId}/sessions`, sessionData);
      set((state) => ({
        sessions: [...state.sessions, res.data.session],
        isLoading: false,
      }));
      toast.success("Session created!");
    } catch (err) {
      const message = err.response?.data?.error || "Failed to create session";
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },

//   updateSession: async (courseId, sessionId, updatedData) => {
//     set({ isLoading: true, error: null });
//     try {
//       const res = await axiosInstance.put(`/course/courses/${courseId}/sessions/${sessionId}`, updatedData);
//       set((state) => ({
//         sessions: state.sessions.map((s) => (s._id === sessionId ? res.data.session : s)),
//         isLoading: false,
//       }));
//       toast.success("Session updated!");
//     } catch (err) {
//       const message = err.response?.data?.error || "Failed to update session";
//       set({ error: message, isLoading: false });
//       toast.error(message);
//     }
//   },
updateSession: async (courseId, sessionId, updatedData) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.put(`/v1/course/courses/${courseId}/sessions/${sessionId}`, updatedData);
      set((state) => ({
        sessions: state.sessions.map((s) => (s._id === sessionId ? res.data.session : s)),
        isLoading: false,
      }));
      toast.success("Session updated!");
    } catch (err) {
      const message = err.response?.data?.error || "Failed to update session";
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },
  
  deleteSession: async (courseId, sessionId) =>{
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.delete(`/v1/course/courses/${courseId}/sessions/${sessionId}`);
      set((state) => ({
        sessions: state.sessions.filter((s) => s._id !== sessionId),
        isLoading: false,
      }));
      toast.success("Session deleted!");
    } catch (err) {
      const message = err.response?.data?.error || "Failed to delete session";
      set({ error: message, isLoading: false });
      toast.error(message);
    }
  },

  clearSessions: () => set({ sessions: [] }),
  clearError: () => set({ error: null }),
}));

export default useSessionStore;
