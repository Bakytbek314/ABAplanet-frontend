import { api } from "@/shared/lib/api";
import { create } from "zustand";

interface StoreManuals {
    manuals: Manuals[];
    fetchManuals: () => void;
}

interface Manuals {
    id: number;
    documentName: string;
    document: string;
    format?: string;
}

export const useManualsStore = create<StoreManuals>((set) => ({
    manuals: [],

    fetchManuals : async () => {
        try {
            const data: Manuals[] = await api(`manuals`);

            const formatted = data.map((manual) => {
                const fileParts = manual.document?.split(".");
                const format = fileParts?.length ? fileParts[fileParts.length - 1] : "";
        
                return {
                  ...manual,
                  format,
                };
              });

            set({
                manuals: formatted
            })
        } catch (error) {
            console.error("Ошибка при загрузке :", error);
        }
    }
}));