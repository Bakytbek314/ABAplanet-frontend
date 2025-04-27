"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria";
import { useGalleryStore } from "../../store/useGalleryStore";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { uploadGallery } from "../../api/uploadGallery";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { deleteGallery } from "../../api/deleteGallery";
import { baseUrl } from "@/shared/constants/baseUrl";
import { useToast } from "@/shared/lib/useToast";

interface PhotoItem {
  id: number;
  photo: string;
}

const Gallery = () => {
  const { photos, fetchPhotos } = useGalleryStore();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const fileUploadRef = useRef<FileUpload>(null);
  const toast = useRef<Toast>(null);

  const responsiveOptions: GalleriaResponsiveOptions[] = [
    { breakpoint: "991px", numVisible: 4 },
    { breakpoint: "767px", numVisible: 3 },
    { breakpoint: "575px", numVisible: 1 },
  ];

  const itemTemplate = (item: PhotoItem | undefined) => {
    if (!item) return null;

    return (
      <Image
        src={`${baseUrl}/${item.photo}`}
        alt="photo"
        width={1000}
        height={580}
        style={{ width: "100%", display: "block" }}
        key={photos.length}
        unoptimized
      />
    );
  };

  const thumbnailTemplate = (item: PhotoItem | undefined) => {
    if (!item) return null;

    return (
      <Image
        src={`${baseUrl}/${item.photo}`}
        alt="thumbnail"
        width={100}
        height={70}
        style={{ display: "block", cursor: "pointer" }}
        onDoubleClick={(e) => confirm(e, item.id)}
        key={photos.length}
        unoptimized
      />
    );
  };

  const deleteImage = async (id: number) => {
    try {
      await deleteGallery(id);
      useToast(toast, "success", "Удалено", "Изображение удалено");
      await fetchPhotos();
      setActiveIndex((prevIndex) =>
        prevIndex >= photos.length - 1 ? 0 : prevIndex
      );
    } catch (error) {
      useToast(toast, "error", "Ошибка", "Не удалось удалить изображение");
      console.error("Ошибка при удалении:", error);
    }
  };

  const confirm = (e: React.MouseEvent<HTMLImageElement>, id: number) => {
    confirmPopup({
      target: e.currentTarget,
      message: "Вы хотите удалить это изображение?",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger p-1 m-2",
      acceptLabel: "Да",
      rejectLabel: "Отмена",
      rejectClassName: "p-1 m-2",
      accept: async () => await deleteImage(id),
    });
  };

  const handleUpload = async (e: any) => {
    const file = e.files?.[0];
    if (!file) return;

    try {
      await uploadGallery(file);
      useToast(toast, "success", "Успешно", "Изображение загружено");
      await fetchPhotos();
    } catch {
      useToast(toast, "error", "Ошибка", "Не удалось загрузить изображение");
    } finally {
      fileUploadRef.current?.clear();
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="card">
      <div className="m-2">
        <Toast ref={toast} />
        <ConfirmPopup className="p-2" />

        <FileUpload
          ref={fileUploadRef}
          name="gallery"
          mode="basic"
          accept="image/*"
          maxFileSize={1000000}
          chooseLabel="Загрузить фото"
          customUpload
          uploadHandler={handleUpload}
        />
      </div>

      {photos.length > 0 ? (
        <Galleria
          key={photos.length}
          value={photos}
          responsiveOptions={responsiveOptions}
          numVisible={10}
          circular
          style={{ maxWidth: "100%" }}
          showItemNavigators
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
        />
      ) : (
        <p className="text-center text-gray-500 mt-4">
          Нет загруженных изображений.
        </p>
      )}
    </div>
  );
};

export default Gallery;