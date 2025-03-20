import React, { useState, useEffect, useRef } from "react";
import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria";
import Image from "next/image";
import { useGalleryStore } from "../../store/useGalleryStore";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { uploadGallery } from "../../api/uploadGallery";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { deleteGallery } from "../../api/deleteGallery";
import { baseUrl } from "@/shared/constants/baseUrl";

const Gallery = () => {
  const { photos, fetchPhotos } = useGalleryStore();

  const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    fetchPhotos();
  }, [photos]);

  const toast = useRef<Toast>(null);

  const onUpload = () => {
    toast.current?.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const itemTemplate = (item: { photo: string }) => (
    <Image
      src={`${baseUrl}${item.photo || item.photo}`}
      alt={"photo"}
      width={1000}
      height={580}
      style={{ width: "100%", display: "block" }}
    />
  );

  const thumbnailTemplate = (item: { photo: string, id: number }) => (
    <Image
      src={`http://localhost:5000/${item.photo}`}
      alt={"photo"}
      width={100}
      height={70}
      style={{ display: "block" }}
      onDoubleClick={(e) => confirm(e, item.id)}
    />
  );

  const deleteSession = async (id: number) => {
    try {
      deleteGallery(id);
      toast.current?.show({
        severity: "success",
        summary: "Deleted",
        detail: "Изображение удалено",
        life: 3000,
      });
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Ошибка при удалении изображение",
        life: 3000,
      });
      console.error("Error deleting session:", error);
    }
  };
  const confirm = (
    e: React.MouseEvent<HTMLImageElement>,
    id: number,
  ) => {
    confirmPopup({
      target: e.currentTarget,
      message: `Вы хотите удалить это изображение?`,
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger p-1 m-2",
      acceptLabel: "Да",
      accept: () => deleteSession(id),
      rejectLabel: "Отмена",
      rejectClassName: "p-1 m-2",
    });
  };

  return (
    <div className="card">
      <div className="m-2">
        <Toast ref={toast} />
        <ConfirmPopup className="p-2" />
        <FileUpload
          name="demo[]"
          mode="basic"
          accept="image/*"
          maxFileSize={1000000}
          // onUpload={onUpload}
          chooseLabel="фото"
          customUpload
          uploadHandler={async (e) => {
            const file = e.files[0];
            if (file) {
              try {
                await uploadGallery(file);
                toast.current?.show({
                  severity: "success",
                  summary: "Успешно",
                  detail: "Изображение загружено",
                  life: 3000,
                });
              } catch {
                toast.current?.show({
                  severity: "error",
                  summary: "Ошибка",
                  detail: "Не удалось загрузить файл",
                  life: 3000,
                });
              }
            }
          }}
        />
      </div>
      <Galleria
        value={photos}
        responsiveOptions={responsiveOptions}
        numVisible={10}
        circular
        style={{ maxWidth: "100%" }}
        showItemNavigators
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />
    </div>
  );
};

export default Gallery;
