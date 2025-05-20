import { create } from "zustand";
import axiosInstance from "@/utils/axios";

const useQueryContactStore = create((set) => ({
  queries: [],
  isLoading: false,
  error: null,

  // Fetch all queries
  fetchQueries: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/v1/query/");
      if (response.data.success) {
        set({ queries: response.data.data, isLoading: false });
      } else {
        set({ error: response.data.message || "Failed to fetch queries", isLoading: false });
      }
    } catch (error) {
      set({ error: error.message || "An error occurred", isLoading: false });
    }
  },

  // Create a new query
  createQuery: async (queryData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.post("/v1/query/", queryData);
      if (response.data.success) {
        set((state) => ({
          queries: [...state.queries, response.data.data],
          isLoading: false,
        }));
      } else {
        set({ error: response.data.message || "Failed to create query", isLoading: false });
      }
    } catch (error) {
      set({ error: error.message || "An error occurred", isLoading: false });
    }
  },
}));

export default useQueryContactStore;