import { api } from "@/shared/lib/api";
import { create } from "zustand";
import { StoreSpecialists, SpecialistsData } from "@/shared/types/fetchData.types";

export const useSpecialistsStore = create<StoreSpecialists>((set) => ({
    specialists: [],

    fetchSpecialists : async () => {
        try {
            const data:SpecialistsData[] = await api(`specialists`);

            set({
                specialists: data
            })
        } catch (error) {
            console.error("Ошибка при загрузке :", error);
        }
    }
}));