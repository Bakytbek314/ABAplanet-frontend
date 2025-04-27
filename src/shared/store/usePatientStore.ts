import { api } from "@/shared/lib/api";
import { create } from "zustand";
import { StorePatient, PatientsData } from "@/shared/types/fetchData.types";


export const usePatientStore = create<StorePatient>((set) => ({
  patient: {} as PatientsData,

  fetchPatient: async (id: number) => {
    try {
      const data: PatientsData = await api(`patients/${id}`);
      
      set({
        patient: data,
      });
    } catch (error) {
      console.error("Ошибка при загрузке пациент:", error);
    }
  }
}));