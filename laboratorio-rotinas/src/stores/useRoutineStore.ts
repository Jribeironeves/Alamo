import { create } from "zustand";
import { nanoid } from "nanoid";

export interface Routine {
  id: string;
  title: string;
  time: string;
  details: string[];
  cho: string;
  ptn: string;
  lip: string;
  mAU: string;
}

export interface RoutineStore {
  routines: Routine[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  addRoutine: (routine: Omit<Routine, "id">) => void;
  removeRoutine: (id: string) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useRoutineStore = create<RoutineStore>((set) => ({
  routines: [], 
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  addRoutine: (routine) =>
    set((state) => ({
      routines: [...state.routines, { ...routine, id: nanoid() }],
      isModalOpen: false, 
    })),
  removeRoutine: (id) =>
    set((state) => ({
      routines: state.routines.filter((r) => r.id !== id),
    })),
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

