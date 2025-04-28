"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { SpecialistCardProps } from "./specialistCard.props";
import { deleteCard } from "../../api/deleteCard";
import { updateSpecialistCard } from "../../api/updateSpecialistCard";
import { baseUrl } from "@/shared/constants/baseUrl";
import { useSpecialistCardStore } from "../../store/useSpecialistCardStore";

const SpecialistCard = (props: SpecialistCardProps) => {
  const { id, photo, diplomaPhoto, description, specialistId } = props;

  const { fetchCards } = useSpecialistCardStore();

  const toast = useRef<Toast>(null);

  const [isChange, setIsChange] = useState<boolean>(false);
  const [editableDescription, setEditableDescription] =
    useState<string>(description);
  const [currentPhoto, setCurrentPhoto] = useState<string>(photo);
  const [currentDiplomaPhoto, setCurrentDiplomaPhoto] =
    useState<string>(diplomaPhoto);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [diplomaFile, setDiplomaFile] = useState<File | null>(null);

  const saveChanges = async () => {
    try {
      const result = await updateSpecialistCard({
        specialistId,
        description: editableDescription,
        photoFile,
        diplomaFile,
      });

      if (result.photoFile) setCurrentPhoto(result.photoFile);
      if (result.diplomaFile) setCurrentDiplomaPhoto(result.diplomaFile);

      toast.current?.show({
        severity: "success",
        summary: "Сохранено",
        detail: "Описание и фото обновлены",
      });
      setIsChange(false);
    } catch (error) {
      console.error(error);
      toast.current?.show({
        severity: "error",
        summary: "Ошибка",
        detail: "Не удалось сохранить изменения",
      });
    }
  };

  const deleteSpecialistCard = async (id: number) => {
    try {
      await deleteCard(id);
      await fetchCards();
      toast.current?.show({
        severity: "success",
        summary: "Успешно",
        detail: "Карточка специалиста удалено",
      });
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Ошибка",
        detail: "Не удалось удалить",
      });
    }
  };

  useEffect(() => {
    if (!id) {
      setIsChange(true);
    }
  }, [id]);

  const header = (
    <div className="flex gap-2">
      {!isChange ? (
        <>
          <Image
            src={currentPhoto}
            width={50}
            height={100}
            alt="photo"
            unoptimized
          />
          <Image
            src={currentDiplomaPhoto}
            width={50}
            height={100}
            alt="diploma"
            unoptimized
          />
        </>
      ) : (
        <>
          <FileUpload
            mode="basic"
            name="photo"
            customUpload
            accept="image/*"
            maxFileSize={1000000}
            uploadHandler={(e) => setPhotoFile(e.files[0])}
            chooseLabel="Загрузить фото"
          />
          <FileUpload
            mode="basic"
            name="diplomaPhoto"
            customUpload
            accept="image/*"
            maxFileSize={1000000}
            uploadHandler={(e) => setDiplomaFile(e.files[0])}
            chooseLabel="Загрузить диплом"
          />
        </>
      )}
    </div>
  );

  const footer = (
    <div className="flex gap-2">
      {!isChange ? (
        <Button
          className="p-1"
          label="Изменить"
          severity="secondary"
          icon="pi pi-pen"
          onClick={() => setIsChange(true)}
        />
      ) : (
        <>
          <Button
            className="p-1"
            label="Сохранить"
            icon="pi pi-check"
            onClick={saveChanges}
          />
          <Button
            className="p-1"
            label="Отмена"
            severity="secondary"
            icon="pi pi-times"
            onClick={() => {
              setIsChange(false);
              setEditableDescription(description);
              setPhotoFile(null);
              setDiplomaFile(null);
            }}
          />
          <Button
            className="p-1"
            label="Удалить"
            severity="danger"
            icon="pi pi-trash"
            onClick={() => deleteSpecialistCard(id)}
          />
        </>
      )}
    </div>
  );

  return (
    <div className="card flex">
      <Toast ref={toast} />
      <Card footer={footer} header={header} className="md:w-25rem p-2">
        {!isChange ? (
          description
        ) : (
          <InputTextarea
            value={editableDescription}
            onChange={(e) => setEditableDescription(e.target.value)}
            rows={5}
            cols={30}
          />
        )}
      </Card>
    </div>
  );
};

export default SpecialistCard;
