import { api } from "@/shared/lib/api";

export const uploadDocument = async (formData: any) => {
  try {
    await api("manuals", {
      method: "POST",
      body: formData,
    });

  } catch (error) {
    console.error("File upload failed:", error);
    throw error;
  }
};