import { api } from "@/shared/lib/api";
import { create } from "zustand";
import { StorePosts, PostData } from "@/shared/types/fetchData.types";


export const usePostsStore = create<StorePosts>((set) => ({
  posts: [],

  fetchPosts: async () => {
    try {
      const data: PostData[] = await api(`posts`);
      
      set({
        posts: data,
      });
    } catch (error) {
      console.error("Ошибка при загрузке post:", error);
    }
  }
}));