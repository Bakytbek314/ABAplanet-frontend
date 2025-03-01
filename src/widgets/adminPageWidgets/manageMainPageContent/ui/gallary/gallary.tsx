import React, { useState, useEffect, useRef } from "react";
import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria";
import Image from "next/image";
import { useGalleryStore } from "../../store/useGalleryStore";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";

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
  }, [fetchPhotos]);

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
      src={`http://localhost:5000/${item.photo}`}
      alt={""}
      width={740}
      height={580}
      style={{ width: "100%", display: "block" }}
    />
  );

  const thumbnailTemplate = (item: { photo: string }) => (
    <Image
      src={`http://localhost:5000/${item.photo}`}
      alt={""}
      width={100}
      height={70}
      style={{ display: "block" }}
    />
  );

  return (
    <div className="card">
      <div className="m-2">
        <Toast ref={toast}></Toast>
        <FileUpload
          name="demo[]"
          mode="basic"
          url="/api/upload"
          accept="image/*"
          maxFileSize={1000000}
          onUpload={onUpload}
          chooseLabel="фото"
        />
      </div>
      <Galleria
        value={photos}
        responsiveOptions={responsiveOptions}
        numVisible={5}
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
