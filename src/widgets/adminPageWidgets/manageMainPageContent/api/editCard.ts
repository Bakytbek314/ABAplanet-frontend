import { api } from "@/shared/lib/api";

interface Arg {
  specialistId: number;
  editableDescription: string;
  photoFile: File | null;
  diplomaFile: File | null;
}

export const editCard = async (arg: Arg) => {
  const { specialistId, editableDescription, photoFile, diplomaFile } = arg;
  const formData = new FormData();
  formData.append("specialistId", String(specialistId));
  formData.append("description", editableDescription);
  photoFile && formData.append("photo", photoFile);
  diplomaFile && formData.append("diplomaPhoto", diplomaFile);  

  const res = await api(`specialist-card`, {
    method: "POST",
    body: formData,
    headers: {
        "Content-Type": "application/json"
    }
  });

  return res;
};
