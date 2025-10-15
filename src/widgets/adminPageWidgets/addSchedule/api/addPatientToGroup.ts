import { api } from "@/shared/lib/api";

export const addPatientToGroup = async (data: {}) => {
    
    await api(`sessions/group/patient`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
}