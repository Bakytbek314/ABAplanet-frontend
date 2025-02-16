import { api } from "@/shared/lib/api";

export const addSchedule = async (data) => {
    await api(`sessions/individual`, {
        method: "POST",
        body: JSON.stringify(data)
    });
}