import { create } from "zustand";

export const useFormStore = create((set) => ({
  openModal: false,
  toggleModal: () => set((state) => ({ openModal: !state.openModal })),
  openPostModal: false,
  togglePostModal: () => set((state) => ({ openPostModal: !state.openPostModal })),
}));
