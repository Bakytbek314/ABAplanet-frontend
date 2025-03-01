import { api } from "@/shared/lib/api";

export const addIndividualSchedule = async (data: {}) => {
    console.log("data>>>", data);
    
    await api(`sessions/individual`, {
        method: "POST",
        body: JSON.stringify(data)
    });
}