import { api } from "@/shared/lib/api"

export const postTestingPatient = async (formData: any, specialistId: number) => {
    try {
        await api(`development`, {
            method: "POST",
            body: JSON.stringify({...formData, specialistId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.error("Ошибка при тестировании:", error);
    }
}