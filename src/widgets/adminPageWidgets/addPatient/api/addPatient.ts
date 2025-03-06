import { api } from "@/shared/lib/api";
import { AddPatientFormData } from "@/shared/types/fetchData.types";

export const addPatient = async ( formData: AddPatientFormData ) => {

    try {
        await api(`auth/register`, {
            method: "POST",
            body: JSON.stringify({...formData, role: "PATIENT"}),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Ошибка при создании пользователя:", error);
    }
}