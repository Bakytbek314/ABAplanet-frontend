import { api } from "@/shared/lib/api";

export const createGroup = async (data: {}) => {
    
    await api(`sessions/group`, {
        method: "POST",
        body: JSON.stringify(data)
    });
}