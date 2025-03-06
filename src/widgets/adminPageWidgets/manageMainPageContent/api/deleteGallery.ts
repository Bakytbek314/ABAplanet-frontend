import { api } from "@/shared/lib/api"

export const deleteGallery = async (id: number) => {
    api(`gallery/${id}`, {
        method: "DELETE"
    });
}