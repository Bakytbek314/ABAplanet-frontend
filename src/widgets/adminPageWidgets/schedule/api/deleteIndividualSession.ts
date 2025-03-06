import { api } from "@/shared/lib/api"

export const deleteIndividualSession = async (id: number) => {
    await api(`sessions/individual/${id}`, {
        method: "DELETE",
    })
}