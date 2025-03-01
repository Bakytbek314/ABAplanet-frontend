import { api } from "@/shared/lib/api";
import {
  SpecialistsData,
  StoreSpecialistSchedule,
} from "@/shared/types/fetchData.types";
import { create } from "zustand";

export const useSpecialistScdulesStore = create<StoreSpecialistSchedule>(
  (set) => ({
    specialistId: null,
    individual: [],
    group: [],
    mainGroup: [],

    fetchSpecialist: async (id: number) => {
      try {
        const data: SpecialistsData = await api(`specialists/${id}`);
        set({
          individual: data.individualSession,
          group: data.groupSessions,
          mainGroup: data.mainGroupSessions,
          specialistId: data.id,
        });
      } catch (error) {
        console.error(error);
      }
    },
  })
);
