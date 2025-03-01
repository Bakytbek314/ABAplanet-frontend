import { api } from "@/shared/lib/api";
import { PhotosData, StoreGallery } from "@/shared/types/fetchData.types";
import { create } from "zustand";

export const useGalleryStore = create<StoreGallery>((set) => ({
    photos: [],

    fetchPhotos: async () => {
        try {
            const data: PhotosData[] = await api(`gallery`);

            set({photos: data})
        } catch (error) {
            console.error(error);
        }
    }
}))