import { api } from "@/shared/lib/api";
import { AddSpecialistFormData } from "@/shared/types/fetchData.types";

export const addSpecialist = async ( formData: AddSpecialistFormData ) => {

    try {
        await api(`auth/register`, {
            method: "POST",
            body: JSON.stringify({...formData, role: "SPECIALIST"})
        });
    } catch (error) {
        console.error("Ошибка при создании специалиста:", error);
    }
}