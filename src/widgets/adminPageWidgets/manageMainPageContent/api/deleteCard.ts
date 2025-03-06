import { api } from "@/shared/lib/api"

export const deleteCard = (id: number) => {
    try {
        api(`specialist-card/${id}`, {
            method: "DELETE"
        })
    } catch (error) {
        throw new Error(`Ошибка при удалении ${error}`)
    }
}