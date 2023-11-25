import { create } from "zustand";

export const useFormStore = create((set) => ({
  openModal: false,
  toggleModal: () => set((state) => ({ openModal: !state.openModal })),
}));
