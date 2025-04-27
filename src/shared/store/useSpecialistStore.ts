import { api } from "@/shared/lib/api";
import { create } from "zustand";
import { StoreSpecialist, SpecialistsData } from "@/shared/types/fetchData.types";


export const useSpecialistStore = create<StoreSpecialist>((set) => ({
  specialist: {} as SpecialistsData,

  fetchSpecialist: async (id: number) => {
    try {
      const data:SpecialistsData = await api(`specialists/${id}`);

      set({
        specialist: data,
      });
    } catch (error) {
      console.error("Ошибка при загрузке:", error);
    }
  }
}));