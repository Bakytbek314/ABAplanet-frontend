import { api } from "@/shared/lib/api"

export const deleteCard = async (id: number) => {
    try {
        await api(`specialist-card/${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        throw new Error(`Ошибка при удалении ${error}`)
    }
}