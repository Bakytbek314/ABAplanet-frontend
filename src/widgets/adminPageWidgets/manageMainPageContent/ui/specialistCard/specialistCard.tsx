"use client";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Image from "next/image";
import { SpecialistCardProps } from "./specialistCard.props";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
import { deleteCard } from "../../api/deleteCard";

const SpecialistCard = (props: SpecialistCardProps) => {
  const { id, photo, diplomaPhoto, description, specialistId } = props;

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
    const formData = new FormData();
    formData.append("specialistId", String(specialistId));
    formData.append("description", editableDescription);

    if (photoFile) {
      formData.append("photo", photoFile);
    }

    if (diplomaFile) {
      formData.append("diplomaPhoto", diplomaFile);
    }

    try {
      const response = await fetch("http://localhost:5000/specialist-card", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Не удалось сохранить изменения");
      }

      const result = await response.json();

      if (result.photo) setCurrentPhoto(result.photo);
      if (result.diplomaPhoto) setCurrentDiplomaPhoto(result.diplomaPhoto);

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

  const header = (
    <div>
      {!isChange ? (
        <>
          <Image
            src={`http://localhost:5000/${currentPhoto}`}
            width={50}
            height={100}
            alt="photo"
          />
          <Image
            src={`http://localhost:5000/${currentDiplomaPhoto}`}
            width={50}
            height={100}
            alt="diplomaPhoto"
          />
        </>
      ) : (
        <>
          <Toast ref={toast} />
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
    <>
      {!isChange ? (
        <Button
          className="p-1"
          label="Изменить"
          severity="secondary"
          icon="pi pi-pen"
          onClick={() => setIsChange(true)}
        />
      ) : (
        <div className="flex gap-2">
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
            }}
          />
          <Button
            className="p-1"
            label="Удалить"
            severity="danger"
            icon="pi pi-trash"
            onClick={() => deleteCard(id)}
          />
        </div>
      )}
    </>
  );
  { !id && setIsChange(true)}

  return (
    <div className="card flex">
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
