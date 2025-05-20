import { create } from 'zustand';
import axios from 'axios';
import axiosInstance from '@/utils/axios';

const useContactStore = create((set) => ({
  // Form data for submitting a new contact message
  formData: {
    name: '',
    email: '',
    phone: '',
    message: '',
  },

  // List of contact messages
  messages: [],

  // UI states
  isLoading: false,
  error: null,
  success: null,

  // Update form data
  updateFormData: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),

  // Reset form
  resetForm: () =>
    set({
      formData: { name: '', email: '', phone: '', message: '' },
      error: null,
      success: null,
    }),

  // Submit contact form
  submitForm: async (formData) => {
    set({ isLoading: true, error: null, success: null });
    try {
      const response = await axiosInstance.post('/v1/contactUs/', formData);
      set({
        success: response.data.message, 
        formData: { name: '', email: '', phone: '', message: '' },
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.error || 'Failed to submit form',
        isLoading: false,
      });
    }
  },

  // Fetch all contact messages
  fetchMessages: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/v1/contactUs/');
      set({
        messages: response.data.messages, // Backend returns { totalMessages, messages }
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.error || 'Failed to fetch messages',
        isLoading: false,
      });
    }
  },

  // Delete a contact message
  deleteMessage: async (id) => {
    set({ isLoading: true, error: null, success: null });
    try {
      const response = await axiosInstance.delete(`/v1/contactUs/${id}`);
      set((state) => ({
        messages: state.messages.filter((msg) => msg._id !== id),
        success: response.data.message, // e.g., "Message deleted successfully"
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.error || 'Failed to delete message',
        isLoading: false,
      });
    }
  },
}));

export default useContactStore;