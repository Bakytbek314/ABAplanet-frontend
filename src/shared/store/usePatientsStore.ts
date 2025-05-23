import { api } from "@/shared/lib/api";
import { create } from "zustand";
import { StorePatients, PatientsData } from "@/shared/types/fetchData.types";


export const usePatientsStore = create<StorePatients>((set) => ({
  patients: [],

  fetchPatients: async () => {
    try {
      const data:PatientsData[] = await api(`patients`);

      set({
        patients: data,
      });
    } catch (error) {
      console.error("Ошибка при загрузке пациентов:", error);
    }
  }
}));