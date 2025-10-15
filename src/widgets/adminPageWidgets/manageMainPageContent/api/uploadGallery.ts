import { api } from "@/shared/lib/api";

export const uploadGallery = async (file: File) => {
  const formData = new FormData();
  formData.append("photo", file);

  try {
    await api("gallery", {
      method: "POST",
      body: formData,
    });

  } catch (error) {
    console.error("File upload failed:", error);
    throw error;
  }
};
