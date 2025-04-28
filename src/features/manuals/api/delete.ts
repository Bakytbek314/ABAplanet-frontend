import { api } from "@/shared/lib/api";

export const deleteDocument = async (id: number) => {
  try {
    await api(`manuals/${id}`, {
      method: "DELETE"
    });

  } catch (error) {
    console.error("File delete failed:", error);
    throw error;
  }
};