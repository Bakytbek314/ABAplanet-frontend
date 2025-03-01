import { create } from "zustand";
import { api } from "@/shared/lib/api";
import { SpecialistCardData, StorePatientCard } from "@/shared/types/fetchData.types";

export const useSpecialistCardStore = create<StorePatientCard>((set) => ({
    cards: [],

    fetchCards: async () => {
        try {
            const data: SpecialistCardData[] = await api(`specialist-card`);            
            set({cards: data})
        } catch (error) {
            console.error(error)
        }
    }
}));