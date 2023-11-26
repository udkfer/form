import { create } from "zustand";
import { loginUser } from "../api/userService";

export const useUserStore = create((set) => ({
  user: {},
  login: async (user) => {
    const response = await loginUser(user);
    if (!response.data.message) {
      set({ user: response.data });
      return true;
    } else {
      return false;
    }
  },
}));
