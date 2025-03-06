import { api } from "@/shared/lib/api";

export const addIndividualSchedule = async (data: {}) => {
    
    await api(`sessions/individual`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
}