import { api } from "@/shared/lib/api"

export const editCard = (data: {}) => {
    api(`specialist-card`, {
        method: "POST",
        body: JSON.stringify(data)
    })
}