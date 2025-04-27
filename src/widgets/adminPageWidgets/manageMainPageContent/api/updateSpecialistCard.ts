import { baseUrl } from "@/shared/constants/baseUrl";

export const updateSpecialistCard = async ({
  specialistId,
  description,
  photoFile,
  diplomaFile,
}: {
  specialistId: number;
  description: string;
  photoFile?: File | null;
  diplomaFile?: File | null;
}) => {

  const formData = new FormData();
  formData.append("specialistId", String(specialistId));
  formData.append("description", description);

  if (photoFile) {
    formData.append("photo", photoFile);
  }

  if (diplomaFile) {
    formData.append("diplomaPhoto", diplomaFile);
  }

  const response = await fetch(`${baseUrl}/specialists-card`, {
    method: "PATCH",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Не удалось сохранить изменения");
  }

  return await response.json();
};
