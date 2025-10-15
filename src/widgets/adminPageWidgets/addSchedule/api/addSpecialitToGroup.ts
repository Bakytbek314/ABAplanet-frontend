import { api } from "@/shared/lib/api";

export const addSpecialistToGroup = async (data: {}) => {
    
    await api(`sessions/group/specialist`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
}